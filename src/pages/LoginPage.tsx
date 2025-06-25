import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Brain, Github, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    try {
      await login(email);
      navigate('/dashboard');
    } catch (error) {
      // Error is handled in AuthContext
    }
  };

  const handleSocialLogin = async (provider: string) => {
    try {
      await login('', provider);
      navigate('/dashboard');
    } catch (error) {
      // Error is handled in AuthContext
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full space-y-8"
      >
        {/* Logo */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="text-3xl font-bold text-white">#</div>
            <span className="text-2xl font-bold text-white">IPVerse</span>
          </Link>
        </div>

        <Card className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {isLogin ? 'Welcome back' : 'Create account'}
            </h2>
            <p className="text-gray-400">
              {isLogin 
                ? 'Sign in to manage your IP portfolio' 
                : 'Join the future of IP management'
              }
            </p>
          </div>

          {/* Tomo-powered Social Login */}
          <div className="space-y-3 mb-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-xs font-medium text-blue-400">
                  🔐 Powered by Tomo - Walletless & Gasless
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
            >
              <div className="w-5 h-5 mr-2 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              Continue with Google
            </Button>
            
            <Button
              variant="outline"
              className="w-full bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              onClick={() => handleSocialLogin('twitter')}
              disabled={isLoading}
            >
              <Twitter className="w-5 h-5 mr-2" />
              Continue with Twitter
            </Button>

            <Button
              variant="outline"
              className="w-full bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              onClick={() => handleSocialLogin('discord')}
              disabled={isLoading}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Continue with Discord
            </Button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-100"
              isLoading={isLoading}
            >
              {isLogin ? 'Sign in' : 'Create account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : 'Already have an account? Sign in'
              }
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our{' '}
              <Link to="/terms" className="text-blue-400 hover:text-blue-300">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-blue-400 hover:text-blue-300">
                Privacy Policy
              </Link>
            </p>
          </div>
        </Card>

        {/* Demo Account Info */}
        <Card className="p-4 bg-blue-500/10 border-blue-500/20">
          <p className="text-sm text-blue-400 text-center">
            <strong>Demo:</strong> Use any email or social login to explore the platform with sample data
          </p>
        </Card>
      </motion.div>
    </div>
  );
};