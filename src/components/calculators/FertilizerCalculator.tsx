
import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Calculator, Leaf, BarChart3, Target, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Crop data with NPK requirements (kg/hectare)
const cropData = {
  wheat: { name: 'Wheat', n: 120, p: 60, k: 40, season: 'Rabi' },
  rice: { name: 'Rice', n: 100, p: 50, k: 50, season: 'Kharif' },
  corn: { name: 'Corn/Maize', n: 150, p: 75, k: 60, season: 'Kharif' },
  potato: { name: 'Potato', n: 180, p: 80, k: 120, season: 'Both' },
  tomato: { name: 'Tomato', n: 200, p: 100, k: 150, season: 'Both' },
  cotton: { name: 'Cotton', n: 160, p: 80, k: 80, season: 'Kharif' },
  sugarcane: { name: 'Sugarcane', n: 280, p: 92, k: 140, season: 'Both' },
  soybean: { name: 'Soybean', n: 40, p: 80, k: 100, season: 'Kharif' },
  mustard: { name: 'Mustard', n: 100, p: 60, k: 40, season: 'Rabi' },
  onion: { name: 'Onion', n: 150, p: 75, k: 75, season: 'Both' }
};

// Fertilizer data with NPK content percentages
const fertilizerData = {
  urea: { name: 'Urea', n: 46, p: 0, k: 0, price: 6.5 },
  dap: { name: 'DAP', n: 18, p: 46, k: 0, price: 28 },
  mop: { name: 'MOP (Muriate of Potash)', n: 0, p: 0, k: 60, price: 18 },
  ssp: { name: 'SSP (Single Super Phosphate)', n: 0, p: 16, k: 0, price: 8 },
  tsp: { name: 'TSP (Triple Super Phosphate)', n: 0, p: 46, k: 0, price: 22 },
  npk: { name: 'NPK (10:26:26)', n: 10, p: 26, k: 26, price: 24 },
  can: { name: 'CAN (Calcium Ammonium Nitrate)', n: 26, p: 0, k: 0, price: 12 },
  sop: { name: 'SOP (Sulphate of Potash)', n: 0, p: 0, k: 50, price: 35 }
};

// Soil types and their characteristics
const soilTypes = {
  sandy: { name: 'Sandy Soil', nEfficiency: 0.7, pEfficiency: 0.8, kEfficiency: 0.6 },
  loamy: { name: 'Loamy Soil', nEfficiency: 0.8, pEfficiency: 0.9, kEfficiency: 0.8 },
  clay: { name: 'Clay Soil', nEfficiency: 0.75, pEfficiency: 0.85, kEfficiency: 0.9 },
  silt: { name: 'Silt Soil', nEfficiency: 0.85, pEfficiency: 0.9, kEfficiency: 0.75 },
  laterite: { name: 'Laterite Soil', nEfficiency: 0.65, pEfficiency: 0.7, kEfficiency: 0.7 }
};

interface FertilizerResult {
  fertilizerName: string;
  quantity: number;
  cost: number;
  nutrients: { n: number; p: number; k: number };
}

interface SoilTestResults {
  n: number;
  p: number;
  k: number;
  ph: number;
  organicMatter: number;
}

