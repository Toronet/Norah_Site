"use client";
import { Cookie, Settings, Shield, BarChart, User, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: Shield,
      name: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: ["Authentication", "Security", "Session management"],
      necessary: true,
    },
    {
      icon: Settings,
      name: "Functional Cookies",
      description: "Enhance user experience and preferences",
      examples: [
        "Language settings",
        "Theme preferences",
        "User interface customization",
      ],
      necessary: false,
    },
    {
      icon: BarChart,
      name: "Analytics Cookies",
      description: "Help us understand website usage and performance",
      examples: ["Page views", "User behavior", "Performance metrics"],
      necessary: false,
    },
    {
      icon: User,
      name: "Personalization Cookies",
      description: "Remember user preferences and provide customized content",
      examples: ["User preferences", "Customized content", "Recommendations"],
      necessary: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              How we use cookies and similar technologies on the NORAH Token
              platform
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <span>Last updated: January 7, 2025</span>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="w-5 h-5" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Cookies are small text files that are stored on your device
                  when you visit our website. They help us provide you with a
                  better experience by remembering your preferences and enabling
                  certain functionality.
                </p>
                <p className="text-muted-foreground">
                  We use cookies and similar technologies (such as local storage
                  and session storage) to enhance your experience on the NORAH
                  Token platform, ensure security, and analyze how our services
                  are used.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {cookieTypes.map((cookie, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-muted/20 border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <cookie.icon className="w-5 h-5 text-primary mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{cookie.name}</h4>
                          {cookie.necessary && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                              Necessary
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {cookie.description}
                        </p>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">
                            Examples:
                          </p>
                          <ul className="flex flex-wrap gap-1">
                            {cookie.examples.map((example, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                              >
                                {example}
                              </span>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Cookie Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You have control over which cookies you accept. You can manage
                  your cookie preferences through your browser settings or our
                  cookie consent tool.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Browser Settings</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Most browsers allow you to control cookies through their
                      settings. You can:
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Block all cookies</li>
                      <li>• Allow only first-party cookies</li>
                      <li>• Delete existing cookies</li>
                      <li>• Set cookie expiration preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Our Cookie Tool</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Use our cookie consent tool to:
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Accept or reject specific cookie types</li>
                      <li>• Update your preferences anytime</li>
                      <li>• View detailed cookie information</li>
                      <li>• Withdraw consent for non-essential cookies</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button className="bg-gradient-primary hover:shadow-glow-purple">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Cookie Preferences
                  </Button>
                  <Button variant="outline">Accept All Cookies</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Cookie Duration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Cookies have different lifespans depending on their purpose.
                  Here&apos;s how long different types of cookies remain on your
                  device:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <h4 className="font-semibold mb-2">Session Cookies</h4>
                    <p className="text-2xl font-bold text-primary mb-1">
                      Until browser closes
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Temporary cookies for current session
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <h4 className="font-semibold mb-2">Persistent Cookies</h4>
                    <p className="text-2xl font-bold text-primary mb-1">
                      30 days - 2 years
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Remember preferences and settings
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <h4 className="font-semibold mb-2">Authentication</h4>
                    <p className="text-2xl font-bold text-primary mb-1">
                      24 hours - 30 days
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Keep you logged in securely
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may use third-party services that set their own cookies.
                  These services help us provide better functionality and
                  analyze our website performance.
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/20">
                    <h4 className="font-semibold mb-1">Analytics Services</h4>
                    <p className="text-muted-foreground text-sm">
                      We use analytics tools to understand how users interact
                      with our platform and improve our services.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/20">
                    <h4 className="font-semibold mb-1">
                      Authentication Services
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Third-party authentication providers may set cookies to
                      manage login sessions securely.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/20">
                    <h4 className="font-semibold mb-1">Content Delivery</h4>
                    <p className="text-muted-foreground text-sm">
                      CDN services may use cookies to optimize content delivery
                      and improve loading speeds.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Impact of Disabling Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  While you can disable cookies, doing so may affect your
                  experience on our platform:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">
                      Essential Cookies
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Disabling these may prevent basic functionality:
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Unable to log in or stay logged in</li>
                      <li>• Security features may not work</li>
                      <li>• Session management issues</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-yellow-600">
                      Non-Essential Cookies
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Disabling these may reduce functionality:
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Preferences won&apos;t be remembered</li>
                      <li>• Less personalized experience</li>
                      <li>• Analytics data won&apos;t be collected</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may update this cookie policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons.
                </p>
                <p className="text-muted-foreground">
                  We will notify you of any material changes by posting the
                  updated policy on this page and updating the &quot;Last
                  updated&quot; date. We encourage you to review this policy
                  periodically.
                </p>
              </CardContent>
            </Card>

            <div className="bg-muted/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                Questions About Cookies?
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                If you have any questions about our use of cookies or this
                cookie policy, please contact us:
              </p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Email: privacy@norahtoken.com</p>
                <p>Subject: Cookie Policy Inquiry</p>
                <p>Response time: Within 5 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
