export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  walletAddress?: string;
  createdAt: Date;
}

export interface IPAsset {
  id: string;
  title: string;
  description: string;
  type: 'text' | 'image' | 'audio' | 'dataset' | 'code';
  fileUrl?: string;
  thumbnail?: string;
  creator: User;
  registrationDate: Date;
  licenseType: LicenseType;
  royaltyPercentage: number;
  isVerified: boolean;
  tags: string[];
  metadata: Record<string, any>;
  storyProtocolId?: string;
  crossmintNftId?: string;
}

export interface LicenseType {
  id: string;
  name: string;
  description: string;
  commercialUse: boolean;
  derivativeWorks: boolean;
  attribution: boolean;
  royaltyRequired: boolean;
}

export interface License {
  id: string;
  ipAsset: IPAsset;
  licensee: User;
  licenseType: LicenseType;
  terms: string;
  startDate: Date;
  endDate?: Date;
  royaltyAmount: number;
  status: 'active' | 'expired' | 'pending' | 'terminated';
  contractAddress?: string;
}

export interface AIAgent {
  id: string;
  name: string;
  type: 'negotiator' | 'detector' | 'analyzer' | 'assistant';
  status: 'active' | 'busy' | 'offline';
  capabilities: string[];
  lastActive: Date;
}

export interface AnalyticsData {
  totalAssets: number;
  totalLicenses: number;
  totalRoyalties: number;
  monthlyGrowth: number;
  popularAssets: IPAsset[];
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: 'registration' | 'license' | 'royalty' | 'detection';
  title: string;
  description: string;
  timestamp: Date;
  ipAsset?: IPAsset;
  amount?: number;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}