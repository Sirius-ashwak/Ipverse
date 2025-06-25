import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Search,
  Filter,
  Database,
  MessageSquare,
  CreditCard,
  Cloud
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useAuth } from '../contexts/AuthContext';

export const HomePage: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: Shield,
      title: 'IP Protection',
      description: 'Register and protect your intellectual property with blockchain-based verification.',
      color: 'text-blue-400',
    },
    {
      icon: Brain,
      title: 'AI Agents',
      description: 'Intelligent agents handle licensing, negotiation, and infringement detection.',
      color: 'text-purple-400',
    },
    {
      icon: Zap,
      title: 'Smart Licensing',
      description: 'Automated licensing with smart contracts and cross-chain compatibility.',
      color: 'text-yellow-400',
    },
    {
      icon: Globe,
      title: 'Global Marketplace',
      description: 'Discover and license IP assets from creators worldwide.',
      color: 'text-green-400',
    },
  ];

  const stats = [
    { label: 'IP Assets Registered', value: '50K+', icon: Shield },
    { label: 'Active Creators', value: '12K+', icon: Users },
    { label: 'Total Royalties', value: '$2.5M+', icon: TrendingUp },
    { label: 'AI Negotiations', value: '25K+', icon: Brain },
  ];

  // Available Connectors data matching the reference image
  const connectorCategories = [
    { name: 'All', count: 113, active: true },
    { name: 'Accounting', count: 6 },
    { name: 'AI', count: 37 },
    { name: 'ATS', count: 1 },
    { name: 'Communication', count: 5 },
    { name: 'CRM', count: 12 },
    { name: 'Database', count: 3 },
    { name: 'ECommerce', count: 6 },
    { name: 'HR & Payroll', count: 1 },
    { name: 'Logistics', count: 4 },
    { name: 'Marketing', count: 1 },
    { name: 'Payments', count: 2 },
    { name: 'POS', count: 1 },
    { name: 'Productivity', count: 7 },
    { name: 'Software', count: 1 },
    { name: 'Storage', count: 5 },
    { name: 'Ticketing', count: 3 },
    { name: 'Tools', count: 18 },
  ];

  const featuredConnectors = [
    {
      name: 'ActiveCampaign',
      description: 'ActiveCampaign is a customer experience automation platform that combines email...',
      logo: '📧',
      category: 'Marketing',
    },
    {
      name: 'Affinity.co',
      description: 'Affinity is a relationship intelligence CRM that automatically captures and analyzes your...',
      logo: '🔗',
      category: 'CRM',
    },
    {
      name: 'AgentQL',
      description: 'AgentQL is a natural language interface that allows users to query their data using plain...',
      logo: '🤖',
      category: 'AI',
    },
    {
      name: 'Ahrefs',
      description: 'Ahrefs is a comprehensive SEO toolset that helps you grow your search traffic...',
      logo: '📊',
      category: 'Marketing',
    },
    {
      name: 'Airtable',
      description: 'Airtable is a cloud collaboration service that combines the features of a database...',
      logo: '📋',
      category: 'Database',
    },
    {
      name: 'Anthropic',
      description: 'Anthropic develops AI safety research and builds helpful, harmless, and honest AI...',
      logo: '🧠',
      category: 'AI',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Digital Artist',
      content: 'IPVerse made it incredibly easy to protect and monetize my digital art. The AI agents handle all the complex licensing automatically.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    },
    {
      name: 'Marcus Johnson',
      role: 'Music Producer',
      content: 'The cross-chain licensing feature opened up new markets for my music. Revenue increased by 300% in just 6 months.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'AI Researcher',
      content: 'Perfect platform for licensing our ML datasets. The verification process ensures quality and originality.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                The Future of{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  IP Management
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Register, protect, and monetize your intellectual property with AI-powered agents 
                and decentralized infrastructure. Join the next generation of creators.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              {user ? (
                <Link to="/dashboard" className="inline-block">
                  <Button size="lg" className="px-8 w-full sm:w-auto bg-white text-black hover:bg-gray-100">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/login" className="inline-block">
                    <Button size="lg" className="px-8 w-full sm:w-auto bg-white text-black hover:bg-gray-100">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/discover" className="inline-block">
                    <Button variant="outline" size="lg" className="px-8 w-full sm:w-auto text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white">
                      Explore Marketplace
                    </Button>
                  </Link>
                </>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Connectors Section - Matching Reference Image */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Available Connectors (113)
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Connect to the world. New platforms added regularly.
            </p>
          </div>

          {/* Category Pills - Matching Reference Layout */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {connectorCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category.active
                      ? 'bg-white text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              </motion.div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search connectors..."
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Connectors Grid - Matching Reference Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredConnectors.map((connector, index) => (
              <motion.div
                key={connector.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                      {connector.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {connector.name}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {connector.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                          Connect your AI agent
                        </span>
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                          Learn more <ArrowRight className="ml-1 h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Creators
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to protect, manage, and monetize your intellectual property 
              in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <feature.icon className={`h-12 w-12 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How IPVerse Works
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Simple steps to protect and monetize your intellectual property
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Register Your IP',
                description: 'Upload your creative work and let our AI generate comprehensive metadata and protection.',
                icon: Shield,
              },
              {
                step: '2',
                title: 'AI Agent Management',
                description: 'Deploy intelligent agents to handle licensing, negotiation, and infringement detection.',
                icon: Brain,
              },
              {
                step: '3',
                title: 'Earn Royalties',
                description: 'Automatically receive payments through smart contracts as your IP gets licensed and used.',
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <item.icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Creators Worldwide
            </h2>
            <p className="text-lg text-gray-400">
              See what our community says about IPVerse
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-400 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Ideas?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of creators who trust IPVerse with their intellectual property.
          </p>
          {!user && (
            <Link to="/login" className="inline-block">
              <Button variant="outline" size="lg" className="px-8 bg-white text-blue-600 hover:bg-gray-100 border-white hover:border-gray-100">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};