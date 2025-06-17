// Tomo SDK integration for walletless onboarding
import { env } from '../config/environment';

export interface TomoUser {
  id: string;
  email?: string;
  name?: string;
  avatar?: string;
  walletAddress?: string;
  provider: 'google' | 'twitter' | 'discord' | 'email';
}

export interface TomoSession {
  user: TomoUser;
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export class TomoService {
  private static get clientId() {
    return env.tomo.clientId;
  }
  
  private static get baseUrl() {
    return env.tomo.apiUrl;
  }

  static async initializeSDK(): Promise<void> {
    // Initialize Tomo SDK with client ID from environment
    try {
      if (env.development.debugMode) {
        console.log('🔐 Initializing Tomo SDK with client ID:', this.clientId.slice(0, 10) + '...');
      }
      
      // Mock initialization - in real implementation, this would initialize the actual SDK
      if (!this.clientId || this.clientId === 'your_tomo_client_id_here') {
        throw new Error('Tomo Client ID not configured. Please set VITE_TOMO_CLIENT_ID in your environment.');
      }
    } catch (error) {
      console.error('Failed to initialize Tomo SDK:', error);
      throw error;
    }
  }

  static async loginWithGoogle(): Promise<TomoSession> {
    // Simulate Google OAuth flow through Tomo
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockUser: TomoUser = {
      id: 'tomo_' + Date.now(),
      email: 'creator@gmail.com',
      name: 'Alex Creator',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      walletAddress: '0x' + Math.random().toString(16).substr(2, 40),
      provider: 'google',
    };

    return {
      user: mockUser,
      accessToken: 'tomo_access_' + Math.random().toString(36),
      refreshToken: 'tomo_refresh_' + Math.random().toString(36),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000), // 24 hours
    };
  }

  static async loginWithTwitter(): Promise<TomoSession> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockUser: TomoUser = {
      id: 'tomo_' + Date.now(),
      email: 'creator@twitter.com',
      name: 'Digital Creator',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      walletAddress: '0x' + Math.random().toString(16).substr(2, 40),
      provider: 'twitter',
    };

    return {
      user: mockUser,
      accessToken: 'tomo_access_' + Math.random().toString(36),
      refreshToken: 'tomo_refresh_' + Math.random().toString(36),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000),
    };
  }

  static async loginWithDiscord(): Promise<TomoSession> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockUser: TomoUser = {
      id: 'tomo_' + Date.now(),
      email: 'creator@discord.com',
      name: 'Gaming Creator',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      walletAddress: '0x' + Math.random().toString(16).substr(2, 40),
      provider: 'discord',
    };

    return {
      user: mockUser,
      accessToken: 'tomo_access_' + Math.random().toString(36),
      refreshToken: 'tomo_refresh_' + Math.random().toString(36),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000),
    };
  }

  static async loginWithEmail(email: string): Promise<TomoSession> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockUser: TomoUser = {
      id: 'tomo_' + Date.now(),
      email,
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      avatar: `https://ui-avatars.com/api/?name=${email}&background=0ea5e9&color=fff`,
      walletAddress: '0x' + Math.random().toString(16).substr(2, 40),
      provider: 'email',
    };

    return {
      user: mockUser,
      accessToken: 'tomo_access_' + Math.random().toString(36),
      refreshToken: 'tomo_refresh_' + Math.random().toString(36),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000),
    };
  }

  static async refreshSession(refreshToken: string): Promise<TomoSession> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock refresh - in real implementation, this would call Tomo API
    const existingSession = this.getStoredSession();
    if (!existingSession) {
      throw new Error('No existing session found');
    }

    return {
      ...existingSession,
      accessToken: 'tomo_access_' + Math.random().toString(36),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000),
    };
  }

  static async logout(): Promise<void> {
    // Clear stored session
    localStorage.removeItem('tomo_session');
    sessionStorage.removeItem('tomo_session');
  }

  static storeSession(session: TomoSession): void {
    localStorage.setItem('tomo_session', JSON.stringify(session));
  }

  static getStoredSession(): TomoSession | null {
    const stored = localStorage.getItem('tomo_session');
    if (!stored) return null;

    try {
      const session = JSON.parse(stored) as TomoSession;
      
      // Check if session is expired
      if (Date.now() > session.expiresAt) {
        this.logout();
        return null;
      }

      return session;
    } catch {
      return null;
    }
  }

  static async executeTransaction(
    contractAddress: string,
    method: string,
    params: any[]
  ): Promise<{ transactionHash: string; gasUsed: number }> {
    // Mock transaction execution through Tomo's gasless infrastructure
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    return {
      transactionHash: '0x' + Math.random().toString(16).substr(2, 64),
      gasUsed: Math.floor(Math.random() * 100000) + 50000,
    };
  }

  static async getWalletBalance(walletAddress: string): Promise<{
    eth: number;
    tokens: Array<{ symbol: string; balance: number; value: number }>;
  }> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      eth: Math.random() * 5,
      tokens: [
        { symbol: 'USDC', balance: Math.random() * 1000, value: Math.random() * 1000 },
        { symbol: 'STORY', balance: Math.random() * 500, value: Math.random() * 250 },
      ],
    };
  }
}