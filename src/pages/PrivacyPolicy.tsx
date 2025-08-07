import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { BackButton } from "@/components/BackButton";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
    <SEOHead
      title="Privacy Policy - PineappleHub Calculator Tools"
      description="Learn how PineappleHub protects your privacy and handles data. We're committed to keeping your information secure while providing free online calculator tools."
      keywords="privacy policy, data protection, privacy, security, PineappleHub, calculator privacy, data handling"
      canonicalUrl="https://pineapplehub.com/privacy-policy"
    />
    
    <div className="container mx-auto px-6 py-8">
      <BackButton />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent text-center">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div className="bg-card border rounded-lg p-6">
            <p className="text-lg mb-4">
              <b>PineappleHub</b> values your privacy and is committed to protecting your personal information. 
              We only collect data necessary to provide and improve our calculator services.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address for authentication (optional account creation)</li>
              <li>Usage analytics to improve our calculator tools</li>
              <li>Technical information like browser type and device for optimization</li>
              <li>Calculator inputs are processed locally and not permanently stored</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide access to calculator tools and account features</li>
              <li>Improve service quality and user experience</li>
              <li>Send important service updates (if you have an account)</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Data Protection</h2>
            <p>
              We implement industry-standard security measures including SSL encryption, secure authentication via Supabase, 
              and regular security audits. We never sell or share your personal information with third parties for marketing purposes.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal data. You can also withdraw consent 
              for data processing at any time. Contact us at{" "}
              <a href="mailto:pineappletech.official@gmail.com" className="text-primary hover:underline">
                pineappletech.official@gmail.com
              </a>{" "}
              to exercise these rights.
            </p>
            
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                This policy may be updated to reflect changes in our practices or legal requirements. 
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;