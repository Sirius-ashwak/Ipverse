import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Github,
  Play,
  Code,
  Database,
  FileText,
  Music,
  Image as ImageIcon,
  Video,
  Layers,
  Network,
  Cpu,
  ExternalLink,
  Search
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useAuth } from '../contexts/AuthContext';

export const HomePage: React.FC = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const features = [
    {
      icon: Shield,
      title: 'IP Protection',
      description: 'Register and protect your intellectual property with blockchain-based verification.',
      color: 'text-blue-400',
    },
    {
      icon: Brain,
      title: 'AI Agents',
      description: 'Intelligent agents handle licensing, negotiation, and infringement detection.',
      color: 'text-purple-400',
    },
    {
      icon: Zap,
      title: 'Smart Licensing',
      description: 'Automated licensing with smart contracts and cross-chain compatibility.',
      color: 'text-yellow-400',
    },
    {
      icon: Globe,
      title: 'Global Marketplace',
      description: 'Discover and license IP assets from creators worldwide.',
      color: 'text-green-400',
    },
  ];

  const stats = [
    { label: 'Partner Integrations', value: '113+', icon: Network, highlight: true },
    { label: 'IP Assets Registered', value: '50K+', icon: Shield },
    { label: 'Active Creators', value: '12K+', icon: Users },
    { label: 'AI Negotiations', value: '25K+', icon: Brain },
  ];

  // Comprehensive integrations list matching the image
  const integrations = [
    // Blockchain & Web3
    { 
      name: 'Story Protocol', 
      description: 'Connect your IP agent', 
      icon: '📚', 
      category: 'Blockchain',
      docsUrl: 'https://docs.story.foundation/',
      features: ['IP Registration', 'Licensing', 'Royalty Management']
    },
    { 
      name: 'Crossmint', 
      description: 'Connect your NFT agent', 
      icon: '🎨', 
      category: 'Blockchain',
      docsUrl: 'https://docs.crossmint.com/',
      features: ['Walletless NFT Minting', 'StoryKit Integration', 'Gasless Transactions']
    },
    { 
      name: 'Alchemy', 
      description: 'Connect your Web3 agent', 
      icon: '⚡', 
      category: 'Blockchain',
      docsUrl: 'https://docs.alchemy.com/',
      features: ['RPC Services', 'Web3 APIs', 'Multi-chain Support']
    },
    { 
      name: 'thirdweb', 
      description: 'Connect your contract agent', 
      icon: '🔗', 
      category: 'Blockchain',
      docsUrl: 'https://portal.thirdweb.com/',
      features: ['Contract Deployment', 'SDK Integration', 'Gas Optimization']
    },
    { 
      name: 'deBridge', 
      description: 'Connect your bridge agent', 
      icon: '🌉', 
      category: 'Blockchain',
      docsUrl: 'https://docs.debridge.finance/',
      features: ['Multi-chain Support', 'Cross-chain Payments', 'Bridge Integration']
    },

    // AI & Analytics
    { 
      name: 'OpenAI', 
      description: 'Connect your AI agent', 
      icon: '🧠', 
      category: 'AI',
      docsUrl: 'https://platform.openai.com/docs',
      features: ['Natural Language Processing', 'AI Agent Intelligence', 'Automated Decision Making']
    },
    { 
      name: 'Anthropic', 
      description: 'Connect your AI agent', 
      icon: '🤖', 
      category: 'AI',
      docsUrl: 'https://docs.anthropic.com/',
      features: ['Claude AI Integration', 'Advanced Reasoning', 'Safety-focused AI']
    },
    { 
      name: 'Zapper', 
      description: 'Connect your portfolio agent', 
      icon: '📊', 
      category: 'Analytics',
      docsUrl: 'https://docs.zapper.fi/',
      features: ['Portfolio Tracking', 'Revenue Analytics', 'Performance Metrics']
    },
    { 
      name: 'AgentQL', 
      description: 'Connect your AI agent', 
      icon: '🔍', 
      category: 'AI',
      docsUrl: '#',
      features: ['Natural Language Queries', 'Data Intelligence', 'Query Optimization']
    },

    // Infrastructure & Hosting
    { 
      name: 'Fleek', 
      description: 'Connect your hosting agent', 
      icon: '☁️', 
      category: 'Infrastructure',
      docsUrl: 'https://docs.fleek.co/',
      features: ['Agent Hosting', 'Persistent State', 'High Availability']
    },
    { 
      name: 'Gelato', 
      description: 'Connect your automation agent', 
      icon: '🤖', 
      category: 'Infrastructure',
      docsUrl: 'https://docs.gelato.network/',
      features: ['Automated Licensing', 'Royalty Payouts', 'Event-driven Actions']
    },
    { 
      name: 'Ahrefs', 
      description: 'Connect your SEO agent', 
      icon: '🔗', 
      category: 'Marketing',
      docsUrl: 'https://ahrefs.com/api',
      features: ['SEO Analysis', 'Keyword Research', 'Backlink Tracking']
    },

    // Communication & CRM
    { 
      name: 'ActiveCampaign', 
      description: 'Connect your marketing agent', 
      icon: '📧', 
      category: 'Communication',
      docsUrl: 'https://developers.activecampaign.com/',
      features: ['Email Automation', 'Customer Experience', 'Marketing Intelligence']
    },
    { 
      name: 'Affinity.co', 
      description: 'Connect your CRM agent', 
      icon: '💼', 
      category: 'CRM',
      docsUrl: 'https://api-docs.affinity.co/',
      features: ['Relationship Intelligence', 'CRM Automation', 'Data Analytics']
    },

    // Productivity & Tools
    { 
      name: 'Airtable', 
      description: 'Connect your database agent', 
      icon: '📋', 
      category: 'Database',
      docsUrl: 'https://airtable.com/developers/web/api/introduction',
      features: ['Database Management', 'Workflow Automation', 'Collaboration Tools']
    },
    { 
      name: 'Yakoa', 
      description: 'Connect your detection agent', 
      icon: '🔍', 
      category: 'Tools',
      docsUrl: '#',
      features: ['Duplicate Detection', 'Originality Verification', 'Infringement Alerts']
    },

    // Additional categories to reach 113
    { name: 'Stripe', description: 'Connect your payment agent', icon: '💳', category: 'Payments', docsUrl: 'https://stripe.com/docs', features: ['Payment Processing', 'Subscription Management', 'Financial Reporting'] },
    { name: 'PayPal', description: 'Connect your payment agent', icon: '💰', category: 'Payments', docsUrl: 'https://developer.paypal.com/', features: ['Global Payments', 'Merchant Services', 'Digital Wallets'] },
    { name: 'Shopify', description: 'Connect your ecommerce agent', icon: '🛒', category: 'ECommerce', docsUrl: 'https://shopify.dev/', features: ['Store Management', 'Product Catalog', 'Order Processing'] },
    { name: 'WooCommerce', description: 'Connect your store agent', icon: '🏪', category: 'ECommerce', docsUrl: 'https://woocommerce.github.io/woocommerce-rest-api-docs/', features: ['WordPress Integration', 'Store Customization', 'Payment Gateways'] },
    { name: 'Magento', description: 'Connect your commerce agent', icon: '🛍️', category: 'ECommerce', docsUrl: 'https://devdocs.magento.com/', features: ['Enterprise Commerce', 'B2B Features', 'Multi-store Management'] },
    { name: 'BigCommerce', description: 'Connect your platform agent', icon: '🏬', category: 'ECommerce', docsUrl: 'https://developer.bigcommerce.com/', features: ['Headless Commerce', 'API-first Platform', 'Omnichannel Selling'] },
    { name: 'Salesforce', description: 'Connect your CRM agent', icon: '☁️', category: 'CRM', docsUrl: 'https://developer.salesforce.com/', features: ['Customer Management', 'Sales Automation', 'Analytics'] },
    { name: 'HubSpot', description: 'Connect your marketing agent', icon: '🎯', category: 'CRM', docsUrl: 'https://developers.hubspot.com/', features: ['Inbound Marketing', 'Sales Pipeline', 'Customer Service'] },
    { name: 'Pipedrive', description: 'Connect your sales agent', icon: '📈', category: 'CRM', docsUrl: 'https://developers.pipedrive.com/', features: ['Sales Pipeline', 'Deal Management', 'Activity Tracking'] },
    { name: 'Zendesk', description: 'Connect your support agent', icon: '🎧', category: 'Communication', docsUrl: 'https://developer.zendesk.com/', features: ['Customer Support', 'Ticket Management', 'Knowledge Base'] },
    { name: 'Intercom', description: 'Connect your chat agent', icon: '💬', category: 'Communication', docsUrl: 'https://developers.intercom.com/', features: ['Live Chat', 'Customer Messaging', 'Help Desk'] },
    { name: 'Slack', description: 'Connect your team agent', icon: '💼', category: 'Communication', docsUrl: 'https://api.slack.com/', features: ['Team Communication', 'Workflow Automation', 'App Integration'] },
    { name: 'Discord', description: 'Connect your community agent', icon: '🎮', category: 'Communication', docsUrl: 'https://discord.com/developers/docs', features: ['Community Building', 'Voice Chat', 'Bot Integration'] },
    { name: 'Telegram', description: 'Connect your messaging agent', icon: '✈️', category: 'Communication', docsUrl: 'https://core.telegram.org/api', features: ['Instant Messaging', 'Bot Platform', 'Channel Broadcasting'] },
    { name: 'WhatsApp', description: 'Connect your messaging agent', icon: '📱', category: 'Communication', docsUrl: 'https://developers.facebook.com/docs/whatsapp', features: ['Business Messaging', 'Customer Support', 'Automated Responses'] },
    { name: 'Twilio', description: 'Connect your communication agent', icon: '📞', category: 'Communication', docsUrl: 'https://www.twilio.com/docs', features: ['SMS/Voice APIs', 'Video Calling', 'Programmable Communications'] },
    { name: 'SendGrid', description: 'Connect your email agent', icon: '📧', category: 'Communication', docsUrl: 'https://docs.sendgrid.com/', features: ['Email Delivery', 'Marketing Campaigns', 'Email Analytics'] },
    { name: 'Mailchimp', description: 'Connect your marketing agent', icon: '🐵', category: 'Marketing', docsUrl: 'https://mailchimp.com/developer/', features: ['Email Marketing', 'Audience Management', 'Marketing Automation'] },
    { name: 'ConvertKit', description: 'Connect your creator agent', icon: '✍️', category: 'Marketing', docsUrl: 'https://developers.convertkit.com/', features: ['Creator Marketing', 'Email Sequences', 'Subscriber Management'] },
    { name: 'Google Analytics', description: 'Connect your analytics agent', icon: '📊', category: 'Analytics', docsUrl: 'https://developers.google.com/analytics', features: ['Web Analytics', 'User Behavior', 'Conversion Tracking'] },
    { name: 'Mixpanel', description: 'Connect your events agent', icon: '📈', category: 'Analytics', docsUrl: 'https://developer.mixpanel.com/', features: ['Event Tracking', 'User Analytics', 'Funnel Analysis'] },
    { name: 'Amplitude', description: 'Connect your product agent', icon: '📊', category: 'Analytics', docsUrl: 'https://developers.amplitude.com/', features: ['Product Analytics', 'User Journey', 'Behavioral Insights'] },
    { name: 'Segment', description: 'Connect your data agent', icon: '🔄', category: 'Analytics', docsUrl: 'https://segment.com/docs/', features: ['Customer Data Platform', 'Data Integration', 'Real-time Streaming'] },
    { name: 'Hotjar', description: 'Connect your UX agent', icon: '🔥', category: 'Analytics', docsUrl: 'https://help.hotjar.com/hc/en-us/sections/115003375308', features: ['Heatmaps', 'Session Recordings', 'User Feedback'] },
    { name: 'FullStory', description: 'Connect your experience agent', icon: '📹', category: 'Analytics', docsUrl: 'https://developer.fullstory.com/', features: ['Digital Experience', 'Session Replay', 'Error Tracking'] },
    { name: 'LogRocket', description: 'Connect your monitoring agent', icon: '🚀', category: 'Analytics', docsUrl: 'https://docs.logrocket.com/', features: ['Session Replay', 'Performance Monitoring', 'Error Tracking'] },
    { name: 'Sentry', description: 'Connect your error agent', icon: '🛡️', category: 'Tools', docsUrl: 'https://docs.sentry.io/', features: ['Error Monitoring', 'Performance Tracking', 'Release Health'] },
    { name: 'DataDog', description: 'Connect your monitoring agent', icon: '🐕', category: 'Tools', docsUrl: 'https://docs.datadoghq.com/', features: ['Infrastructure Monitoring', 'APM', 'Log Management'] },
    { name: 'New Relic', description: 'Connect your observability agent', icon: '👁️', category: 'Tools', docsUrl: 'https://docs.newrelic.com/', features: ['Application Monitoring', 'Infrastructure Insights', 'Digital Intelligence'] },
    { name: 'PagerDuty', description: 'Connect your incident agent', icon: '🚨', category: 'Tools', docsUrl: 'https://developer.pagerduty.com/', features: ['Incident Management', 'On-call Scheduling', 'Alert Routing'] },
    { name: 'Jira', description: 'Connect your project agent', icon: '📋', category: 'Productivity', docsUrl: 'https://developer.atlassian.com/cloud/jira/', features: ['Issue Tracking', 'Project Management', 'Agile Workflows'] },
    { name: 'Asana', description: 'Connect your task agent', icon: '✅', category: 'Productivity', docsUrl: 'https://developers.asana.com/', features: ['Task Management', 'Team Collaboration', 'Project Tracking'] },
    { name: 'Trello', description: 'Connect your board agent', icon: '📌', category: 'Productivity', docsUrl: 'https://developer.atlassian.com/cloud/trello/', features: ['Kanban Boards', 'Card Management', 'Team Organization'] },
    { name: 'Monday.com', description: 'Connect your workflow agent', icon: '📅', category: 'Productivity', docsUrl: 'https://developer.monday.com/', features: ['Work Management', 'Custom Workflows', 'Team Collaboration'] },
    { name: 'ClickUp', description: 'Connect your productivity agent', icon: '⚡', category: 'Productivity', docsUrl: 'https://clickup.com/api', features: ['All-in-one Workspace', 'Task Management', 'Goal Tracking'] },
    { name: 'Notion', description: 'Connect your workspace agent', icon: '📝', category: 'Productivity', docsUrl: 'https://developers.notion.com/', features: ['Knowledge Management', 'Database Creation', 'Team Wikis'] },
    { name: 'Linear', description: 'Connect your issue agent', icon: '📐', category: 'Productivity', docsUrl: 'https://developers.linear.app/', features: ['Issue Tracking', 'Product Development', 'Sprint Planning'] },
    { name: 'GitHub', description: 'Connect your code agent', icon: '🐙', category: 'Software', docsUrl: 'https://docs.github.com/en/rest', features: ['Version Control', 'Code Collaboration', 'CI/CD Integration'] },
    { name: 'GitLab', description: 'Connect your DevOps agent', icon: '🦊', category: 'Software', docsUrl: 'https://docs.gitlab.com/ee/api/', features: ['DevOps Platform', 'CI/CD Pipelines', 'Security Scanning'] },
    { name: 'Bitbucket', description: 'Connect your repository agent', icon: '🪣', category: 'Software', docsUrl: 'https://developer.atlassian.com/cloud/bitbucket/', features: ['Git Repository', 'Code Review', 'Pipeline Automation'] },
    { name: 'Jenkins', description: 'Connect your CI/CD agent', icon: '🔧', category: 'Software', docsUrl: 'https://www.jenkins.io/doc/book/using/remote-access-api/', features: ['Build Automation', 'Continuous Integration', 'Plugin Ecosystem'] },
    { name: 'CircleCI', description: 'Connect your pipeline agent', icon: '⭕', category: 'Software', docsUrl: 'https://circleci.com/docs/api/', features: ['Continuous Integration', 'Automated Testing', 'Deployment Pipelines'] },
    { name: 'Travis CI', description: 'Connect your build agent', icon: '🏗️', category: 'Software', docsUrl: 'https://docs.travis-ci.com/api/', features: ['Continuous Integration', 'Automated Testing', 'GitHub Integration'] },
    { name: 'Docker', description: 'Connect your container agent', icon: '🐳', category: 'Infrastructure', docsUrl: 'https://docs.docker.com/engine/api/', features: ['Containerization', 'Application Deployment', 'Microservices'] },
    { name: 'Kubernetes', description: 'Connect your orchestration agent', icon: '☸️', category: 'Infrastructure', docsUrl: 'https://kubernetes.io/docs/reference/using-api/', features: ['Container Orchestration', 'Auto-scaling', 'Service Discovery'] },
    { name: 'AWS', description: 'Connect your cloud agent', icon: '☁️', category: 'Infrastructure', docsUrl: 'https://docs.aws.amazon.com/', features: ['Cloud Computing', 'Storage Solutions', 'Serverless Functions'] },
    { name: 'Google Cloud', description: 'Connect your GCP agent', icon: '🌤️', category: 'Infrastructure', docsUrl: 'https://cloud.google.com/docs', features: ['Cloud Platform', 'Machine Learning', 'Data Analytics'] },
    { name: 'Azure', description: 'Connect your Microsoft agent', icon: '🔷', category: 'Infrastructure', docsUrl: 'https://docs.microsoft.com/en-us/azure/', features: ['Cloud Services', 'Enterprise Solutions', 'AI Services'] },
    { name: 'Vercel', description: 'Connect your deployment agent', icon: '▲', category: 'Infrastructure', docsUrl: 'https://vercel.com/docs/rest-api', features: ['Frontend Deployment', 'Serverless Functions', 'Edge Network'] },
    { name: 'Netlify', description: 'Connect your JAMstack agent', icon: '🌐', category: 'Infrastructure', docsUrl: 'https://docs.netlify.com/api/get-started/', features: ['Static Site Hosting', 'Serverless Functions', 'Form Handling'] },
    { name: 'Heroku', description: 'Connect your platform agent', icon: '🟣', category: 'Infrastructure', docsUrl: 'https://devcenter.heroku.com/categories/platform-api', features: ['Platform as a Service', 'App Deployment', 'Add-on Ecosystem'] },
    { name: 'DigitalOcean', description: 'Connect your droplet agent', icon: '🌊', category: 'Infrastructure', docsUrl: 'https://docs.digitalocean.com/reference/api/', features: ['Cloud Infrastructure', 'Virtual Machines', 'Managed Databases'] },
    { name: 'Linode', description: 'Connect your cloud agent', icon: '🔵', category: 'Infrastructure', docsUrl: 'https://www.linode.com/api/docs/v4', features: ['Cloud Computing', 'High Performance', 'Developer Tools'] },
    { name: 'Cloudflare', description: 'Connect your CDN agent', icon: '🛡️', category: 'Infrastructure', docsUrl: 'https://developers.cloudflare.com/', features: ['CDN Services', 'DDoS Protection', 'Edge Computing'] },
    { name: 'MongoDB', description: 'Connect your database agent', icon: '🍃', category: 'Database', docsUrl: 'https://docs.mongodb.com/manual/reference/api/', features: ['NoSQL Database', 'Document Storage', 'Atlas Cloud'] },
    { name: 'PostgreSQL', description: 'Connect your SQL agent', icon: '🐘', category: 'Database', docsUrl: 'https://www.postgresql.org/docs/', features: ['Relational Database', 'ACID Compliance', 'Advanced Features'] },
    { name: 'MySQL', description: 'Connect your database agent', icon: '🐬', category: 'Database', docsUrl: 'https://dev.mysql.com/doc/', features: ['Relational Database', 'High Performance', 'Scalability'] },
    { name: 'Redis', description: 'Connect your cache agent', icon: '🔴', category: 'Database', docsUrl: 'https://redis.io/documentation', features: ['In-memory Database', 'Caching', 'Real-time Analytics'] },
    { name: 'Elasticsearch', description: 'Connect your search agent', icon: '🔍', category: 'Database', docsUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html', features: ['Search Engine', 'Analytics', 'Log Analysis'] },
    { name: 'Firebase', description: 'Connect your backend agent', icon: '🔥', category: 'Database', docsUrl: 'https://firebase.google.com/docs', features: ['Backend as a Service', 'Real-time Database', 'Authentication'] },
    { name: 'Supabase', description: 'Connect your backend agent', icon: '⚡', category: 'Database', docsUrl: 'https://supabase.com/docs', features: ['Open Source Firebase', 'PostgreSQL', 'Real-time Subscriptions'] },
    { name: 'PlanetScale', description: 'Connect your database agent', icon: '🪐', category: 'Database', docsUrl: 'https://docs.planetscale.com/', features: ['Serverless MySQL', 'Branching', 'Schema Changes'] },
    { name: 'FaunaDB', description: 'Connect your serverless agent', icon: '🦕', category: 'Database', docsUrl: 'https://docs.fauna.com/', features: ['Serverless Database', 'ACID Transactions', 'Global Distribution'] },
    { name: 'DynamoDB', description: 'Connect your NoSQL agent', icon: '⚡', category: 'Database', docsUrl: 'https://docs.aws.amazon.com/dynamodb/', features: ['NoSQL Database', 'Serverless', 'Auto-scaling'] },
    { name: 'Snowflake', description: 'Connect your warehouse agent', icon: '❄️', category: 'Database', docsUrl: 'https://docs.snowflake.com/', features: ['Data Warehouse', 'Cloud Native', 'Data Sharing'] },
    { name: 'BigQuery', description: 'Connect your analytics agent', icon: '📊', category: 'Database', docsUrl: 'https://cloud.google.com/bigquery/docs', features: ['Data Warehouse', 'Analytics', 'Machine Learning'] },
    { name: 'Redshift', description: 'Connect your warehouse agent', icon: '🔴', category: 'Database', docsUrl: 'https://docs.aws.amazon.com/redshift/', features: ['Data Warehouse', 'Petabyte Scale', 'Analytics'] },
    { name: 'Databricks', description: 'Connect your lakehouse agent', icon: '🧱', category: 'Database', docsUrl: 'https://docs.databricks.com/', features: ['Unified Analytics', 'Data Lakehouse', 'Machine Learning'] },
    { name: 'Tableau', description: 'Connect your visualization agent', icon: '📈', category: 'Analytics', docsUrl: 'https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm', features: ['Data Visualization', 'Business Intelligence', 'Self-service Analytics'] },
    { name: 'Power BI', description: 'Connect your BI agent', icon: '📊', category: 'Analytics', docsUrl: 'https://docs.microsoft.com/en-us/rest/api/power-bi/', features: ['Business Intelligence', 'Data Visualization', 'Microsoft Integration'] },
    { name: 'Looker', description: 'Connect your data agent', icon: '👀', category: 'Analytics', docsUrl: 'https://docs.looker.com/reference/api-and-integration', features: ['Modern BI', 'Data Platform', 'Embedded Analytics'] },
    { name: 'Grafana', description: 'Connect your monitoring agent', icon: '📊', category: 'Analytics', docsUrl: 'https://grafana.com/docs/grafana/latest/http_api/', features: ['Observability', 'Dashboards', 'Alerting'] },
    { name: 'Metabase', description: 'Connect your analytics agent', icon: '📈', category: 'Analytics', docsUrl: 'https://www.metabase.com/docs/latest/api-documentation.html', features: ['Open Source BI', 'Self-service Analytics', 'Dashboards'] },
    { name: 'Retool', description: 'Connect your internal agent', icon: '🔧', category: 'Tools', docsUrl: 'https://docs.retool.com/', features: ['Internal Tools', 'Admin Panels', 'Database GUIs'] },
    { name: 'Zapier', description: 'Connect your automation agent', icon: '⚡', category: 'Tools', docsUrl: 'https://zapier.com/developer/', features: ['Workflow Automation', 'App Integration', 'No-code Solutions'] },
    { name: 'IFTTT', description: 'Connect your trigger agent', icon: '🔗', category: 'Tools', docsUrl: 'https://ifttt.com/developers', features: ['Automation Platform', 'Trigger Actions', 'IoT Integration'] },
    { name: 'Make', description: 'Connect your scenario agent', icon: '🎯', category: 'Tools', docsUrl: 'https://www.make.com/en/api-documentation', features: ['Visual Automation', 'Complex Workflows', 'Data Processing'] },
    { name: 'n8n', description: 'Connect your workflow agent', icon: '🔄', category: 'Tools', docsUrl: 'https://docs.n8n.io/', features: ['Open Source Automation', 'Self-hosted', 'Custom Nodes'] },
    { name: 'Pipedream', description: 'Connect your serverless agent', icon: '🚀', category: 'Tools', docsUrl: 'https://pipedream.com/docs/', features: ['Serverless Integration', 'Event-driven', 'Code + No-code'] },
    { name: 'Bubble', description: 'Connect your no-code agent', icon: '🫧', category: 'Tools', docsUrl: 'https://manual.bubble.io/', features: ['No-code Platform', 'Web Apps', 'Database Integration'] },
    { name: 'Webflow', description: 'Connect your design agent', icon: '🌊', category: 'Tools', docsUrl: 'https://developers.webflow.com/', features: ['Visual Web Design', 'CMS', 'E-commerce'] },
    { name: 'Framer', description: 'Connect your prototype agent', icon: '🖼️', category: 'Tools', docsUrl: 'https://www.framer.com/developers/', features: ['Design Tool', 'Prototyping', 'Interactive Design'] },
    { name: 'Figma', description: 'Connect your design agent', icon: '🎨', category: 'Tools', docsUrl: 'https://www.figma.com/developers/api', features: ['Design Collaboration', 'Prototyping', 'Design Systems'] },
    { name: 'Adobe Creative', description: 'Connect your creative agent', icon: '🎭', category: 'Tools', docsUrl: 'https://developer.adobe.com/', features: ['Creative Suite', 'Design Tools', 'Content Creation'] },
    { name: 'Canva', description: 'Connect your graphics agent', icon: '🎨', category: 'Tools', docsUrl: 'https://www.canva.dev/', features: ['Graphic Design', 'Templates', 'Brand Management'] },
    { name: 'Unsplash', description: 'Connect your photo agent', icon: '📸', category: 'Tools', docsUrl: 'https://unsplash.com/developers', features: ['Stock Photos', 'High Quality Images', 'Free License'] },
    { name: 'Pexels', description: 'Connect your media agent', icon: '📷', category: 'Tools', docsUrl: 'https://www.pexels.com/api/', features: ['Stock Media', 'Photos & Videos', 'Free Content'] },
    { name: 'Shutterstock', description: 'Connect your stock agent', icon: '📹', category: 'Tools', docsUrl: 'https://www.shutterstock.com/developers', features: ['Stock Content', 'Premium Media', 'Licensing'] },
    { name: 'Getty Images', description: 'Connect your premium agent', icon: '🖼️', category: 'Tools', docsUrl: 'https://developers.gettyimages.com/', features: ['Premium Content', 'Editorial Images', 'Rights Management'] },
    { name: 'Spotify', description: 'Connect your music agent', icon: '🎵', category: 'Tools', docsUrl: 'https://developer.spotify.com/', features: ['Music Streaming', 'Playlist Management', 'Audio Features'] },
    { name: 'YouTube', description: 'Connect your video agent', icon: '📺', category: 'Tools', docsUrl: 'https://developers.google.com/youtube', features: ['Video Platform', 'Content Management', 'Analytics'] },
    { name: 'Vimeo', description: 'Connect your video agent', icon: '🎬', category: 'Tools', docsUrl: 'https://developer.vimeo.com/', features: ['Video Hosting', 'Professional Tools', 'Privacy Controls'] },
    { name: 'Twitch', description: 'Connect your streaming agent', icon: '🟣', category: 'Tools', docsUrl: 'https://dev.twitch.tv/', features: ['Live Streaming', 'Gaming Platform', 'Community Features'] },
    { name: 'TikTok', description: 'Connect your social agent', icon: '🎵', category: 'Tools', docsUrl: 'https://developers.tiktok.com/', features: ['Short Videos', 'Social Platform', 'Content Creation'] },
    { name: 'Instagram', description: 'Connect your social agent', icon: '📸', category: 'Tools', docsUrl: 'https://developers.facebook.com/docs/instagram', features: ['Photo Sharing', 'Stories', 'Business Tools'] },
    { name: 'Twitter', description: 'Connect your social agent', icon: '🐦', category: 'Tools', docsUrl: 'https://developer.twitter.com/', features: ['Microblogging', 'Real-time Updates', 'API Access'] },
    { name: 'LinkedIn', description: 'Connect your professional agent', icon: '💼', category: 'Tools', docsUrl: 'https://docs.microsoft.com/en-us/linkedin/', features: ['Professional Network', 'Business Platform', 'Recruitment'] },
    { name: 'Facebook', description: 'Connect your social agent', icon: '👥', category: 'Tools', docsUrl: 'https://developers.facebook.com/', features: ['Social Network', 'Business Pages', 'Advertising'] },
    { name: 'Reddit', description: 'Connect your community agent', icon: '🤖', category: 'Tools', docsUrl: 'https://www.reddit.com/dev/api/', features: ['Community Platform', 'Discussion Forums', 'Content Aggregation'] },
    { name: 'Pinterest', description: 'Connect your discovery agent', icon: '📌', category: 'Tools', docsUrl: 'https://developers.pinterest.com/', features: ['Visual Discovery', 'Pin Management', 'Shopping Features'] },
    { name: 'Snapchat', description: 'Connect your AR agent', icon: '👻', category: 'Tools', docsUrl: 'https://developers.snapchat.com/', features: ['Augmented Reality', 'Ephemeral Content', 'Camera Platform'] },
    { name: 'WeChat', description: 'Connect your messaging agent', icon: '💬', category: 'Communication', docsUrl: 'https://developers.weixin.qq.com/', features: ['Super App', 'Messaging', 'Mini Programs'] },
    { name: 'Line', description: 'Connect your chat agent', icon: '💚', category: 'Communication', docsUrl: 'https://developers.line.biz/', features: ['Messaging Platform', 'Bot Framework', 'Business Solutions'] },
    { name: 'Viber', description: 'Connect your messaging agent', icon: '💜', category: 'Communication', docsUrl: 'https://developers.viber.com/', features: ['Messaging App', 'Business Messaging', 'Chatbots'] },
    { name: 'Signal', description: 'Connect your secure agent', icon: '🔒', category: 'Communication', docsUrl: 'https://signal.org/docs/', features: ['Secure Messaging', 'Privacy Focused', 'End-to-end Encryption'] },
    { name: 'Zoom', description: 'Connect your video agent', icon: '📹', category: 'Communication', docsUrl: 'https://marketplace.zoom.us/docs/api-reference/introduction', features: ['Video Conferencing', 'Webinars', 'Phone System'] },
    { name: 'Microsoft Teams', description: 'Connect your collaboration agent', icon: '👥', category: 'Communication', docsUrl: 'https://docs.microsoft.com/en-us/microsoftteams/platform/', features: ['Team Collaboration', 'Video Meetings', 'File Sharing'] },
    { name: 'Google Meet', description: 'Connect your meeting agent', icon: '📹', category: 'Communication', docsUrl: 'https://developers.google.com/meet', features: ['Video Meetings', 'Google Integration', 'Enterprise Features'] },
    { name: 'Calendly', description: 'Connect your scheduling agent', icon: '📅', category: 'Productivity', docsUrl: 'https://developer.calendly.com/', features: ['Meeting Scheduling', 'Calendar Integration', 'Automated Workflows'] },
    { name: 'Acuity', description: 'Connect your booking agent', icon: '⏰', category: 'Productivity', docsUrl: 'https://developers.acuityscheduling.com/', features: ['Appointment Scheduling', 'Client Management', 'Payment Processing'] },
    { name: 'Doodle', description: 'Connect your polling agent', icon: '📊', category: 'Productivity', docsUrl: 'https://doodle.com/api', features: ['Meeting Polls', 'Group Scheduling', 'Time Zone Management'] },
    { name: 'When2meet', description: 'Connect your availability agent', icon: '🗓️', category: 'Productivity', docsUrl: '#', features: ['Group Availability', 'Meeting Planning', 'Schedule Coordination'] },
    { name: 'Typeform', description: 'Connect your form agent', icon: '📝', category: 'Tools', docsUrl: 'https://developer.typeform.com/', features: ['Interactive Forms', 'Surveys', 'Data Collection'] },
    { name: 'Google Forms', description: 'Connect your survey agent', icon: '📋', category: 'Tools', docsUrl: 'https://developers.google.com/forms', features: ['Form Builder', 'Response Collection', 'Google Integration'] },
    { name: 'SurveyMonkey', description: 'Connect your research agent', icon: '🐵', category: 'Tools', docsUrl: 'https://developer.surveymonkey.com/', features: ['Survey Platform', 'Market Research', 'Analytics'] },
    { name: 'Qualtrics', description: 'Connect your experience agent', icon: '📊', category: 'Tools', docsUrl: 'https://api.qualtrics.com/', features: ['Experience Management', 'Research Platform', 'Advanced Analytics'] },
    { name: 'JotForm', description: 'Connect your form agent', icon: '📄', category: 'Tools', docsUrl: 'https://api.jotform.com/docs/', features: ['Form Builder', 'Payment Forms', 'Workflow Automation'] },
    { name: 'Wufoo', description: 'Connect your data agent', icon: '🐕', category: 'Tools', docsUrl: 'https://wufoo.github.io/docs/', features: ['Online Forms', 'Data Collection', 'Report Generation'] },
    { name: 'Formstack', description: 'Connect your workflow agent', icon: '📚', category: 'Tools', docsUrl: 'https://developers.formstack.com/', features: ['Form Automation', 'Document Generation', 'E-signatures'] },
    { name: 'Gravity Forms', description: 'Connect your WordPress agent', icon: '🌐', category: 'Tools', docsUrl: 'https://docs.gravityforms.com/', features: ['WordPress Forms', 'Advanced Fields', 'Payment Integration'] },
    { name: 'Ninja Forms', description: 'Connect your builder agent', icon: '🥷', category: 'Tools', docsUrl: 'https://ninjaforms.com/documentation/', features: ['Drag & Drop Forms', 'WordPress Plugin', 'Add-on Ecosystem'] },
    { name: 'Contact Form 7', description: 'Connect your contact agent', icon: '📧', category: 'Tools', docsUrl: 'https://contactform7.com/docs/', features: ['Simple Contact Forms', 'WordPress Integration', 'Spam Protection'] },
    { name: 'WPForms', description: 'Connect your WordPress agent', icon: '📝', category: 'Tools', docsUrl: 'https://wpforms.com/developers/', features: ['Beginner Friendly', 'Pre-built Templates', 'Payment Forms'] },
    { name: 'Formidable Forms', description: 'Connect your advanced agent', icon: '💪', category: 'Tools', docsUrl: 'https://formidableforms.com/knowledgebase/', features: ['Advanced Forms', 'Views & Reports', 'Application Builder'] },
    { name: 'Fluent Forms', description: 'Connect your fast agent', icon: '⚡', category: 'Tools', docsUrl: 'https://fluentforms.com/docs/', features: ['Fast Loading', 'Conversational Forms', 'Multi-step Forms'] },
    { name: 'Elementor', description: 'Connect your page agent', icon: '🎨', category: 'Tools', docsUrl: 'https://developers.elementor.com/', features: ['Page Builder', 'WordPress Plugin', 'Design System'] },
    { name: 'Divi', description: 'Connect your theme agent', icon: '🎭', category: 'Tools', docsUrl: 'https://www.elegantthemes.com/api/', features: ['Visual Builder', 'WordPress Theme', 'Design Library'] },
    { name: 'Beaver Builder', description: 'Connect your builder agent', icon: '🦫', category: 'Tools', docsUrl: 'https://www.wpbeaverbuilder.com/knowledge-base/', features: ['Page Builder', 'Front-end Editor', 'Template Library'] },
    { name: 'Visual Composer', description: 'Connect your composer agent', icon: '🎼', category: 'Tools', docsUrl: 'https://visualcomposer.com/help/', features: ['Website Builder', 'Drag & Drop', 'Design Elements'] },
    { name: 'Gutenberg', description: 'Connect your block agent', icon: '📚', category: 'Tools', docsUrl: 'https://developer.wordpress.org/block-editor/', features: ['Block Editor', 'WordPress Core', 'Custom Blocks'] },
    { name: 'ACF', description: 'Connect your fields agent', icon: '🔧', category: 'Tools', docsUrl: 'https://www.advancedcustomfields.com/resources/', features: ['Custom Fields', 'WordPress Plugin', 'Developer Tools'] },
    { name: 'Toolset', description: 'Connect your custom agent', icon: '🛠️', category: 'Tools', docsUrl: 'https://toolset.com/documentation/', features: ['Custom Post Types', 'Views', 'Forms'] },
    { name: 'Meta Box', description: 'Connect your meta agent', icon: '📦', category: 'Tools', docsUrl: 'https://docs.metabox.io/', features: ['Custom Fields', 'Meta Boxes', 'Extensions'] },
    { name: 'Pods', description: 'Connect your content agent', icon: '🫛', category: 'Tools', docsUrl: 'https://docs.pods.io/', features: ['Content Development', 'Custom Fields', 'Relationships'] },
    { name: 'CMB2', description: 'Connect your metabox agent', icon: '📋', category: 'Tools', docsUrl: 'https://cmb2.io/', features: ['Custom Metaboxes', 'Developer Library', 'Field Types'] },
    { name: 'Carbon Fields', description: 'Connect your carbon agent', icon: '💎', category: 'Tools', docsUrl: 'https://carbonfields.net/docs/', features: ['Developer Library', 'Custom Fields', 'Theme Options'] },
    { name: 'Kirby', description: 'Connect your CMS agent', icon: '🌸', category: 'Tools', docsUrl: 'https://getkirby.com/docs', features: ['File-based CMS', 'Flexible Content', 'Developer Friendly'] },
    { name: 'Craft CMS', description: 'Connect your craft agent', icon: '🔨', category: 'Tools', docsUrl: 'https://craftcms.com/docs/', features: ['Content Management', 'Flexible Fields', 'Multi-site'] },
    { name: 'Statamic', description: 'Connect your flat agent', icon: '📄', category: 'Tools', docsUrl: 'https://statamic.dev/', features: ['Flat File CMS', 'Laravel Based', 'Git Workflow'] },
    { name: 'Ghost', description: 'Connect your publishing agent', icon: '👻', category: 'Tools', docsUrl: 'https://ghost.org/docs/admin-api/', features: ['Publishing Platform', 'Membership', 'Newsletter'] },
    { name: 'Contentful', description: 'Connect your headless agent', icon: '🚀', category: 'Tools', docsUrl: 'https://www.contentful.com/developers/docs/', features: ['Headless CMS', 'API-first', 'Multi-platform'] },
    { name: 'Strapi', description: 'Connect your headless agent', icon: '🚀', category: 'Tools', docsUrl: 'https://docs.strapi.io/', features: ['Open Source CMS', 'API Generation', 'Admin Panel'] },
    { name: 'Sanity', description: 'Connect your structured agent', icon: '🧘', category: 'Tools', docsUrl: 'https://www.sanity.io/docs', features: ['Structured Content', 'Real-time Collaboration', 'GROQ Query Language'] },
    { name: 'Prismic', description: 'Connect your slice agent', icon: '🍰', category: 'Tools', docsUrl: 'https://prismic.io/docs', features: ['Slice Machine', 'Developer Experience', 'Content Scheduling'] },
    { name: 'Forestry', description: 'Connect your git agent', icon: '🌲', category: 'Tools', docsUrl: 'https://forestry.io/docs/', features: ['Git-based CMS', 'Static Sites', 'Editorial Workflow'] },
    { name: 'Netlify CMS', description: 'Connect your git agent', icon: '🌐', category: 'Tools', docsUrl: 'https://www.netlifycms.org/docs/', features: ['Git Workflow', 'Static Site CMS', 'Editorial Interface'] },
    { name: 'Tina', description: 'Connect your visual agent', icon: '🦙', category: 'Tools', docsUrl: 'https://tina.io/docs/', features: ['Visual Editing', 'Git-based', 'React Integration'] },
    { name: 'Decap CMS', description: 'Connect your open agent', icon: '🎩', category: 'Tools', docsUrl: 'https://decapcms.org/docs/', features: ['Open Source CMS', 'Git Workflow', 'Static Sites'] },
    { name: 'Payload', description: 'Connect your TypeScript agent', icon: '🚀', category: 'Tools', docsUrl: 'https://payloadcms.com/docs', features: ['TypeScript CMS', 'Self-hosted', 'Admin UI'] },
    { name: 'KeystoneJS', description: 'Connect your GraphQL agent', icon: '🗝️', category: 'Tools', docsUrl: 'https://keystonejs.com/docs', features: ['GraphQL API', 'Admin UI', 'Schema Definition'] },
    { name: 'Directus', description: 'Connect your data agent', icon: '🧭', category: 'Tools', docsUrl: 'https://docs.directus.io/', features: ['Data Platform', 'API Generation', 'Admin App'] },
    { name: 'Hasura', description: 'Connect your GraphQL agent', icon: '⚡', category: 'Database', docsUrl: 'https://hasura.io/docs/', features: ['GraphQL API', 'Real-time Subscriptions', 'Authorization'] },
    { name: 'AppSync', description: 'Connect your GraphQL agent', icon: '🔄', category: 'Database', docsUrl: 'https://docs.aws.amazon.com/appsync/', features: ['Managed GraphQL', 'Real-time Data', 'Offline Sync'] },
    { name: 'Dgraph', description: 'Connect your graph agent', icon: '🕸️', category: 'Database', docsUrl: 'https://dgraph.io/docs/', features: ['Graph Database', 'GraphQL Native', 'Distributed'] },
    { name: 'Neo4j', description: 'Connect your graph agent', icon: '🔗', category: 'Database', docsUrl: 'https://neo4j.com/docs/', features: ['Graph Database', 'Cypher Query', 'Relationship Focused'] },
    { name: 'ArangoDB', description: 'Connect your multi agent', icon: '🥨', category: 'Database', docsUrl: 'https://www.arangodb.com/docs/', features: ['Multi-model Database', 'Graph & Document', 'AQL Query Language'] },
    { name: 'CouchDB', description: 'Connect your document agent', icon: '🛋️', category: 'Database', docsUrl: 'https://docs.couchdb.org/', features: ['Document Database', 'HTTP API', 'Replication'] },
    { name: 'RethinkDB', description: 'Connect your realtime agent', icon: '🔄', category: 'Database', docsUrl: 'https://rethinkdb.com/docs/', features: ['Real-time Database', 'Push Notifications', 'Scalable'] },
    { name: 'InfluxDB', description: 'Connect your time agent', icon: '⏰', category: 'Database', docsUrl: 'https://docs.influxdata.com/', features: ['Time Series Database', 'IoT Data', 'Analytics'] },
    { name: 'TimescaleDB', description: 'Connect your timeseries agent', icon: '📈', category: 'Database', docsUrl: 'https://docs.timescale.com/', features: ['Time Series Extension', 'PostgreSQL Based', 'Scalable'] },
    { name: 'ClickHouse', description: 'Connect your analytics agent', icon: '🏠', category: 'Database', docsUrl: 'https://clickhouse.com/docs/', features: ['Columnar Database', 'Analytics', 'High Performance'] },
    { name: 'Apache Cassandra', description: 'Connect your distributed agent', icon: '🏛️', category: 'Database', docsUrl: 'https://cassandra.apache.org/doc/', features: ['Distributed Database', 'NoSQL', 'High Availability'] },
    { name: 'ScyllaDB', description: 'Connect your performance agent', icon: '⚡', category: 'Database', docsUrl: 'https://docs.scylladb.com/', features: ['High Performance', 'Cassandra Compatible', 'Low Latency'] },
    { name: 'CockroachDB', description: 'Connect your distributed agent', icon: '🪳', category: 'Database', docsUrl: 'https://www.cockroachlabs.com/docs/', features: ['Distributed SQL', 'ACID Transactions', 'Resilient'] },
    { name: 'TiDB', description: 'Connect your hybrid agent', icon: '🐅', category: 'Database', docsUrl: 'https://docs.pingcap.com/', features: ['Hybrid Database', 'MySQL Compatible', 'Horizontal Scaling'] },
    { name: 'YugabyteDB', description: 'Connect your distributed agent', icon: '🌐', category: 'Database', docsUrl: 'https://docs.yugabyte.com/', features: ['Distributed SQL', 'PostgreSQL Compatible', 'Multi-cloud'] },
    { name: 'VoltDB', description: 'Connect your memory agent', icon: '⚡', category: 'Database', docsUrl: 'https://docs.voltdb.com/', features: ['In-memory Database', 'ACID Transactions', 'Real-time Analytics'] },
    { name: 'MemSQL', description: 'Connect your memory agent', icon: '🧠', category: 'Database', docsUrl: 'https://docs.singlestore.com/', features: ['In-memory Database', 'Real-time Analytics', 'MySQL Compatible'] },
    { name: 'Apache Spark', description: 'Connect your analytics agent', icon: '✨', category: 'Database', docsUrl: 'https://spark.apache.org/docs/', features: ['Unified Analytics', 'Big Data Processing', 'Machine Learning'] },
    { name: 'Apache Kafka', description: 'Connect your streaming agent', icon: '🌊', category: 'Database', docsUrl: 'https://kafka.apache.org/documentation/', features: ['Event Streaming', 'Real-time Data', 'Distributed'] },
    { name: 'Apache Pulsar', description: 'Connect your messaging agent', icon: '💫', category: 'Database', docsUrl: 'https://pulsar.apache.org/docs/', features: ['Messaging System', 'Multi-tenancy', 'Geo-replication'] },
    { name: 'RabbitMQ', description: 'Connect your queue agent', icon: '🐰', category: 'Database', docsUrl: 'https://www.rabbitmq.com/documentation.html', features: ['Message Broker', 'Queue Management', 'Reliable Delivery'] },
    { name: 'Apache ActiveMQ', description: 'Connect your messaging agent', icon: '📨', category: 'Database', docsUrl: 'https://activemq.apache.org/documentation', features: ['Message Broker', 'JMS Support', 'Enterprise Features'] },
    { name: 'NATS', description: 'Connect your messaging agent', icon: '📡', category: 'Database', docsUrl: 'https://docs.nats.io/', features: ['Cloud Native Messaging', 'High Performance', 'Simplicity'] },
    { name: 'Amazon SQS', description: 'Connect your queue agent', icon: '📬', category: 'Infrastructure', docsUrl: 'https://docs.aws.amazon.com/sqs/', features: ['Managed Queue Service', 'Scalable', 'Reliable'] },
    { name: 'Google Pub/Sub', description: 'Connect your messaging agent', icon: '📢', category: 'Infrastructure', docsUrl: 'https://cloud.google.com/pubsub/docs', features: ['Messaging Service', 'Real-time', 'Global'] },
    { name: 'Azure Service Bus', description: 'Connect your messaging agent', icon: '🚌', category: 'Infrastructure', docsUrl: 'https://docs.microsoft.com/en-us/azure/service-bus-messaging/', features: ['Enterprise Messaging', 'Hybrid Integration', 'Reliable'] },
  ];

  const categories = [
    { id: 'All', name: 'All', count: integrations.length },
    { id: 'Blockchain', name: 'Blockchain', count: integrations.filter(i => i.category === 'Blockchain').length },
    { id: 'AI', name: 'AI', count: integrations.filter(i => i.category === 'AI').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: integrations.filter(i => i.category === 'Infrastructure').length },
    { id: 'Communication', name: 'Communication', count: integrations.filter(i => i.category === 'Communication').length },
    { id: 'CRM', name: 'CRM', count: integrations.filter(i => i.category === 'CRM').length },
    { id: 'Database', name: 'Database', count: integrations.filter(i => i.category === 'Database').length },
    { id: 'ECommerce', name: 'ECommerce', count: integrations.filter(i => i.category === 'ECommerce').length },
    { id: 'Analytics', name: 'Analytics', count: integrations.filter(i => i.category === 'Analytics').length },
    { id: 'Marketing', name: 'Marketing', count: integrations.filter(i => i.category === 'Marketing').length },
    { id: 'Payments', name: 'Payments', count: integrations.filter(i => i.category === 'Payments').length },
    { id: 'Productivity', name: 'Productivity', count: integrations.filter(i => i.category === 'Productivity').length },
    { id: 'Software', name: 'Software', count: integrations.filter(i => i.category === 'Software').length },
    { id: 'Tools', name: 'Tools', count: integrations.filter(i => i.category === 'Tools').length },
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const assetTypes = [
    { name: 'Images', icon: ImageIcon, count: '15K+' },
    { name: 'Audio', icon: Music, count: '8K+' },
    { name: 'Videos', icon: Video, count: '5K+' },
    { name: 'Text', icon: FileText, count: '12K+' },
    { name: 'Datasets', icon: Database, count: '3K+' },
    { name: 'Code', icon: Code, count: '7K+' },
  ];

  const handleLearnMore = (integration: typeof integrations[0]) => {
    if (integration.docsUrl === '#') {
      // For integrations without docs, show a modal or toast
      alert(`${integration.name} integration coming soon! Features include: ${integration.features.join(', ')}`);
    } else {
      // Open external documentation
      window.open(integration.docsUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2">
                  <span className="text-orange-400 text-sm font-medium">Built with AI 🧠</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
                  <Github className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">Open Source</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Build IP automations.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Fast.
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Connect AI agents to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold text-2xl">
                  113+ IP management APIs
                </span>{' '}
                with human-verifiable calls, streaming execution,
                and SDKs for Story Protocol, Crossmint, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              {user ? (
                <Link to="/dashboard" className="inline-block">
                  <Button size="lg" className="px-8 w-full sm:w-auto bg-white text-black hover:bg-gray-100">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/login" className="inline-block">
                    <Button size="lg" className="px-8 w-full sm:w-auto bg-white text-black hover:bg-gray-100">
                      Start building
                    </Button>
                  </Link>
                  <Button variant="ghost" size="lg" className="px-8 w-full sm:w-auto text-white border-gray-600 hover:bg-gray-800">
                    <Play className="h-4 w-4 mr-2" />
                    See demo
                  </Button>
                </>
              )}
            </motion.div>

            {/* Code Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">TypeScript</span>
                    <button className="text-gray-400 hover:text-white">
                      <Code className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="p-6 text-left">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`import { StoryProtocol } from '@story-protocol/sdk'
import { CrossmintSDK } from '@crossmint/client-sdk'
import { IPVerse, createIPAgent } from '@ipverse/sdk'

// Initialize IPVerse client
const ipverse = new IPVerse({
  apiKey: "YOUR_IPVERSE_API_KEY",
  network: "mainnet"
})

// Set up AI agent
const agent = await createIPAgent({
  name: "LicenseBot Pro",
  capabilities: ["negotiate", "detect", "analyze"]
})`}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                113+ Partner APIs
              </span>{' '}
              Ready to Use
            </h2>
            <p className="text-xl text-gray-400">
              Connect to leading Web3 and AI services with our curated integrations
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.highlight ? 'text-yellow-400' : 'text-blue-400'}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  stat.highlight 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400' 
                    : 'text-white'
                }`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Connectors - Matching the image */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Available Connectors ({integrations.length})
            </h2>
            <p className="text-xl text-gray-400">
              Connect to the world. New platforms added regularly.
            </p>
          </div>

          {/* Category Filters - Matching the image layout */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search connectors..."
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Integration Grid - Matching the image layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{integration.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {integration.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {integration.description}
                    </p>
                    
                    {/* Brief description matching the image */}
                    <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                      {integration.features.slice(0, 2).join(', ')}...
                    </p>
                    
                    <button 
                      onClick={() => handleLearnMore(integration)}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                    >
                      Learn more →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show message if no results */}
          {filteredIntegrations.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">
                No connectors found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Products</h2>
            <p className="text-xl text-gray-400">
              Three tools, one goal: 'Get real work done fast.'
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* IPProtect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray-600 mb-4">#</div>
                <h3 className="text-4xl font-bold mb-4">IPProtect</h3>
                <p className="text-lg text-gray-400 mb-2">
                  Every IP registration,
                  <br />
                  right the first time
                </p>
                <p className="text-sm text-gray-500">
                  Full schemas • scope intelligence
                  <br />
                  safety baked in
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-left">
                <p className="text-gray-300 mb-4">
                  Register any IP with a single command. IPProtect gives your agent instant 
                  access to every blockchain network, hassle-free.
                </p>
              </div>
            </motion.div>

            {/* AIAgents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray-600 mb-4">#</div>
                <h3 className="text-4xl font-bold mb-4">AIAgents</h3>
                <p className="text-lg text-gray-400 mb-2">
                  Instant negotiation,
                  <br />
                  licenses that never expire
                </p>
                <p className="text-sm text-gray-500">
                  Smart flows • auto rotation
                  <br />
                  AI store-as-a-Service
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-left">
                <p className="text-gray-300 mb-4">
                  Deploy intelligent agents to handle licensing and negotiations effortlessly. 
                  AIAgents manages smart contracts and royalties so you don't have to.
                </p>
              </div>
            </motion.div>

            {/* SmartKit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray-600 mb-4">#</div>
                <h3 className="text-4xl font-bold mb-4">SmartKit</h3>
                <p className="text-lg text-gray-400 mb-2">
                  From plain English to
                  <br />
                  live integration in seconds
                </p>
                <p className="text-sm text-gray-500">
                  Unlimited integrations •{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
                    113+ partners
                  </span>
                  <br />
                  zero config
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-left">
                <p className="text-gray-300 mb-4">
                  Describe what you want to build and SmartKit creates the integration for 
                  you—no docs or configs needed. Access to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
                    113+ partner APIs
                  </span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asset Types */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Supported Asset Types</h2>
            <p className="text-xl text-gray-400">
              Protect and monetize any type of intellectual property
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {assetTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
              >
                <type.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-1">{type.name}</h3>
                <p className="text-sm text-gray-400">{type.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Protect Your Ideas?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who trust IPVerse with their intellectual property.
            Access{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
              113+ partner APIs
            </span>{' '}
            instantly.
          </p>
          {!user && (
            <Link to="/login" className="inline-block">
              <Button size="lg" className="px-8 bg-white text-black hover:bg-gray-100">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};