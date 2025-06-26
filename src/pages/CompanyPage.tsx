import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart,
  Linkedin,
  Twitter,
  Github,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  Trophy,
  Code,
  Rocket,
  ExternalLink
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const CompanyPage: React.FC = () => {
  const team = [
    {
      name: 'Sirius',
      role: 'CEO & Founder',
      bio: 'Visionary leader and blockchain pioneer. Founded IPVerse to democratize IP protection for creators worldwide.',
      avatar: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2', // Star image
      social: {
        linkedin: 'https://www.linkedin.com/in/mohamed-ashwak-m-b8835a262/',
        twitter: '#',
        github: 'https://github.com/Sirius-ashwak'
      }
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Creator First',
      description: 'Every decision we make prioritizes the needs and rights of content creators.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: Globe,
      title: 'Open & Transparent',
      description: 'We believe in open-source development and transparent business practices.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and blockchain technology.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'We foster a supportive community where creators can thrive and collaborate.',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20'
    }
  ];

  const buildathonMilestones = [
    {
      date: '20 May 2025',
      title: 'Buildathon Begins',
      description: 'Started development for the Surreal World Assets Buildathon by Story Protocol.'
    },
    {
      date: 'Week 1',
      title: 'Core Platform',
      description: 'Built the foundational IP management platform with React and TypeScript.'
    },
    {
      date: 'Week 2',
      title: 'AI Integration',
      description: 'Integrated AI agents for licensing, negotiation, and infringement detection.'
    },
    {
      date: 'Week 3',
      title: 'Partner APIs',
      description: 'Connected 10+ partner APIs including Story Protocol, Crossmint, and Alchemy.'
    },
    {
      date: 'Week 4',
      title: 'Advanced Features',
      description: 'Added analytics, marketplace, and comprehensive documentation.'
    },
    {
      date: 'Week 5',
      title: 'Polish & Deploy',
      description: 'Final optimizations, testing, and deployment preparation.'
    },
    {
      date: '26 June 2025',
      title: 'Submission',
      description: 'Project submission for the Surreal World Assets Buildathon.'
    }
  ];

  const buildathonStats = [
    { label: 'Development Time', value: '5 Weeks', icon: Calendar },
    { label: 'Partner Integrations', value: '10+', icon: Globe },
    { label: 'Prize Pool', value: '$55K+', icon: Trophy },
    { label: 'Lines of Code', value: '15K+', icon: Code }
  ];

  const partners = [
    { name: 'Story Protocol', role: 'Main Sponsor', description: 'World\'s IP Blockchain' },
    { name: 'Crossmint', role: 'NFT Partner', description: 'Walletless NFT Minting' },
    { name: 'Alchemy', role: 'Infrastructure', description: 'Web3 Development Platform' },
    { name: 'thirdweb', role: 'Smart Contracts', description: 'Web3 Development Tools' },
    { name: 'Gelato', role: 'Automation', description: 'Web3 Automation Platform' },
    { name: 'Fleek', role: 'Hosting', description: 'Decentralized Web Services' }
  ];

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Buildathon Badge */}
            <div className="flex justify-center mb-6">
              <Badge variant="warning" className="px-6 py-3 text-lg">
                <Trophy className="h-5 w-5 mr-2" />
                Surreal World Assets Buildathon Project
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Solving real-world problems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                real-world assets
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
              IPVerse is our submission for the <strong>Surreal World Assets Buildathon</strong> by Story Protocol. 
              We're building on the World\'s IP Blockchain to democratize intellectual property protection through 
              AI and Web3 technology.
            </p>
            
            {/* Buildathon Info */}
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2" 
                  alt="Story Protocol" 
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">Story Protocol Buildathon</h3>
                  <p className="text-purple-300 text-sm">20 May - 26 June, 2025</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">$55K+</div>
                  <div className="text-sm text-gray-400">Prize Pool</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-gray-400">Partner APIs</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="bg-purple-600 text-white hover:bg-purple-700 border-0"
                onClick={() => window.open('https://github.com/Sirius-ashwak/Ipverse', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                View Source Code
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500"
                onClick={() => window.open('https://story.foundation/', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Story Protocol
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Buildathon Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {buildathonStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-800 border-gray-700 h-full">
              <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-6">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Project Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To demonstrate how AI + Web3 can solve real-world IP management problems. IPVerse showcases 
                the power of Story Protocol's IP blockchain combined with intelligent automation to make 
                IP protection accessible to all creators.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-800 border-gray-700 h-full">
              <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-6">
                <Rocket className="h-8 w-8 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Buildathon Goals</h2>
              <p className="text-gray-300 leading-relaxed">
                Create a production-ready platform that integrates 10+ partner APIs, deploys intelligent 
                AI agents, and provides a seamless user experience for IP management on the blockchain.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Technical Innovation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Technical Innovation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-800 border-gray-700 text-center h-full">
                  <div className={`inline-flex p-3 rounded-lg ${value.bgColor} mb-4`}>
                    <value.icon className={`h-6 w-6 ${value.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Development Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-600"></div>
              
              <div className="space-y-8">
                {buildathonMilestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start"
                  >
                    <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                          <Badge variant="secondary">{milestone.date}</Badge>
                        </div>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Project Team</h2>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-sm"
            >
              <Card className="p-6 bg-gray-800 border-gray-700 text-center">
                <img
                  src={team[0].avatar}
                  alt={team[0].name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-white mb-1">{team[0].name}</h3>
                <p className="text-purple-400 text-sm mb-3">{team[0].role}</p>
                <p className="text-gray-400 text-sm mb-4">{team[0].bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-2"
                    onClick={() => window.open(team[0].social.linkedin, '_blank')}
                  >
                    <Linkedin className="h-4 w-4 text-gray-400 hover:text-purple-400" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Twitter className="h-4 w-4 text-gray-400 hover:text-purple-400" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-2"
                    onClick={() => window.open(team[0].social.github, '_blank')}
                  >
                    <Github className="h-4 w-4 text-gray-400 hover:text-purple-400" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Partner Integrations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Partner Integrations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                    <Badge variant="primary" size="sm">{partner.role}</Badge>
                  </div>
                  <p className="text-gray-400 text-sm">{partner.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
            <div className="flex justify-center mb-6">
              <Trophy className="h-16 w-16 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Built for the Surreal World Assets Buildathon
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join Story Protocol and their partners to build on the World's IP Blockchain with over $55k in prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-purple-600 text-white hover:bg-purple-700 border-0"
                onClick={() => window.open('https://github.com/Sirius-ashwak/Ipverse', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                View Project Code
              </Button>
              <Button 
                variant="outline"
                className="text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500"
                onClick={() => window.open('https://story.foundation/', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Learn About Story Protocol
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};