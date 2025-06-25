import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const IntroPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', count: 113 },
    { name: 'Blockchain', count: 37 },
    { name: 'AI', count: 25 },
    { name: 'Infrastructure', count: 18 },
    { name: 'Communication', count: 12 },
    { name: 'Analytics', count: 8 },
    { name: 'Storage', count: 6 },
    { name: 'Security', count: 7 },
  ];

  const connectors = [
    {
      name: 'Story Protocol',
      description: 'Story Protocol is a blockchain infrastructure that enables creators to register, license, and monetize their intellectual property.',
      logo: '📚',
      category: 'Blockchain'
    },
    {
      name: 'Crossmint',
      description: 'Crossmint enables walletless NFT minting and management, making Web3 accessible to mainstream users.',
      logo: '🎨',
      category: 'Blockchain'
    },
    {
      name: 'Tomo SDK',
      description: 'Tomo SDK provides gasless transactions and social login capabilities for seamless Web3 onboarding.',
      logo: '🔐',
      category: 'Infrastructure'
    },
    {
      name: 'OpenAI',
      description: 'OpenAI provides advanced AI models for natural language processing, content generation, and intelligent automation.',
      logo: '🧠',
      category: 'AI'
    },
    {
      name: 'Alchemy',
      description: 'Alchemy provides reliable blockchain infrastructure and APIs for building scalable Web3 applications.',
      logo: '⚡',
      category: 'Infrastructure'
    },
    {
      name: 'thirdweb',
      description: 'thirdweb offers smart contract deployment tools and SDKs for building decentralized applications.',
      logo: '🔧',
      category: 'Blockchain'
    },
    {
      name: 'Gelato',
      description: 'Gelato provides automation and relay services for executing smart contract functions and workflows.',
      logo: '🤖',
      category: 'Infrastructure'
    },
    {
      name: 'Fleek',
      description: 'Fleek offers decentralized hosting and storage solutions for Web3 applications and content.',
      logo: '☁️',
      category: 'Storage'
    },
    {
      name: 'Yakoa',
      description: 'Yakoa provides IP originality detection and content verification services for creators.',
      logo: '🔍',
      category: 'AI'
    },
    {
      name: 'Zapper',
      description: 'Zapper offers portfolio tracking and analytics for DeFi and Web3 asset management.',
      logo: '📊',
      category: 'Analytics'
    },
    {
      name: 'deBridge',
      description: 'deBridge enables cross-chain asset transfers and interoperability between different blockchains.',
      logo: '🌉',
      category: 'Infrastructure'
    },
    {
      name: 'IPFS',
      description: 'IPFS provides decentralized file storage and content addressing for distributed applications.',
      logo: '📁',
      category: 'Storage'
    }
  ];

  const filteredConnectors = connectors.filter(connector => {
    const matchesSearch = connector.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         connector.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || connector.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-white">#</div>
              <span className="text-xl font-bold text-white">IPVerse</span>
            </Link>
            <Link to="/login">
              <Button className="bg-white text-black hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Available Connectors <span className="text-gray-400">(113)</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Connect to the world. New platforms added regularly.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.name
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-2xl mx-auto mb-12"
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search connectors..."
            className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
        </motion.div>

        {/* Connectors Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredConnectors.map((connector, index) => (
            <motion.div
              key={connector.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all group cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{connector.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {connector.name}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      {connector.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {connector.description}
                  </p>
                  <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span>Connect your AI agent</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 pt-16 border-t border-gray-800"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to start building?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Connect AI agents to 113+ IP management APIs with human-verifiable calls, 
            streaming execution, and SDKs for Story Protocol, Crossmint, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/docs">
              <Button variant="outline" size="lg" className="text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white">
                View Documentation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};