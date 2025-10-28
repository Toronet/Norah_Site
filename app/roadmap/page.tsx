"use client";

import { Calendar, CheckCircle, ArrowRight, Target, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Roadmap = () => {
  const phases = [
    {
      phase: 1,
      title: "TGE + First Yield",
      period: "Q4 2025",
      status: "upcoming",
      icon: Zap,
      description: "Token generation event launches with 1.6 million tokens in circulation. Initial yield distribution establishes the quarterly revenue-sharing mechanism, demonstrating proof-of-concept to early participants.",
      keyPoints: [
        "1.6M tokens in circulation",
        "Initial yield distribution",
        "Quarterly revenue-sharing mechanism",
        "Proof-of-concept demonstration"
      ]
    },
    {
      phase: 2,
      title: "Yield Verification",
      period: "Q1-Q2 2026",
      status: "upcoming",
      icon: CheckCircle,
      description: "Three consecutive quarterly revenue option (QRO) distributions complete, establishing track record of consistent yield delivery. Oracle verification confirms production data accuracy.",
      keyPoints: [
        "Three consecutive QRO distributions",
        "Track record establishment",
        "Oracle verification system",
        "Production data accuracy confirmation"
      ]
    },
    {
      phase: 3,
      title: "Exchange Activation",
      period: "Mid-2026",
      status: "upcoming",
      icon: Target,
      description: "Listings on Cexes, staking apps and partner decentralized exchanges provide secondary market liquidity. Trading volume and price discovery commence following verified yield history.",
      keyPoints: [
        "CEX and DEX listings",
        "Secondary market liquidity",
        "Trading volume commencement",
        "Price discovery mechanisms"
      ]
    },
    {
      phase: 4,
      title: "Growth Phase",
      period: "2026-2027",
      status: "upcoming",
      icon: ArrowRight,
      description: "Capacity and price triggers unlock vault emissions as production scales. Token supply expands in lockstep with industrial capacity increases and favourable market conditions.",
      keyPoints: [
        "Capacity trigger activations",
        "Price trigger mechanisms",
        "Vault emission unlocks",
        "Production scaling alignment"
      ]
    },
    {
      phase: 5,
      title: "DAO Era",
      period: "2027 onwards",
      status: "upcoming",
      icon: Users,
      description: "Maximum supply reaches 8 million tokens. Staking and governance utilities activate, enabling token holder participation in strategic decisions. Full decentralisation of protocol governance.",
      keyPoints: [
        "8M token maximum supply",
        "Staking utilities activation",
        "Governance participation",
        "Full protocol decentralisation"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "current": return "bg-blue-500";
      case "upcoming": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "current": return "Current";
      case "upcoming": return "Upcoming";
      default: return "Upcoming";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="flex flex-col items-center justify-center bg-gradient-hero p-4 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Token Roadmap Timeline
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Q4 2025 Through 2027 and Beyond. The $NORAH roadmap reflects a methodical approach to token distribution, 
              prioritising verified performance over speculative momentum. Liquidity follows demonstrated industrial capability, not marketing hype.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>
            
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.phase} className="relative flex items-start">
                  {/* Phase Number Circle */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow-purple">
                    <phase.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-8 flex-1">
                    <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow-purple transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">
                            Phase {phase.phase}: {phase.title}
                          </CardTitle>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant="outline" 
                              className={`${getStatusColor(phase.status)} text-white border-0`}
                            >
                              {getStatusText(phase.status)}
                            </Badge>
                            <Badge variant="outline" className="text-primary border-primary">
                              {phase.period}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {phase.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {phase.keyPoints.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{point}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Principles Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-card border border-border shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-center">Roadmap Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow-purple">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Verified Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Every milestone is backed by real industrial capacity and verified data
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow-purple">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Oracle Verification</h4>
                <p className="text-sm text-muted-foreground">
                  Independent verification ensures transparency and trust in all operations
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow-purple">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Community Governance</h4>
                <p className="text-sm text-muted-foreground">
                  Gradual transition to full DAO governance as the ecosystem matures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;
