import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { BackButton } from "@/components/BackButton";

const TermsOfService = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
    <SEOHead
      title="Terms of Service - PineappleHub Calculator Tools"
      description="Read the terms of service for PineappleHub calculator tools. Understand your rights and responsibilities when using our free online calculators."
      keywords="terms of service, terms and conditions, user agreement, calculator terms, PineappleHub legal, usage rights"
      canonicalUrl="https://pineapplehub.com/terms-of-service"
    />
    
    <div className="container mx-auto px-6 py-8">
      <BackButton />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent text-center">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div className="bg-card border rounded-lg p-6">
            <p className="text-lg mb-6">
              By using <b>PineappleHub</b> calculator tools, you agree to these terms of service. 
              Please read them carefully before using our services.
            </p>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-3">1. Service Description</h2>
                <p className="text-muted-foreground">
                  PineappleHub provides free online calculator tools for financial, health, and general calculations. 
                  Our services include EMI calculators, SIP calculators, BMI calculators, age calculators, and more.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">2. Acceptable Use</h2>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Use calculators for personal, educational, or professional purposes</li>
                  <li>Provide accurate information when using our tools</li>
                  <li>Respect intellectual property rights</li>
                  <li>Do not attempt to disrupt or harm our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">3. Calculator Results Disclaimer</h2>
                <p className="text-muted-foreground">
                  Our calculators provide estimates for informational purposes only. Results may not reflect 
                  real-world conditions and should not be considered professional financial, medical, or legal advice. 
                  Always consult qualified professionals for important decisions.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">4. Account Responsibility</h2>
                <p className="text-muted-foreground">
                  If you create an account, you're responsible for maintaining account security and the 
                  confidentiality of your login credentials. Report any unauthorized access immediately.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">5. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  PineappleHub is not liable for any damages arising from the use of our calculator tools, 
                  including but not limited to financial losses, business interruptions, or inaccurate calculations. 
                  Use our services at your own risk.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">6. Service Availability</h2>
                <p className="text-muted-foreground">
                  We strive to maintain continuous service availability but cannot guarantee 100% uptime. 
                  Services may be temporarily unavailable for maintenance, updates, or technical issues.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">7. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to update these terms at any time. Significant changes will be 
                  communicated through our website or email. Continued use constitutes acceptance of updated terms.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">8. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these terms, contact us at{" "}
                  <a href="mailto:pineappletech.official@gmail.com" className="text-primary hover:underline">
                    pineappletech.official@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                These terms are effective as of {new Date().toLocaleDateString()} and apply to all users of PineappleHub services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TermsOfService;