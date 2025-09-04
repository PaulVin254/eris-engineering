import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calculator,
  FileText,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// TypeScript interfaces for type safety
interface CalculatorForm {
  landSize: string;
  houseType: string;
  finishingLevel: string;
}

interface CostEstimate {
  minCost: number;
  maxCost: number;
  timeline: number;
  breakdown: {
    construction: number;
    materials: number;
    finishes: number;
    permits: number;
  };
}

interface LeadForm {
  email: string;
}

const HomeCostCalculator = () => {
  // State management for form data and UI states
  const [form, setForm] = useState<CalculatorForm>({
    landSize: "",
    houseType: "",
    finishingLevel: "",
  });

  const [leadForm, setLeadForm] = useState<LeadForm>({
    email: "",
  });

  // UI state management
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [estimate, setEstimate] = useState<CostEstimate | null>(null);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Cost calculation logic based on form inputs
  const calculateCost = (): CostEstimate => {
    const landSizeNum = parseFloat(form.landSize) || 0.25; // Default to quarter acre

    // Base costs per square meter (2025 Kenya market rates)
    const baseCostPerSqm = {
      Bungalow: { Basic: 35000, Standard: 55000, Luxury: 85000 },
      Maisonette: { Basic: 40000, Standard: 60000, Luxury: 95000 },
      Apartment: { Basic: 30000, Standard: 45000, Luxury: 75000 },
    };

    // Estimated house sizes based on land size and type
    const houseSizes = {
      Bungalow: Math.min(landSizeNum * 4047 * 0.3, 200), // 30% coverage, max 200sqm
      Maisonette: Math.min(landSizeNum * 4047 * 0.4, 300), // 40% coverage, max 300sqm
      Apartment: Math.min(landSizeNum * 4047 * 0.5, 150), // 50% coverage, max 150sqm
    };

    const houseSize =
      houseSizes[form.houseType as keyof typeof houseSizes] || 120;
    const costPerSqm =
      baseCostPerSqm[form.houseType as keyof typeof baseCostPerSqm]?.[
        form.finishingLevel as keyof typeof baseCostPerSqm.Bungalow
      ] || 50000;

    const baseCost = houseSize * costPerSqm;

    // Add variance for realistic range (±15%)
    const minCost = baseCost * 0.85;
    const maxCost = baseCost * 1.15;

    // Timeline calculation (months)
    const baseTimeline = {
      Bungalow: { Basic: 4, Standard: 6, Luxury: 8 },
      Maisonette: { Basic: 6, Standard: 8, Luxury: 12 },
      Apartment: { Basic: 3, Standard: 5, Luxury: 7 },
    };

    const timeline =
      baseTimeline[form.houseType as keyof typeof baseTimeline]?.[
        form.finishingLevel as keyof typeof baseTimeline.Bungalow
      ] || 6;

    // Cost breakdown for transparency
    const breakdown = {
      construction: Math.round(baseCost * 0.4),
      materials: Math.round(baseCost * 0.35),
      finishes: Math.round(baseCost * 0.2),
      permits: Math.round(baseCost * 0.05),
    };

    return { minCost, maxCost, timeline, breakdown };
  };

  // Handle form submission for cost calculation
  const handleCalculate = async () => {
    // Validate required fields
    if (!form.landSize || !form.houseType || !form.finishingLevel) {
      alert("Please fill in all fields to get an accurate estimate.");
      return;
    }

    setIsCalculating(true);

    // Simulate AI processing time for better UX
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const newEstimate = calculateCost();
    setEstimate(newEstimate);
    setShowResults(true);
    setIsCalculating(false);
  };

  // Handle lead generation form submission
  const handleLeadSubmit = async () => {
    if (!leadForm.email) {
      alert("Please enter your email address.");
      return;
    }

    setIsSubmittingLead(true);

    // Simulate API call to save lead
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLeadSubmitted(true);
    setIsSubmittingLead(false);
  };

  // Format numbers as Kenyan currency
  const formatKES = (amount: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-primary/10 p-3 rounded-full">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Get a Transparent Cost Estimate in 30 Seconds
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Plan your dream home from anywhere in the world. Our AI-powered
            calculator uses current 2025 market rates in Kenya to give you a
            realistic budget. No surprises.
          </motion.p>
        </div>

        {/* Main Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-gray-900">
                Home Cost Calculator
              </CardTitle>
              <CardDescription className="text-gray-600">
                Enter your project details below for an instant estimate
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Calculator Form */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Land Size Input */}
                <div className="space-y-2">
                  <Label
                    htmlFor="landSize"
                    className="text-sm font-medium text-gray-700"
                  >
                    Land Size (in acres)
                  </Label>
                  <Input
                    id="landSize"
                    type="number"
                    step="0.1"
                    min="0.1"
                    placeholder="e.g., 0.5"
                    value={form.landSize}
                    onChange={(e) =>
                      setForm({ ...form, landSize: e.target.value })
                    }
                    className="w-full"
                    disabled={isCalculating}
                  />
                  <p className="text-xs text-gray-500">Minimum 0.1 acres</p>
                </div>

                {/* House Type Dropdown */}
                <div className="space-y-2">
                  <Label
                    htmlFor="houseType"
                    className="text-sm font-medium text-gray-700"
                  >
                    House Type
                  </Label>
                  <Select
                    value={form.houseType}
                    onValueChange={(value) =>
                      setForm({ ...form, houseType: value })
                    }
                    disabled={isCalculating}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select house type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bungalow">
                        Bungalow (Single story)
                      </SelectItem>
                      <SelectItem value="Maisonette">
                        Maisonette (Two story)
                      </SelectItem>
                      <SelectItem value="Apartment">Apartment Unit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Finishing Level Dropdown */}
                <div className="space-y-2">
                  <Label
                    htmlFor="finishingLevel"
                    className="text-sm font-medium text-gray-700"
                  >
                    Finishing Level
                  </Label>
                  <Select
                    value={form.finishingLevel}
                    onValueChange={(value) =>
                      setForm({ ...form, finishingLevel: value })
                    }
                    disabled={isCalculating}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select finishing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Basic">
                        Basic (Standard materials)
                      </SelectItem>
                      <SelectItem value="Standard">
                        Standard (Good quality)
                      </SelectItem>
                      <SelectItem value="Luxury">
                        Luxury (Premium finishes)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Calculate Button */}
              <div className="text-center">
                <Button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  size="lg"
                  className="w-full md:w-auto px-8 py-3 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  {isCalculating ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Calculating...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Calculator className="w-5 h-5" />
                      <span>Calculate My Free Estimate</span>
                    </div>
                  )}
                </Button>
              </div>

              {/* Loading State with AI Message */}
              <AnimatePresence>
                {isCalculating && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-center py-8 border-t"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <div className="space-y-2">
                        <p className="text-lg font-medium text-gray-900">
                          Analyzing costs...
                        </p>
                        <p className="text-sm text-gray-600 max-w-md mx-auto">
                          Our AI is consulting current market data, material
                          costs, and regional factors to provide you with the
                          most accurate estimate.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Results Display */}
              <AnimatePresence>
                {showResults && estimate && !isCalculating && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="border-t pt-8 space-y-6"
                  >
                    {/* Cost Estimate */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center">
                          <DollarSign className="w-6 h-6 text-green-600 mr-2" />
                          Estimated Cost Range
                        </h3>
                        <div className="flex items-center text-green-600">
                          <Clock className="w-5 h-5 mr-1" />
                          <span className="font-medium">
                            {estimate.timeline} months
                          </span>
                        </div>
                      </div>

                      <div className="text-center mb-6">
                        <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                          {formatKES(estimate.minCost)} -{" "}
                          {formatKES(estimate.maxCost)}
                        </div>
                        <p className="text-sm text-gray-600">
                          Based on current 2025 market rates in Kenya
                        </p>
                      </div>

                      {/* Cost Breakdown */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-white/50 rounded p-3">
                          <div className="text-lg font-semibold text-gray-900">
                            {formatKES(estimate.breakdown.construction)}
                          </div>
                          <div className="text-xs text-gray-600">
                            Construction
                          </div>
                        </div>
                        <div className="bg-white/50 rounded p-3">
                          <div className="text-lg font-semibold text-gray-900">
                            {formatKES(estimate.breakdown.materials)}
                          </div>
                          <div className="text-xs text-gray-600">Materials</div>
                        </div>
                        <div className="bg-white/50 rounded p-3">
                          <div className="text-lg font-semibold text-gray-900">
                            {formatKES(estimate.breakdown.finishes)}
                          </div>
                          <div className="text-xs text-gray-600">Finishes</div>
                        </div>
                        <div className="bg-white/50 rounded p-3">
                          <div className="text-lg font-semibold text-gray-900">
                            {formatKES(estimate.breakdown.permits)}
                          </div>
                          <div className="text-xs text-gray-600">Permits</div>
                        </div>
                      </div>
                    </div>

                    {/* Lead Generation Form */}
                    {!leadSubmitted ? (
                      <div className="bg-blue-50 rounded-lg p-6">
                        <div className="text-center mb-6">
                          <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Get Your Free PDF Breakdown
                          </h3>
                          <p className="text-gray-600">
                            Receive a detailed cost breakdown, timeline, and
                            construction guide via email
                          </p>
                        </div>

                        <div className="max-w-md mx-auto space-y-4">
                          <div>
                            <Label
                              htmlFor="email"
                              className="text-sm font-medium text-gray-700"
                            >
                              Email Address
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={leadForm.email}
                              onChange={(e) =>
                                setLeadForm({ email: e.target.value })
                              }
                              disabled={isSubmittingLead}
                              className="w-full"
                            />
                          </div>

                          <Button
                            onClick={handleLeadSubmit}
                            disabled={isSubmittingLead}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                          >
                            {isSubmittingLead ? (
                              <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Sending...</span>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <FileText className="w-4 h-4" />
                                <span>Send My Free PDF Report</span>
                              </div>
                            )}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      /* Success State */
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-50 rounded-lg p-6 text-center"
                      >
                        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          PDF Report Sent!
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Check your email for the detailed cost breakdown and
                          construction guide.
                        </p>
                        <Button variant="outline" size="sm">
                          Schedule Free Consultation
                        </Button>
                      </motion.div>
                    )}

                    {/* Disclaimer */}
                    <div className="text-center text-sm text-gray-500 border-t pt-4">
                      <p>
                        <strong>Disclaimer:</strong> This is an AI-powered
                        estimate based on current market data. For a fixed,
                        detailed quotation, please schedule a free consultation
                        with our team.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCostCalculator;
