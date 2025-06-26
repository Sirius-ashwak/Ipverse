import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home,
  Users,
  BarChart3,
  Plug,
  Activity,
  FileText,
  Zap,
  Rocket,
  Code,
  Database,
  Music,
  Image as ImageIcon,
  Video,
  Search,
  Github,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Terminal,
  Settings,
  Shield,
  Brain,
  Globe
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export const DocsPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('welcome');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['get-started', 'products']);
  const navigate = useNavigate();

  const sidebarSections = [
    {
      id: 'homepage',
      title: 'Homepage',
      icon: Home,
      type: 'single'
    },
    {
      id: 'community',
      title: 'Community',
      icon: Users,
      type: 'single'
    },
    {
      id: 'changelog',
      title: 'Changelog',
      icon: BarChart3,
      type: 'single'
    },
    {
      id: 'connectors',
      title: 'Connectors',
      icon: Plug,
      type: 'single'
    },
    {
      id: 'status',
      title: 'Status',
      icon: Activity,
      type: 'single'
    },
    {
      id: 'blog',
      title: 'Blog',
      icon: FileText,
      type: 'single'
    },
    {
      id: 'get-started',
      title: 'Get Started',
      type: 'section',
      items: [
        { id: 'welcome', title: 'Welcome to IPVerse', active: true },
        { id: 'quickstart', title: 'Quickstart' },
        { id: 'running-locally', title: 'Running Locally' },
        { id: 'environment-setup', title: 'Environment Setup' }
      ]
    },
    {
      id: 'products',
      title: 'Products',
      type: 'section',
      items: [
        { id: 'ipprotect', title: 'IPProtect' },
        { id: 'aiagents', title: 'AIAgents' },
        { id: 'smartkit', title: 'SmartKit' }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      type: 'section',
      items: [
        { id: 'story-protocol', title: 'Story Protocol' },
        { id: 'crossmint', title: 'Crossmint' },
        { id: 'alchemy', title: 'Alchemy' },
        { id: 'thirdweb', title: 'thirdweb' },
        { id: 'openai', title: 'OpenAI' }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'welcome':
        return (
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="text-sm text-blue-400 mb-2">Get Started</div>
              <h1 className="text-4xl font-bold text-white mb-4">Welcome to IPVerse</h1>
              <p className="text-xl text-gray-400">The AI + Web3 IP Management Platform</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Where to start</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                IPVerse gives every creator instant, reliable access to the tools they need—no keys, no configs, no headaches. We 
                provide powerful APIs and tools to build, deploy, and scale IP management with seamless access to over{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
                  10+ integrations
                </span>. Here's how to get started:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div 
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors cursor-pointer"
                  onClick={() => setSelectedSection('quickstart')}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                      <Zap className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Quick Start Guide</h3>
                      <p className="text-gray-400 text-sm">Set up your first integration in under 5 minutes</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <Code className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">OneTool SDK</h3>
                      <p className="text-gray-400 text-sm">Connect AI agents seamlessly to all APIs and tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Core Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">IP Protection</h3>
                  <p className="text-gray-400 text-sm">Register and protect your intellectual property with blockchain-based verification.</p>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <div className="bg-green-500/20 p-3 rounded-lg w-fit mb-4">
                    <Brain className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Agents</h3>
                  <p className="text-gray-400 text-sm">Intelligent agents handle licensing, negotiation, and infringement detection.</p>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <div className="bg-yellow-500/20 p-3 rounded-lg w-fit mb-4">
                    <Zap className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Smart Licensing</h3>
                  <p className="text-gray-400 text-sm">Automated licensing with smart contracts and cross-chain compatibility.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Partner Integrations</h2>
              <p className="text-gray-300 mb-6">
                Connect to leading Web3 and AI services with our curated integrations:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { name: 'Story Protocol', icon: '📚', category: 'Blockchain' },
                  { name: 'Crossmint', icon: '🎨', category: 'NFT' },
                  { name: 'Alchemy', icon: '⚡', category: 'Infrastructure' },
                  { name: 'thirdweb', icon: '🔗', category: 'Smart Contracts' },
                  { name: 'Gelato', icon: '🤖', category: 'Automation' },
                  { name: 'Fleek', icon: '☁️', category: 'Hosting' },
                  { name: 'OpenAI', icon: '🧠', category: 'AI' },
                  { name: 'Yakoa', icon: '🔍', category: 'Detection' },
                  { name: 'Zapper', icon: '📊', category: 'Analytics' },
                  { name: 'deBridge', icon: '🌉', category: 'Cross-chain' }
                ].map((integration, index) => (
                  <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center hover:border-gray-600 transition-colors">
                    <div className="text-2xl mb-2">{integration.icon}</div>
                    <div className="text-sm text-gray-300 font-medium">{integration.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{integration.category}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-gray-700 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Ready to get started?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of creators who trust IPVerse with their intellectual property.
              </p>
              <div className="flex space-x-4">
                <Button 
                  className="bg-blue-600 text-white hover:bg-blue-700 border-0"
                  onClick={() => navigate('/login')}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500"
                  onClick={() => setSelectedSection('quickstart')}
                >
                  View Examples
                </Button>
              </div>
            </div>
          </div>
        );

      case 'quickstart':
        return (
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="text-sm text-blue-400 mb-2">Get Started</div>
              <h1 className="text-4xl font-bold text-white mb-4">Quickstart</h1>
              <p className="text-xl text-gray-400">Get up and running with IPVerse in just 5 minutes</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Prerequisites</h2>
              <ul className="text-gray-300 mb-6 space-y-1">
                <li>• Node.js 18+ installed</li>
                <li>• Modern web browser</li>
                <li>• Internet connection</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Step 1: Clone and Setup</h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">Terminal</div>
                </div>
                <pre className="text-gray-300 text-sm p-4 overflow-x-auto">
                  <code>{`# Clone the repository
git clone https://github.com/your-team/ipverse.git
cd ipverse

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local`}</code>
                </pre>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">Step 2: Configure Environment</h2>
              <p className="text-gray-300 mb-4">Edit <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">.env.local</code> with your API keys:</p>
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">.env.local</div>
                </div>
                <pre className="text-gray-300 text-sm p-4 overflow-x-auto">
                  <code>{`# Essential for core functionality
VITE_TOMO_CLIENT_ID=xDsx8PcJd6QrpkgejZRWi9WpyTQ2FvCZOOmG2Ry4brFQxlil77Y3Rfg5XGTEFl5MWOfc6VOzDHku84Cye7l7pwnr

# Optional: Add your own API keys for full functionality
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_ALCHEMY_API_KEY=your_alchemy_api_key_here
VITE_STORY_PROTOCOL_API_KEY=your_story_protocol_api_key_here`}</code>
                </pre>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                <p className="text-blue-200 text-sm">
                  <strong>Note:</strong> The Tomo Client ID is pre-configured for demo purposes. For production, get your own keys from each partner.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">Step 3: Start Development Server</h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">Terminal</div>
                </div>
                <pre className="text-gray-300 text-sm p-4">
                  <code>npm run dev</code>
                </pre>
              </div>
              <p className="text-gray-300 mb-6">
                Open <a href="http://localhost:5173" className="text-blue-400 hover:text-blue-300 underline">http://localhost:5173</a> in your browser.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Step 4: Create Your Account</h2>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
                <ol className="text-gray-300 space-y-2">
                  <li>1. Click <strong className="text-white">"Get Started"</strong> on the homepage</li>
                  <li>2. Choose your preferred login method:
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>• <strong className="text-green-400">Google</strong> (Recommended)</li>
                      <li>• <strong className="text-blue-400">Twitter</strong></li>
                      <li>• <strong className="text-purple-400">Discord</strong></li>
                      <li>• <strong className="text-gray-400">Email</strong></li>
                    </ul>
                  </li>
                </ol>
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded">
                  <p className="text-green-200 text-sm">
                    ✨ Your wallet is automatically created - no crypto knowledge required!
                  </p>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-300 mb-2">🎉 Congratulations!</h3>
                <p className="text-green-200">Your IPVerse development environment is now ready. You can start building with our AI + Web3 IP management platform!</p>
                <div className="mt-4 flex space-x-3">
                  <Button 
                    size="sm" 
                    className="bg-green-600 text-white hover:bg-green-700 border-0"
                    onClick={() => navigate('/register')}
                  >
                    Register Your First IP
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-green-300 border-green-600 hover:bg-green-700 hover:text-white"
                    onClick={() => setSelectedSection('running-locally')}
                  >
                    Advanced Setup
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'running-locally':
        return (
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="text-sm text-blue-400 mb-2">Get Started</div>
              <h1 className="text-4xl font-bold text-white mb-4">Running Locally</h1>
              <p className="text-xl text-gray-400">Set up IPVerse for local development with full features</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Development Setup</h2>
              <p className="text-gray-300 mb-6">
                Follow these steps to set up IPVerse for local development with all features enabled.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Environment Configuration</h3>
              <p className="text-gray-300 mb-4">
                Create a <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">.env.local</code> file with the following variables:
              </p>
              
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="text-xs text-gray-400">.env.local</div>
                  <button className="text-gray-400 hover:text-white text-xs">Copy</button>
                </div>
                <pre className="text-gray-300 text-sm p-4 overflow-x-auto">
                  <code>{`# Core Configuration
VITE_TOMO_CLIENT_ID=xDsx8PcJd6QrpkgejZRWi9WpyTQ2FvCZOOmG2Ry4brFQxlil77Y3Rfg5XGTEFl5MWOfc6VOzDHku84Cye7l7pwnr
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_ALCHEMY_API_KEY=your_alchemy_api_key_here

# Partner Integrations
VITE_STORY_PROTOCOL_API_KEY=your_story_protocol_api_key_here
VITE_CROSSMINT_PROJECT_ID=your_crossmint_project_id_here
VITE_THIRDWEB_CLIENT_ID=your_thirdweb_client_id_here

# Development Settings
VITE_DEBUG_MODE=true
VITE_MOCK_APIS=true`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Available Scripts</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-blue-300 font-mono">npm run dev</code>
                    <Terminal className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-sm">Start the development server with hot reload</p>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-blue-300 font-mono">npm run build</code>
                    <Settings className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-sm">Build the application for production</p>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-blue-300 font-mono">npm run preview</code>
                    <Globe className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-sm">Preview the production build locally</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Development Features</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🔧 Debug Mode</h4>
                  <p className="text-gray-400 text-sm">Detailed logging and error information</p>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🎭 Mock APIs</h4>
                  <p className="text-gray-400 text-sm">Test without real API keys</p>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🔄 Hot Reload</h4>
                  <p className="text-gray-400 text-sm">Instant updates during development</p>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">📱 Responsive</h4>
                  <p className="text-gray-400 text-sm">Test on all device sizes</p>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">💡 Pro Tip</h3>
                <p className="text-yellow-200">
                  Enable debug mode to see detailed API logs and component render information. Perfect for troubleshooting integration issues!
                </p>
              </div>
            </div>
          </div>
        );

      case 'environment-setup':
        return (
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="text-sm text-blue-400 mb-2">Get Started</div>
              <h1 className="text-4xl font-bold text-white mb-4">Environment Setup</h1>
              <p className="text-xl text-gray-400">Configure API keys and environment variables</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Required API Keys</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-500/20 p-2 rounded mr-3">
                      <span className="text-green-400">✅</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Tomo SDK</h3>
                      <p className="text-gray-400 text-sm">Already configured - no action needed</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded p-3">
                    <code className="text-green-300 text-sm">VITE_TOMO_CLIENT_ID=xDsx8PcJd6QrpkgejZRWi9WpyTQ2FvCZOOmG2Ry4brFQxlil77Y3Rfg5XGTEFl5MWOfc6VOzDHku84Cye7l7pwnr</code>
                  </div>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-500/20 p-2 rounded mr-3">
                        <span className="text-blue-400">🧠</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">OpenAI</h3>
                        <p className="text-gray-400 text-sm">Required for AI agents</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-blue-400 border-blue-600 hover:bg-blue-700 hover:text-white"
                      onClick={() => window.open('https://platform.openai.com/api-keys', '_blank')}
                    >
                      Get API Key
                    </Button>
                  </div>
                  <div className="bg-gray-900 rounded p-3">
                    <code className="text-gray-400 text-sm">VITE_OPENAI_API_KEY=your_openai_api_key_here</code>
                  </div>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-purple-500/20 p-2 rounded mr-3">
                        <span className="text-purple-400">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Alchemy</h3>
                        <p className="text-gray-400 text-sm">Required for blockchain interactions</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-purple-400 border-purple-600 hover:bg-purple-700 hover:text-white"
                      onClick={() => window.open('https://dashboard.alchemy.com/', '_blank')}
                    >
                      Get API Key
                    </Button>
                  </div>
                  <div className="bg-gray-900 rounded p-3">
                    <code className="text-gray-400 text-sm">VITE_ALCHEMY_API_KEY=your_alchemy_api_key_here</code>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">Optional Partner APIs</h2>
              <p className="text-gray-300 mb-6">
                These APIs unlock additional features but aren't required for basic functionality:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { name: 'Story Protocol', desc: 'IP Registration', color: 'blue' },
                  { name: 'Crossmint', desc: 'NFT Minting', color: 'green' },
                  { name: 'thirdweb', desc: 'Smart Contracts', color: 'purple' },
                  { name: 'Gelato', desc: 'Automation', color: 'yellow' }
                ].map((api, index) => (
                  <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">{api.name}</h4>
                    <p className="text-gray-400 text-sm">{api.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">🔒 Security Best Practices</h3>
                <ul className="text-blue-200 text-sm space-y-1">
                  <li>• Never commit <code className="bg-blue-900/50 px-1 rounded">.env.local</code> to version control</li>
                  <li>• Use different API keys for development and production</li>
                  <li>• Rotate API keys regularly</li>
                  <li>• Monitor API usage and set up alerts</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
            <p className="text-xl text-gray-400">Select a topic from the sidebar to get started.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <div 
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => navigate('/')}
              >
                <div className="text-2xl font-bold text-white">#</div>
                <span className="text-xl font-bold text-white">IPVerse</span>
              </div>
              
              {/* Tabs */}
              <div className="hidden md:flex space-x-8">
                <button className="text-white border-b-2 border-white pb-4 text-sm font-medium">
                  Documentation
                </button>
                <button className="text-gray-400 hover:text-white pb-4 text-sm font-medium transition-colors">
                  API Reference
                </button>
              </div>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="pl-10 pr-16 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 text-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <kbd className="px-2 py-1 text-xs text-gray-400 bg-gray-700 rounded border border-gray-600">Ctrl K</kbd>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white"
                onClick={() => window.open('https://github.com/your-team/ipverse', '_blank')}
              >
                <Github className="h-4 w-4 mr-1" />
                GitHub
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white"
              >
                Support
              </Button>
              <Button 
                className="bg-white text-black hover:bg-gray-100"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard →
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-black border-r border-gray-800 min-h-screen sticky top-16 overflow-y-auto">
          <div className="p-6">
            <nav className="space-y-2">
              {sidebarSections.map((section) => (
                <div key={section.id}>
                  {section.type === 'single' ? (
                    <button
                      onClick={() => setSelectedSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedSection === section.id
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <section.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="text-sm font-medium">{section.title}</span>
                        {expandedSections.includes(section.id) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      
                      {expandedSections.includes(section.id) && section.items && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-1 space-y-1"
                        >
                          {section.items.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => setSelectedSection(item.id)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                selectedSection === item.id
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                              }`}
                            >
                              {item.title}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-8">
            <motion.div
              key={selectedSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};