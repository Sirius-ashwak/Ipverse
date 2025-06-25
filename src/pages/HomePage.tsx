import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Download,
  Copy,
  Github,
  Star,
  ExternalLink,
  Play
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export const HomePage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('Python');

  const codeExamples = {
    Python: `from langchain_openai import ChatOpenAI
from langchain.agents import AgentType
from pica_langchain import PicaClient, create_pica_agent

# Initialize Pica client
pica_client = PicaClient(secret="YOUR_PICA_SECRET", connectors=["**"])

# Set up LLM
llm = ChatOpenAI(temperature=0, model="gpt-4")

# Create Pica agent
agent = create_pica_agent(
    llm=llm,
    pica_client=pica_client,
    agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

# Run the agent
result = agent.run("Send an email to john@example.com with the subject 'Meeting Tomorrow'")
print(result)`,
    TypeScript: `import { PicaClient } from '@pica/sdk';
import { ChatOpenAI } from 'langchain/chat_models/openai';

const pica = new PicaClient({
  apiKey: process.env.PICA_API_KEY,
  connectors: ['gmail', 'slack', 'notion']
});

const llm = new ChatOpenAI({
  temperature: 0,
  modelName: 'gpt-4'
});

async function runAgent() {
  const result = await pica.execute({
    prompt: "Schedule a meeting with the team for next week",
    llm: llm
  });
  
  return result;
}`,
    MCP: `{
  "mcpServers": {
    "pica": {
      "command": "npx",
      "args": ["@pica/mcp-server"],
      "env": {
        "PICA_API_KEY": "your-api-key"
      }
    }
  }
}`
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badges */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-8 mb-16">
              <div className="flex items-center space-x-2 text-orange-500 font-medium">
                <span>Built with Rust</span>
                <span>🦀</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400 font-medium">
                <Github className="h-4 w-4" />
                <span>Open Source</span>
              </div>
            </div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 leading-none tracking-tight">
                Build agentic<br />
                automations.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Fast.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-5xl mx-auto leading-relaxed">
                Connect LLMs to 13,000+ APIs with human-verifiable calls, streaming execution,<br />
                and SDKs for LangChain, Vercel, and more.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center space-x-6 mb-20"
            >
              <Button size="lg" className="px-10 py-4 bg-white text-black hover:bg-gray-100 font-semibold text-lg rounded-xl">
                Start building
              </Button>
              <Button variant="ghost" size="lg" className="px-10 py-4 text-white hover:bg-gray-800 font-semibold text-lg rounded-xl border border-gray-700">
                <Play className="h-5 w-5 mr-2" />
                See demo
              </Button>
            </motion.div>

            {/* Code Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-gray-900/50 backdrop-blur border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* Code tabs */}
                <div className="flex items-center justify-between bg-gray-800/50 px-8 py-4 border-b border-gray-700/50">
                  <div className="flex space-x-2">
                    {['Python', 'TypeScript', 'MCP'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all ${
                          activeTab === tab
                            ? 'bg-gray-700 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50">
                      <Download className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50">
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Code content */}
                <div className="p-10 text-left bg-gray-900/30">
                  <pre className="text-sm text-gray-300 leading-relaxed overflow-x-auto">
                    <code className="language-python">
                      {codeExamples[activeTab as keyof typeof codeExamples]}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-2xl text-gray-400 mb-20">
              Everything you need to build powerful agentic applications
            </p>
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
                className="bg-gray-900/50 backdrop-blur border border-gray-800/50 rounded-2xl p-10 text-center hover:border-gray-700/50 transition-all group hover:bg-gray-900/70"
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Connectors Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Available Connectors (113)
            </h2>
            <p className="text-xl text-gray-400">
              Connect to the world. New platforms added regularly.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  category.active
                    ? 'bg-white text-black'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search connectors..."
                className="w-full px-8 py-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Connectors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'ActiveCampaign',
                description: 'ActiveCampaign is a customer experience automation platform that combines email marketing, marketing automation, and CRM tools.',
                logo: '📧',
                category: 'Marketing'
              },
              {
                name: 'Affinity.co',
                description: 'Affinity is a relationship intelligence CRM that automatically captures and analyzes your team\'s network.',
                logo: '🔗',
                category: 'CRM'
              },
              {
                name: 'AgentQL',
                description: 'AgentQL is a natural language interface that allows users to query their data using plain English.',
                logo: '🤖',
                category: 'AI'
              },
              {
                name: 'Ahrefs',
                description: 'Ahrefs is a comprehensive SEO toolset that helps you grow your search traffic, research competitors and monitor your niche.',
                logo: '📊',
                category: 'Marketing'
              },
              {
                name: 'Airtable',
                description: 'Airtable is a cloud collaboration service that combines the features of a database with the simplicity of a spreadsheet.',
                logo: '📋',
                category: 'Productivity'
              },
              {
                name: 'Anthropic',
                description: 'Anthropic develops AI safety research and builds helpful, harmless, and honest AI systems.',
                logo: '🧠',
                category: 'AI'
              }
            ].map((connector, index) => (
              <motion.div
                key={connector.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all group hover:bg-gray-900/70"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-3xl group-hover:bg-gray-700 transition-colors">
                    {connector.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {connector.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {connector.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 bg-gray-800 px-4 py-2 rounded-full">
                        Connect your AI agent
                      </span>
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              MCP App Store-as-a-Service
            </h2>
            <p className="text-xl text-gray-400">
              Launch and manage internal AI tools with full control.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Integrations panel */}
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800/50 rounded-2xl p-8">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Integrations</h3>
                  <button className="text-gray-400 hover:text-white text-2xl">×</button>
                </div>
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
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
                    <div key={index} className="bg-gray-700/50 rounded-xl p-4 text-center hover:bg-gray-600/50 transition-colors">
                      <div className="text-2xl mb-2">{app.logo}</div>
                      <div className="text-xs text-gray-300 truncate">{app.name}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <span className="text-xs text-gray-400">Powered by 🔧 Pica</span>
                </div>
              </div>
            </div>

            {/* Right side - Code */}
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800/50 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between bg-gray-800/50 px-6 py-4 border-b border-gray-700/50">
                <span className="text-gray-300 text-sm font-semibold">typescript</span>
                <div className="flex space-x-3">
                  <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-8 text-left">
                <pre className="text-sm text-gray-300 leading-relaxed overflow-x-auto">
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
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Start building agentic automations with Pica today.
            </p>
            <Link to="/login" className="inline-block">
              <Button variant="outline" size="lg" className="px-10 py-4 bg-white text-blue-600 hover:bg-gray-100 border-white hover:border-gray-100 font-semibold text-lg rounded-xl">
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