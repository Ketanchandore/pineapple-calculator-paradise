import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

export const SocialProofBanner = () => {
  const [currentUser, setCurrentUser] = useState(15247891);
  const [recentCalculations, setRecentCalculations] = useState([
    { name: "Priya S.", location: "Delhi", calculation: "EMI", amount: "₹45,000 saved" },
    { name: "Rahul M.", location: "Mumbai", calculation: "SIP", amount: "₹2.5L returns" },
    { name: "Anjali K.", location: "Bangalore", calculation: "Loan", amount: "₹15,000 saved" },
    { name: "Vikram P.", location: "Chennai", calculation: "BMI", amount: "Health goal achieved" },
    { name: "Sneha G.", location: "Pune", calculation: "GST", amount: "₹8,000 tax saved" },
  ]);

  useEffect(() => {
    // Simulate live user count updates
    const userInterval = setInterval(() => {
      setCurrentUser(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);

    // Rotate recent calculations
    const calculationInterval = setInterval(() => {
      const newCalculations = [
        { name: "Amit S.", location: "Hyderabad", calculation: "EMI", amount: "₹35,000 saved" },
        { name: "Kavya R.", location: "Kolkata", calculation: "SIP", amount: "₹1.8L returns" },
        { name: "Arjun T.", location: "Jaipur", calculation: "Loan", amount: "₹22,000 saved" },
        { name: "Deepika M.", location: "Ahmedabad", calculation: "Tax", amount: "₹12,000 saved" },
        { name: "Rohan K.", location: "Lucknow", calculation: "FD", amount: "₹25,000 returns" },
      ];
      
      setRecentCalculations(prev => {
        const updated = [...prev];
        updated.shift();
        updated.push(newCalculations[Math.floor(Math.random() * newCalculations.length)]);
        return updated;
      });
    }, 5000);

    return () => {
      clearInterval(userInterval);
      clearInterval(calculationInterval);
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-3 px-4 border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Live Stats Banner */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">
              🔥 <strong>{currentUser.toLocaleString('en-IN')}</strong> Indians using our calculators right now!
            </span>
          </div>
        </div>

        {/* Recent Activity Ticker */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {recentCalculations.map((calc, index) => (
              <div key={index} className="flex-shrink-0 flex items-center gap-2 bg-background/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/30">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {calc.name.split(' ')[0][0]}
                </div>
                <div className="text-xs">
                  <div className="font-medium text-foreground">{calc.name} from {calc.location}</div>
                  <div className="text-muted-foreground">Used {calc.calculation} calculator • {calc.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span>4.9/5 (2.5L+ reviews)</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🔒</span>
            <span>100% Secure & Private</span>
          </div>
          <div className="flex items-center gap-1">
            <span>✅</span>
            <span>Used by 15M+ Indians</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⚡</span>
            <span>Instant Results</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📱</span>
            <span>Mobile Optimized</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};