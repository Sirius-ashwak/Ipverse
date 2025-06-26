import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Crown, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useNavigate } from 'react-router-dom';

export const PricingPage: React.FC = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for individual creators getting started',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      features: [
        'Up to 5 IP assets',
        'Basic AI analysis',
        'Community support',
        'Standard licensing templates',
        'Basic analytics',
        'Email notifications'
      ],
      limitations: [
        '100 API calls/month',
        'Basic infringement detection',
        'Standard response time'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For serious creators and small teams',
      icon: Star,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      features: [
        'Unlimited IP assets',
        'Advanced AI agents',
        'Priority support',
        'Custom licensing terms',
        'Advanced analytics',
        'Real-time notifications',
        'API access',
        'Cross-chain support',
        'Automated royalty distribution'
      ],
      limitations: [
        '10,000 API calls/month',
        'Advanced infringement detection',
        'Priority response time'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations and enterprises',
      icon: Crown,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      features: [
        'Everything in Pro',
        'Dedicated AI agents',
        'White-label solution',
        'Custom integrations',
        'SLA guarantees',
        'Dedicated support',
        'On-premise deployment',
        'Custom contracts',
        'Bulk operations',
        'Advanced security'
      ],
      limitations: [
        'Unlimited API calls',
        'Enterprise-grade security',
        'Dedicated support team'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const features = [
    {
      category: 'IP Management',
      items: [
        { name: 'Asset Registration', starter: true, pro: true, enterprise: true },
        { name: 'Blockchain Verification', starter: true, pro: true, enterprise: true },
        { name: 'Multi-format Support', starter: true, pro: true, enterprise: true },
        { name: 'Bulk Operations', starter: false, pro: false, enterprise: true },
        { name: 'Custom Metadata', starter: false, pro: true, enterprise: true }
      ]
    },
    {
      category: 'AI Agents',
      items: [
        { name: 'Basic AI Analysis', starter: true, pro: true, enterprise: true },
        { name: 'License Negotiation', starter: false, pro: true, enterprise: true },
        { name: 'Infringement Detection', starter: 'Basic', pro: 'Advanced', enterprise: 'Enterprise' },
        { name: 'Market Analysis', starter: false, pro: true, enterprise: true },
        { name: 'Custom AI Models', starter: false, pro: false, enterprise: true }
      ]
    },
    {
      category: 'Integrations',
      items: [
        { name: 'Partner APIs', starter: '3', pro: '10+', enterprise: 'All + Custom' },
        { name: 'Webhook Support', starter: false, pro: true, enterprise: true },
        { name: 'API Access', starter: false, pro: true, enterprise: true },
        { name: 'Custom Integrations', starter: false, pro: false, enterprise: true },
        { name: 'White-label', starter: false, pro: false, enterprise: true }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What happens to my IP assets if I downgrade?',
      answer: 'Your IP assets remain registered and protected on the blockchain. You\'ll retain access to all previously registered assets, but new registrations will be limited based on your plan.'
    },
    {
      question: 'Can I upgrade or downgrade at any time?',
      answer: 'Yes! You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team for a full refund.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and cryptocurrency payments. Enterprise customers can also pay via wire transfer or invoice.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for Starter and Pro plans. Enterprise plans may include a one-time setup fee depending on customization requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your IP management needs. Start free and scale as you grow.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Badge variant="success" className="px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                30-day money-back guarantee
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Trusted by 12K+ creators
              </Badge>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="warning" className="px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`p-8 h-full ${plan.popular ? 'border-yellow-500 bg-yellow-500/5' : 'bg-gray-800 border-gray-700'}`}>
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-lg ${plan.bgColor} mb-4`}>
                    <plan.icon className={`h-8 w-8 ${plan.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">{plan.period}</span>}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-white">Features included:</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700'} text-white border-0`}
                  onClick={() => plan.name === 'Enterprise' ? window.open('mailto:sales@ipverse.app') : navigate('/login')}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Compare all features
          </h2>
          
          <Card className="p-8 bg-gray-800 border-gray-700 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-4 px-4 font-medium text-white">Features</th>
                  <th className="text-center py-4 px-4 font-medium text-white">Starter</th>
                  <th className="text-center py-4 px-4 font-medium text-white">Pro</th>
                  <th className="text-center py-4 px-4 font-medium text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIdx) => (
                  <React.Fragment key={categoryIdx}>
                    <tr>
                      <td colSpan={4} className="py-4 px-4">
                        <h4 className="font-semibold text-blue-400">{category.category}</h4>
                      </td>
                    </tr>
                    {category.items.map((item, itemIdx) => (
                      <tr key={itemIdx} className="border-b border-gray-700">
                        <td className="py-3 px-4 text-gray-300">{item.name}</td>
                        <td className="py-3 px-4 text-center">
                          {typeof item.starter === 'boolean' ? (
                            item.starter ? (
                              <Check className="h-4 w-4 text-green-400 mx-auto" />
                            ) : (
                              <span className="text-gray-500">—</span>
                            )
                          ) : (
                            <span className="text-gray-300 text-sm">{item.starter}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof item.pro === 'boolean' ? (
                            item.pro ? (
                              <Check className="h-4 w-4 text-green-400 mx-auto" />
                            ) : (
                              <span className="text-gray-500">—</span>
                            )
                          ) : (
                            <span className="text-gray-300 text-sm">{item.pro}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof item.enterprise === 'boolean' ? (
                            item.enterprise ? (
                              <Check className="h-4 w-4 text-green-400 mx-auto" />
                            ) : (
                              <span className="text-gray-500">—</span>
                            )
                          ) : (
                            <span className="text-gray-300 text-sm">{item.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently asked questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-800 border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to protect your IP?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of creators who trust IPVerse with their intellectual property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700 border-0"
                onClick={() => navigate('/login')}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-500"
                onClick={() => window.open('mailto:sales@ipverse.app')}
              >
                Contact Sales
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};