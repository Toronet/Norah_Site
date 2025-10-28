"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Copy,
  Check,
  ExternalLink,
  Shield,
  FileText,
  Code,
  Users,
  TrendingUp,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SmartContract = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const contractAddresses = {
    ethereum: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    binance: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    base: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    solana: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    toronet: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    bantu: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    doxa: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    cloudax: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  };

  const contractFeatures = [
    {
      icon: Shield,
      title: "Multi-Signature Security",
      description:
        "Contract requires multiple signatures for critical operations",
    },
    {
      icon: FileText,
      title: "Revenue Distribution",
      description: "Up to 10% APR distributions from lithium mining revenues",
    },
    {
      icon: Code,
      title: "Upgradeable Contract",
      description: "Smart contract can be upgraded for improvements",
    },
    {
      icon: Users,
      title: "Governance Voting",
      description: "Token holders can vote on important decisions",
    },
  ];

  const copyAddress = (address: string, network: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    toast({
      title: "Copied!",
      description: `${network} contract address copied to clipboard`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="flex flex-col items-center justify-center bg-gradient-hero p-4 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Smart Contract
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Norah Token smart contract details, addresses, and verification
              information across all supported networks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Contract Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <div className="text-2xl font-bold text-primary">
                      ERC-20
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Ethereum Standard
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <div className="text-2xl font-bold text-primary">
                      BEP-20
                    </div>
                    <div className="text-sm text-muted-foreground">
                      BSC Standard
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <div className="text-2xl font-bold text-primary">SPL</div>
                    <div className="text-sm text-muted-foreground">
                      Solana Standard
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <div className="text-2xl font-bold text-primary">
                      TRC-20
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tron Standard
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <div className="text-2xl font-bold text-primary">
                      DOXA
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Doxa Standard
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <div className="text-2xl font-bold text-primary">
                      CLDX
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Cloudax Standard
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/20 border border-border">
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Up to 10% APR distributions from lithium mining revenues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Multi-signature wallet for enhanced security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Governance voting system for token holders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Cross-chain bridge functionality</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Contract Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/20 border border-border text-center">
                    <div className="text-2xl font-bold text-primary">8M</div>
                    <div className="text-sm text-muted-foreground">
                      Total Supply
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/20 border border-border text-center">
                    <div className="text-2xl font-bold text-primary">18</div>
                    <div className="text-sm text-muted-foreground">
                      Decimals
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/20 border border-border text-center">
                    <div className="text-2xl font-bold text-primary">8</div>
                    <div className="text-sm text-muted-foreground">
                      Networks
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/20 border border-border text-center">
                    <div className="text-2xl font-bold text-primary">$10</div>
                    <div className="text-sm text-muted-foreground">
                      Token Price
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-card border-border shadow-card mb-12">
            <CardHeader>
              <CardTitle>Contract Addresses by Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(contractAddresses).map(([network, address]) => (
                  <div
                    key={network}
                    className="p-4 rounded-lg bg-muted/20 border border-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="capitalize">
                        {network}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyAddress(address, network)}
                        className="h-8 w-8 p-0"
                      >
                        {copied ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    <div className="font-mono text-sm break-all text-muted-foreground">
                      {address}
                    </div>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 h-auto mt-2 text-primary"
                      onClick={() => {
                        const explorerUrls = {
                          ethereum: `https://etherscan.io/token/${address}`,
                          binance: `https://bscscan.com/token/${address}`,
                          base: `https://basescan.org/token/${address}`,
                          solana: `https://solscan.io/token/${address}`,
                          toronet: `https://toronet.org/token/${address}`,
                          bantu: `https://bantu.io/token/${address}`,
                          doxa: `https://doxa.network/token/${address}`,
                          cloudax: `https://cloudax.network/token/${address}`,
                        };
                        window.open(
                          explorerUrls[network as keyof typeof explorerUrls],
                          "_blank"
                        );
                      }}
                    >
                      View on Explorer <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contractFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border shadow-card hover:shadow-glow-purple transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow-purple">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SmartContract;
