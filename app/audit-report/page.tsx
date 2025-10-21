"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  FileText,
  Download,
  ExternalLink,
  Calendar,
  Users,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AuditReport = () => {
  const auditResults = [
    {
      category: "Critical",
      count: 0,
      color: "bg-red-500",
      description: "No critical vulnerabilities found",
    },
    {
      category: "High",
      count: 0,
      color: "bg-orange-500",
      description: "No high-risk issues identified",
    },
    {
      category: "Medium",
      count: 2,
      color: "bg-yellow-500",
      description: "Minor optimization opportunities",
    },
    {
      category: "Low",
      count: 1,
      color: "bg-blue-500",
      description: "Cosmetic improvements suggested",
    },
  ];

  const auditFindings = [
    {
      severity: "Medium",
      title: "Gas Optimization",
      description:
        "Some functions could be optimized for lower gas consumption",
      status: "Resolved",
      color: "bg-yellow-500",
    },
    {
      severity: "Medium",
      title: "Event Logging",
      description: "Additional event logging could improve transparency",
      status: "Resolved",
      color: "bg-yellow-500",
    },
    {
      severity: "Low",
      title: "Documentation",
      description: "Enhanced inline documentation recommended",
      status: "Resolved",
      color: "bg-blue-500",
    },
  ];

  const auditMetrics = [
    {
      label: "Code Coverage",
      value: "98.5%",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      label: "Security Score",
      value: "A+",
      icon: Shield,
      color: "text-green-500",
    },
    {
      label: "Gas Efficiency",
      value: "Excellent",
      icon: FileText,
      color: "text-green-500",
    },
    {
      label: "Best Practices",
      value: "100%",
      icon: CheckCircle,
      color: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="flex flex-col items-center justify-center bg-gradient-hero p-4 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Security Audit Report
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security audit results for NORAH Token smart
              contracts across all supported networks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Audit Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">
                    A+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Overall Security Rating
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Critical Issues:</span>
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-500 border-green-500"
                    >
                      0
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">High Risk:</span>
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-500 border-green-500"
                    >
                      0
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Medium Risk:</span>
                    <Badge
                      variant="outline"
                      className="bg-yellow-500/10 text-yellow-500 border-yellow-500"
                    >
                      2
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Low Risk:</span>
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-500 border-blue-500"
                    >
                      1
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Audit Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Audit Firm:
                    </span>
                    <span className="text-sm font-semibold">CertiK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Audit Date:
                    </span>
                    <span className="text-sm font-semibold">Dec 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Report Version:
                    </span>
                    <span className="text-sm font-semibold">v2.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Duration:
                    </span>
                    <span className="text-sm font-semibold">14 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Audit Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Lead Auditor:
                    </span>
                    <span className="text-sm font-semibold">
                      Dr. Sarah Chen
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Senior Analyst:
                    </span>
                    <span className="text-sm font-semibold">
                      Michael Torres
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Security Expert:
                    </span>
                    <span className="text-sm font-semibold">Alex Kim</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Experience:
                    </span>
                    <span className="text-sm font-semibold">8+ years</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {auditMetrics.map((metric, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border shadow-card text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow-purple">
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className="text-2xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-card border-border shadow-card mb-12">
            <CardHeader>
              <CardTitle>Audit Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditFindings.map((finding, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-muted/20 border border-border"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge className={`${finding.color} text-white`}>
                          {finding.severity}
                        </Badge>
                        <h4 className="font-semibold">{finding.title}</h4>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-500/10 text-green-500 border-green-500"
                      >
                        {finding.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {finding.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle>Download Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-primary hover:shadow-glow-purple transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Full Audit Report (PDF)
                </Button>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on CertiK
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Executive Summary
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle>Security Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm">
                      All critical and high-risk issues have been resolved
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm">
                      Regular security monitoring recommended
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm">
                      Annual re-audit schedule established
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm">
                      Multi-signature implementation verified
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuditReport;
