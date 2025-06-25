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
  ExternalLink,
  Play,
  Code,
  Database,
  FileText,
  Music,
  Image as ImageIcon,
  Video
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useAuth } from '../contexts/AuthContext';

export const HomePage: React.FC = () => {
  const { user } = useAuth();

  const integrations = [
    { name: 'Story Protocol', description: 'Connect your IP agent', icon: Shield, category: 'Blockchain' },
    { name: 'Crossmint', description: 'Connect your NFT agent', icon: Zap, category: 'NFT' },
    { name: 'Alchemy', description: 'Connect your Web3 agent', icon: Globe, category: 'Infrastructure' },
    { name: 'OpenAI', description: 'Connect your AI agent', icon: Brain, category: 'AI' },
    { name: 'Gelato', description: 'Connect your automation agent', icon: TrendingUp, category: 'Automation' },
    { name: 'Fleek', description: 'Connect your storage agent', icon: Database, category: 'Storage' },
    { name: 'Yakoa', description: 'Connect your detection agent', icon: CheckCircle, category: 'Detection' },
    { name: 'Zapper', description: 'Connect your analytics agent', icon: TrendingUp, category: 'Analytics' },
    { name: 'deBridge', description: 'Connect your bridge agent', icon: ArrowRight, category: 'Bridge' },
  ];

  const categories = [
    { name: 'All', count: integrations.length },
    { name: 'AI', count: integrations.filter(i => i.category === 'AI').length },
    { name: 'Blockchain', count: integrations.filter(i => i.category === 'Blockchain').length },
    { name: 'NFT', count: integrations.filter(i => i.category === 'NFT').length },
    { name: 'Analytics', count: integrations.filter(i => i.category === 'Analytics').length },
    { name: 'Storage', count: integrations.filter(i => i.category === 'Storage').length },
  ];

  const assetTypes = [
    { id: 'image', name: 'Images', icon: ImageIcon, count: 1250 },
    { id: 'audio', name: 'Audio', icon: Music, count: 890 },
    { id: 'video', name: 'Video', icon: Video, count: 650 },
    { id: 'text', name: 'Text', icon: FileText, count: 2100 },
    { id: 'dataset', name: 'Datasets', icon: Database, count: 450 },
    { id: 'code', name: 'Code', icon: Code, count: 780 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                Built with AI 🤖
              </Badge>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30 flex items-center">
                <Github className="h-3 w-3 mr-1" />
                Open Source
              </Badge>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Build agentic IP management.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Fast.
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Connect AI agents to Web3 infrastructure with human-verifiable IP protection, 
                streaming royalties, and SDKs for Story Protocol, Crossmint, and more.
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
                  <Button size="lg" className="px-8 bg-white text-black hover:bg-gray-100">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/login" className="inline-block">
                    <Button size="lg" className="px-8 bg-white text-black hover:bg-gray-100">
                      Start building
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="px-8 border-gray-600 text-gray-300 hover:bg-gray-800">
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
              <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-400">typescript</span>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-white">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="p-6 text-left">
                  <pre className="text-sm text-gray-300 leading-relaxed">
                    <code>
{`import { useIPVerse } from "@ipverse/sdk";
import { Button } from "@/components/ui/button";

export function IPProtectionAgent() {
  const { registerIP, deployAgent } = useIPVerse({
    storyProtocol: "YOUR_STORY_KEY",
    crossmint: "YOUR_CROSSMINT_KEY",
  });

  const handleProtect = async () => {
    const asset = await registerIP({
      title: "My Digital Art",
      type: "image",
      royalty: 10
    });
    
    await deployAgent("infringement-detector", {
      assetId: asset.id,
      monitoring: true
    });
  };

  return (
    <Button onClick={handleProtect}>
      Protect IP Asset
    </Button>
  );
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Integrations Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Available Integrations ({integrations.length})
            </h2>
            <p className="text-xl text-gray-400">
              Connect to the Web3 ecosystem. New platforms added regularly.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search integrations..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Integrations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                      <integration.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    {integration.name} is a powerful platform that enables seamless integration 
                    with your IP management workflow through automated agents.
                  </p>
                  <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                    Learn more →
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Products</h2>
            <p className="text-xl text-gray-400">
              Three tools, one goal: "Protect IP assets fast."
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
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  #
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">IPProtect</h3>
                <p className="text-gray-400 mb-2">Every IP asset,</p>
                <p className="text-gray-400 mb-6">protected the first time</p>
                <div className="text-sm text-gray-500 mb-8">
                  <p>Blockchain verification • AI detection</p>
                  <p>Story Protocol based</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Register any IP asset with a single transaction. IPProtect gives your content instant 
                  blockchain verification and AI-powered protection, hassle-free.
                </p>
              </div>
            </motion.div>

            {/* AgentKit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                <div className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  #
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AgentKit</h3>
                <p className="text-gray-400 mb-2">Instant agents,</p>
                <p className="text-gray-400 mb-6">that never stop working</p>
                <div className="text-sm text-gray-500 mb-8">
                  <p>AI workflows • auto negotiation</p>
                  <p>24/7 monitoring</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Deploy intelligent agents for licensing and infringement detection. AgentKit handles 
                  negotiations and monitoring so you don't have to.
                </p>
              </div>
            </motion.div>

            {/* MarketPlace */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  #
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">MarketPlace</h3>
                <p className="text-gray-400 mb-2">From discovery to</p>
                <p className="text-gray-400 mb-6">live licensing in seconds</p>
                <div className="text-sm text-gray-500 mb-8">
                  <p>Global marketplace • instant licensing</p>
                  <p>cross-chain support</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Discover and license IP assets globally. MarketPlace creates instant 
                  licensing agreements—no complex contracts needed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Supported Asset Types</h2>
            <p className="text-xl text-gray-400">
              Protect any type of intellectual property with specialized agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                        <type.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {type.name}
                      </h3>
                    </div>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      {type.count.toLocaleString()}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Specialized protection and licensing for {type.name.toLowerCase()} assets
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build the Future of IP?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of creators building with agentic IP management.
          </p>
          {!user && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="inline-block">
                <Button size="lg" className="px-8 bg-white text-blue-600 hover:bg-gray-100">
                  Start building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white/10">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};