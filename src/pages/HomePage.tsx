import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search,
  ArrowRight,
  Download,
  Copy,
  Github,
  Star,
  ExternalLink
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export const HomePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Built with Rust + Open Source badges */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 font-medium">Built with Rust</span>
                <span className="text-orange-500">🦀</span>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="h-4 w-4 text-blue-400" />
                <span className="text-blue-400 font-medium">Open Source</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Build agentic automations. Fast.
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Connect LLMs to 13,000+ APIs with human-verifiable calls, streaming execution,
                and SDKs for LangChain, Vercel, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button size="lg" className="px-8 bg-white text-black hover:bg-gray-100">
                Start building
              </Button>
              <Button variant="ghost" size="lg" className="px-8 text-white hover:bg-gray-800">
                See demo
              </Button>
            </motion.div>

            {/* Code Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                {/* Code tabs */}
                <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
                  <div className="flex space-x-4">
                    <button className="px-3 py-1 bg-gray-700 text-white rounded text-sm">
                      Python
                    </button>
                    <button className="px-3 py-1 text-gray-400 hover:text-white text-sm">
                      TypeScript
                    </button>
                    <button className="px-3 py-1 text-gray-400 hover:text-white text-sm">
                      MCP
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-white">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Code content */}
                <div className="p-6 text-left">
                  <pre className="text-sm text-gray-300 leading-relaxed">
                    <code>
{`from langchain_openai import ChatOpenAI
from langchain.agents import AgentType
from pica_langchain import PicaClient, create_pica_agent

# Initialize Pica client
pica_client = PicaClient(secret="YOUR_PICA_SECRET", connectors=["**"])

# Set up LLM
llm = ChatOpenAI(temperature=0, model="gpt-4")`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl text-gray-400 mb-12">
              Everything you need to build powerful agentic applications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🔧',
                title: 'LLM-First',
                description: 'Built from the ground up for large language models and AI agents'
              },
              {
                icon: '🌐',
                title: '13,000+ APIs',
                description: 'Connect to thousands of services with natural language'
              },
              {
                icon: '⚡',
                title: 'Fast & Reliable',
                description: 'Streaming execution with human-verifiable calls'
              },
              {
                icon: '📚',
                title: 'Open + Extensible',
                description: 'SDKs for LangChain, Vercel, and more'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Connectors Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Available Connectors (113)
            </h2>
            <p className="text-lg text-gray-400">
              Connect to the world. New platforms added regularly.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
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
              { name: 'Tools', count: 18 }
            ].map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category.active
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
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

          {/* Connectors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'ActiveCampaign',
                description: 'ActiveCampaign is a customer experience automation platform that combines email...',
                logo: '📧'
              },
              {
                name: 'Affinity.co',
                description: 'Affinity is a relationship intelligence CRM that automatically captures and analyzes your...',
                logo: '🔗'
              },
              {
                name: 'AgentQL',
                description: 'AgentQL is a natural language interface that allows users to query their data using plain...',
                logo: '🤖'
              },
              {
                name: 'Ahrefs',
                description: 'Ahrefs is a comprehensive SEO toolset that helps you grow your search traffic...',
                logo: '📊'
              },
              {
                name: 'Airtable',
                description: 'Airtable is a cloud collaboration service that combines the features of a database...',
                logo: '📋'
              },
              {
                name: 'Anthropic',
                description: 'Anthropic develops AI safety research and builds helpful, harmless, and honest AI...',
                logo: '🧠'
              }
            ].map((connector, index) => (
              <motion.div
                key={connector.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MCP Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              MCP App Store-as-a-Service
            </h2>
            <p className="text-lg text-gray-400">
              Launch and manage internal AI tools with full control.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Integrations panel */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-medium">Integrations</h3>
                  <button className="text-gray-400 hover:text-white">×</button>
                </div>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: 'ActiveCampaign', logo: '📧' },
                    { name: 'Google', logo: '🔍' },
                    { name: 'Anthropic', logo: '🧠' },
                    { name: 'Airtable', logo: '📋' },
                    { name: 'Figma', logo: '🎨' },
                    { name: 'AgentQL', logo: '🤖' },
                    { name: 'Retently', logo: '📊' },
                    { name: 'Box', logo: '📦' },
                    { name: 'ClearGPT', logo: '💬' },
                    { name: 'Chargebee', logo: '💳' },
                    { name: 'Clerk', logo: '🔐' },
                    { name: 'Okta', logo: '🛡️' },
                    { name: 'Canvas', logo: '🎯' },
                    { name: 'Convertkit', logo: '📧' },
                    { name: 'Diffbot', logo: '🤖' }
                  ].map((app, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">{app.logo}</div>
                      <div className="text-xs text-gray-300">{app.name}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <span className="text-xs text-gray-400">Powered by 🔧 Pica</span>
                </div>
              </div>
            </div>

            {/* Right side - Code */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
                <span className="text-gray-300 text-sm">typescript</span>
                <div className="flex space-x-2">
                  <button className="p-1 text-gray-400 hover:text-white">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-white">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-left">
                <pre className="text-sm text-gray-300 leading-relaxed">
                  <code>
{`import { useAuthKit } from "@picahq/authkit";
import { Button } from "@/components/ui/button";

export function AuthKitButton() {
  const { open } = useAuthKit({
    token: {
      url: "https://api.your-company-name.com/authkit-token",
      headers: {},
    },
    onSuccess: (connection) => {},
    onError: (error) => {},
    onClose: () => {},
  });

  return (
    <Button onClick={open}>
      Connect Tools
    </Button>
  );
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!user && (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start building agentic automations with Pica today.
            </p>
            <Link to="/login" className="inline-block">
              <Button variant="outline" size="lg" className="px-8 bg-white text-blue-600 hover:bg-gray-100 border-white hover:border-gray-100">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};