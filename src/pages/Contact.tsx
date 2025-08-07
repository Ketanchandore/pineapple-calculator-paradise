import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { BackButton } from "@/components/BackButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
    <SEOHead
      title="Contact Us - PineappleHub Calculator Tools"
      description="Get in touch with PineappleHub for support, feedback, or questions about our free online calculator tools. We're here to help with all your calculation needs."
      keywords="contact, support, help, customer service, PineappleHub, calculator support, feedback"
      canonicalUrl="https://pineapplehub.com/contact"
    />
    
    <div className="container mx-auto px-6 py-8">
      <BackButton />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question, suggestion, or need help? We'd love to hear from you! 
            Our team is here to assist you with any inquiries about our calculator tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Get in Touch
              </CardTitle>
              <CardDescription>
                Reach out to us through any of the following channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Support</h3>
                  <a 
                    href="mailto:pineappletech.official@gmail.com"
                    className="text-primary hover:underline"
                  >
                    pineappletech.official@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Best for detailed questions and feedback
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond within 24-48 hours
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Monday to Friday, 9 AM - 6 PM (IST)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quick Help</h3>
                  <p className="text-muted-foreground">
                    Most questions can be answered through our calculator pages
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary"
                    onClick={() => window.location.href = '/#calculators'}
                  >
                    Browse all calculators →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What we can help with */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                How Can We Help?
              </CardTitle>
              <CardDescription>
                We're here to assist you with various topics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Calculator Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Questions about how to use our calculators, interpreting results, or reporting bugs.
                  </p>
                </div>

                <div className="p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Feature Requests</h4>
                  <p className="text-sm text-muted-foreground">
                    Suggestions for new calculators or improvements to existing ones.
                  </p>
                </div>

                <div className="p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Technical Issues</h4>
                  <p className="text-sm text-muted-foreground">
                    Problems with website functionality, loading issues, or accessibility concerns.
                  </p>
                </div>

                <div className="p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Partnerships</h4>
                  <p className="text-sm text-muted-foreground">
                    Business inquiries, API access requests, or collaboration opportunities.
                  </p>
                </div>

                <div className="p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-semibold mb-2">General Feedback</h4>
                  <p className="text-sm text-muted-foreground">
                    Your thoughts on our service, user experience, or suggestions for improvement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Why Contact Us?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Quick Support</h4>
                  <p className="text-muted-foreground">
                    Get fast, helpful responses to your questions and concerns.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Expert Help</h4>
                  <p className="text-muted-foreground">
                    Our team understands calculators and can provide accurate guidance.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Reliable Service</h4>
                  <p className="text-muted-foreground">
                    We're committed to maintaining high-quality, free calculator tools.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                <p className="text-center text-muted-foreground">
                  <strong>Note:</strong> All our calculator tools are completely free to use. 
                  We don't charge for support or access to any features. If you encounter any charges, 
                  please contact us immediately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact;