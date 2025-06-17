import { useState, useEffect } from 'react';
import { IPAsset, LicenseType, User } from '../types';

// Mock data
const mockLicenseTypes: LicenseType[] = [
  {
    id: '1',
    name: 'Commercial License',
    description: 'Full commercial usage rights with attribution',
    commercialUse: true,
    derivativeWorks: true,
    attribution: true,
    royaltyRequired: true,
  },
  {
    id: '2',
    name: 'Creative Commons',
    description: 'Non-commercial use with attribution',
    commercialUse: false,
    derivativeWorks: true,
    attribution: true,
    royaltyRequired: false,
  },
  {
    id: '3',
    name: 'Exclusive License',
    description: 'Exclusive usage rights for the licensee',
    commercialUse: true,
    derivativeWorks: true,
    attribution: false,
    royaltyRequired: true,
  },
];

const mockCreator: User = {
  id: '1',
  email: 'creator@ipverse.com',
  name: 'Alex Creator',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  createdAt: new Date('2024-01-01'),
};

const mockIPAssets: IPAsset[] = [
  {
    id: '1',
    title: 'Digital Art Collection',
    description: 'A stunning collection of abstract digital artworks created using AI-assisted techniques.',
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    creator: mockCreator,
    registrationDate: new Date('2024-01-15'),
    licenseType: mockLicenseTypes[0],
    royaltyPercentage: 10,
    isVerified: true,
    tags: ['digital-art', 'abstract', 'ai-generated'],
    metadata: { colors: ['blue', 'purple', 'gold'], style: 'abstract' },
    storyProtocolId: 'story_123456',
  },
  {
    id: '2',
    title: 'Machine Learning Dataset',
    description: 'Curated dataset for training computer vision models with 10,000+ labeled images.',
    type: 'dataset',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    creator: mockCreator,
    registrationDate: new Date('2024-01-10'),
    licenseType: mockLicenseTypes[1],
    royaltyPercentage: 5,
    isVerified: true,
    tags: ['dataset', 'machine-learning', 'computer-vision'],
    metadata: { size: '10,000 images', format: 'JSON + JPEG' },
  },
  {
    id: '3',
    title: 'Ambient Music Track',
    description: 'Relaxing ambient music perfect for meditation and focus sessions.',
    type: 'audio',
    thumbnail: 'https://images.pexels.com/photos/210854/pexels-photo-210854.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    creator: mockCreator,
    registrationDate: new Date('2024-01-20'),
    licenseType: mockLicenseTypes[0],
    royaltyPercentage: 15,
    isVerified: true,
    tags: ['music', 'ambient', 'meditation'],
    metadata: { duration: '5:30', bpm: 72 },
  },
  {
    id: '4',
    title: 'Smart Contract Library',
    description: 'Reusable smart contract templates for DeFi applications.',
    type: 'code',
    thumbnail: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    creator: mockCreator,
    registrationDate: new Date('2024-01-25'),
    licenseType: mockLicenseTypes[2],
    royaltyPercentage: 8,
    isVerified: true,
    tags: ['smart-contracts', 'defi', 'solidity'],
    metadata: { language: 'Solidity', audited: true },
  },
];

export const useIPAssets = () => {
  const [assets, setAssets] = useState<IPAsset[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchAssets = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAssets(mockIPAssets);
      setIsLoading(false);
    };

    fetchAssets();
  }, []);

  const addAsset = async (asset: Omit<IPAsset, 'id' | 'registrationDate' | 'isVerified'>) => {
    const newAsset: IPAsset = {
      ...asset,
      id: Date.now().toString(),
      registrationDate: new Date(),
      isVerified: false,
    };
    setAssets(prev => [newAsset, ...prev]);
    return newAsset;
  };

  const updateAsset = async (id: string, updates: Partial<IPAsset>) => {
    setAssets(prev => prev.map(asset => 
      asset.id === id ? { ...asset, ...updates } : asset
    ));
  };

  const deleteAsset = async (id: string) => {
    setAssets(prev => prev.filter(asset => asset.id !== id));
  };

  return {
    assets,
    isLoading,
    addAsset,
    updateAsset,
    deleteAsset,
    licenseTypes: mockLicenseTypes,
  };
};