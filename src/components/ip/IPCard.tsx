import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  Shield, 
  TrendingUp,
  Eye,
  Download,
  Share
} from 'lucide-react';
import { IPAsset } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface IPCardProps {
  asset: IPAsset;
  onView?: () => void;
  onLicense?: () => void;
}

export const IPCard: React.FC<IPCardProps> = ({ asset, onView, onLicense }) => {
  const getTypeIcon = (type: string) => {
    const icons = {
      image: '🎨',
      audio: '🎵',
      video: '🎬',
      text: '📝',
      dataset: '📊',
      code: '💻',
    };
    return icons[type as keyof typeof icons] || '📄';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      image: 'primary',
      audio: 'secondary',
      video: 'warning',
      text: 'success',
      dataset: 'error',
      code: 'primary',
    };
    return colors[type as keyof typeof colors] || 'primary';
  };

  return (
    <Card hover className="overflow-hidden">
      <div className="relative">
        {asset.thumbnail && (
          <img
            src={asset.thumbnail}
            alt={asset.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="absolute top-3 left-3">
          <Badge variant={getTypeColor(asset.type) as any}>
            {getTypeIcon(asset.type)} {asset.type.toUpperCase()}
          </Badge>
        </div>
        {asset.isVerified && (
          <div className="absolute top-3 right-3">
            <div className="bg-green-500 text-white p-1 rounded-full">
              <Shield className="h-4 w-4" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">
          {asset.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {asset.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src={asset.creator.avatar || `https://ui-avatars.com/api/?name=${asset.creator.name}&background=374151&color=fff`}
              alt={asset.creator.name}
              className="h-6 w-6 rounded-full"
            />
            <span className="text-sm text-gray-400">
              {asset.creator.name}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            {asset.registrationDate.toLocaleDateString()}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {asset.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" size="sm">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-400">
            Royalty: {asset.royaltyPercentage}%
          </div>
          <div className="text-sm font-medium text-green-400">
            {asset.licenseType.name}
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onView}
            className="flex-1 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
          >
            <Eye className="h-4 w-4 mr-1" />
            View
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={onLicense}
            className="flex-1"
          >
            <Download className="h-4 w-4 mr-1" />
            License
          </Button>
          <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white">
            <Share className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};