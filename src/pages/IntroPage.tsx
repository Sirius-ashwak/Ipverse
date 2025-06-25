import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Github, Star, ExternalLink, Download, Copy } from 'lucide-react';
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
    <div className="min-h-screen bg-black text-white">
      {/* Header - Exact Pica Style */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-white">#</div>
                <span className="text-xl font-bold text-white">IPVerse</span>
              </Link>
              
              {/* GitHub Star Button */}
              <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-md px-3 py-1.5">
                <Github className="h-4 w-4 text-gray-300" />
                <span className="text-sm text-gray-300">GitHub</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">1,194</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-8">
              <Link to="/company" className="text-gray-300 hover:text-white transition-colors">
                Company
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/docs" className="flex items-center text-gray-300 hover:text-white transition-colors">
                Docs
                <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  Log in
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-white text-black hover:bg-gray-100 px-6">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Exact Pica Style */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        {/* Built with badges */}
        <div className="flex justify-center space-x-6 mb-12">
          <div className="flex items-center space-x-2">
            <span className="text-orange-400 text-sm">Built with Rust</span>
            <span className="text-orange-400">🦀</span>
          </div>
          <div className="flex items-center space-x-2">
            <Github className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 text-sm">Open Source</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Build agentic automations. Fast.
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Connect LLMs to 13,000+ APIs with human-verifiable calls, streaming execution,
            <br />
            and SDKs for LangChain, Vercel, and more.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4 mb-16">
          <Link to="/login">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
              Start building
            </Button>
          </Link>
          <Button variant="ghost" size="lg" className="text-gray-300 hover:text-white px-8 py-3 text-lg">
            See demo
          </Button>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-4">
              <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm">Python</button>
              <button className="text-gray-400 px-3 py-1 rounded text-sm">TypeScript</button>
              <button className="text-gray-400 px-3 py-1 rounded text-sm">MCP</button>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-white">
                <Download className="h-4 w-4" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="font-mono text-sm">
            <div className="text-gray-500">1</div>
            <div className="text-gray-500">2</div>
            <div className="text-gray-500">3</div>
            <div className="text-gray-500">4</div>
            <div className="text-gray-500">5</div>
            <div className="text-gray-500">6</div>
            <div className="text-gray-500">7</div>
            <div className="text-gray-500">8</div>
          </div>
          <div className="absolute left-16 top-0 font-mono text-sm text-gray-300">
            <div><span className="text-purple-400">from</span> langchain_openai <span className="text-purple-400">import</span> ChatOpenAI</div>
            <div><span className="text-purple-400">from</span> langchain.agents <span className="text-purple-400">import</span> AgentType</div>
            <div><span className="text-purple-400">from</span> pica_langchain <span className="text-purple-400">import</span> PicaClient, create_pica_agent</div>
            <div></div>
            <div><span className="text-gray-500"># Initialize Pica client</span></div>
            <div>pica_client = PicaClient(secret=<span className="text-green-400">"YOUR_PICA_SECRET"</span>, connectors=[<span className="text-green-400">"*"</span>])</div>
            <div></div>
            <div><span className="text-gray-500"># Set up LLM</span></div>
          </div>
        </div>
      </div>

      {/* Available Connectors Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Available Connectors <span className="text-gray-500">(113)</span>
          </h2>
          <p className="text-xl text-gray-400">
            Connect to the world. New platforms added regularly.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.name
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search connectors..."
            className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
        </div>

        {/* Connectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConnectors.map((connector, index) => (
            <motion.div
              key={connector.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all group cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{connector.logo}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
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
                    <ArrowRight className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};