# 🔐 Environment Configuration Guide

## Overview

IPVerse uses environment variables to manage API keys, configuration settings, and feature flags. This ensures secure credential management and easy deployment across different environments.

## Quick Setup

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your credentials:**
   Edit `.env.local` with your actual API keys and configuration values.

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Environment Files

### Development
- `.env.local` - Your local development environment (not committed to git)
- `.env.example` - Template with all required variables (committed to git)

### Production
- Environment variables are set directly in your hosting platform (Render, Netlify, etc.)

## Required Variables

### 🔑 Essential for Core Functionality

```bash
# Tomo SDK (Required for authentication)
VITE_TOMO_CLIENT_ID=xDsx8PcJd6QrpkgejZRWi9WpyTQ2FvCZOOmG2Ry4brFQxlil77Y3Rfg5XGTEFl5MWOfc6VOzDHku84Cye7l7pwnr

# OpenAI (Required for AI agents)
VITE_OPENAI_API_KEY=your_openai_api_key_here

# Alchemy (Required for blockchain interactions)
VITE_ALCHEMY_API_KEY=your_alchemy_api_key_here
```

### 🎯 Partner Bounty Integrations

```bash
# Story Protocol
VITE_STORY_PROTOCOL_API_KEY=your_story_protocol_api_key_here

# Crossmint
VITE_CROSSMINT_PROJECT_ID=your_crossmint_project_id_here
VITE_CROSSMINT_API_KEY=your_crossmint_api_key_here

# thirdweb
VITE_THIRDWEB_CLIENT_ID=your_thirdweb_client_id_here

# Gelato
VITE_GELATO_API_KEY=your_gelato_api_key_here

# Fleek
VITE_FLEEK_API_KEY=your_fleek_api_key_here

# Yakoa
VITE_YAKOA_API_KEY=your_yakoa_api_key_here

# Zapper
VITE_ZAPPER_API_KEY=your_zapper_api_key_here

# deBridge
VITE_DEBRIDGE_API_KEY=your_debridge_api_key_here
```

## Getting API Keys

### 🔐 Tomo SDK
- **Status**: ✅ Already provided
- **Client ID**: `xDsx8PcJd6QrpkgejZRWi9WpyTQ2FvCZOOmG2Ry4brFQxlil77Y3Rfg5XGTEFl5MWOfc6VOzDHku84Cye7l7pwnr`
- **Documentation**: [Tomo SDK Docs](https://docs.tomo.inc/tomo-sdk/tomoevmkit)

### 🧠 OpenAI
1. Visit [OpenAI Platform](https://platform.openai.com)
2. Create an account or sign in
3. Navigate to API Keys section
4. Create a new API key
5. Add to `VITE_OPENAI_API_KEY`

### ⚡ Alchemy
1. Visit [Alchemy Dashboard](https://dashboard.alchemy.com)
2. Create a new app
3. Select "Ethereum" → "Sepolia" for testnet
4. Copy the API key
5. Add to `VITE_ALCHEMY_API_KEY`

### 📚 Story Protocol
1. Visit [Story Protocol Developer Portal](https://docs.story.foundation)
2. Register for API access
3. Generate API key
4. Add to `VITE_STORY_PROTOCOL_API_KEY`

### 🎨 Crossmint
1. Visit [Crossmint Console](https://console.crossmint.com)
2. Create a new project
3. Get Project ID and API key
4. Add to `VITE_CROSSMINT_PROJECT_ID` and `VITE_CROSSMINT_API_KEY`

### 🔗 thirdweb
1. Visit [thirdweb Dashboard](https://thirdweb.com/dashboard)
2. Create a new project
3. Get Client ID
4. Add to `VITE_THIRDWEB_CLIENT_ID`

## Environment Validation

The application automatically validates environment variables on startup:

```typescript
// Validates required variables
validateEnvironment();

// Logs configuration in development
console.log('Environment:', env.app.env);
console.log('Features enabled:', env.features);
```

## Feature Flags

Control application features with environment variables:

```bash
# Enable/disable features
VITE_ENABLE_AI_AGENTS=true
VITE_ENABLE_CROSS_CHAIN=true
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NOTIFICATIONS=true

# Development settings
VITE_DEBUG_MODE=true
VITE_MOCK_APIS=true
```

## Security Best Practices

### ✅ Do's
- Use `.env.local` for local development
- Set environment variables in hosting platform for production
- Use `VITE_` prefix for client-side variables
- Keep API keys secure and rotate regularly

### ❌ Don'ts
- Never commit `.env.local` to git
- Don't expose server-side secrets to client
- Don't hardcode credentials in source code
- Don't share API keys in public channels

## Deployment Configuration

### Render
Set environment variables in Render dashboard:
1. Go to your service settings
2. Navigate to "Environment" tab
3. Add each variable from `.env.example`

### Netlify
```bash
# Using Netlify CLI
netlify env:set VITE_TOMO_CLIENT_ID "your_value_here"

# Or in Netlify dashboard under Site settings → Environment variables
```

### Vercel
```bash
# Using Vercel CLI
vercel env add VITE_TOMO_CLIENT_ID

# Or in Vercel dashboard under Settings → Environment Variables
```

## Troubleshooting

### Common Issues

1. **"Environment variable not set" warnings**
   - Check that variable names match exactly (case-sensitive)
   - Ensure `.env.local` file exists and is properly formatted

2. **API calls failing**
   - Verify API keys are valid and not expired
   - Check network settings and CORS configuration

3. **Build failures**
   - Ensure all required variables are set in deployment environment
   - Check for typos in variable names

### Debug Mode

Enable debug mode to see detailed environment information:

```bash
VITE_DEBUG_MODE=true
VITE_LOG_LEVEL=debug
```

## Support

- **Tomo Support**: [Telegram Group](https://t.me/+Ax7Q0xguPJgyMTU0)
- **Documentation**: Check individual partner documentation links
- **Issues**: Create GitHub issue with environment configuration questions

---

**🔒 Keep your credentials secure and never share API keys publicly!**