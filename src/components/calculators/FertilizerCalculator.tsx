
import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calculator, Leaf, BarChart3, Target, AlertCircle, CheckCircle, Info, Download, FileText, TrendingUp, Droplets, Thermometer } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Enhanced crop data with more detailed information
const cropData = {
  wheat: { 
    name: 'Wheat', 
    n: 120, 
    p: 60, 
    k: 40, 
    season: 'Rabi',
    yieldPotential: 4500,
    criticalStages: ['Tillering', 'Jointing', 'Flowering'],
    soilPh: { min: 6.0, max: 7.5 },
    climate: 'Cool and dry'
  },
  rice: { 
    name: 'Rice', 
    n: 100, 
    p: 50, 
    k: 50, 
    season: 'Kharif',
    yieldPotential: 6000,
    criticalStages: ['Tillering', 'Panicle initiation', 'Grain filling'],
    soilPh: { min: 5.5, max: 6.5 },
    climate: 'Warm and humid'
  },
  corn: { 
    name: 'Corn/Maize', 
    n: 150, 
    p: 75, 
    k: 60, 
    season: 'Kharif',
    yieldPotential: 8000,
    criticalStages: ['V6-V8', 'Tasseling', 'Grain filling'],
    soilPh: { min: 6.0, max: 6.8 },
    climate: 'Warm with adequate moisture'
  },
  potato: { 
    name: 'Potato', 
    n: 180, 
    p: 80, 
    k: 120, 
    season: 'Both',
    yieldPotential: 25000,
    criticalStages: ['Tuber initiation', 'Tuber bulking', 'Maturity'],
    soilPh: { min: 5.2, max: 6.0 },
    climate: 'Cool and moist'
  },
  tomato: { 
    name: 'Tomato', 
    n: 200, 
    p: 100, 
    k: 150, 
    season: 'Both',
    yieldPotential: 60000,
    criticalStages: ['Flowering', 'Fruit set', 'Fruit development'],
    soilPh: { min: 6.0, max: 6.8 },
    climate: 'Warm and well-drained'
  },
  cotton: { 
    name: 'Cotton', 
    n: 160, 
    p: 80, 
    k: 80, 
    season: 'Kharif',
    yieldPotential: 2500,
    criticalStages: ['Squaring', 'Flowering', 'Boll development'],
    soilPh: { min: 5.8, max: 8.0 },
    climate: 'Warm with moderate rainfall'
  },
  sugarcane: { 
    name: 'Sugarcane', 
    n: 280, 
    p: 92, 
    k: 140, 
    season: 'Both',
    yieldPotential: 80000,
    criticalStages: ['Tillering', 'Grand growth', 'Maturity'],
    soilPh: { min: 6.5, max: 7.5 },
    climate: 'Tropical with high rainfall'
  },
  soybean: { 
    name: 'Soybean', 
    n: 40, 
    p: 80, 
    k: 100, 
    season: 'Kharif',
    yieldPotential: 2500,
    criticalStages: ['R1-R2', 'R3-R4', 'R5-R6'],
    soilPh: { min: 6.0, max: 7.0 },
    climate: 'Warm with adequate moisture'
  },
  mustard: { 
    name: 'Mustard', 
    n: 100, 
    p: 60, 
    k: 40, 
    season: 'Rabi',
    yieldPotential: 1800,
    criticalStages: ['Rosette', 'Flowering', 'Pod filling'],
    soilPh: { min: 6.5, max: 7.5 },
    climate: 'Cool and dry'
  },
  onion: { 
    name: 'Onion', 
    n: 150, 
    p: 75, 
    k: 75, 
    season: 'Both',
    yieldPotential: 40000,
    criticalStages: ['Bulb initiation', 'Bulb development', 'Maturity'],
    soilPh: { min: 6.0, max: 7.0 },
    climate: 'Cool and dry'
  },
  cabbage: { 
    name: 'Cabbage', 
    n: 120, 
    p: 80, 
    k: 100, 
    season: 'Both',
    yieldPotential: 50000,
    criticalStages: ['Head formation', 'Head development', 'Maturity'],
    soilPh: { min: 6.0, max: 6.5 },
    climate: 'Cool and moist'
  },
  carrot: { 
    name: 'Carrot', 
    n: 100, 
    p: 50, 
    k: 120, 
    season: 'Both',
    yieldPotential: 30000,
    criticalStages: ['Root development', 'Root elongation', 'Maturity'],
    soilPh: { min: 6.0, max: 6.5 },
    climate: 'Cool and well-drained'
  }
};

// Enhanced fertilizer data with more options
const fertilizerData = {
  urea: { name: 'Urea', n: 46, p: 0, k: 0, price: 6.5, type: 'Nitrogen' },
  dap: { name: 'DAP', n: 18, p: 46, k: 0, price: 28, type: 'Phosphorus' },
  mop: { name: 'MOP (Muriate of Potash)', n: 0, p: 0, k: 60, price: 18, type: 'Potassium' },
  ssp: { name: 'SSP (Single Super Phosphate)', n: 0, p: 16, k: 0, price: 8, type: 'Phosphorus' },
  tsp: { name: 'TSP (Triple Super Phosphate)', n: 0, p: 46, k: 0, price: 22, type: 'Phosphorus' },
  npk: { name: 'NPK (10:26:26)', n: 10, p: 26, k: 26, price: 24, type: 'Complex' },
  can: { name: 'CAN (Calcium Ammonium Nitrate)', n: 26, p: 0, k: 0, price: 12, type: 'Nitrogen' },
  sop: { name: 'SOP (Sulphate of Potash)', n: 0, p: 0, k: 50, price: 35, type: 'Potassium' },
  complexNPK: { name: 'NPK (20:20:20)', n: 20, p: 20, k: 20, price: 32, type: 'Complex' },
  ammoniumSulfate: { name: 'Ammonium Sulfate', n: 21, p: 0, k: 0, price: 10, type: 'Nitrogen' },
  rockPhosphate: { name: 'Rock Phosphate', n: 0, p: 30, k: 0, price: 15, type: 'Phosphorus' },
  potashMuriate: { name: 'Potash Muriate', n: 0, p: 0, k: 50, price: 20, type: 'Potassium' }
};

