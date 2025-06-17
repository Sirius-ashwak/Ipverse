import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Activity, 
  Clock, 
  Zap,
  MessageSquare
} from 'lucide-react';
import { AIAgent } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface AIAgentCardProps {
  agent: AIAgent;
  onInteract?: () => void;
}

export const AIAgentCard: React.FC<AIAgentCardProps> = ({ agent, onInteract }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'busy': return 'warning';
      case 'offline': return 'error';
      default: return 'primary';
    }
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      negotiator: '🤝',
      detector: '🔍',
      analyzer: '📊',
      assistant: '💡',
    };
    return icons[type as keyof typeof icons] || '🤖';
  };

  return (
    <Card hover className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-full" />
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {agent.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {getTypeIcon(agent.type)} {agent.type.charAt(0).toUpperCase() + agent.type.slice(1)}
              </p>
            </div>
          </div>
          
          <Badge variant={getStatusColor(agent.status) as any}>
            <Activity className="h-3 w-3 mr-1" />
            {agent.status}
          </Badge>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Capabilities
          </h4>
          <div className="space-y-1">
            {agent.capabilities.slice(0, 3).map((capability, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Zap className="h-3 w-3 mr-2 text-primary-500" />
                {capability}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            Active {Math.floor((Date.now() - agent.lastActive.getTime()) / (1000 * 60))}m ago
          </div>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={onInteract}
          className="w-full"
          disabled={agent.status === 'offline'}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          {agent.status === 'busy' ? 'Queue Interaction' : 'Start Chat'}
        </Button>
      </div>
    </Card>
  );
};