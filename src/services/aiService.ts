// Mock AI service for demonstration
export interface AIResponse {
  message: string;
  suggestions?: string[];
  confidence?: number;
}

export class AIService {
  static async generateLicenseTerms(
    assetType: string,
    usage: string,
    duration?: string
  ): Promise<AIResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const terms = [
      `License granted for ${usage} usage of ${assetType}`,
      duration ? `Valid for ${duration}` : 'Perpetual license',
      'Attribution required in all uses',
      'Modifications allowed with approval',
      'Sublicensing prohibited without written consent',
    ];

    return {
      message: `Generated comprehensive license terms for your ${assetType}. These terms balance creator protection with licensee flexibility.`,
      suggestions: terms,
      confidence: 0.95,
    };
  }

  static async detectInfringement(assetId: string): Promise<AIResponse> {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockResults = [
      'No infringement detected across 500M+ indexed assets',
      'Similarity score: 12% (within acceptable range)',
      'Original content verification: PASSED',
    ];

    return {
      message: 'Comprehensive infringement scan completed. Your asset appears to be original.',
      suggestions: mockResults,
      confidence: 0.88,
    };
  }

  static async analyzeMarketValue(
    assetType: string,
    tags: string[]
  ): Promise<AIResponse> {
    await new Promise(resolve => setTimeout(resolve, 1800));

    const analysis = [
      `${assetType} assets in ${tags[0]} category: $250-$1,200 average`,
      'Market demand: HIGH (trending +45% this quarter)',
      'Recommended royalty: 8-15% based on comparable assets',
      'Optimal licensing strategy: Tiered pricing model',
    ];

    return {
      message: `Market analysis complete. Your asset shows strong commercial potential in the current market.`,
      suggestions: analysis,
      confidence: 0.92,
    };
  }

  static async generatePRD(projectName: string, requirements: string[]): Promise<AIResponse> {
    await new Promise(resolve => setTimeout(resolve, 2500));

    return {
      message: `Generated comprehensive Product Requirements Document for ${projectName}. Includes technical specifications, user stories, and implementation roadmap.`,
      suggestions: [
        'Executive Summary and Project Overview',
        'Functional Requirements and User Stories',
        'Technical Architecture and Infrastructure',
        'Security and Compliance Requirements',
        'Timeline and Milestone Planning',
      ],
      confidence: 0.94,
    };
  }

  static async negotiateLicense(
    terms: string[],
    counterOffer?: string
  ): Promise<AIResponse> {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      message: counterOffer 
        ? 'Analyzed counter-offer and prepared negotiation response.'
        : 'Initiated licensing negotiation with optimal terms.',
      suggestions: [
        'Proposed 12% royalty rate (market standard)',
        'Attribution requirement maintained',
        '2-year initial term with renewal options',
        'Geographic restrictions: Global excluding China',
      ],
      confidence: 0.87,
    };
  }
}