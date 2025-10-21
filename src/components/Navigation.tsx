"use client";

import { useState } from "react";
import { Menu, X, Wallet, LogIn, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const router = useRouter();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Details", href: "#details" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Networks", href: "#networks" },
    { name: "How to Participate", href: "#participate" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const goToHome = () => {
    router.push("/");
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={goToHome}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              width={40}
              height={40}
              src={"/norah-gold.jpg"}
              alt="Norah Token"
              className="w-10 h-10 p-1 rounded-full shadow-glow-purple"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Norah Token
            </span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <ThemeToggle />
            {isAdmin && (
              <Button
                onClick={() => router.push("/admin")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Shield className="w-4 h-4 mr-2" />
                Admin
              </Button>
            )}
            {user ? (
              <Button
                onClick={signOut}
                className="bg-gradient-primary hover:shadow-glow-purple transition-all duration-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => router.push("/auth")}
                className="bg-gradient-primary hover:shadow-glow-purple transition-all duration-300"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
            <div className="flex justify-center py-2">
              <ThemeToggle />
            </div>
            {isAdmin && (
              <Button
                onClick={() => router.push("/admin")}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Shield className="w-4 h-4 mr-2" />
                Admin Panel
              </Button>
            )}
            {user ? (
              <Button
                onClick={signOut}
                className="w-full bg-gradient-primary hover:shadow-glow-purple transition-all duration-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => router.push("/auth")}
                className="w-full bg-gradient-primary hover:shadow-glow-purple transition-all duration-300"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
