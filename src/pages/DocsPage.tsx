import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  Code, 
  Zap, 
  Settings, 
  HelpCircle, 
  ExternalLink,
  ChevronRight,
  Search,
  FileText,
  Cpu,
  Shield,
  Globe
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const DocsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Docs', icon: Book },
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'api', name: 'API Reference', icon: Code },
    { id: 'integrations', name: 'Integrations', icon: Globe },
    { id: 'troubleshooting', name: 'Support', icon: HelpCircle },
  ];

  const docs = [
    {
      title: 'Quick Start Guide',
      description: 'Get up and running with IPVerse in just 5 minutes. Perfect for new users.',
      category: 'getting-started',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      url: 'https://github.com/your-team/ipverse/blob/main/docs/QUICKSTART.md',
      tags: ['beginner', 'setup', 'tutorial'],
      estimatedTime: '5 min read'
    },
    {
      title: 'API Documentation',
      description: 'Complete REST API reference with examples for all endpoints and integrations.',
      category: 'api',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      url: 'https://github.com/your-team/ipverse/blob/main/docs/API.md',
      tags: ['api', 'reference', 'endpoints'],
      estimatedTime: '15 min read'
    },
    {
      title: 'Partner Integrations',
      description: 'Setup guides for all 10+ partner APIs including Story Protocol, Crossmint, and more.',
      category: 'integrations',
      icon: Globe,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      url: 'https://github.com/your-team/ipverse/blob/main/docs/INTEGRATIONS.md',
      tags: ['integrations', 'partners', 'setup'],
      estimatedTime: '20 min read'
    },
    {
      title: 'Environment Configuration',
      description: 'Complete guide to setting up API keys and environment variables.',
      category: 'getting-started',
      icon: Settings,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      url: 'https://github.com/your-team/ipverse/blob/main/ENVIRONMENT.md',
      tags: ['environment', 'configuration', 'api-keys'],
      estimatedTime: '10 min read'
    },
    {
      title: 'Troubleshooting Guide',
      description: 'Common issues and solutions to help you resolve problems quickly.',
      category: 'troubleshooting',
      icon: HelpCircle,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      url: 'https://github.com/your-team/ipverse/blob/main/docs/TROUBLESHOOTING.md',
      tags: ['troubleshooting', 'support', 'debugging'],
      estimatedTime: '12 min read'
    },
    {
      title: 'Deployment Guide',
      description: 'Deploy IPVerse to production platforms like Render, Netlify, and Vercel.',
      category: 'getting-started',
      icon: Cpu,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/20',
      url: 'https://github.com/your-team/ipverse/blob/main/DEPLOYMENT.md',
      tags: ['deployment', 'production', 'hosting'],
      estimatedTime: '8 min read'
    }
  ];

  const quickLinks = [
    {
      title: 'Story Protocol Integration',
      description: 'Register IP on-chain',
      url: 'https://docs.story.foundation/',
      external: true
    },
    {
      title: 'Crossmint NFT Minting',
      description: 'Walletless NFT creation',
      url: 'https://docs.crossmint.com/',
      external: true
    },
    {
      title: 'Alchemy Web3 APIs',
      description: 'Blockchain infrastructure',
      url: 'https://docs.alchemy.com/',
      external: true
    },
    {
      title: 'OpenAI API',
      description: 'AI agent intelligence',
      url: 'https://platform.openai.com/docs',
      external: true
    }
  ];

  const filteredDocs = docs.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDocClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Documentation
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Everything you need to build with IPVerse
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 
                    'bg-blue-600 text-white border-0' : 
                    'text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500'
                  }
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Documentation */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredDocs.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className="p-6 bg-gray-800 border-gray-700 hover:border-gray-600 transition-all cursor-pointer h-full"
                    onClick={() => handleDocClick(doc.url)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${doc.bgColor}`}>
                        <doc.icon className={`h-6 w-6 ${doc.color}`} />
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {doc.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {doc.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {doc.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {doc.estimatedTime}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredDocs.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">
                  No documentation found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search terms or category filter
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">
                Partner Documentation
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => window.open(link.url, '_blank')}
                    className="w-full text-left p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                          {link.title}
                        </div>
                        <div className="text-sm text-gray-400">
                          {link.description}
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </Card>

            {/* Getting Help */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">
                Need Help?
              </h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500"
                  onClick={() => window.open('https://github.com/your-team/ipverse/issues', '_blank')}
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  GitHub Issues
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500"
                  onClick={() => window.open('https://discord.gg/ipverse', '_blank')}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Discord Community
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500"
                  onClick={() => window.open('mailto:docs@ipverse.app', '_blank')}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
              </div>
            </Card>

            {/* Stats */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">
                Documentation Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Coverage</span>
                  <span className="text-white font-medium">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Code Examples</span>
                  <span className="text-white font-medium">100+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Integrations</span>
                  <span className="text-white font-medium">10+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Updated</span>
                  <span className="text-white font-medium">Jan 2025</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};