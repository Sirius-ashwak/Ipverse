import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, MessageSquare, Brain, Settings, Activity } from 'lucide-react';
import { AIAgentCard } from '../components/ai/AIAgentCard';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { AIAgent } from '../types';

export const AIAgentsPage: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<AIAgent | null>(null);
  const [chatHistory, setChatHistory] = useState<Array<{ role: 'user' | 'agent'; message: string; timestamp: Date }>>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Mock AI agents data
  const agents: AIAgent[] = [
    {
      id: '1',
      name: 'LicenseBot Pro',
      type: 'negotiator',
      status: 'active',
      capabilities: [
        'License term negotiation',
        'Royalty optimization',
        'Contract generation',
        'Multi-party negotiations',
      ],
      lastActive: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    },
    {
      id: '2',
      name: 'InfringementGuard',
      type: 'detector',
      status: 'busy',
      capabilities: [
        'Real-time infringement detection',
        'Similarity analysis',
        'DMCA notice generation',
        'Evidence collection',
      ],
      lastActive: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    },
    {
      id: '3',
      name: 'MarketAnalyzer AI',
      type: 'analyzer',
      status: 'active',
      capabilities: [
        'Market trend analysis',
        'Pricing optimization',
        'Competitor research',
        'Revenue forecasting',
      ],
      lastActive: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    },
    {
      id: '4',
      name: 'CreatorAssist',
      type: 'assistant',
      status: 'active',
      capabilities: [
        'IP registration guidance',
        'Metadata generation',
        'Tag optimization',
        'Best practice recommendations',
      ],
      lastActive: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
    },
  ];

  const handleSendMessage = async () => {
    if (!currentMessage.trim() || !selectedAgent) return;

    const userMessage = {
      role: 'user' as const,
      message: currentMessage,
      timestamp: new Date(),
    };

    setChatHistory(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        negotiator: [
          "I've analyzed the licensing terms. I recommend adjusting the royalty rate to 12% for optimal market positioning.",
          "Based on current market conditions, a 3-year license term with renewal options would be most favorable.",
          "I can draft a comprehensive license agreement that includes attribution requirements and usage restrictions.",
        ],
        detector: [
          "Scanning complete. No unauthorized use detected in the past 24 hours across 500M+ indexed content.",
          "I found 3 similar assets but they fall within acceptable similarity thresholds (below 15%).",
          "Setting up real-time monitoring for your asset. You'll be notified of any potential infringement.",
        ],
        analyzer: [
          "Market analysis shows strong demand for your asset type. Similar assets are trending +35% this quarter.",
          "Recommended pricing strategy: Start at $200-500 for basic licenses, $1000+ for commercial use.",
          "Your asset tags align well with current search trends. Consider adding 'AI-generated' for better visibility.",
        ],
        assistant: [
          "I can help you optimize your IP registration. Would you like me to generate improved metadata?",
          "Your asset description could be enhanced. I suggest adding more technical details and use cases.",
          "Based on your portfolio, I recommend exploring dataset licensing opportunities in the AI/ML space.",
        ],
      };

      const agentResponses = responses[selectedAgent.type] || responses.assistant;
      const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)];

      const agentMessage = {
        role: 'agent' as const,
        message: randomResponse,
        timestamp: new Date(),
      };

      setChatHistory(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                AI Agents
              </h1>
              <p className="text-gray-400">
                Deploy intelligent agents to automate IP management tasks
              </p>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100">
              <Plus className="h-5 w-5 mr-2" />
              Deploy New Agent
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Agents List */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <AIAgentCard
                    agent={agent}
                    onInteract={() => setSelectedAgent(agent)}
                  />
                </motion.div>
              ))}
            </div>

            {/* Agent Performance */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Agent Performance
              </h2>
              <div className="space-y-4">
                {agents.map((agent) => (
                  <div key={agent.id} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">
                          {agent.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {agent.type.charAt(0).toUpperCase() + agent.type.slice(1)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-white">
                          {Math.floor(Math.random() * 50) + 50} tasks
                        </p>
                        <p className="text-xs text-gray-400">
                          This week
                        </p>
                      </div>
                      <Badge variant={agent.status === 'active' ? 'success' : 'warning'}>
                        <Activity className="h-3 w-3 mr-1" />
                        {agent.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-1">
            <Card className="p-6 h-[600px] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">
                  Agent Chat
                </h2>
                {selectedAgent && (
                  <Badge variant="success">
                    <Activity className="h-3 w-3 mr-1" />
                    {selectedAgent.name}
                  </Badge>
                )}
              </div>

              {selectedAgent ? (
                <>
                  {/* Chat History */}
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    {chatHistory.length === 0 ? (
                      <div className="text-center py-8">
                        <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400">
                          Start a conversation with {selectedAgent.name}
                        </p>
                      </div>
                    ) : (
                      chatHistory.map((chat, index) => (
                        <div
                          key={index}
                          className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs px-4 py-2 rounded-lg ${
                              chat.role === 'user'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-700 text-white'
                            }`}
                          >
                            <p className="text-sm">{chat.message}</p>
                            <p className="text-xs opacity-75 mt-1">
                              {chat.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-700 px-4 py-2 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white text-sm placeholder-gray-400"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!currentMessage.trim() || isTyping}
                      size="sm"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">
                      Select an agent to start chatting
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};