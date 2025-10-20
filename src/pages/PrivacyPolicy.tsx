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
            <p className="mb-4">
              At PineappleHub, we believe in transparency about data collection. We collect minimal information necessary 
              to provide and improve our calculator services. Here's what we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Email address for authentication when you create an optional account. 
              This allows you to save preferences and access additional features.</li>
              <li><strong>Usage Analytics:</strong> We collect anonymized data about how our calculators are used, 
              including which tools are most popular and how users interact with them. This helps us improve functionality 
              and user experience.</li>
              <li><strong>Technical Information:</strong> Browser type, device information, IP address, and operating system 
              for optimization and security purposes. This data is used to ensure our tools work properly across all platforms.</li>
              <li><strong>Calculator Inputs:</strong> The numbers and data you enter into calculators are processed locally 
              in your browser and are not permanently stored on our servers. We respect your financial and personal privacy.</li>
              <li><strong>Cookies:</strong> We use essential cookies for basic functionality and optional analytics cookies 
              to understand user behavior. You can manage cookie preferences through your browser settings.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">How We Use Your Data</h2>
            <p className="mb-4">
              Your data is used solely to provide and improve our calculator services. We never sell your personal 
              information to third parties. Specific uses include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Delivery:</strong> Provide access to calculator tools, maintain your account (if created), 
              and remember your preferences for a better user experience.</li>
              <li><strong>Service Improvement:</strong> Analyze usage patterns to identify popular features, fix bugs, 
              and develop new calculators based on user needs.</li>
              <li><strong>Communication:</strong> Send important service updates, security alerts, or notifications about 
              new features (only if you have an account and haven't opted out).</li>
              <li><strong>Security:</strong> Monitor for suspicious activity, prevent fraud, and protect our platform 
              from abuse or unauthorized access.</li>
              <li><strong>Legal Compliance:</strong> Comply with applicable laws, regulations, and legal processes when required.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Third-Party Services</h2>
            <p className="mb-4">
              We use trusted third-party services to operate our platform efficiently. These services have their own 
              privacy policies and security measures:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Supabase:</strong> Provides secure authentication and database services with industry-standard encryption.</li>
              <li><strong>Analytics Services:</strong> Help us understand how users interact with our calculators 
              through anonymized data collection.</li>
              <li><strong>Cloud Hosting:</strong> Our website is hosted on secure cloud infrastructure with robust security protocols.</li>
            </ul>
            <p className="mt-4">
              These third parties only access data necessary for their specific functions and are contractually 
              obligated to protect your information.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Data Protection & Security</h2>
            <p className="mb-4">
              We take data security seriously and implement multiple layers of protection:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Encryption:</strong> All data transmitted between your browser and our servers is protected 
              using SSL/TLS encryption (HTTPS).</li>
              <li><strong>Secure Authentication:</strong> User accounts are protected by secure password hashing and 
              authentication protocols via Supabase.</li>
              <li><strong>Access Controls:</strong> Strict internal access controls ensure only authorized personnel 
              can access user data, and only when necessary.</li>
              <li><strong>Regular Audits:</strong> We conduct regular security audits and updates to protect against 
              vulnerabilities and emerging threats.</li>
              <li><strong>Data Minimization:</strong> We collect only the minimum data required and delete it when 
              no longer necessary.</li>
            </ul>
            <p className="mt-4">
              <strong>Important:</strong> We never sell or share your personal information with third parties for 
              marketing purposes. Your data is yours alone.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Your Privacy Rights</h2>
            <p className="mb-4">
              You have comprehensive rights regarding your personal data. We respect and facilitate these rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of all personal data we hold about you.</li>
              <li><strong>Right to Correction:</strong> Update or correct any inaccurate personal information.</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your personal data and account at any time.</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, commonly used format.</li>
              <li><strong>Right to Withdraw Consent:</strong> Opt out of data processing activities at any time.</li>
              <li><strong>Right to Object:</strong> Object to certain types of data processing, including marketing communications.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:pineappletech.official@gmail.com" className="text-primary hover:underline">
                pineappletech.official@gmail.com
              </a>. 
              We will respond to all requests within 30 days.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Cookie Policy</h2>
            <p className="mb-4">
              Cookies are small text files stored on your device. We use cookies for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic functionality like remembering your preferences 
              and keeping you logged in.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our calculators to 
              improve the user experience.</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. Note that disabling cookies may affect functionality. 
              By using our site, you consent to our cookie usage as described in this policy.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal 
              information from children. If you believe a child has provided us with personal information, please 
              contact us immediately so we can delete it.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">International Data Transfers</h2>
            <p>
              Your data may be processed and stored in different countries where our service providers operate. 
              We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy 
              and applicable data protection laws.
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