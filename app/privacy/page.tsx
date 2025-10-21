"use client";
import { Shield, Eye, Lock, Database, Users, Globe, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              How we collect, use, and protect your personal information
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <span>Last updated: January 7, 2025</span>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as
                  when you create an account, use our services, or contact us
                  for support.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Information</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Name and email address</li>
                      <li>• Wallet addresses and transaction data</li>
                      <li>• Communication preferences</li>
                      <li>• Account credentials and authentication data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Technical Information
                    </h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• IP address and device information</li>
                      <li>• Browser type and version</li>
                      <li>• Usage patterns and preferences</li>
                      <li>• Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use the information we collect to provide, maintain, and
                  improve our services, including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Processing transactions and managing your account
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Providing customer support and responding to inquiries
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Distributing revenue payments to token holders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ensuring platform security and preventing fraud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Complying with legal and regulatory requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Improving our services and user experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Information Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technical Safeguards</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• End-to-end encryption</li>
                      <li>• Secure data transmission (HTTPS)</li>
                      <li>• Regular security audits</li>
                      <li>• Access controls and authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Organizational Measures
                    </h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Employee training on data protection</li>
                      <li>• Limited access to personal data</li>
                      <li>• Regular security assessments</li>
                      <li>• Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Data Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>With your explicit consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      To comply with legal obligations or court orders
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      With trusted service providers who assist in our
                      operations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To protect our rights, property, or safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      In connection with a business transfer or merger
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Depending on your jurisdiction, you may have certain rights
                  regarding your personal information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Access and Control</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Access your personal data</li>
                      <li>• Correct inaccurate information</li>
                      <li>• Delete your account and data</li>
                      <li>• Restrict processing of your data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Communication</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Opt out of marketing communications</li>
                      <li>• Update communication preferences</li>
                      <li>• Request data portability</li>
                      <li>• Object to certain processing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  International Data Transfers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place for such transfers, including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Standard contractual clauses approved by relevant
                      authorities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Adequacy decisions by competent data protection
                      authorities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Certification schemes and codes of conduct</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this privacy
                  policy, unless a longer retention period is required or
                  permitted by law.
                </p>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Some information may be retained for
                    longer periods for legal, regulatory, or business purposes,
                    such as transaction records required for compliance with
                    anti-money laundering regulations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Children&apos;s Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our services are not intended for individuals under the age of
                  18. We do not knowingly collect personal information from
                  children under 18. If we become aware that we have collected
                  personal information from a child under 18, we will take steps
                  to delete such information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will
                  notify you of any material changes by posting the new privacy
                  policy on this page and updating the &quot;Last updated&quot;
                  date.
                </p>
                <p className="text-muted-foreground">
                  Your continued use of our services after any changes to this
                  privacy policy constitutes your acceptance of the updated
                  policy.
                </p>
              </CardContent>
            </Card>

            <div className="bg-muted/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                If you have any questions about this privacy policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Email: privacy@norahtoken.com</p>
                <p>Address: NORAH Token Privacy Team</p>
                <p>Response time: Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
