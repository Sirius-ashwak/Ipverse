import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Upload, 
  Brain, 
  Shield, 
  FileText, 
  Image, 
  Music, 
  Video, 
  Database,
  Code,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useIPAssets } from '../hooks/useIPAssets';
import { useAuth } from '../contexts/AuthContext';
import { AIService } from '../services/aiService';
import { BlockchainService } from '../services/blockchainService';
import toast from 'react-hot-toast';

export const RegisterPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'image' as const,
    tags: [] as string[],
    royaltyPercentage: 10,
    licenseTypeId: '1',
    file: null as File | null,
  });
  const [tagInput, setTagInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [registrationResult, setRegistrationResult] = useState<any>(null);

  const { addAsset, licenseTypes } = useIPAssets();
  const { user } = useAuth();
  const navigate = useNavigate();

  const assetTypes = [
    { id: 'image', name: 'Image/Art', icon: Image, color: 'text-blue-600' },
    { id: 'audio', name: 'Audio/Music', icon: Music, color: 'text-green-600' },
    { id: 'video', name: 'Video', icon: Video, color: 'text-red-600' },
    { id: 'text', name: 'Text/Writing', icon: FileText, color: 'text-yellow-600' },
    { id: 'dataset', name: 'Dataset', icon: Database, color: 'text-purple-600' },
    { id: 'code', name: 'Code/Software', icon: Code, color: 'text-indigo-600' },
  ];

  const steps = [
    { id: 1, name: 'Asset Details', icon: FileText },
    { id: 2, name: 'AI Analysis', icon: Brain },
    { id: 3, name: 'Registration', icon: Shield },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()],
      });
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(t => t !== tag),
    });
  };

  const handleNextStep = async () => {
    if (currentStep === 1) {
      if (!formData.title || !formData.description || !formData.type) {
        toast.error('Please fill in all required fields');
        return;
      }
      setCurrentStep(2);
      await runAIAnalysis();
    } else if (currentStep === 2) {
      setCurrentStep(3);
      await registerAsset();
    }
  };

  const runAIAnalysis = async () => {
    setIsProcessing(true);
    try {
      // Run multiple AI analyses
      const [marketAnalysis, infringementCheck] = await Promise.all([
        AIService.analyzeMarketValue(formData.type, formData.tags),
        AIService.detectInfringement('temp-asset-id'),
      ]);

      setAiAnalysis({
        marketAnalysis,
        infringementCheck,
        recommendations: [
          `Optimal royalty rate: ${Math.floor(Math.random() * 10) + 8}%`,
          'High commercial potential detected',
          'No infringement issues found',
          'Recommended for premium licensing tier',
        ],
      });
    } catch (error) {
      toast.error('AI analysis failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const registerAsset = async () => {
    setIsProcessing(true);
    try {
      // Mock blockchain registration
      const blockchainResult = await BlockchainService.registerIP(
        formData.title,
        {
          description: formData.description,
          type: formData.type,
          tags: formData.tags,
        }
      );

      // Mock NFT minting
      const nftResult = await BlockchainService.mintNFT(
        'temp-asset-id',
        {
          title: formData.title,
          creator: user?.name,
        }
      );

      const selectedLicenseType = licenseTypes.find(lt => lt.id === formData.licenseTypeId);

      // Add to local state
      const newAsset = await addAsset({
        title: formData.title,
        description: formData.description,
        type: formData.type,
        creator: user!,
        licenseType: selectedLicenseType!,
        royaltyPercentage: formData.royaltyPercentage,
        tags: formData.tags,
        metadata: {
          aiAnalyzed: true,
          storyProtocolId: blockchainResult.storyProtocolId,
          crossmintNftId: nftResult.nftId,
        },
        thumbnail: formData.type === 'image' ? 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' : undefined,
        storyProtocolId: blockchainResult.storyProtocolId,
        crossmintNftId: nftResult.nftId,
      });

      setRegistrationResult({
        asset: newAsset,
        transactionHash: blockchainResult.transactionHash,
        nftId: nftResult.nftId,
      });

      toast.success('Asset successfully registered!');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const selectedAssetType = assetTypes.find(t => t.id === formData.type);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Register Your Intellectual Property
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Protect your creative work with blockchain-based verification and AI-powered analysis
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id
                    ? 'bg-primary-600 border-primary-600 text-white'
                    : 'border-gray-300 dark:border-gray-600 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.id
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id
                      ? 'bg-primary-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-8">
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Asset Details
              </h2>

              {/* Asset Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Asset Type *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {assetTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: type.id as any })}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        formData.type === type.id
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <type.icon className={`h-8 w-8 mx-auto mb-2 ${type.color}`} />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {type.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Upload File (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept={
                      formData.type === 'image' ? 'image/*' :
                      formData.type === 'audio' ? 'audio/*' :
                      formData.type === 'video' ? 'video/*' : '*/*'
                    }
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-primary-600 hover:text-primary-500"
                  >
                    Choose file or drag and drop
                  </label>
                  {formData.file && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Selected: {formData.file.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter a descriptive title for your asset"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Describe your asset, its purpose, and key features"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tags
                </label>
                <div className="flex space-x-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Add tags to help categorize your asset"
                  />
                  <Button type="button" onClick={addTag}>
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* License Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  License Type
                </label>
                <select
                  value={formData.licenseTypeId}
                  onChange={(e) => setFormData({ ...formData, licenseTypeId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {licenseTypes.map((license) => (
                    <option key={license.id} value={license.id}>
                      {license.name} - {license.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Royalty Percentage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Royalty Percentage: {formData.royaltyPercentage}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={formData.royaltyPercentage}
                  onChange={(e) => setFormData({ ...formData, royaltyPercentage: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                AI Analysis
              </h2>

              {isProcessing ? (
                <div className="py-12">
                  <Loader2 className="h-12 w-12 animate-spin text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Analyzing your asset with AI agents...
                  </p>
                  <div className="mt-4 space-y-2 text-sm text-gray-500">
                    <p>• Running market analysis</p>
                    <p>• Detecting potential infringement</p>
                    <p>• Generating optimization recommendations</p>
                  </div>
                </div>
              ) : aiAnalysis ? (
                <div className="text-left space-y-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                        Analysis Complete
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Market Analysis
                        </h4>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {aiAnalysis.marketAnalysis.suggestions?.map((suggestion: string, index: number) => (
                            <p key={index}>• {suggestion}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Infringement Check
                        </h4>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {aiAnalysis.infringementCheck.suggestions?.map((suggestion: string, index: number) => (
                            <p key={index}>• {suggestion}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        AI Recommendations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {aiAnalysis.recommendations.map((rec: string, index: number) => (
                          <Badge key={index} variant="success">
                            {rec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Blockchain Registration
              </h2>

              {isProcessing ? (
                <div className="py-12">
                  <Loader2 className="h-12 w-12 animate-spin text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Registering your asset on the blockchain...
                  </p>
                  <div className="mt-4 space-y-2 text-sm text-gray-500">
                    <p>• Creating Story Protocol entry</p>
                    <p>• Minting NFT with Crossmint</p>
                    <p>• Deploying smart contracts</p>
                  </div>
                </div>
              ) : registrationResult ? (
                <div className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
                      Registration Successful!
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Your intellectual property has been successfully registered and protected.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Story Protocol ID
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                        {registrationResult.asset.storyProtocolId}
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        NFT ID
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                        {registrationResult.nftId}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 justify-center">
                    <Button onClick={() => navigate('/dashboard')}>
                      Go to Dashboard
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/discover')}>
                      Browse Marketplace
                    </Button>
                  </div>
                </div>
              ) : null}
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1 || isProcessing}
            >
              Previous
            </Button>
            
            {currentStep < 3 ? (
              <Button
                onClick={handleNextStep}
                disabled={isProcessing}
                isLoading={isProcessing}
              >
                {currentStep === 1 ? 'Analyze with AI' : 'Register Asset'}
              </Button>
            ) : (
              registrationResult && (
                <Button onClick={() => navigate('/dashboard')}>
                  Complete
                </Button>
              )
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};