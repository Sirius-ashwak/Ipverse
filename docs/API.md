# 🔌 IPVerse API Documentation

## Overview

IPVerse provides a comprehensive REST API for managing intellectual property assets, AI agents, and licensing operations. This documentation covers all available endpoints and integration patterns.

## Base URL

```
Production: https://api.ipverse.app
Development: http://localhost:3001
```

## Authentication

All API requests require authentication using Bearer tokens obtained through the Tomo SDK integration.

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Core Endpoints

### IP Assets

#### Register New IP Asset
```http
POST /api/assets
Content-Type: application/json

{
  "title": "Digital Art Collection",
  "description": "A stunning collection of abstract digital artworks",
  "type": "image",
  "tags": ["digital-art", "abstract", "ai-generated"],
  "royaltyPercentage": 10,
  "licenseTypeId": "1"
}
```

#### Get Asset Details
```http
GET /api/assets/{assetId}
```

#### List Assets
```http
GET /api/assets?type=image&limit=20&offset=0
```

### AI Agents

#### Deploy AI Agent
```http
POST /api/agents
Content-Type: application/json

{
  "name": "LicenseBot Pro",
  "type": "negotiator",
  "capabilities": ["negotiate", "analyze", "generate"]
}
```

#### Interact with Agent
```http
POST /api/agents/{agentId}/chat
Content-Type: application/json

{
  "message": "Analyze market conditions for my digital art collection",
  "context": {
    "assetId": "asset_123"
  }
}
```

### Licensing

#### Create License Agreement
```http
POST /api/licenses
Content-Type: application/json

{
  "assetId": "asset_123",
  "licenseeId": "user_456",
  "licenseTypeId": "1",
  "terms": "Commercial use with attribution",
  "duration": "2 years"
}
```

## Partner Integrations

### Story Protocol
```typescript
import { StoryProtocol } from '@story-protocol/sdk'

const story = new StoryProtocol({
  apiKey: process.env.STORY_PROTOCOL_API_KEY,
  network: 'sepolia'
})

// Register IP
const ipAsset = await story.registerIP({
  title: "My Creative Work",
  description: "Description of the work",
  metadata: { /* additional metadata */ }
})
```

### Crossmint NFT Minting
```typescript
import { CrossmintSDK } from '@crossmint/client-sdk'

const crossmint = new CrossmintSDK({
  projectId: process.env.CROSSMINT_PROJECT_ID,
  apiKey: process.env.CROSSMINT_API_KEY
})

// Mint NFT
const nft = await crossmint.nfts.create({
  recipient: "email:user@example.com",
  metadata: {
    name: "IP Asset NFT",
    description: "NFT representing IP ownership"
  }
})
```

### Alchemy Web3 Integration
```typescript
import { Alchemy, Network } from 'alchemy-sdk'

const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA
})

// Get wallet balance
const balance = await alchemy.core.getBalance(walletAddress)
```

## Error Handling

All API endpoints return standardized error responses:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid asset type provided",
    "details": {
      "field": "type",
      "allowedValues": ["image", "audio", "video", "text", "dataset", "code"]
    }
  }
}
```

## Rate Limits

- **Free Tier**: 100 requests/hour
- **Pro Tier**: 1,000 requests/hour  
- **Enterprise**: Unlimited

## SDKs

### JavaScript/TypeScript
```bash
npm install @ipverse/sdk
```

```typescript
import { IPVerse } from '@ipverse/sdk'

const ipverse = new IPVerse({
  apiKey: 'your-api-key',
  environment: 'production'
})

const asset = await ipverse.assets.create({
  title: 'My Asset',
  type: 'image'
})
```

### Python
```bash
pip install ipverse-python
```

```python
from ipverse import IPVerse

client = IPVerse(api_key='your-api-key')
asset = client.assets.create(
    title='My Asset',
    type='image'
)
```

## Webhooks

Subscribe to real-time events:

```http
POST /api/webhooks
Content-Type: application/json

{
  "url": "https://your-app.com/webhooks/ipverse",
  "events": ["asset.registered", "license.created", "infringement.detected"]
}
```

## Support

- **Documentation**: [https://docs.ipverse.app](https://docs.ipverse.app)
- **API Status**: [https://status.ipverse.app](https://status.ipverse.app)
- **Support**: [support@ipverse.app](mailto:support@ipverse.app)