// Enhanced soil types with detailed characteristics
const soilTypes = {
  sandy: { 
    name: 'Sandy Soil', 
    nEfficiency: 0.7, 
    pEfficiency: 0.8, 
    kEfficiency: 0.6,
    waterHolding: 'Low',
    drainage: 'Excellent',
    cec: 'Low',
    recommendations: 'Use slow-release fertilizers, frequent light applications'
  },
  loamy: { 
    name: 'Loamy Soil', 
    nEfficiency: 0.8, 
    pEfficiency: 0.9, 
    kEfficiency: 0.8,
    waterHolding: 'Good',
    drainage: 'Good',
    cec: 'Medium',
    recommendations: 'Ideal soil type, follow standard application rates'
  },
  clay: { 
    name: 'Clay Soil', 
    nEfficiency: 0.75, 
    pEfficiency: 0.85, 
    kEfficiency: 0.9,
    waterHolding: 'High',
    drainage: 'Poor',
    cec: 'High',
    recommendations: 'Improve drainage, apply in dry conditions'
  },
  silt: { 
    name: 'Silt Soil', 
    nEfficiency: 0.85, 
    pEfficiency: 0.9, 
    kEfficiency: 0.75,
    waterHolding: 'Medium',
    drainage: 'Moderate',
    cec: 'Medium',
    recommendations: 'Good fertility retention, avoid over-watering'
  },
  laterite: { 
    name: 'Laterite Soil', 
    nEfficiency: 0.65, 
    pEfficiency: 0.7, 
    kEfficiency: 0.7,
    waterHolding: 'Low',
    drainage: 'Good',
    cec: 'Low',
    recommendations: 'Add organic matter, frequent applications needed'
  },
  alluvial: { 
    name: 'Alluvial Soil', 
    nEfficiency: 0.85, 
    pEfficiency: 0.9, 
    kEfficiency: 0.85,
    waterHolding: 'Good',
    drainage: 'Good',
    cec: 'High',
    recommendations: 'Excellent for most crops, balanced fertilization'
  }
};

interface FertilizerResult {
  fertilizerName: string;
  quantity: number;
  cost: number;
  nutrients: { n: number; p: number; k: number };
  applicationStages: string[];
}

interface SoilTestResults {
  n: number;
  p: number;
  k: number;
  ph: number;
  organicMatter: number;
  ec: number;
  sulfur: number;
  zinc: number;
  iron: number;
}

interface WeatherData {
  temperature: number;
  rainfall: number;
  humidity: number;
  season: string;
}

