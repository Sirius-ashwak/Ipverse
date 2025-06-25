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
  Github,
  Play,
  Code,
  Database,
  FileText,
  Music,
  Image as ImageIcon,
  Video,
  Layers,
  Network,
  Cpu
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
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
    { label: 'Partner Integrations', value: '10+', icon: Network, highlight: true },
    { label: 'IP Assets Registered', value: '50K+', icon: Shield },
    { label: 'Active Creators', value: '12K+', icon: Users },
    { label: 'AI Negotiations', value: '25K+', icon: Brain },
  ];

  const integrations = [
    { name: 'Story Protocol', description: 'Connect your IP agent', icon: '📚', category: 'Blockchain' },
    { name: 'Crossmint', description: 'Connect your NFT agent', icon: '🎨', category: 'NFT' },
    { name: 'Alchemy', description: 'Connect your Web3 agent', icon: '⚡', category: 'Infrastructure' },
    { name: 'thirdweb', description: 'Connect your contract agent', icon: '🔗', category: 'Smart Contracts' },
    { name: 'Gelato', description: 'Connect your automation agent', icon: '🤖', category: 'Automation' },
    { name: 'Fleek', description: 'Connect your hosting agent', icon: '☁️', category: 'Hosting' },
    { name: 'Yakoa', description: 'Connect your detection agent', icon: '🔍', category: 'Detection' },
    { name: 'Zapper', description: 'Connect your portfolio agent', icon: '📊', category: 'Analytics' },
    { name: 'deBridge', description: 'Connect your bridge agent', icon: '🌉', category: 'Cross-chain' },
    { name: 'OpenAI', description: 'Connect your AI agent', icon: '🧠', category: 'AI' },
  ];

  const assetTypes = [
    { name: 'Images', icon: ImageIcon, count: '15K+' },
    { name: 'Audio', icon: Music, count: '8K+' },
    { name: 'Videos', icon: Video, count: '5K+' },
    { name: 'Text', icon: FileText, count: '12K+' },
    { name: 'Datasets', icon: Database, count: '3K+' },
    { name: 'Code', icon: Code, count: '7K+' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2">
                  <span className="text-orange-400 text-sm font-medium">Built with AI 🧠</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
                  <Github className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">Open Source</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Build IP automations.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Fast.
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Connect AI agents to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold text-2xl">
                  10+ IP management APIs
                </span>{' '}
                with human-verifiable calls, streaming execution,
                and SDKs for Story Protocol, Crossmint, and more.
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
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/login" className="inline-block">
                    <Button size="lg" className="px-8 w-full sm:w-auto bg-white text-black hover:bg-gray-100">
                      Start building
                    </Button>
                  </Link>
                  <Button variant="ghost" size="lg" className="px-8 w-full sm:w-auto text-white border-gray-600 hover:bg-gray-800">
                    <Play className="h-4 w-4 mr-2" />
                    See demo
                  </Button>
                </>
              )}
            </motion.div>

            {/* Code Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">TypeScript</span>
                    <button className="text-gray-400 hover:text-white">
                      <Code className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="p-6 text-left">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`import { StoryProtocol } from '@story-protocol/sdk'
import { CrossmintSDK } from '@crossmint/client-sdk'
import { IPVerse, createIPAgent } from '@ipverse/sdk'

// Initialize IPVerse client
const ipverse = new IPVerse({
  apiKey: "YOUR_IPVERSE_API_KEY",
  network: "mainnet"
})

// Set up AI agent
const agent = await createIPAgent({
  name: "LicenseBot Pro",
  capabilities: ["negotiate", "detect", "analyze"]
})`}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                10+ Partner APIs
              </span>{' '}
              Ready to Use
            </h2>
            <p className="text-xl text-gray-400">
              Connect to leading Web3 and AI services with our curated integrations
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.highlight ? 'text-yellow-400' : 'text-blue-400'}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  stat.highlight 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400' 
                    : 'text-white'
                }`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Integrations */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Available Integrations ({integrations.length})
            </h2>
            <p className="text-xl text-gray-400">
              Connect to the world. New platforms added regularly from our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
                growing partner ecosystem
              </span>
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', 'Blockchain', 'NFT', 'Infrastructure', 'Smart Contracts', 'Automation', 'Hosting', 'Detection', 'Analytics', 'Cross-chain', 'AI'].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All' 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category} {category === 'All' && `(${integrations.length})`}
              </button>
            ))}
          </div>

          {/* Integration Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{integration.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {integration.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {integration.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                        {integration.category}
                      </span>
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        Learn more →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Roadmap CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need a specific API?
              </h3>
              <p className="text-gray-400 mb-6">
                We're constantly adding new integrations to our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
                  partner ecosystem
                </span>
                . Request a new integration or contribute to our open-source project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-100">
                  View Roadmap
                </Button>
                <Button variant="outline" className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white">
                  Request Integration
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Products</h2>
            <p className="text-xl text-gray-400">
              Three tools, one goal: 'Get real work done fast.'
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* IPProtect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray-600 mb-4">#</div>
                <h3 className="text-4xl font-bold mb-4">IPProtect</h3>
                <p className="text-lg text-gray-400 mb-2">
                  Every IP registration,
                  <br />
                  right the first time
                </p>
                <p className="text-sm text-gray-500">
                  Full schemas • scope intelligence
                  <br />
                  safety baked in
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-left">
                <p className="text-gray-300 mb-4">
                  Register any IP with a single command. IPProtect gives your agent instant 
                  access to every blockchain network, hassle-free.
                </p>
              </div>
            </motion.div>

            {/* AIAgents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray-600 mb-4">#</div>
                <h3 className="text-4xl font-bold mb-4">AIAgents</h3>
                <p className="text-lg text-gray-400 mb-2">
                  Instant negotiation,
                  <br />
                  licenses that never expire
                </p>
                <p className="text-sm text-gray-500">
                  Smart flows • auto rotation
                  <br />
                  AI store-as-a-Service
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-left">
                <p className="text-gray-300 mb-4">
                  Deploy intelligent agents to handle licensing and negotiations effortlessly. 
                  AIAgents manages smart contracts and royalties so you don't have to.
                </p>
              </div>
            </motion.div>

            {/* SmartKit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray-600 mb-4">#</div>
                <h3 className="text-4xl font-bold mb-4">SmartKit</h3>
                <p className="text-lg text-gray-400 mb-2">
                  From plain English to
                  <br />
                  live integration in seconds
                </p>
                <p className="text-sm text-gray-500">
                  Unlimited integrations •{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
                    10+ partners
                  </span>
                  <br />
                  zero config
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-left">
                <p className="text-gray-300 mb-4">
                  Describe what you want to build and SmartKit creates the integration for 
                  you—no docs or configs needed. Access to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
                    10+ partner APIs
                  </span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asset Types */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Supported Asset Types</h2>
            <p className="text-xl text-gray-400">
              Protect and monetize any type of intellectual property
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {assetTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
              >
                <type.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-1">{type.name}</h3>
                <p className="text-sm text-gray-400">{type.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Protect Your Ideas?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who trust IPVerse with their intellectual property.
            Access{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
              10+ partner APIs
            </span>{' '}
            instantly.
          </p>
          {!user && (
            <Link to="/login" className="inline-block">
              <Button size="lg" className="px-8 bg-white text-black hover:bg-gray-100">
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