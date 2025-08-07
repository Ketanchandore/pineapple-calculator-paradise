import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { BackButton } from "@/components/BackButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Info, Shield, Calculator } from "lucide-react";

const Disclaimer = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
    <SEOHead
      title="Disclaimer - PineappleHub Calculator Tools"
      description="Important disclaimer about PineappleHub calculator tools. Understand the limitations, accuracy, and proper use of our free online calculators for financial, health, and general calculations."
      keywords="disclaimer, calculator accuracy, limitations, financial advice, PineappleHub terms, calculator liability"
      canonicalUrl="https://pineapplehub.com/disclaimer"
    />
    
    <div className="container mx-auto px-6 py-8">
      <BackButton />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Disclaimer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Important information about the use and limitations of our calculator tools. 
            Please read carefully before using our services.
          </p>
        </div>

        <div className="space-y-8">
          {/* General Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                General Disclaimer
              </CardTitle>
              <CardDescription>
                Important limitations and responsibilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The information, calculations, and results provided by PineappleHub calculator tools are for 
                <strong> informational and educational purposes only</strong>. These tools are designed to provide 
                general estimates and should not be considered as professional financial, medical, legal, or 
                investment advice.
              </p>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Important:</strong> Always consult with qualified professionals before making important 
                  financial, health, or legal decisions based on calculator results.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Accuracy Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-500" />
                Accuracy and Limitations
              </CardTitle>
              <CardDescription>
                Understanding calculator accuracy and limitations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Calculator Accuracy</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Our calculators use standard mathematical formulas and algorithms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Results are estimates and may not reflect real-world conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Actual results may vary due to external factors not accounted for in calculations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    We strive for accuracy but cannot guarantee 100% precision in all scenarios
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Known Limitations</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Calculations may not include all applicable fees, taxes, or charges
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Market conditions, interest rates, and policies change frequently
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Individual circumstances may significantly affect actual outcomes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Some calculators use simplified models for complex real-world scenarios
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Liability Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                Liability Limitations
              </CardTitle>
              <CardDescription>
                Understanding our liability and your responsibilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong>PineappleHub and its operators disclaim all liability</strong> for any damages, 
                losses, or consequences arising from the use of our calculator tools, including but not 
                limited to:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  Financial losses due to calculation errors or misinterpretation of results
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  Investment decisions based solely on calculator outputs
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  Medical or health-related decisions without professional consultation
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  Technical issues, downtime, or service interruptions
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  Data loss or privacy breaches (though we take security seriously)
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Professional Advice */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-purple-500" />
                Professional Consultation
              </CardTitle>
              <CardDescription>
                When to seek professional advice
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our calculators are starting points for your research and planning. For important decisions, 
                please consult with qualified professionals:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Financial Matters</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Certified Financial Planners (CFP)</li>
                    <li>• Investment Advisors</li>
                    <li>• Tax Professionals</li>
                    <li>• Insurance Agents</li>
                    <li>• Bank Representatives</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Health & Wellness</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Licensed Physicians</li>
                    <li>• Registered Dietitians</li>
                    <li>• Healthcare Professionals</li>
                    <li>• Fitness Trainers</li>
                    <li>• Mental Health Counselors</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibility */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-500" />
                User Responsibility
              </CardTitle>
              <CardDescription>
                Your responsibilities when using our tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                By using PineappleHub calculator tools, you acknowledge and agree that:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  You understand the limitations and disclaimers outlined above
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  You will verify important calculations with other sources or professionals
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  You assume full responsibility for decisions based on calculator results
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  You will not rely solely on our tools for critical financial or health decisions
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  You understand that past performance does not guarantee future results
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold">Disclaimer Updates</h3>
                <p className="text-muted-foreground text-sm">
                  This disclaimer may be updated from time to time to reflect changes in our services, 
                  legal requirements, or best practices. We encourage you to review this page periodically.
                </p>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Questions about this disclaimer? <a href="/contact" className="text-primary hover:underline">Contact us</a> for clarification.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Disclaimer;