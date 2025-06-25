import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  TrendingUp, 
  Shield, 
  DollarSign,
  Activity,
  Users,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useAuth } from '../contexts/AuthContext';
import { useIPAssets } from '../hooks/useIPAssets';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { assets, isLoading } = useIPAssets();

  const stats = [
    {
      title: 'Total Assets',
      value: assets.length.toString(),
      icon: Shield,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      change: '+12%',
    },
    {
      title: 'Active Licenses',
      value: '24',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      change: '+8%',
    },
    {
      title: 'Monthly Revenue',
      value: '$3,240',
      icon: DollarSign,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      change: '+23%',
    },
    {
      title: 'AI Interactions',
      value: '156',
      icon: Activity,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      change: '+45%',
    },
  ];

  const recentActivity = [
    {
      id: '1',
      type: 'license',
      title: 'New license agreement signed',
      description: 'Digital Art Collection licensed to AdTech Corp',
      timestamp: '2 hours ago',
      amount: '$850',
    },
    {
      id: '2',
      type: 'registration',
      title: 'IP asset registered',
      description: 'Ambient Music Track successfully registered',
      timestamp: '5 hours ago',
    },
    {
      id: '3',
      type: 'detection',
      title: 'Infringement detected',
      description: 'Potential unauthorized use of Dataset ML-2024',
      timestamp: '1 day ago',
      urgent: true,
    },
    {
      id: '4',
      type: 'royalty',
      title: 'Royalty payment received',
      description: 'Monthly royalties from 3 active licenses',
      timestamp: '2 days ago',
      amount: '$425',
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'license': return FileText;
      case 'registration': return Shield;
      case 'detection': return AlertTriangle;
      case 'royalty': return DollarSign;
      default: return Activity;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Welcome back, {user?.name?.split(' ')[0]}!
              </h1>
              <p className="text-gray-400 mt-1">
                Here's what's happening with your IP portfolio today.
              </p>
            </div>
            <Link to="/register">
              <Button className="hidden sm:flex bg-white text-black hover:bg-gray-100">
                <PlusCircle className="h-5 w-5 mr-2" />
                Register New IP
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-green-400 mt-1">
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Recent Activity
                </h2>
                <Link to="/analytics">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    View All
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const IconComponent = getActivityIcon(activity.type);
                  return (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-lg"
                    >
                      <div className={`p-2 rounded-full ${
                        activity.urgent 
                          ? 'bg-red-500/20' 
                          : 'bg-blue-500/20'
                      }`}>
                        <IconComponent className={`h-4 w-4 ${
                          activity.urgent 
                            ? 'text-red-400' 
                            : 'text-blue-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-white">
                            {activity.title}
                          </p>
                          {activity.amount && (
                            <Badge variant="success">
                              {activity.amount}
                            </Badge>
                          )}
                          {activity.urgent && (
                            <Badge variant="error">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-400">
                          {activity.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.timestamp}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <Link to="/register">
                  <Button variant="outline" className="w-full justify-start text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Register New IP
                  </Button>
                </Link>
                <Link to="/agents">
                  <Button variant="outline" className="w-full justify-start text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white">
                    <Activity className="h-4 w-4 mr-2" />
                    Deploy AI Agent
                  </Button>
                </Link>
                <Link to="/discover">
                  <Button variant="outline" className="w-full justify-start text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white">
                    <Users className="h-4 w-4 mr-2" />
                    Browse Marketplace
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button variant="outline" className="w-full justify-start text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Top Assets */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Top Performing Assets
              </h2>
              <div className="space-y-3">
                {assets.slice(0, 3).map((asset, index) => (
                  <div key={asset.id} className="flex items-center space-x-3">
                    <div className="bg-blue-500/20 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">
                        {asset.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        {asset.royaltyPercentage}% royalty
                      </p>
                    </div>
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};