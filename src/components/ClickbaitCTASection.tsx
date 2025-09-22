import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ClickbaitCTASection = () => {
  const urgencyMessages = [
    "⚡ 50,000+ calculations done today!",
    "🔥 Trending #1 in Finance Tools",
    "💰 ₹1 Crore+ saved by users this month",
    "🎯 New: AI-powered suggestions",
    "🚀 Featured in Economic Times"
  ];

  const testimonials = [
    {
      text: "This calculator saved me ₹50,000 on my home loan! Banks were charging me extra EMI.",
      author: "Priya Sharma, Delhi",
      calculation: "EMI Calculator"
    },
    {
      text: "Finally reached my SIP goal of ₹1 crore! This calculator's projections were spot on.",
      author: "Rahul Gupta, Mumbai", 
      calculation: "SIP Calculator"
    },
    {
      text: "Lost 15kg using the BMI calculator guidance. Best health decision ever!",
      author: "Anjali Reddy, Bangalore",
      calculation: "BMI Calculator"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Attention-Grabbing Headline */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 px-4 py-2 text-sm font-bold animate-pulse">
            🔥 VIRAL: 15 MILLION INDIANS CAN'T BE WRONG!
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 leading-tight">
            💥 The <span className="text-primary">SECRET</span> Calculator<br />
            Banks <span className="text-destructive">DON'T WANT</span> You to Know!
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto font-medium">
            🚨 <strong>WARNING:</strong> This FREE tool has helped Indians save <strong>₹500+ CRORES</strong> on loans, 
            investments, and taxes. Financial advisors are going crazy!
          </p>

          {/* Urgency Ticker */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {urgencyMessages.map((message, index) => (
              <Badge key={index} variant="outline" className="animate-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                {message}
              </Badge>
            ))}
          </div>
        </div>

        {/* Social Proof Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <Badge variant="secondary" className="text-xs">{testimonial.calculation}</Badge>
                </div>
                <p className="text-foreground font-medium italic">"{testimonial.text}"</p>
              </div>
              <p className="text-sm text-muted-foreground font-medium">- {testimonial.author}</p>
            </Card>
          ))}
        </div>

        {/* Irresistible CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-3xl border-4 border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
              🎯 Ready to Save ₹50,000+ Like Smart Indians?
            </h3>
            
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Join 15+ million Indians who are already using our SECRET calculator to save money and build wealth!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button size="lg" variant="secondary" className="text-xl px-8 py-4 font-black hover:scale-110 transition-transform">
                🚀 START SAVING NOW - IT'S FREE!
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-8 py-4 font-bold bg-white/10 hover:bg-white/20 text-white border-white/30">
                📱 Share with Friends
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
              <span>✅ 100% Free Forever</span>
              <span>✅ No Registration Required</span>
              <span>✅ Instant Results</span>
              <span>✅ Mobile Friendly</span>
              <span>✅ Bank-Level Accuracy</span>
            </div>
          </div>

          {/* FOMO Elements */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              1,247 people used this calculator in the last hour
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Featured in Times of India, Economic Times
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Recommended by CA & Financial Advisors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};