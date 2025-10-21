import { AlertTriangle, Shield, FileText, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Legal Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground">
              Important legal information regarding NORAH Token and its associated risks
            </p>
          </div>

          <Alert className="mb-8 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800 dark:text-yellow-200">
              <strong>Important Notice:</strong> This disclaimer contains critical information about the risks associated with NORAH Token. Please read carefully before making any investment decisions.
            </AlertDescription>
          </Alert>

          <div className="space-y-8">
            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Investment Risks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  NORAH Token represents a contractual right to participate in Norah Mining's verified lithium concentrate revenue streams. This is not a traditional security or investment product.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Token value may fluctuate significantly and could result in total loss of investment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Revenue distributions are not guaranteed and depend on mining operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Regulatory changes may affect token functionality and value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Technology risks including smart contract vulnerabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  No Financial Advice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The information provided on this platform is for educational and informational purposes only. It does not constitute financial, investment, legal, or tax advice.
                </p>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> You should conduct your own research and consult with qualified financial, legal, and tax advisors before making any investment decisions. Past performance does not guarantee future results.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Regulatory Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  NORAH Token operates under standard contract law rather than securities regulation. However, regulatory frameworks may change and could impact token operations.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Token holders are responsible for compliance with local laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Certain jurisdictions may restrict or prohibit token ownership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tax obligations may apply to token transactions and revenue distributions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Technology Risks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  NORAH Token relies on blockchain technology and smart contracts. Users should be aware of the following risks:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Smart contract bugs or vulnerabilities could result in loss of funds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Network congestion may affect transaction processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Private key loss could result in permanent loss of tokens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Bridge technology risks for cross-chain transfers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Mining Operations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Revenue distributions depend on Norah Mining's lithium concentrate production and sales. Several factors could affect these operations:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Commodity price fluctuations for lithium concentrate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Operational challenges, equipment failures, or natural disasters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Regulatory changes affecting mining operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Market demand for lithium concentrate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-muted/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Acceptance of Terms</h3>
              <p className="text-muted-foreground text-sm">
                By using this platform and acquiring NORAH Tokens, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. You understand the risks involved and accept full responsibility for your investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Disclaimer;
