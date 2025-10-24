"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Palette,
  FileText,
  Type,
  Eye,
  Copy,
  Check,
  ImageIcon,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

const BrandKit = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const brandColors = [
    {
      name: "Primary Purple",
      value: "#8B5CF6",
      hex: "#8B5CF6",
      usage: "Main brand color",
    },
    {
      name: "Secondary Blue",
      value: "#0EA5E9",
      hex: "#0EA5E9",
      usage: "Accent color",
    },
    {
      name: "Gold",
      value: "#F59E0B",
      hex: "#F59E0B",
      usage: "Premium features",
    },
    {
      name: "Success Green",
      value: "#10B981",
      hex: "#10B981",
      usage: "Success states",
    },
    {
      name: "Warning Orange",
      value: "#F59E0B",
      hex: "#F59E0B",
      usage: "Warnings",
    },
    {
      name: "Error Red",
      value: "#EF4444",
      hex: "#EF4444",
      usage: "Error states",
    },
  ];

  const typography = [
    { name: "Headings", font: "Inter Bold", size: "32px", weight: "700" },
    {
      name: "Subheadings",
      font: "Inter SemiBold",
      size: "24px",
      weight: "600",
    },
    { name: "Body Text", font: "Inter Regular", size: "16px", weight: "400" },
    { name: "Captions", font: "Inter Medium", size: "14px", weight: "500" },
  ];

  const logoVariants = [
    {
      name: "Primary Logo",
      description: "Main logo with full branding",
      usage: "Primary applications",
    },
    {
      name: "Icon Only",
      description: "Logo mark without text",
      usage: "Favicons, small spaces",
    },
    {
      name: "Monochrome",
      description: "Single color version",
      usage: "Single color applications",
    },
    {
      name: "Dark Background",
      description: "Light version for dark backgrounds",
      usage: "Dark themes",
    },
  ];

  const brandAssets = [
    {
      name: "Logo Package",
      type: "ZIP",
      size: "2.4 MB",
      description: "All logo formats and variations",
    },
    {
      name: "Color Palette",
      type: "ASE",
      size: "156 KB",
      description: "Adobe Swatch Exchange file",
    },
    {
      name: "Typography Guide",
      type: "PDF",
      size: "1.2 MB",
      description: "Font specifications and usage",
    },
    {
      name: "Brand Guidelines",
      type: "PDF",
      size: "4.8 MB",
      description: "Complete brand manual",
    },
    {
      name: "Social Media Kit",
      type: "ZIP",
      size: "8.1 MB",
      description: "Social media templates",
    },
    {
      name: "Presentation Templates",
      type: "PPTX",
      size: "12.3 MB",
      description: "PowerPoint templates",
    },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
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
              Brand Kit
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Official Norah Token brand assets, guidelines, and resources for
              partners, developers, and community members.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Brand Colors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {brandColors.map((color, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 border border-border"
                    >
                      <div
                        className="w-8 h-8 rounded border border-border"
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-sm">
                          {color.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {color.usage}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(color.hex, color.name)}
                        className="h-8 w-8 p-0"
                      >
                        {copied ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="w-5 h-5" />
                  Typography
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {typography.map((type, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-muted/20 border border-border"
                    >
                      <div className="font-semibold text-sm mb-1">
                        {type.name}
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {type.font} • {type.size} • {type.weight}
                      </div>
                      <div
                        className="text-lg"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: type.weight,
                          fontSize:
                            type.size === "32px"
                              ? "24px"
                              : type.size === "24px"
                              ? "18px"
                              : "14px",
                        }}
                      >
                        Norah Token
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-card border-border shadow-card mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Logo Variations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {logoVariants.map((variant, index) => (
                  <div key={index} className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-muted/20 border border-border flex items-center justify-center">
                      <Image
                        src="/norah-gold.jpg"
                        alt="Norah Logo"
                        width={40}
                        height={40}
                        className="w-16 h-16 rounded-full"
                      />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">
                      {variant.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {variant.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {variant.usage}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Brand Assets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {brandAssets.map((asset, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-muted/20 border border-border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{asset.name}</h4>
                      <Badge variant="outline">{asset.type}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {asset.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {asset.size}
                      </span>
                      <Button
                        size="sm"
                        className="bg-gradient-primary hover:shadow-glow-purple transition-all duration-300"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle>Brand Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-sm">Logo Usage</div>
                      <div className="text-xs text-muted-foreground">
                        Maintain clear space around logo
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-sm">
                        Color Application
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Use brand colors consistently
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-sm">Typography</div>
                      <div className="text-xs text-muted-foreground">
                        Follow font hierarchy guidelines
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-sm">
                        Do&apos;s and Don&apos;ts
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Follow brand guidelines strictly
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle>Quick Downloads</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-primary hover:shadow-glow-purple transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Complete Brand Kit
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Brand Guidelines PDF
                </Button>
                <Button variant="outline" className="w-full">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Logo Package
                </Button>
                <Button variant="outline" className="w-full">
                  <Palette className="w-4 h-4 mr-2" />
                  Color Palette
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BrandKit;
