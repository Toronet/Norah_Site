import { ArrowRight, Coins, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import NetworkSelector from "@/components/NetworkSelector";
import norahGold from "@/assets/norah-gold.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <img
                src={norahGold}
                alt="Norah Token Logo"
                className="relative w-32 h-32 md:w-48 md:h-48 p-3 m-6 rounded-full shadow-glow-purple transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary animate-pulse">
              <Coins className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Real World Asset Token</span>
              <Coins className="w-5 h-5" />
            </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  NORAH Token
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
                  Multi-chain Real World Asset tokenization platform for lithium mining revenue streams
                </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 px-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-purple transition-all duration-300 text-lg px-8 py-6 group"
              onClick={() => document.querySelector("#details")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Token Sale
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-lg px-8 py-6"
              onClick={() => document.querySelector("#networks")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Network className="mr-2 w-5 h-5" />
              View Networks
            </Button>
          </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 max-w-4xl mx-auto px-4">
            {[
              { label: "Total Supply", value: "21M NORAH" },
              { label: "Token Price", value: "$0.50" },
              { label: "Networks", value: "6 Chains" },
              { label: "Launch Date", value: "Q1 2025" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary transition-all duration-300 hover:shadow-card"
              >
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
