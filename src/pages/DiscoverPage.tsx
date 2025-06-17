import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SortAsc, Grid, List } from 'lucide-react';
import { IPCard } from '../components/ip/IPCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useIPAssets } from '../hooks/useIPAssets';

export const DiscoverPage: React.FC = () => {
  const { assets, isLoading } = useIPAssets();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const assetTypes = [
    { id: 'all', name: 'All Types', count: assets.length },
    { id: 'image', name: 'Images', count: assets.filter(a => a.type === 'image').length },
    { id: 'audio', name: 'Audio', count: assets.filter(a => a.type === 'audio').length },
    { id: 'dataset', name: 'Datasets', count: assets.filter(a => a.type === 'dataset').length },
    { id: 'code', name: 'Code', count: assets.filter(a => a.type === 'code').length },
  ];

  const sortOptions = [
    { id: 'recent', name: 'Most Recent' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'royalty-low', name: 'Lowest Royalty' },
    { id: 'royalty-high', name: 'Highest Royalty' },
  ];

  const filteredAssets = assets
    .filter(asset => {
      const matchesSearch = asset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           asset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           asset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesType = selectedType === 'all' || asset.type === selectedType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime();
        case 'royalty-low':
          return a.royaltyPercentage - b.royaltyPercentage;
        case 'royalty-high':
          return b.royaltyPercentage - a.royaltyPercentage;
        case 'popular':
        default:
          return 0; // Keep original order for popular
      }
    });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Discover IP Assets
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore and license intellectual property from creators worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search assets by title, description, or tags..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Type Filter */}
            <div className="flex space-x-2">
              {assetTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.name} ({type.count})
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <SortAsc className="h-5 w-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode */}
            <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-none border-r border-gray-300 dark:border-gray-600"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            {filteredAssets.length} assets found
          </p>
          
          {/* Popular Tags */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Popular:</span>
            {['digital-art', 'machine-learning', 'music', 'smart-contracts'].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-900/20"
                onClick={() => setSearchTerm(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Assets Grid/List */}
        {filteredAssets.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }>
            {filteredAssets.map((asset, index) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <IPCard
                  asset={asset}
                  onView={() => console.log('View asset:', asset.id)}
                  onLicense={() => console.log('License asset:', asset.id)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No assets found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredAssets.length > 9 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Assets
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};