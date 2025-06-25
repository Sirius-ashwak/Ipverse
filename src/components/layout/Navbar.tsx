import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  User,
  LogOut,
  Bell,
  Settings,
  Wallet,
  Copy,
  Github,
  Star,
  ExternalLink
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import toast from 'react-hot-toast';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { user, logout, walletAddress, walletBalance } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Company', href: '/company' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Docs', href: '/docs', external: true },
  ];

  const userNavigation = user ? [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Register IP', href: '/register' },
    { name: 'Discover', href: '/discover' },
    { name: 'AI Agents', href: '/agents' },
    { name: 'Analytics', href: '/analytics' },
  ] : [];

  const isActive = (href: string) => location.pathname === href;

  const copyWalletAddress = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      toast.success('Wallet address copied!');
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-white text-xl font-bold flex items-center">
                <span className="text-2xl mr-2">#</span>
                <span>IPVerse</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* GitHub Stars */}
            <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-1">
              <Github className="h-4 w-4 text-gray-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-300">1,194</span>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                {item.name}
                {item.external && <ExternalLink className="h-3 w-3 ml-1" />}
              </Link>
            ))}

            {user && userNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                  isActive(item.href)
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {/* Wallet Info */}
                {walletAddress && (
                  <div className="hidden sm:flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-1">
                    <Wallet className="h-4 w-4 text-gray-400" />
                    <button
                      onClick={copyWalletAddress}
                      className="text-sm font-mono text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {formatAddress(walletAddress)}
                    </button>
                    <Copy className="h-3 w-3 text-gray-400" />
                  </div>
                )}

                {/* Profile Dropdown */}
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowProfile(!showProfile)}
                    className="p-2 text-gray-300 hover:text-white"
                  >
                    <img
                      src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=0ea5e9&color=fff`}
                      alt={user.name}
                      className="h-8 w-8 rounded-full"
                    />
                  </Button>

                  <AnimatePresence>
                    {showProfile && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-1"
                      >
                        <div className="px-4 py-3 border-b border-gray-700">
                          <p className="text-sm font-medium text-white">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {user.email}
                          </p>
                          {walletAddress && (
                            <div className="mt-2 flex items-center space-x-2">
                              <Wallet className="h-3 w-3 text-gray-400" />
                              <button
                                onClick={copyWalletAddress}
                                className="text-xs font-mono text-gray-400 hover:text-blue-400"
                              >
                                {formatAddress(walletAddress)}
                              </button>
                            </div>
                          )}
                        </div>
                        
                        <Link
                          to="/profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          <User className="h-4 w-4 mr-2" />
                          Profile
                        </Link>
                        
                        <Link
                          to="/settings"
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </Link>
                        
                        <div className="border-t border-gray-700 mt-1">
                          <div className="px-4 py-2">
                            <div className="text-xs text-gray-500 mb-1">
                              Powered by Tomo
                            </div>
                            <Badge variant="success" size="sm">
                              Gasless Enabled
                            </Badge>
                          </div>
                        </div>
                        
                        <button
                          onClick={logout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" className="text-gray-300 hover:text-white">
                    Log in
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="bg-white text-black hover:bg-gray-100">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-300 hover:text-white"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {user && userNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-gray-800'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Wallet Info */}
                {walletAddress && (
                  <div className="px-3 py-2 border-t border-gray-800">
                    <div className="text-xs text-gray-500 mb-1">
                      Wallet Address
                    </div>
                    <button
                      onClick={copyWalletAddress}
                      className="text-sm font-mono text-gray-300 hover:text-blue-400"
                    >
                      {formatAddress(walletAddress)}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};