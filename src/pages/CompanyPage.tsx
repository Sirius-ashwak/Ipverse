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
  Rocket
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const CompanyPage: React.FC = () => {
  const team = [
    {
      name: 'Sirius',
      role: 'CEO & Founder',
      bio: 'Visionary leader and blockchain pioneer. Leading the IPVerse project for the Surreal World Assets Buildathon.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Team Pixels',
      role: 'Development Team',
      bio: 'Passionate builders creating the future of IP management for the Story Protocol ecosystem.',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  const buildathonInfo = {
    name: 'Surreal World Assets Buildathon',
    organizer: 'Encode',
    partner: 'Story Protocol',
    duration: '20 May - 26 June, 2025',
    prizes: '$55k+',
    description: 'Solving real world problems with real-world assets. Join Story and their partners to build on the World\'s IP Blockchain.'
  };

  const values = [
    {
      icon: Shield,
      title: 'IP First',
      description: 'Every decision prioritizes intellectual property protection and creator rights.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: Code,
      title: 'Innovation',
      description: 'Pushing boundaries with AI agents and blockchain technology for IP management.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making IP protection accessible to creators worldwide through Web3 technology.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building for the Story Protocol ecosystem and creator community.',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20'
    }
  ];

  const milestones = [
    {
      date: 'May 20, 2025',
      title: 'Buildathon Begins',
      description: 'Started development for the Surreal World Assets Buildathon by Encode.'
    },
    {
      date: 'Week 1',
      title: 'Concept Development',
      description: 'Designed IPVerse as an AI + Web3 IP management platform for Story Protocol.'
    },
    {
      date: 'Week 2-3',
      title: 'Core Development',
      description: 'Built AI agents, blockchain integration, and partner API connections.'
    },
    {
      date: 'Week 4-5',
      title: 'Integration & Testing',
      description: 'Integrated 10+ partner APIs and implemented comprehensive testing.'
    },
    {
      date: 'June 26, 2025',
      title: 'Buildathon Submission',
      description: 'Submitted IPVerse for the AI Agents track with full functionality.'
    }
  ];

  const partnerIntegrations = [
    'Story Protocol', 'Crossmint', 'Alchemy', 'thirdweb', 'Gelato',
    'Fleek', 'OpenAI', 'Yakoa', 'Zapper', 'deBridge'
  ];

  const stats = [
    { label: 'Partner APIs', value: '10+', icon: Globe },
    { label: 'AI Agents', value: '4', icon: Zap },
    { label: 'Buildathon Track', value: 'AI Agents', icon: Trophy },
    { label: 'Development Time', value: '5 Weeks', icon: Calendar }
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
              <Badge variant="warning" className="px-6 py-2 text-lg">
                <Trophy className="h-5 w-5 mr-2" />
                Surreal World Assets Buildathon
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Building the future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                IP protection
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              IPVerse is our submission for the <strong>Surreal World Assets Buildathon</strong> by Encode, 
              building on Story Protocol's IP blockchain with AI agents and 10+ partner integrations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700 border-0"
                onClick={() => window.open('https://www.encode.club/surreal-world-assets', '_blank')}
              >
                <Rocket className="h-4 w-4 mr-2" />
                View Buildathon
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500"
                onClick={() => window.open('https://github.com/your-team/ipverse', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                View Source Code
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Buildathon Info */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {buildathonInfo.name}
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                {buildathonInfo.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">Organizer</div>
                <div className="text-white">{buildathonInfo.organizer}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">Partner</div>
                <div className="text-white">{buildathonInfo.partner}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">Duration</div>
                <div className="text-white">{buildathonInfo.duration}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Prize Pool</div>
                <div className="text-white">{buildathonInfo.prizes}</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
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
                To demonstrate the power of AI agents in IP management by building a comprehensive platform 
                that integrates with Story Protocol and 10+ partner APIs, showcasing the future of 
                decentralized intellectual property protection.
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
                <Award className="h-8 w-8 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Buildathon Goals</h2>
              <p className="text-gray-300 leading-relaxed">
                Create a production-ready AI + Web3 platform that solves real-world IP management problems, 
                demonstrates innovative use of AI agents, and showcases seamless integration with the 
                Story Protocol ecosystem.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Project Principles</h2>
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
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start"
                  >
                    <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center relative z-10">
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
          <h2 className="text-3xl font-bold text-white text-center mb-8">Development Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-800 border-gray-700 text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4 text-gray-400 hover:text-blue-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Twitter className="h-4 w-4 text-gray-400 hover:text-blue-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Github className="h-4 w-4 text-gray-400 hover:text-blue-400" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Integrations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Partner Integrations</h2>
          <Card className="p-8 bg-gray-800 border-gray-700">
            <p className="text-center text-gray-300 mb-6">
              IPVerse integrates with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">10+ leading APIs</span> to demonstrate comprehensive IP management capabilities:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {partnerIntegrations.map((partner, index) => (
                <div key={index} className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-sm font-medium text-white">{partner}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              Built for the AI Agents Track
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              IPVerse showcases the power of AI agents in IP management, built specifically for the 
              Surreal World Assets Buildathon by Encode and Story Protocol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700 border-0"
                onClick={() => window.open('https://www.encode.club/surreal-world-assets', '_blank')}
              >
                <Trophy className="h-4 w-4 mr-2" />
                View Buildathon
              </Button>
              <Button 
                variant="outline"
                className="text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500"
                onClick={() => window.open('https://github.com/your-team/ipverse', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                Source Code
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};