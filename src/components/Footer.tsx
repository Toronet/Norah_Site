"use client";

import { Twitter, Send, MessageCircle, Github, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useNavigation, FooterLink } from "@/lib/navigation";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { navigateToSection } = useNavigation();
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  const footerLinks: Record<string, FooterLink[]> = {
    Product: [
      { name: "About", href: "#about", isHomeSection: true },
      { name: "Tokenomics", href: "#tokenomics", isHomeSection: true },
      { name: "How to Participate", href: "#participate", isHomeSection: true },
      { name: "Whitepaper", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Smart Contract", href: "/smart-contract" },
      { name: "Audit Report", href: "/audit-report" },
      { name: "Brand Kit", href: "/brand-kit" },
    ],
    Legal: [
      { name: "Terms of Use", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
  };

  const socialIcons = [
    { icon: Twitter, href: "https://twitter.com/norahtoken", label: "Twitter" },
    { icon: Send, href: "https://t.me/norahtoken", label: "Telegram" },
    {
      icon: MessageCircle,
      href: "https://discord.gg/norahtoken",
      label: "Discord",
    },
    { icon: Github, href: "https://github.com/norahtoken", label: "GitHub" },
    { icon: Mail, href: "mailto:contact@norahtoken.com", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button
              onClick={goToHome}
              className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity"
            >
              <Image
                width={48}
                height={48}
                src={"/norah-gold.jpg"}
                alt="Norah Token"
                className="w-12 h-12 rounded-full shadow-glow-purple"
              />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Norah Token
              </span>
            </button>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Revolutionizing the future of decentralized finance with
              innovative blockchain technology and community-driven governance.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/20 border border-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:shadow-glow-purple group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4 text-foreground">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.isHomeSection ? (
                      <button
                        onClick={() => navigateToSection(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm text-left"
                      >
                        {link.name}
                      </button>
                    ) : link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Norah Token. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 rounded-lg bg-muted/20 border border-border">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Disclaimer:</strong> Cryptocurrency investments carry risk.
            Please do your own research before investing. This website does not
            constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
