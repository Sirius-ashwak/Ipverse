import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Shield,
  Calendar,
  Download,
  Eye,
  Activity
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export const AnalyticsPage: React.FC = () => {
  // Mock data for charts
  const revenueData = [
    { month: 'Jan', revenue: 1200, licenses: 8 },
    { month: 'Feb', revenue: 1800, licenses: 12 },
    { month: 'Mar', revenue: 2400, licenses: 16 },
    { month: 'Apr', revenue: 2100, licenses: 14 },
    { month: 'May', revenue: 3200, licenses: 22 },
    { month: 'Jun', revenue: 2800, licenses: 19 },
  ];

  const assetTypeData = [
    { name: 'Images', value: 35, color: '#3B82F6' },
    { name: 'Audio', value: 25, color: '#10B981' },
    { name: 'Datasets', value: 20, color: '#F59E0B' },
    { name: 'Code', value: 15, color: '#EF4444' },
    { name: 'Text', value: 5, color: '#8B5CF6' },
  ];

  const performanceData = [
    { asset: 'Digital Art Collection', views: 1250, licenses: 8, revenue: 850 },
    { asset: 'ML Dataset v2', views: 980, licenses: 12, revenue: 1200 },
    { asset: 'Ambient Music Pack', views: 750, licenses: 6, revenue: 450 },
    { asset: 'Smart Contract Library', views: 650, licenses: 4, revenue: 320 },
    { asset: 'Photography Bundle', views: 520, licenses: 3, revenue: 180 },
  ];

  const stats = [
    {
      title: 'Total Revenue',
      value: '$15,750',
      change: '+23.5%',
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
    },
    {
      title: 'Active Licenses',
      value: '89',
      change: '+12.3%',
      icon: Shield,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
    },
    {
      title: 'Total Views',
      value: '24.5K',
      change: '+18.7%',
      icon: Eye,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
    },
    {
      title: 'New Licensees',
      value: '156',
      change: '+31.2%',
      icon: Users,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
    },
  ];

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Analytics Dashboard
              </h1>
              <p className="text-gray-400">
                Track your IP portfolio performance and revenue insights
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Last 30 Days
              </Button>
            </div>
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

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Revenue & Licenses
                </h2>
                <Badge variant="success">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +23.5%
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis yAxisId="left" stroke="#9CA3AF" />
                  <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }} 
                  />
                  <Legend />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.6}
                    name="Revenue ($)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="licenses"
                    stroke="#10B981"
                    strokeWidth={3}
                    name="Licenses"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Asset Type Distribution */}
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">
                Asset Distribution
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={assetTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {assetTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {assetTypeData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-gray-400">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-white">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Performance Table */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">
              Top Performing Assets
            </h2>
            <Button variant="outline" size="sm" className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white">
              View All Assets
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-white">
                    Asset
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-white">
                    Views
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-white">
                    Licenses
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-white">
                    Revenue
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-white">
                    Performance
                  </th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((asset, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b border-gray-800 hover:bg-gray-800/50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="bg-blue-500/20 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-xs font-medium mr-3">
                          {index + 1}
                        </div>
                        <span className="font-medium text-white">
                          {asset.asset}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-400">
                      {asset.views.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-gray-400">
                      {asset.licenses}
                    </td>
                    <td className="py-4 px-4 text-gray-400">
                      ${asset.revenue}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${Math.min((asset.revenue / 1200) * 100, 100)}%` }}
                          />
                        </div>
                        <TrendingUp className="h-4 w-4 text-green-400" />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};