import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Share2, MessageCircle, Download, Copy } from 'lucide-react';
import { toast } from 'sonner';

export const ShareableContentSection = () => {
  const shareableContent = [
    {
      title: "🔥 EMI Calculator Hack",
      description: "This ONE trick helped me save ₹50,000 on my home loan EMI. Banks hate this!",
      hashtags: "#EMI #HomeLoan #MoneySaving #IndiaFinance",
      whatsappText: "🔥 Bro, this FREE EMI calculator saved me ₹50,000! Banks hate this trick 😱 Try it: https://pineapple-calculator-paradise.lovable.app/calculators/emi"
    },
    {
      title: "💰 SIP Millionaire Formula", 
      description: "How I became a crorepati using this FREE SIP calculator. Secret revealed!",
      hashtags: "#SIP #Investment #Crorepati #WealthBuilding",
      whatsappText: "💰 Dude! This SIP calculator helped me plan my path to ₹1 crore! Check this out: https://pineapple-calculator-paradise.lovable.app/calculators/sip"
    },
    {
      title: "⚡ Tax Saving Genius",
      description: "This calculator saved me ₹25,000 in taxes. Every Indian should know this!",
      hashtags: "#TaxSaving #GST #IncomeTax #IndianTaxes",
      whatsappText: "⚡ Just saved ₹25,000 in taxes using this free calculator! You should try it too: https://pineapple-calculator-paradise.lovable.app/calculators/income-tax"
    }
  ];

  const handleWhatsAppShare = (content: string) => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(content)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard! Now paste in WhatsApp or SMS");
  };

  const handleShare = (title: string, url: string) => {
    if (navigator.share) {
      navigator.share({
        title,
        text: "Check out this amazing free calculator that's helping millions of Indians save money!",
        url
      });
    } else {
      handleCopyLink(url);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            📱 Share & Save Together
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            🚀 Help Your Friends Save Money Too!
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share these viral calculator tips with your family and friends. 
            Let's help all Indians become financially smart!
          </p>
        </div>

        {/* Shareable Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {shareableContent.map((item, index) => (
            <Card key={index} className="p-6 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                <p className="text-primary text-xs font-medium">{item.hashtags}</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="default"
                  onClick={() => handleWhatsAppShare(item.whatsappText)}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </Button>
                
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleCopyLink(item.whatsappText)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Viral Sharing Incentives */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            🎉 Spread the Love, Get Rewards!
          </h3>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            When you share our calculators with friends, you're helping them save money too! 
            Together, let's make all Indians financially smart.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl mb-2">📱</div>
              <div className="font-bold text-lg">Share on WhatsApp</div>
              <div className="text-sm text-muted-foreground">Send to family groups</div>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl mb-2">📧</div>
              <div className="font-bold text-lg">Email Friends</div>
              <div className="text-sm text-muted-foreground">Professional sharing</div>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl mb-2">📲</div>
              <div className="font-bold text-lg">SMS Family</div>
              <div className="text-sm text-muted-foreground">Quick text sharing</div>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl mb-2">🔗</div>
              <div className="font-bold text-lg">Copy Link</div>
              <div className="text-sm text-muted-foreground">Share anywhere</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => handleShare(
                "Free Calculator Tools - Save Money Like Smart Indians!", 
                "https://pineapple-calculator-paradise.lovable.app/"
              )}
              className="px-8 py-3"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share Calculator Hub
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => handleCopyLink("🔥 Check out this amazing FREE calculator that helped me save thousands! https://pineapple-calculator-paradise.lovable.app/ - You'll thank me later! 😊")}
              className="px-8 py-3"
            >
              <Copy className="w-5 h-5 mr-2" />
              Copy Viral Message
            </Button>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            💡 <strong>Pro Tip:</strong> Share in your office WhatsApp groups, family groups, and friend circles. 
            Everyone needs these calculator tools!
          </div>
        </div>
      </div>
    </section>
  );
};