"use client";
import { FileText, Users, Shield, AlertCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Terms of Use
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using the NORAH Token
              platform
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Last updated: January 7, 2025</span>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing and using the NORAH Token platform, you accept
                  and agree to be bound by the terms and provision of this
                  agreement. If you do not agree to abide by the above, please
                  do not use this service.
                </p>
                <p className="text-muted-foreground">
                  These Terms of Use govern your use of our website, services,
                  and any related applications. We reserve the right to modify
                  these terms at any time without prior notice.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  As a user of our platform, you agree to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Provide accurate and complete information when creating an
                      account
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Maintain the security of your account credentials
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Comply with all applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Not use the platform for illegal or unauthorized purposes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Not attempt to interfere with the platform&apos;s security
                      features
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Prohibited Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  You may not use our platform to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Engage in money laundering or terrorist financing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Violate any applicable laws or regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Attempt to hack, disrupt, or damage our systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Create fake accounts or impersonate others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Distribute malware or harmful content</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The NORAH Token platform, including its design, content, and
                  functionality, is protected by intellectual property laws. You
                  may not:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Copy, modify, or distribute our content without permission
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reverse engineer our software or systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Use our trademarks or logos without authorization
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Token Rights and Obligations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  NORAH Tokens represent contractual rights to participate in
                  Norah Mining&apos;s verified lithium concentrate revenue
                  streams. Token holders have the following rights and
                  obligations:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Right to receive quarterly USDT distributions based on
                      token holdings
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Obligation to comply with all applicable laws and
                      regulations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Understanding that revenue distributions are not
                      guaranteed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Acceptance of all risks associated with token ownership
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, NORAH Token and its
                  affiliates shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including but not
                  limited to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Loss of profits, data, or business opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Damages resulting from token price fluctuations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Technology failures or security breaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Regulatory changes affecting token operations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your access to
                  our platform at any time, with or without notice, for any
                  reason, including if you breach these Terms of Use.
                </p>
                <p className="text-muted-foreground">
                  Upon termination, your right to use the platform will cease
                  immediately. However, provisions of these terms that by their
                  nature should survive termination shall remain in effect.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  These Terms of Use shall be governed by and construed in
                  accordance with the laws of the jurisdiction where NORAH Token
                  is incorporated, without regard to conflict of law principles.
                </p>
                <p className="text-muted-foreground">
                  Any disputes arising from these terms or your use of the
                  platform shall be resolved through binding arbitration in
                  accordance with the rules of the relevant arbitration
                  association.
                </p>
              </CardContent>
            </Card>

            <div className="bg-muted/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                Contact Information
              </h3>
              <p className="text-muted-foreground text-sm">
                If you have any questions about these Terms of Use, please
                contact us at legal@norahtoken.com or through our contact page.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