const FertilizerCalculator: React.FC = () => {
  const { toast } = useToast();
  
  // Basic inputs
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [soilType, setSoilType] = useState<string>('');
  const [yieldTarget, setYieldTarget] = useState<string>('');
  const [fieldHistory, setFieldHistory] = useState<string>('');
  
  // Advanced inputs
  const [soilTest, setSoilTest] = useState<SoilTestResults>({
    n: 0, p: 0, k: 0, ph: 7, organicMatter: 2, ec: 0.5, sulfur: 10, zinc: 0.6, iron: 4.5
  });
  const [customNPK, setCustomNPK] = useState({ n: '', p: '', k: '' });
  const [organicFertilizer, setOrganicFertilizer] = useState<string>('0');
  const [irrigationType, setIrrigationType] = useState<string>('');
  const [previousCrop, setPreviousCrop] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 25, rainfall: 500, humidity: 60, season: 'normal'
  });
  
  // Advanced settings
  const [splitApplication, setSplitApplication] = useState<boolean>(true);
  const [organicPreference, setOrganicPreference] = useState<boolean>(false);
  const [budgetLimit, setBudgetLimit] = useState<string>('');
  const [environmentalConcern, setEnvironmentalConcern] = useState<boolean>(false);
  
  // Results
  const [results, setResults] = useState<FertilizerResult[]>([]);
  const [recommendations, setRecommendations] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);
  const [detailedAnalysis, setDetailedAnalysis] = useState<any>(null);

  const calculateFertilizer = useCallback(() => {
    if (!selectedCrop || !area || !soilType) {
      toast({
        title: "Missing Information",
        description: "Please fill in crop, area, and soil type.",
        variant: "destructive"
      });
      return;
    }

    const crop = cropData[selectedCrop as keyof typeof cropData];
    const soil = soilTypes[soilType as keyof typeof soilTypes];
    const areaNum = parseFloat(area);
    const yieldFactor = yieldTarget ? parseFloat(yieldTarget) / 100 : 1;
    const organicReduction = parseFloat(organicFertilizer) * 0.3;

    // Calculate base nutrient requirements
    let nRequired = crop.n * areaNum * yieldFactor;
    let pRequired = crop.p * areaNum * yieldFactor;
    let kRequired = crop.k * areaNum * yieldFactor;

    // Adjust for environmental factors
    if (weather.temperature > 30) {
      nRequired *= 1.1; // Higher temperature increases N requirement
    }
    if (weather.rainfall > 1000) {
      nRequired *= 1.15; // High rainfall increases leaching
      kRequired *= 1.1;
    }

    // Adjust for soil test results
    if (soilTest.n > 0) nRequired = Math.max(0, nRequired - (soilTest.n * areaNum * 0.5));
    if (soilTest.p > 0) pRequired = Math.max(0, pRequired - (soilTest.p * areaNum * 2.2));
    if (soilTest.k > 0) kRequired = Math.max(0, kRequired - (soilTest.k * areaNum * 1.2));

    // pH adjustment
    if (soilTest.ph < crop.soilPh.min) {
      pRequired *= 1.2; // Acidic soil reduces P availability
    }
    if (soilTest.ph > crop.soilPh.max) {
      nRequired *= 1.1; // Alkaline soil affects N availability
    }

    // Custom NPK override
    if (customNPK.n) nRequired = parseFloat(customNPK.n) * areaNum;
    if (customNPK.p) pRequired = parseFloat(customNPK.p) * areaNum;
    if (customNPK.k) kRequired = parseFloat(customNPK.k) * areaNum;

    // Reduce for organic fertilizer
    nRequired = Math.max(0, nRequired - organicReduction);
    pRequired = Math.max(0, pRequired - (organicReduction * 0.5));
    kRequired = Math.max(0, kRequired - (organicReduction * 0.8));

    // Adjust for soil efficiency
    nRequired = nRequired / soil.nEfficiency;
    pRequired = pRequired / soil.pEfficiency;
    kRequired = kRequired / soil.kEfficiency;

    // Calculate fertilizer combinations
    const fertilizers: FertilizerResult[] = [];
    
    // Generate multiple fertilizer options
    const generateFertilizerOptions = () => {
      const options = [];
      
      // Option 1: Single fertilizers
      if (nRequired > 5) {
        const ureaQty = nRequired / (fertilizerData.urea.n / 100);
        options.push({
          fertilizerName: 'Urea',
          quantity: Math.round(ureaQty * 10) / 10,
          cost: ureaQty * fertilizerData.urea.price,
          nutrients: { n: nRequired, p: 0, k: 0 },
          applicationStages: splitApplication ? ['Basal (50%)', 'Top dressing 1 (30%)', 'Top dressing 2 (20%)'] : ['Single application']
        });
      }

      if (pRequired > 5) {
        const dapQty = pRequired / (fertilizerData.dap.p / 100);
        options.push({
          fertilizerName: 'DAP',
          quantity: Math.round(dapQty * 10) / 10,
          cost: dapQty * fertilizerData.dap.price,
          nutrients: { n: dapQty * (fertilizerData.dap.n / 100), p: pRequired, k: 0 },
          applicationStages: ['Basal application (100%)']
        });
      }

      if (kRequired > 5) {
        const mopQty = kRequired / (fertilizerData.mop.k / 100);
        options.push({
          fertilizerName: 'MOP',
          quantity: Math.round(mopQty * 10) / 10,
          cost: mopQty * fertilizerData.mop.price,
          nutrients: { n: 0, p: 0, k: kRequired },
          applicationStages: splitApplication ? ['Basal (60%)', 'Top dressing (40%)'] : ['Single application']
        });
      }

      // Option 2: Complex fertilizers
      if (nRequired > 5 && pRequired > 5 && kRequired > 5) {
        const npkQty = Math.max(
          nRequired / (fertilizerData.complexNPK.n / 100),
          pRequired / (fertilizerData.complexNPK.p / 100),
          kRequired / (fertilizerData.complexNPK.k / 100)
        );
        options.push({
          fertilizerName: 'NPK Complex (20:20:20)',
          quantity: Math.round(npkQty * 10) / 10,
          cost: npkQty * fertilizerData.complexNPK.price,
          nutrients: { 
            n: npkQty * (fertilizerData.complexNPK.n / 100), 
            p: npkQty * (fertilizerData.complexNPK.p / 100), 
            k: npkQty * (fertilizerData.complexNPK.k / 100) 
          },
          applicationStages: ['Basal application (100%)']
        });
      }

      return options;
    };

    const fertilizerOptions = generateFertilizerOptions();
    
    // Apply budget constraint if specified
    let finalOptions = fertilizerOptions;
    if (budgetLimit) {
      const budget = parseFloat(budgetLimit);
      finalOptions = fertilizerOptions.filter(option => option.cost <= budget);
    }

    // Generate detailed analysis
    const analysis = {
      soilHealth: analyzeSoilHealth(soilTest),
      cropSuitability: analyzeCropSuitability(crop, soil, soilTest),
      environmentalImpact: analyzeEnvironmentalImpact(finalOptions, environmentalConcern),
      costAnalysis: analyzeCostEffectiveness(finalOptions),
      yieldPrediction: predictYield(crop, soil, soilTest, finalOptions),
      recommendations: generateAdvancedRecommendations(crop, soil, soilTest, weather)
    };

    // Generate comprehensive recommendations
    const rec = {
      crop: crop.name,
      area: areaNum,
      soilType: soil.name,
      totalNutrients: { n: nRequired, p: pRequired, k: kRequired },
      totalCost: finalOptions.reduce((sum, f) => sum + f.cost, 0),
      applicationTiming: generateApplicationTiming(crop.season, crop.criticalStages),
      soilHealth: analysis.soilHealth,
      tips: analysis.recommendations,
      yieldPrediction: analysis.yieldPrediction,
      environmentalScore: analysis.environmentalImpact.score
    };

    setResults(finalOptions);
    setRecommendations(rec);
    setDetailedAnalysis(analysis);
    setShowResults(true);

    toast({
      title: "Advanced Calculation Complete",
      description: `Detailed fertilizer analysis generated for ${crop.name}`,
    });
  }, [selectedCrop, area, soilType, yieldTarget, soilTest, customNPK, organicFertilizer, 
      splitApplication, budgetLimit, environmentalConcern, weather, irrigationType, toast]);

  const generateApplicationTiming = (season: string, stages: string[]) => {
    const timingMap: { [key: string]: string[] } = {
      'Kharif': ['Pre-monsoon (May)', 'At sowing (June-July)', 'Vegetative stage (August)', 'Reproductive stage (September)'],
      'Rabi': ['Land preparation (October)', 'At sowing (November)', 'Tillering (December)', 'Grain filling (January)'],
      'Both': ['Pre-sowing', 'At sowing', 'Vegetative stage', 'Reproductive stage']
    };
    return timingMap[season] || timingMap['Both'];
  };

  const analyzeSoilHealth = (soil: SoilTestResults) => {
    const analysis = [];
    
    // pH analysis
    if (soil.ph < 5.5) analysis.push({ type: 'critical', message: '🔴 Severely acidic soil - immediate liming required' });
    else if (soil.ph < 6.0) analysis.push({ type: 'warning', message: '⚠️ Acidic soil - consider liming' });
    else if (soil.ph > 8.5) analysis.push({ type: 'critical', message: '🔴 Highly alkaline - may cause nutrient lockup' });
    else if (soil.ph > 8.0) analysis.push({ type: 'warning', message: '⚠️ Alkaline soil - monitor nutrient availability' });
    else analysis.push({ type: 'good', message: '✅ Optimal pH range for most crops' });

    // Organic matter analysis
    if (soil.organicMatter < 1.0) analysis.push({ type: 'critical', message: '🔴 Very low organic matter - urgent compost addition needed' });
    else if (soil.organicMatter < 2.0) analysis.push({ type: 'warning', message: '🟡 Low organic matter - add compost regularly' });
    else if (soil.organicMatter > 4.0) analysis.push({ type: 'excellent', message: '🌟 Excellent organic matter content' });
    else analysis.push({ type: 'good', message: '✅ Good organic matter levels' });

    // EC analysis (salinity)
    if (soil.ec > 4.0) analysis.push({ type: 'critical', message: '🔴 High salinity - crops may suffer' });
    else if (soil.ec > 2.0) analysis.push({ type: 'warning', message: '⚠️ Moderate salinity - choose salt-tolerant varieties' });
    else analysis.push({ type: 'good', message: '✅ Normal salinity levels' });

    // Nutrient analysis
    if (soil.n < 200) analysis.push({ type: 'warning', message: '🔴 Low available nitrogen' });
    if (soil.p < 10) analysis.push({ type: 'warning', message: '🟡 Low available phosphorus' });
    if (soil.k < 100) analysis.push({ type: 'warning', message: '🟠 Low available potassium' });

    return analysis;
  };

  const analyzeCropSuitability = (crop: any, soil: any, soilTest: SoilTestResults) => {
    const suitability = [];
    
    // pH suitability
    const phSuitable = soilTest.ph >= crop.soilPh.min && soilTest.ph <= crop.soilPh.max;
    if (phSuitable) {
      suitability.push({ type: 'good', message: `✅ Soil pH suitable for ${crop.name}` });
    } else {
      suitability.push({ type: 'warning', message: `⚠️ Soil pH not optimal for ${crop.name} (ideal: ${crop.soilPh.min}-${crop.soilPh.max})` });
    }

    // Soil type suitability
    if (soil.name === 'Loamy Soil' || soil.name === 'Alluvial Soil') {
      suitability.push({ type: 'excellent', message: `🌟 ${soil.name} is excellent for ${crop.name}` });
    } else if (soil.name === 'Sandy Soil' && ['potato', 'carrot'].includes(crop.name.toLowerCase())) {
      suitability.push({ type: 'good', message: `✅ ${soil.name} is suitable for root crops like ${crop.name}` });
    }

    return suitability;
  };

  const analyzeEnvironmentalImpact = (fertilizers: FertilizerResult[], environmentalConcern: boolean) => {
    let score = 100;
    const impacts = [];

    fertilizers.forEach(fert => {
      if (fert.fertilizerName.includes('Urea')) {
        score -= 10;
        impacts.push('Urea can contribute to ammonia volatilization');
      }
      if (fert.quantity > 200) {
        score -= 15;
        impacts.push('High fertilizer rates may increase leaching risk');
      }
    });

    if (environmentalConcern) {
      impacts.push('Consider organic alternatives and precision application');
      impacts.push('Use soil testing for targeted nutrient management');
    }

    return { score: Math.max(score, 0), impacts };
  };

  const analyzeCostEffectiveness = (fertilizers: FertilizerResult[]) => {
    const totalCost = fertilizers.reduce((sum, f) => sum + f.cost, 0);
    const costPerHa = totalCost / parseFloat(area || '1');
    
    return {
      totalCost,
      costPerHa,
      recommendation: costPerHa > 15000 ? 'High cost - consider bulk purchasing or alternative fertilizers' :
                     costPerHa > 10000 ? 'Moderate cost - budget accordingly' :
                     'Cost-effective fertilizer program'
    };
  };

  const predictYield = (crop: any, soil: any, soilTest: SoilTestResults, fertilizers: FertilizerResult[]) => {
    let yieldFactor = 1.0;
    
    // Soil quality impact
    if (soilTest.ph >= crop.soilPh.min && soilTest.ph <= crop.soilPh.max) yieldFactor += 0.1;
    if (soilTest.organicMatter > 3.0) yieldFactor += 0.15;
    if (soil.name === 'Loamy Soil') yieldFactor += 0.1;
    
    // Fertilizer adequacy
    const totalN = fertilizers.reduce((sum, f) => sum + f.nutrients.n, 0);
    const totalP = fertilizers.reduce((sum, f) => sum + f.nutrients.p, 0);
    const totalK = fertilizers.reduce((sum, f) => sum + f.nutrients.k, 0);
    
    if (totalN >= crop.n * 0.8) yieldFactor += 0.05;
    if (totalP >= crop.p * 0.8) yieldFactor += 0.05;
    if (totalK >= crop.k * 0.8) yieldFactor += 0.05;
    
    const predictedYield = crop.yieldPotential * yieldFactor;
    const yieldIncrease = ((yieldFactor - 1) * 100).toFixed(1);
    
    return {
      predicted: Math.round(predictedYield),
      potential: crop.yieldPotential,
      increase: yieldIncrease,
      factors: yieldFactor > 1.2 ? 'Excellent conditions' : 
               yieldFactor > 1.1 ? 'Good conditions' : 
               yieldFactor > 1.0 ? 'Fair conditions' : 'Challenging conditions'
    };
  };

  const generateAdvancedRecommendations = (crop: any, soil: any, soilTest: SoilTestResults, weather: WeatherData) => {
    const recommendations = [];
    
    // Application timing
    recommendations.push('🕐 Apply phosphorus fertilizers 2-3 weeks before sowing for better root development');
    recommendations.push('🌱 Split nitrogen applications to match crop uptake patterns');
    
    // Weather-based recommendations
    if (weather.rainfall > 800) {
      recommendations.push('🌧️ High rainfall area - use slow-release fertilizers to prevent leaching');
    }
    if (weather.temperature > 30) {
      recommendations.push('🌡️ High temperature - apply fertilizers during cooler hours');
    }
    
    // Soil-specific recommendations
    if (soil.drainage === 'Poor') {
      recommendations.push('💧 Poor drainage - ensure proper field drainage before fertilizer application');
    }
    if (soilTest.organicMatter < 2.0) {
      recommendations.push('🍂 Add 2-3 tons of farmyard manure or compost per hectare');
    }
    
    // Crop-specific recommendations
    recommendations.push(`🎯 For ${crop.name}, focus on ${crop.criticalStages.join(', ')} stages`);
    
    return recommendations;
  };

  const resetCalculator = useCallback(() => {
    setSelectedCrop('');
    setArea('');
    setSoilType('');
    setYieldTarget('');
    setFieldHistory('');
    setSoilTest({ n: 0, p: 0, k: 0, ph: 7, organicMatter: 2, ec: 0.5, sulfur: 10, zinc: 0.6, iron: 4.5 });
    setCustomNPK({ n: '', p: '', k: '' });
    setOrganicFertilizer('0');
    setIrrigationType('');
    setPreviousCrop('');
    setWeather({ temperature: 25, rainfall: 500, humidity: 60, season: 'normal' });
    setSplitApplication(true);
    setOrganicPreference(false);
    setBudgetLimit('');
    setEnvironmentalConcern(false);
    setResults([]);
    setRecommendations(null);
    setDetailedAnalysis(null);
    setShowResults(false);
  }, []);

  const exportResults = useCallback(() => {
    if (!recommendations) return;
    
    const reportData = {
      crop: recommendations.crop,
      area: recommendations.area,
      soilType: recommendations.soilType,
      fertilizers: results,
      totalCost: recommendations.totalCost,
      applicationTiming: recommendations.applicationTiming,
      recommendations: recommendations.tips,
      generatedOn: new Date().toLocaleDateString()
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `fertilizer-report-${recommendations.crop.toLowerCase()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    
    toast({
      title: "Report Exported",
      description: "Fertilizer calculation report has been downloaded",
    });
  }, [recommendations, results, toast]);

  const totalCost = useMemo(() => {
    return results.reduce((sum, result) => sum + result.cost, 0);
  }, [results]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardTitle className="flex items-center gap-3 text-2xl text-green-700">
            <Leaf className="h-8 w-8" />
            Professional Fertilizer Calculator
            <Badge variant="secondary" className="ml-auto">Advanced v2.0</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="soil-analysis">Soil Analysis</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="environmental">Environment</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="crop">Select Crop *</Label>
                    <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your crop" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(cropData).map(([key, crop]) => (
                          <SelectItem key={key} value={key}>
                            {crop.name} ({crop.season}) - {crop.yieldPotential/1000}t/ha
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="area">Cultivated Area (Hectares) *</Label>
                    <Input
                      id="area"
                      type="number"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="Enter area in hectares"
                      min="0"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="soil-type">Soil Type *</Label>
                    <Select value={soilType} onValueChange={setSoilType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(soilTypes).map(([key, soil]) => (
                          <SelectItem key={key} value={key}>
                            {soil.name} - {soil.waterHolding} water holding
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="yield-target">Yield Target (% of potential)</Label>
                    <Input
                      id="yield-target"
                      type="number"
                      value={yieldTarget}
                      onChange={(e) => setYieldTarget(e.target.value)}
                      placeholder="80-120% (100 = normal)"
                      min="50"
                      max="150"
                    />
                  </div>

                  <div>
                    <Label htmlFor="irrigation">Irrigation Type</Label>
                    <Select value={irrigationType} onValueChange={setIrrigationType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select irrigation method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rainfed">Rainfed</SelectItem>
                        <SelectItem value="flood">Flood Irrigation</SelectItem>
                        <SelectItem value="sprinkler">Sprinkler</SelectItem>
                        <SelectItem value="drip">Drip Irrigation</SelectItem>
                        <SelectItem value="furrow">Furrow Irrigation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="previous-crop">Previous Crop</Label>
                    <Select value={previousCrop} onValueChange={setPreviousCrop}>
                      <SelectTrigger>
                        <SelectValue placeholder="What was grown before?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="legume">Legume crop</SelectItem>
                        <SelectItem value="cereal">Cereal crop</SelectItem>
                        <SelectItem value="vegetable">Vegetable crop</SelectItem>
                        <SelectItem value="fallow">Fallow land</SelectItem>
                        <SelectItem value="cash-crop">Cash crop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  {selectedCrop && (
                    <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
                      <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Crop Information
                      </h4>
                      <div className="text-sm space-y-2">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center p-2 bg-blue-100 rounded">
                            <div className="font-medium text-blue-800">N</div>
                            <div className="text-blue-600">{cropData[selectedCrop as keyof typeof cropData].n} kg/ha</div>
                          </div>
                          <div className="text-center p-2 bg-yellow-100 rounded">
                            <div className="font-medium text-yellow-800">P</div>
                            <div className="text-yellow-600">{cropData[selectedCrop as keyof typeof cropData].p} kg/ha</div>
                          </div>
                          <div className="text-center p-2 bg-red-100 rounded">
                            <div className="font-medium text-red-800">K</div>
                            <div className="text-red-600">{cropData[selectedCrop as keyof typeof cropData].k} kg/ha</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600 mt-2">
                          <p><strong>Yield Potential:</strong> {cropData[selectedCrop as keyof typeof cropData].yieldPotential/1000} tonnes/ha</p>
                          <p><strong>Critical Stages:</strong> {cropData[selectedCrop as keyof typeof cropData].criticalStages.join(', ')}</p>
                          <p><strong>Optimal pH:</strong> {cropData[selectedCrop as keyof typeof cropData].soilPh.min} - {cropData[selectedCrop as keyof typeof cropData].soilPh.max}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="field-history">Field History</Label>
                    <Textarea
                      id="field-history"
                      value={fieldHistory}
                      onChange={(e) => setFieldHistory(e.target.value)}
                      placeholder="Previous fertilizer applications, yields, issues..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="soil-analysis" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Primary Nutrients</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="soil-n">Available Nitrogen (kg/ha)</Label>
                      <Input
                        id="soil-n"
                        type="number"
                        value={soilTest.n}
                        onChange={(e) => setSoilTest(prev => ({ ...prev, n: parseFloat(e.target.value) || 0 }))}
                        placeholder="150-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="soil-p">Available Phosphorus (kg/ha)</Label>
                      <Input
                        id="soil-p"
                        type="number"
                        value={soilTest.p}
                        onChange={(e) => setSoilTest(prev => ({ ...prev, p: parseFloat(e.target.value) || 0 }))}
                        placeholder="10-25"
                      />
                    </div>
                    <div>
                      <Label htmlFor="soil-k">Available Potassium (kg/ha)</Label>
                      <Input
                        id="soil-k"
                        type="number"
                        value={soilTest.k}
                        onChange={(e) => setSoilTest(prev => ({ ...prev, k: parseFloat(e.target.value) || 0 }))}
                        placeholder="120-280"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Soil Properties</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="soil-ph">Soil pH</Label>
                      <Input
                        id="soil-ph"
                        type="number"
                        value={soilTest.ph}
                        onChange={(e) => setSoilTest(prev => ({ ...prev, ph: parseFloat(e.target.value) || 7 }))}
                        placeholder="6.0-8.0"
                        step="0.1"
                        min="3"
                        max="11"
                      />
                    </div>
                    <div>
                      <Label htmlFor="organic-matter">Organic Matter (%)</Label>
                      <Input
                        id="organic-matter"
                        type="number"
                        value={soilTest.organicMatter}
                        onChange={(e) => setSoilTest(prev => ({ ...prev, organicMatter: parseFloat(e.target.value) || 2 }))}
                        placeholder="1.5-4.0"
                        step="0.1"
                        min="0"
                        max="10"
                      />
                    </div>
                    <div>
                      <Label htmlFor="soil-ec">Electrical Conductivity (dS/m)</Label>
                      <Input
                        id="soil-ec"
                        type="number"
                        value={soilTest.ec}
                        onChange={(e) => setSoilTest(prev => ({ ...prev, ec: parseFloat(e.target.value) || 0.5 }))}
                        placeholder="0.2-2.0"
                        step="0.1"
                        min="0"
                        max="10"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Micronutrients</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="soil-sulfur">Sulfur (ppm)</Label>
                      <Input
                        id="soil-sulfur"
                        type="number"
                        value={soilTest.sulfur}
                        onChange={(e) => setSoilTest(prev => ({ ...prev, sulfur: parseFloat(e.target.value) || 10 }))}
                        placeholder="8-20"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="soil-zinc">Zinc (ppm)</Label>
                      <Input
                        id="soil-zinc"
                        type="number"
                        value={soilTest.zinc}
                        onChange={(e) => setSoilTest(prev => ({ ...prev, zinc: parseFloat(e.target.value) || 0.6 }))}
                        placeholder="0.5-2.0"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="soil-iron">Iron (ppm)</Label>
                      <Input
                        id="soil-iron"
                        type="number"
                        value={soilTest.iron}
                        onChange={(e) => setSoilTest(prev => ({ ...prev, iron: parseFloat(e.target.value) || 4.5 }))}
                        placeholder="2.5-8.0"
                        step="0.1"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Custom NPK Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="custom-n">Nitrogen (kg/ha)</Label>
                        <Input
                          id="custom-n"
                          type="number"
                          value={customNPK.n}
                          onChange={(e) => setCustomNPK(prev => ({ ...prev, n: e.target.value }))}
                          placeholder="Override N"
                        />
                      </div>
                      <div>
                        <Label htmlFor="custom-p">Phosphorus (kg/ha)</Label>
                        <Input
                          id="custom-p"
                          type="number"
                          value={customNPK.p}
                          onChange={(e) => setCustomNPK(prev => ({ ...prev, p: e.target.value }))}
                          placeholder="Override P"
                        />
                      </div>
                      <div>
                        <Label htmlFor="custom-k">Potassium (kg/ha)</Label>
                        <Input
                          id="custom-k"
                          type="number"
                          value={customNPK.k}
                          onChange={(e) => setCustomNPK(prev => ({ ...prev, k: e.target.value }))}
                          placeholder="Override K"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="organic">Organic Fertilizer (Tons/Ha)</Label>
                      <Input
                        id="organic"
                        type="number"
                        value={organicFertilizer}
                        onChange={(e) => setOrganicFertilizer(e.target.value)}
                        placeholder="0-10"
                        min="0"
                        step="0.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget Limit (₹)</Label>
                      <Input
                        id="budget"
                        type="number"
                        value={budgetLimit}
                        onChange={(e) => setBudgetLimit(e.target.value)}
                        placeholder="Maximum budget per hectare"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Application Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="split-application">Split Application</Label>
                      <Switch
                        id="split-application"
                        checked={splitApplication}
                        onCheckedChange={setSplitApplication}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="organic-preference">Prefer Organic Options</Label>
                      <Switch
                        id="organic-preference"
                        checked={organicPreference}
                        onCheckedChange={setOrganicPreference}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="environmental">Environmental Focus</Label>
                      <Switch
                        id="environmental"
                        checked={environmentalConcern}
                        onCheckedChange={setEnvironmentalConcern}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="environmental" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Thermometer className="h-5 w-5" />
                    Weather & Climate Data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="temperature">Average Temperature (°C)</Label>
                      <Input
                        id="temperature"
                        type="number"
                        value={weather.temperature}
                        onChange={(e) => setWeather(prev => ({ ...prev, temperature: parseFloat(e.target.value) || 25 }))}
                        placeholder="15-35"
                      />
                    </div>
                    <div>
                      <Label htmlFor="rainfall">Annual Rainfall (mm)</Label>
                      <Input
                        id="rainfall"
                        type="number"
                        value={weather.rainfall}
                        onChange={(e) => setWeather(prev => ({ ...prev, rainfall: parseFloat(e.target.value) || 500 }))}
                        placeholder="200-2000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="humidity">Humidity (%)</Label>
                      <Input
                        id="humidity"
                        type="number"
                        value={weather.humidity}
                        onChange={(e) => setWeather(prev => ({ ...prev, humidity: parseFloat(e.target.value) || 60 }))}
                        placeholder="30-90"
                        min="0"
                        max="100"
                      />
                    </div>
                    <div>
                      <Label htmlFor="season">Growing Season</Label>
                      <Select value={weather.season} onValueChange={(value) => setWeather(prev => ({ ...prev, season: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select season" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="drought">Drought Prone</SelectItem>
                          <SelectItem value="flood">Flood Prone</SelectItem>
                          <SelectItem value="extreme">Extreme Weather</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Calculation Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium mb-2">Split Application</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {splitApplication ? 'Enabled - Fertilizers will be applied in multiple stages' : 'Disabled - Single application recommended'}
                      </p>
                      <Switch checked={splitApplication} onCheckedChange={setSplitApplication} />
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium mb-2">Organic Preference</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {organicPreference ? 'Prioritize organic and bio-fertilizers' : 'Standard chemical fertilizers'}
                      </p>
                      <Switch checked={organicPreference} onCheckedChange={setOrganicPreference} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Environmental Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-amber-50 rounded-lg">
                      <h4 className="font-medium mb-2">Environmental Focus</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {environmentalConcern ? 'Include environmental impact analysis' : 'Standard calculations only'}
                      </p>
                      <Switch checked={environmentalConcern} onCheckedChange={setEnvironmentalConcern} />
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium mb-2">Budget Constraint</h4>
                      <p className="text-sm text-gray-600">
                        {budgetLimit ? `Limited to ₹${budgetLimit} per hectare` : 'No budget restrictions'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <Separator className="my-6" />

          <div className="flex flex-wrap gap-4">
            <Button onClick={calculateFertilizer} className="bg-green-600 hover:bg-green-700" size="lg">
              <Calculator className="h-5 w-5 mr-2" />
              Calculate Advanced Fertilizer Plan
            </Button>
            <Button onClick={resetCalculator} variant="outline" size="lg">
              Reset All Fields
            </Button>
            {showResults && (
              <Button onClick={exportResults} variant="outline" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {showResults && recommendations && detailedAnalysis && (
        <div className="space-y-6">
          {/* Executive Summary */}
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Target className="h-6 w-6" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Crop</p>
                  <p className="text-lg font-semibold text-green-700">{recommendations.crop}</p>
                  <p className="text-xs text-gray-500">{recommendations.area} hectares</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Investment</p>
                  <p className="text-lg font-semibold text-blue-700">₹{totalCost.toFixed(0)}</p>
                  <p className="text-xs text-gray-500">₹{(totalCost/parseFloat(area || '1')).toFixed(0)}/ha</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600">Predicted Yield</p>
                  <p className="text-lg font-semibold text-purple-700">{recommendations.yieldPrediction.predicted/1000}t/ha</p>
                  <p className="text-xs text-gray-500">+{recommendations.yieldPrediction.increase}% increase</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600">Environmental Score</p>
                  <p className="text-lg font-semibold text-orange-700">{recommendations.environmentalScore}/100</p>
                  <p className="text-xs text-gray-500">Sustainability rating</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Fertilizer Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Fertilizer Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results.map((fertilizer, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h5 className="font-semibold text-lg flex items-center gap-2">
                            {fertilizer.fertilizerName}
                            <Badge variant="secondary">
                              {fertilizerData[Object.keys(fertilizerData).find(key => 
                                fertilizerData[key as keyof typeof fertilizerData].name === fertilizer.fertilizerName
                              ) as keyof typeof fertilizerData]?.type || 'Fertilizer'}
                            </Badge>
                          </h5>
                          <div className="flex gap-4 mt-2">
                            <p className="text-gray-600">Quantity: <span className="font-medium">{fertilizer.quantity} kg</span></p>
                            <p className="text-green-600 font-medium">Cost: ₹{fertilizer.cost.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {fertilizer.nutrients.n > 0 && (
                            <Badge variant="secondary" className="mb-1 bg-blue-100 text-blue-800">
                              N: {fertilizer.nutrients.n.toFixed(1)} kg
                            </Badge>
                          )}
                          {fertilizer.nutrients.p > 0 && (
                            <Badge variant="secondary" className="mb-1 ml-1 bg-yellow-100 text-yellow-800">
                              P: {fertilizer.nutrients.p.toFixed(1)} kg
                            </Badge>
                          )}
                          {fertilizer.nutrients.k > 0 && (
                            <Badge variant="secondary" className="mb-1 ml-1 bg-red-100 text-red-800">
                              K: {fertilizer.nutrients.k.toFixed(1)} kg
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h6 className="font-medium mb-2">Application Schedule:</h6>
                        <div className="flex flex-wrap gap-2">
                          {fertilizer.applicationStages.map((stage, stageIndex) => (
                            <Badge key={stageIndex} variant="outline" className="text-xs">
                              {stage}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Detailed Analysis Accordion */}
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="soil-health">
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5" />
                  Soil Health Analysis
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {detailedAnalysis.soilHealth.map((analysis: any, index: number) => (
                    <div key={index} className={`p-3 rounded-lg ${
                      analysis.type === 'critical' ? 'bg-red-50 border-red-200' :
                      analysis.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                      analysis.type === 'excellent' ? 'bg-green-50 border-green-200' :
                      'bg-blue-50 border-blue-200'
                    } border`}>
                      <span className="text-sm">{analysis.message}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="crop-suitability">
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Crop Suitability Analysis
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {detailedAnalysis.cropSuitability.map((item: any, index: number) => (
                    <div key={index} className={`p-3 rounded-lg ${
                      item.type === 'excellent' ? 'bg-green-50' :
                      item.type === 'good' ? 'bg-blue-50' :
                      'bg-yellow-50'
                    }`}>
                      <span className="text-sm">{item.message}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="environmental-impact">
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5" />
                  Environmental Impact Assessment
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-green-600">
                      {detailedAnalysis.environmentalImpact.score}/100
                    </div>
                    <div>
                      <h4 className="font-semibold">Environmental Sustainability Score</h4>
                      <p className="text-sm text-gray-600">
                        {detailedAnalysis.environmentalImpact.score >= 80 ? 'Excellent - Environmentally friendly' :
                         detailedAnalysis.environmentalImpact.score >= 60 ? 'Good - Moderate environmental impact' :
                         'Needs improvement - Consider eco-friendly alternatives'}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {detailedAnalysis.environmentalImpact.impacts.map((impact: string, index: number) => (
                      <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                        {impact}
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost-analysis">
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Cost-Benefit Analysis
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-800">Total Cost</h4>
                    <p className="text-2xl font-bold text-blue-600">₹{detailedAnalysis.costAnalysis.totalCost.toFixed(0)}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <h4 className="font-semibold text-green-800">Cost per Hectare</h4>
                    <p className="text-2xl font-bold text-green-600">₹{detailedAnalysis.costAnalysis.costPerHa.toFixed(0)}</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg text-center">
                    <h4 className="font-semibold text-purple-800">Assessment</h4>
                    <p className="text-sm font-medium text-purple-600">{detailedAnalysis.costAnalysis.recommendation}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="application-timing">
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Application Timing & Schedule
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Stage</TableHead>
                        <TableHead>Timing</TableHead>
                        <TableHead>Focus</TableHead>
                        <TableHead>Notes</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recommendations.applicationTiming.map((timing: string, index: number) => (
                        <TableRow key={index}>
                          <TableCell>Stage {index + 1}</TableCell>
                          <TableCell>{timing}</TableCell>
                          <TableCell>
                            {index === 0 ? 'Phosphorus priority' :
                             index === 1 ? 'Balanced NPK' :
                             index === 2 ? 'Nitrogen boost' :
                             'Potassium support'}
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">
                            {index === 0 ? 'Apply before sowing for root development' :
                             index === 1 ? 'Support initial growth' :
                             index === 2 ? 'Vegetative growth support' :
                             'Reproductive stage nutrition'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="expert-recommendations">
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Expert Recommendations
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {recommendations.tips.map((tip: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Action Items */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <FileText className="h-5 w-5" />
                Next Steps & Action Items
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Immediate Actions (This Week)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Procure recommended fertilizers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Prepare field for application
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Check weather forecast
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Calibrate application equipment
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Monitoring & Follow-up</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                      Monitor crop response after 2 weeks
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                      Schedule follow-up soil testing
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                      Record application dates and rates
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                      Track yield performance
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FertilizerCalculator;
