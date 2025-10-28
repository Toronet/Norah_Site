"use client";

import { Shield, CheckCircle, AlertTriangle, Users, Lock, Eye, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Governance = () => {
  const emissionTriggers = [
    {
      trigger: "Capacity ↑ ≥30%",
      description: "Production throughput increase of 30% or more",
      verification: "Auditor + oracle verification of throughput increase",
      emissionLimit: "≤10%",
      approval: "2-of-3 multisig",
      color: "bg-blue-500"
    },
    {
      trigger: "Lithium FOB ↑ ≥20%",
      description: "Lithium Free On Board price increase of 20% or more",
      verification: "Sustained 60-day price elevation",
      emissionLimit: "≤5%",
      approval: "2-of-3 multisig",
      color: "bg-green-500"
    },
    {
      trigger: "Speculative Spike >30%",
      description: "A speculative price spike greater than 30%",
      verification: "Price substantially exceeds revenue ratio",
      emissionLimit: "≤3% + buy-back offset",
      approval: "Treasury + Auditor + Oracle consensus",
      color: "bg-orange-500"
    }
  ];

  const buybackMechanism = [
    {
      step: 1,
      title: "Volatility Detection",
      icon: AlertTriangle,
      description: "Algorithm monitors price-to-revenue ratio continuously. Threshold breach triggers stabilisation protocol."
    },
    {
      step: 2,
      title: "Treasury Allocation",
      icon: Lock,
      description: "Up to 15% of quarterly revenue reserved for market stabilisation operations and strategic buy-backs."
    },
    {
      step: 3,
      title: "Token Retirement",
      icon: CheckCircle,
      description: "Repurchased tokens permanently removed from circulation, reducing effective supply and supporting price stability."
    }
  ];

  const governancePillars = [
    {
      title: "Legal Covenant Layer",
      icon: FileText,
      description: "Binding agreements connect Norah Mining's concentrate sales to a verifiable payout commitment.",
      details: [
        "ORA (Output Rights Agreement)",
        "FRAD (Future Receivables Assignment Deed)",
        "RDC (Revenue Distribution Covenant)",
        "TIA (Token Issuance Agreement)",
        "OVDA (Oracle Verification Agreement)"
      ]
    },
    {
      title: "Smart-Contract Layer",
      icon: Shield,
      description: "Automated logic executes quarterly revenue distributions in USDT based on verified data.",
      details: [
        "QRO (Quarterly Revenue Obligations)",
        "Automated distribution logic",
        "Multi-signature wallet controls",
        "Emergency pause mechanisms"
      ]
    },
    {
      title: "Oracle Verification Layer",
      icon: Eye,
      description: "Secure data feeds from the export-bank API and auditor-signed proofs trigger on-chain settlements.",
      details: [
        "Export-proceeds API integration",
        "Auditor-signed proofs",
        "Real-time data verification",
        "Fallback oracle systems"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="flex flex-col items-center justify-center bg-gradient-hero p-4 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Governance & Safeguards
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Every emission is approved by verifiable data, not discretionary judgement. Our multi-signature governance framework 
              ensures that no single party can authorise token releases without independent verification from auditors, oracles, and treasury oversight.
            </p>
          </div>

          {/* Governance Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {governancePillars.map((pillar, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow-purple transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-purple">
                      <pillar.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pillar.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emission Triggers */}
          <Card className="bg-gradient-card border-border shadow-card mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">Token Emission Triggers</CardTitle>
              <p className="text-center text-muted-foreground">
                This governance architecture eliminates discretionary supply manipulation whilst maintaining the flexibility 
                to respond to genuine market and production developments. Each trigger operates independently, requiring distinct verification pathways.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {emissionTriggers.map((trigger, index) => (
                  <div key={index} className="p-6 rounded-xl bg-muted/20 border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
                      <div className="lg:col-span-1">
                        <Badge className={`${trigger.color} text-white border-0 mb-2`}>
                          {trigger.trigger}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{trigger.description}</p>
                      </div>
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-sm mb-1">Verification Pathway</h4>
                        <p className="text-sm text-muted-foreground">{trigger.verification}</p>
                      </div>
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-sm mb-1">Emission Limit</h4>
                        <Badge variant="outline" className="text-primary border-primary">
                          {trigger.emissionLimit}
                        </Badge>
                      </div>
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-sm mb-1">Approval Mechanism</h4>
                        <p className="text-sm text-muted-foreground">{trigger.approval}</p>
                      </div>
                      <div className="lg:col-span-1">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Buy-back Mechanism */}
          <Card className="bg-gradient-card border-border shadow-card mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">Token Buy-Back Mechanism Architecture</CardTitle>
              <p className="text-center text-muted-foreground">
                Strategic buy-backs offset speculative volatility whilst reinforcing long-term value. When market prices 
                deviate significantly from production fundamentals, the protocol automatically initiates stabilisation measures.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {buybackMechanism.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto shadow-glow-purple">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      {index < buybackMechanism.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent opacity-50"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">Transparency Notice</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Buy-back operations are publicly announced 48 hours in advance, ensuring transparency whilst preventing front-running behaviour.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm">2-of-3 multisig required for any vault release</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm">Team & advisor allocations vesting over 24–48 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm">Treasury buy-backs for price stability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm">No new minting beyond 8M hard cap</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Governance Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Issuing Entity</h4>
                    <p className="text-sm text-muted-foreground">Manages the revenue pool and reporting</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Operations Committee</h4>
                    <p className="text-sm text-muted-foreground">Norah Mining, Commscentric, external auditors</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Oracle Provider</h4>
                    <p className="text-sm text-muted-foreground">Posts verified export data on-chain</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Token Holders</h4>
                    <p className="text-sm text-muted-foreground">Transparent reporting but no operational control</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Governance;
