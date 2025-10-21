import { useState, useEffect } from "react";
import { Copy, Check, Users, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const ProjectDetails = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 32,
    seconds: 45,
  });

  const contractAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
  const targetGoal = 10000000; // USDT
  const raisedAmount = 6500000; // USDT
  const progress = (raisedAmount / targetGoal) * 100;
  const participants = 1247;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const team = [
    { name: "Dr. Ken Alabi", role: "Founder & CEO", image: "KA" },
    { name: "Wisdom Ibrahim", role: "Lead Developer", image: "WI" },
    { name: "Joshua Illori", role: "Blockchain Engineer", image: "JI" },
    { name: "Sarah Chen", role: "Legal Counsel", image: "SC" },
  ];

  return (
    <section id="details" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Project Details
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our token sale. Available on 6 networks: Ethereum, Binance, Base, Solana, Toronet, and Bantu.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 rounded-2xl bg-gradient-card border border-border shadow-card">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-center">Token Sale Ends In</h3>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 rounded-2xl bg-gradient-card border border-border shadow-card space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="font-semibold">Fundraising Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">{participants.toLocaleString()} Participants</span>
              </div>
            </div>
            
            <Progress value={progress} className="h-4" />
            
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-primary">${raisedAmount.toLocaleString()} USDT</div>
                <div className="text-sm text-muted-foreground">Raised</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-secondary">${targetGoal.toLocaleString()} USDT</div>
                <div className="text-sm text-muted-foreground">Target Goal</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 rounded-2xl bg-gradient-card border border-border shadow-card">
            <h3 className="text-xl font-semibold mb-4 text-center">Contract Address</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 p-4 rounded-lg bg-muted/20 border border-border font-mono text-sm break-all text-center sm:text-left">
                {contractAddress}
              </div>
              <Button
                onClick={copyAddress}
                className="bg-gradient-primary hover:shadow-glow-purple transition-all duration-300"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-primary bg-clip-text text-transparent">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary transition-all duration-300 hover:shadow-card hover:-translate-y-1 text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-glow-purple group-hover:shadow-glow-blue transition-all duration-300">
                  {member.image}
                </div>
                <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
