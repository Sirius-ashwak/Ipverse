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
  Zap
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const CompanyPage: React.FC = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-founder',
      bio: 'Former blockchain engineer at Ethereum Foundation. Passionate about democratizing IP protection.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO & Co-founder',
      bio: 'AI researcher with 10+ years in machine learning. Led AI initiatives at Google and OpenAI.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Product',
      bio: 'Product leader with experience at Stripe and Coinbase. Expert in Web3 user experience.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Zhang',
      role: 'Head of Partnerships',
      bio: 'Business development expert who built strategic partnerships at Alchemy and thirdweb.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
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

  const milestones = [
    {
      date: 'Q1 2024',
      title: 'Company Founded',
      description: 'IPVerse was founded with the mission to democratize IP protection.'
    },
    {
      date: 'Q2 2024',
      title: 'Seed Funding',
      description: 'Raised $5M seed round led by Andreessen Horowitz.'
    },
    {
      date: 'Q3 2024',
      title: 'Partner Network',
      description: 'Established partnerships with 10+ leading Web3 and AI companies.'
    },
    {
      date: 'Q4 2024',
      title: 'Platform Launch',
      description: 'Launched IPVerse platform with AI agents and blockchain integration.'
    },
    {
      date: 'Q1 2025',
      title: 'Global Expansion',
      description: 'Expanded to serve creators worldwide with multi-language support.'
    }
  ];

  const stats = [
    { label: 'Creators Protected', value: '12K+', icon: Users },
    { label: 'IP Assets Registered', value: '50K+', icon: Shield },
    { label: 'Partner Integrations', value: '10+', icon: Globe },
    { label: 'Countries Served', value: '25+', icon: MapPin }
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Building the future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                IP protection
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              We're on a mission to democratize intellectual property protection through AI and blockchain technology, 
              empowering creators worldwide to protect and monetize their work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 border-0">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
              <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500">
                <Users className="h-4 w-4 mr-2" />
                Join Our Team
              </Button>
            </div>
          </motion.div>
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
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To democratize intellectual property protection by making it accessible, affordable, and automated for creators worldwide. 
                We believe every creator deserves to protect their work without barriers or complexity.
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
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                A world where intellectual property is seamlessly protected, fairly monetized, and efficiently managed through 
                intelligent automation, enabling creators to focus on what they do best—creating.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Values</h2>
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

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Journey</h2>
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
          <h2 className="text-3xl font-bold text-white text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Investors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Backed by Leading Investors</h2>
          <Card className="p-8 bg-gray-800 border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                'Andreessen Horowitz',
                'Coinbase Ventures',
                'Polygon Ventures',
                'OpenAI Fund'
              ].map((investor, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-700 rounded-lg p-6 mb-2">
                    <div className="text-gray-400 font-semibold">{investor}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join us in building the future
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We're always looking for talented individuals who share our passion for empowering creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 border-0">
                <Users className="h-4 w-4 mr-2" />
                View Open Positions
              </Button>
              <Button 
                variant="outline"
                className="text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500"
                onClick={() => window.open('mailto:hello@ipverse.app')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};