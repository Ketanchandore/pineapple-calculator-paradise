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
                <h2 className="text-2xl font-semibold mb-3">3. Calculator Accuracy Disclaimer</h2>
                <p className="text-muted-foreground mb-3">
                  Our calculators provide estimates for informational purposes only. While we strive for accuracy, 
                  results may not reflect real-world conditions due to various factors including market fluctuations, 
                  individual circumstances, and simplified calculation models.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>Calculator results are approximations and should be verified with official sources</li>
                  <li>Financial calculators don't account for all fees, taxes, or charges</li>
                  <li>Health calculators provide general guidance, not medical advice</li>
                  <li>Interest rates, policies, and regulations change frequently</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  <strong>Important:</strong> Never make important financial, medical, or legal decisions based 
                  solely on calculator results. Always consult qualified professionals.
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
                <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property Rights</h2>
                <p className="text-muted-foreground mb-3">
                  All content on PineappleHub, including calculator designs, algorithms, text, graphics, logos, 
                  and software, is the intellectual property of PineappleHub or its licensors and is protected by 
                  copyright and trademark laws.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>You may use our calculators for personal, educational, or commercial purposes</li>
                  <li>You may not copy, modify, or redistribute our calculator code without permission</li>
                  <li>Screenshots and links to our calculators are permitted with proper attribution</li>
                  <li>Unauthorized scraping or automated data collection is prohibited</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-3">
                  <strong>To the fullest extent permitted by law:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>PineappleHub is not liable for any direct, indirect, incidental, or consequential damages</li>
                  <li>We are not responsible for financial losses from calculator errors or misinterpretation</li>
                  <li>No liability for investment decisions based on calculator outputs</li>
                  <li>Not responsible for health-related decisions made without professional consultation</li>
                  <li>No liability for technical issues, service interruptions, or data loss</li>
                  <li>Total liability shall not exceed $100 or the amount you paid (if any)</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  You acknowledge that you use our calculator tools entirely at your own risk and accept full 
                  responsibility for any decisions made based on the results.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">7. Service Availability</h2>
                <p className="text-muted-foreground">
                  We strive to maintain continuous service availability but cannot guarantee 100% uptime. 
                  Services may be temporarily unavailable for maintenance, updates, or technical issues. We are 
                  not liable for any losses or damages resulting from service interruptions or downtime.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">8. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to update these terms at any time. Significant changes will be 
                  communicated through our website or email. Continued use constitutes acceptance of updated terms.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">9. Governing Law & Dispute Resolution</h2>
                <p className="text-muted-foreground mb-3">
                  These terms are governed by applicable laws without regard to conflict of law provisions. 
                  Any disputes arising from these terms or your use of our services shall be resolved through:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>First, good faith negotiations between you and PineappleHub</li>
                  <li>If negotiations fail, binding arbitration or applicable court jurisdiction</li>
                  <li>You agree to pursue claims individually, not as part of a class action</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-3">10. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these terms, contact us at{" "}
                  <a href="mailto:pineappletech.official@gmail.com" className="text-primary hover:underline">
                    pineappletech.official@gmail.com
                  </a>
                  {" "}or visit our{" "}
                  <a href="/contact" className="text-primary hover:underline">Contact Page</a>.
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