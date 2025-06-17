import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { TomoService, TomoSession } from '../services/tomoService';
import toast from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  login: (email: string, provider?: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  walletAddress?: string;
  walletBalance?: {
    eth: number;
    tokens: Array<{ symbol: string; balance: number; value: number }>;
  };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [walletAddress, setWalletAddress] = useState<string>();
  const [walletBalance, setWalletBalance] = useState<any>();

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    setIsLoading(true);
    
    try {
      // Initialize Tomo SDK
      await TomoService.initializeSDK();
      
      // Check for existing session
      const existingSession = TomoService.getStoredSession();
      if (existingSession) {
        // Try to refresh if close to expiry
        const timeUntilExpiry = existingSession.expiresAt - Date.now();
        if (timeUntilExpiry < 60 * 60 * 1000) { // Less than 1 hour
          try {
            const refreshedSession = await TomoService.refreshSession(existingSession.refreshToken);
            TomoService.storeSession(refreshedSession);
            setUserFromSession(refreshedSession);
          } catch {
            // Refresh failed, clear session
            await TomoService.logout();
          }
        } else {
          setUserFromSession(existingSession);
        }
      }
    } catch (error) {
      console.error('Failed to initialize auth:', error);
      toast.error('Failed to initialize authentication');
    } finally {
      setIsLoading(false);
    }
  };

  const setUserFromSession = async (session: TomoSession) => {
    const userData: User = {
      id: session.user.id,
      email: session.user.email || '',
      name: session.user.name || 'Anonymous User',
      avatar: session.user.avatar,
      walletAddress: session.user.walletAddress,
      createdAt: new Date(),
    };

    setUser(userData);
    setWalletAddress(session.user.walletAddress);

    // Load wallet balance
    if (session.user.walletAddress) {
      try {
        const balance = await TomoService.getWalletBalance(session.user.walletAddress);
        setWalletBalance(balance);
      } catch (error) {
        console.error('Failed to load wallet balance:', error);
      }
    }
  };

  const login = async (email: string, provider?: string) => {
    setIsLoading(true);
    
    try {
      let session: TomoSession;

      switch (provider) {
        case 'google':
          session = await TomoService.loginWithGoogle();
          break;
        case 'twitter':
          session = await TomoService.loginWithTwitter();
          break;
        case 'discord':
          session = await TomoService.loginWithDiscord();
          break;
        default:
          session = await TomoService.loginWithEmail(email);
      }

      TomoService.storeSession(session);
      await setUserFromSession(session);
      
      toast.success(`Welcome to IPVerse! Wallet created: ${session.user.walletAddress?.slice(0, 6)}...${session.user.walletAddress?.slice(-4)}`);
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please try again.');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await TomoService.logout();
      setUser(null);
      setWalletAddress(undefined);
      setWalletBalance(undefined);
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Logout failed');
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isLoading, 
      walletAddress,
      walletBalance 
    }}>
      {children}
    </AuthContext.Provider>
  );
};