const FertilizerCalculator: React.FC = () => {
  const { toast } = useToast();
  
  // Basic inputs
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [soilType, setSoilType] = useState<string>('');
  const [yieldTarget, setYieldTarget] = useState<string>('');
  
  // Advanced inputs
  const [soilTest, setSoilTest] = useState<SoilTestResults>({
    n: 0, p: 0, k: 0, ph: 7, organicMatter: 2
  });
  const [customNPK, setCustomNPK] = useState({ n: '', p: '', k: '' });
  const [organicFertilizer, setOrganicFertilizer] = useState<string>('0');
  
  // Results
  const [results, setResults] = useState<FertilizerResult[]>([]);
  const [recommendations, setRecommendations] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

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
    const organicReduction = parseFloat(organicFertilizer) * 0.3; // 30% reduction per ton of organic fertilizer

    // Calculate nutrient requirements
    let nRequired = crop.n * areaNum * yieldFactor;
    let pRequired = crop.p * areaNum * yieldFactor;
    let kRequired = crop.k * areaNum * yieldFactor;

    // Adjust for soil test results
    if (soilTest.n > 0) nRequired = Math.max(0, nRequired - (soilTest.n * areaNum));
    if (soilTest.p > 0) pRequired = Math.max(0, pRequired - (soilTest.p * areaNum));
    if (soilTest.k > 0) kRequired = Math.max(0, kRequired - (soilTest.k * areaNum));

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
    
    // Option 1: Single fertilizers
    if (nRequired > 0) {
      const ureaQty = nRequired / (fertilizerData.urea.n / 100);
      fertilizers.push({
        fertilizerName: 'Urea',
        quantity: Math.round(ureaQty * 10) / 10,
        cost: ureaQty * fertilizerData.urea.price,
        nutrients: { n: nRequired, p: 0, k: 0 }
      });
    }

    if (pRequired > 0) {
      const dapQty = pRequired / (fertilizerData.dap.p / 100);
      fertilizers.push({
        fertilizerName: 'DAP',
        quantity: Math.round(dapQty * 10) / 10,
        cost: dapQty * fertilizerData.dap.price,
        nutrients: { n: dapQty * (fertilizerData.dap.n / 100), p: pRequired, k: 0 }
      });
    }

    if (kRequired > 0) {
      const mopQty = kRequired / (fertilizerData.mop.k / 100);
      fertilizers.push({
        fertilizerName: 'MOP',
        quantity: Math.round(mopQty * 10) / 10,
        cost: mopQty * fertilizerData.mop.price,
        nutrients: { n: 0, p: 0, k: kRequired }
      });
    }

    // Generate recommendations
    const rec = {
      crop: crop.name,
      area: areaNum,
      soilType: soil.name,
      totalNutrients: { n: nRequired, p: pRequired, k: kRequired },
      totalCost: fertilizers.reduce((sum, f) => sum + f.cost, 0),
      applicationTiming: generateApplicationTiming(crop.season),
      soilHealth: analyzeSoilHealth(soilTest),
      tips: generateTips(crop, soil, soilTest)
    };

    setResults(fertilizers);
    setRecommendations(rec);
    setShowResults(true);

    toast({
      title: "Calculation Complete",
      description: `Fertilizer requirements calculated for ${crop.name}`,
    });
  }, [selectedCrop, area, soilType, yieldTarget, soilTest, customNPK, organicFertilizer, toast]);

  const generateApplicationTiming = (season: string) => {
    const timings = {
      'Kharif': ['Pre-sowing (May-June)', 'At sowing (June-July)', 'Vegetative stage (July-August)'],
      'Rabi': ['Pre-sowing (Oct-Nov)', 'At sowing (Nov-Dec)', 'Tillering stage (Dec-Jan)'],
      'Both': ['Pre-sowing', 'At sowing', 'Vegetative/Flowering stage']
    };
    return timings[season as keyof typeof timings] || timings['Both'];
  };

  const analyzeSoilHealth = (soil: SoilTestResults) => {
    const analysis = [];
    if (soil.ph < 6.0) analysis.push('⚠️ Soil is acidic - consider liming');
    if (soil.ph > 8.0) analysis.push('⚠️ Soil is alkaline - may affect nutrient availability');
    if (soil.organicMatter < 1.5) analysis.push('📉 Low organic matter - add compost');
    if (soil.organicMatter > 3.0) analysis.push('✅ Good organic matter content');
    if (soil.n < 280) analysis.push('🔴 Low nitrogen levels');
    if (soil.p < 11) analysis.push('🟡 Low phosphorus levels');
    if (soil.k < 120) analysis.push('🟠 Low potassium levels');
    return analysis;
  };

  const generateTips = (crop: any, soil: any, soilTest: SoilTestResults) => {
    const tips = [
      '💧 Split nitrogen application for better efficiency',
      '🌱 Apply phosphorus at sowing for root development',
      '⏰ Apply potassium during flowering stage',
      '🧪 Conduct soil tests every 2-3 years'
    ];
    
    if (soil.name === 'Sandy Soil') {
      tips.push('🏜️ Sandy soil: Use slow-release fertilizers');
    }
    if (soilTest.ph < 6.5) {
      tips.push('🧪 Low pH: Apply lime before fertilizers');
    }
    
    return tips;
  };

  const resetCalculator = useCallback(() => {
    setSelectedCrop('');
    setArea('');
    setSoilType('');
    setYieldTarget('');
    setSoilTest({ n: 0, p: 0, k: 0, ph: 7, organicMatter: 2 });
    setCustomNPK({ n: '', p: '', k: '' });
    setOrganicFertilizer('0');
    setResults([]);
    setRecommendations(null);
    setShowResults(false);
  }, []);

  const totalCost = useMemo(() => {
    return results.reduce((sum, result) => sum + result.cost, 0);
  }, [results]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardTitle className="flex items-center gap-3 text-2xl text-green-700">
            <Leaf className="h-8 w-8" />
            Advanced Fertilizer Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Calculator</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
              <TabsTrigger value="soil-test">Soil Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="crop">Select Crop</Label>
                    <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your crop" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(cropData).map(([key, crop]) => (
                          <SelectItem key={key} value={key}>
                            {crop.name} ({crop.season})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="area">Cultivated Area (Hectares)</Label>
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
                    <Label htmlFor="soil-type">Soil Type</Label>
                    <Select value={soilType} onValueChange={setSoilType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(soilTypes).map(([key, soil]) => (
                          <SelectItem key={key} value={key}>
                            {soil.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="yield-target">Yield Target (% of normal)</Label>
                    <Input
                      id="yield-target"
                      type="number"
                      value={yieldTarget}
                      onChange={(e) => setYieldTarget(e.target.value)}
                      placeholder="100 (normal), 120 (high yield)"
                      min="50"
                      max="200"
                    />
                  </div>

                  <div>
                    <Label htmlFor="organic">Organic Fertilizer (Tons/Ha)</Label>
                    <Input
                      id="organic"
                      type="number"
                      value={organicFertilizer}
                      onChange={(e) => setOrganicFertilizer(e.target.value)}
                      placeholder="0"
                      min="0"
                      step="0.5"
                    />
                  </div>

                  {selectedCrop && (
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Crop Requirements</h4>
                      <div className="text-sm text-green-700">
                        <p>N: {cropData[selectedCrop as keyof typeof cropData].n} kg/ha</p>
                        <p>P: {cropData[selectedCrop as keyof typeof cropData].p} kg/ha</p>
                        <p>K: {cropData[selectedCrop as keyof typeof cropData].k} kg/ha</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Custom NPK Requirements (kg/ha)</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="custom-n">Nitrogen (N)</Label>
                    <Input
                      id="custom-n"
                      type="number"
                      value={customNPK.n}
                      onChange={(e) => setCustomNPK(prev => ({ ...prev, n: e.target.value }))}
                      placeholder="Override N requirement"
                    />
                  </div>
                  <div>
                    <Label htmlFor="custom-p">Phosphorus (P)</Label>
                    <Input
                      id="custom-p"
                      type="number"
                      value={customNPK.p}
                      onChange={(e) => setCustomNPK(prev => ({ ...prev, p: e.target.value }))}
                      placeholder="Override P requirement"
                    />
                  </div>
                  <div>
                    <Label htmlFor="custom-k">Potassium (K)</Label>
                    <Input
                      id="custom-k"
                      type="number"
                      value={customNPK.k}
                      onChange={(e) => setCustomNPK(prev => ({ ...prev, k: e.target.value }))}
                      placeholder="Override K requirement"
                    />
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-blue-800">Custom NPK Override</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Enter custom values to override crop-specific requirements. Leave blank to use default crop values.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="soil-test" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Soil Test Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="soil-n">Available N (kg/ha)</Label>
                    <Input
                      id="soil-n"
                      type="number"
                      value={soilTest.n}
                      onChange={(e) => setSoilTest(prev => ({ ...prev, n: parseFloat(e.target.value) || 0 }))}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="soil-p">Available P (kg/ha)</Label>
                    <Input
                      id="soil-p"
                      type="number"
                      value={soilTest.p}
                      onChange={(e) => setSoilTest(prev => ({ ...prev, p: parseFloat(e.target.value) || 0 }))}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="soil-k">Available K (kg/ha)</Label>
                    <Input
                      id="soil-k"
                      type="number"
                      value={soilTest.k}
                      onChange={(e) => setSoilTest(prev => ({ ...prev, k: parseFloat(e.target.value) || 0 }))}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="soil-ph">Soil pH</Label>
                    <Input
                      id="soil-ph"
                      type="number"
                      value={soilTest.ph}
                      onChange={(e) => setSoilTest(prev => ({ ...prev, ph: parseFloat(e.target.value) || 7 }))}
                      placeholder="7.0"
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
                      placeholder="2.0"
                      step="0.1"
                      min="0"
                      max="10"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Separator className="my-6" />

          <div className="flex flex-wrap gap-4">
            <Button onClick={calculateFertilizer} className="bg-green-600 hover:bg-green-700">
              <Calculator className="h-4 w-4 mr-2" />
              Calculate Fertilizer
            </Button>
            <Button onClick={resetCalculator} variant="outline">
              Reset Calculator
            </Button>
          </div>
        </CardContent>
      </Card>

      {showResults && recommendations && (
        <div className="space-y-6">
          {/* Results Summary */}
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Target className="h-6 w-6" />
                Fertilizer Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Crop</p>
                  <p className="text-lg font-semibold text-green-700">{recommendations.crop}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Area</p>
                  <p className="text-lg font-semibold text-blue-700">{recommendations.area} ha</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Cost</p>
                  <p className="text-lg font-semibold text-purple-700">₹{totalCost.toFixed(2)}</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600">Soil Type</p>
                  <p className="text-lg font-semibold text-orange-700">{recommendations.soilType}</p>
                </div>
              </div>

              {/* Fertilizer Requirements */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Recommended Fertilizers</h4>
                <div className="grid gap-4">
                  {results.map((fertilizer, index) => (
                    <Card key={index} className="border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-lg">{fertilizer.fertilizerName}</h5>
                            <p className="text-gray-600">Quantity: {fertilizer.quantity} kg</p>
                            <p className="text-green-600 font-medium">Cost: ₹{fertilizer.cost.toFixed(2)}</p>
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
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Timing & Tips */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Application Timing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations.applicationTiming.map((timing: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{timing}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Expert Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations.tips.map((tip: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soil Health Analysis */}
          {recommendations.soilHealth.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5" />
                  Soil Health Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendations.soilHealth.map((analysis: string, index: number) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">{analysis}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default FertilizerCalculator;
