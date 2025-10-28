import { useState } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const networks = [
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    icon: "⟠",
    logo: "/eth.svg",
    color: "from-blue-500 to-blue-600",
    description: "Ethereum Mainnet",
    features: ["ERC-20 Standard", "High Security", "DeFi Ecosystem"],
    status: "active"
  },
  {
    id: "binance",
    name: "Binance Smart Chain",
    symbol: "BNB",
    icon: "🟡",
    logo: "/bsc.svg",
    color: "from-yellow-500 to-yellow-600",
    description: "BSC Network",
    features: ["Low Fees", "Fast Transactions", "BEP-20 Standard"],
    status: "active"
  },
  {
    id: "base",
    name: "Base",
    symbol: "ETH",
    icon: "🔵",
    logo: "/base.svg",
    color: "from-blue-600 to-blue-700",
    description: "Base Network",
    features: ["Layer 2 Solution", "Coinbase Backed", "Low Cost"],
    status: "active"
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    icon: "🟣",
    logo: "/sol.svg",
    color: "from-purple-500 to-purple-600",
    description: "Solana Network",
    features: ["Ultra Fast", "SPL Tokens", "High Throughput"],
    status: "active"
  },
  {
    id: "toronet",
    name: "Toronet",
    symbol: "TORO",
    icon: "🟠",
    logo: "/trx.svg",
    color: "from-orange-500 to-orange-600",
    description: "Toronet Network",
    features: ["African Focus", "Local Payments", "TRC-20 Compatible"],
    status: "active"
  },
  {
    id: "bantu",
    name: "Bantu",
    symbol: "XBN",
    icon: "🟢",
    logo: "/bantu.svg",
    color: "from-green-500 to-green-600",
    description: "Bantu Network",
    features: ["African Blockchain", "Local Integration", "Sustainable"],
    status: "active"
  },
  {
    id: "doxa",
    name: "Doxa",
    symbol: "DOXA",
    icon: "🔷",
    logo: "/doxa.svg",
    color: "from-cyan-500 to-cyan-600",
    description: "Doxa Network",
    features: ["African Blockchain", "Scalable", "Energy Efficient"],
    status: "active"
  },
  {
    id: "cloudax",
    name: "Cloudax",
    symbol: "CLDX",
    icon: "☁️",
    logo: "/clodaxlogo.svg",
    color: "from-sky-500 to-sky-600",
    description: "Cloudax Network",
    features: ["Cloud Infrastructure", "High Performance", "Global Reach"],
    status: "active"
  }
];

const SupportedNetworks = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  return (
    <section id="networks" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Supported Networks
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Norah Token is available across multiple blockchain networks, providing flexibility and accessibility for users worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {networks.map((network) => (
            <div
              key={network.id}
              className={`p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer group ${
                selectedNetwork === network.id ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}
              onClick={() => setSelectedNetwork(selectedNetwork === network.id ? null : network.id)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${network.color} flex items-center justify-center p-2 shadow-lg`}>
                  {imageErrors.has(network.id) ? (
                    <span className="text-white text-lg font-bold">{network.icon}</span>
                  ) : (
                    <div className="w-8 h-8 flex items-center justify-center bg-white/90 rounded-full p-1">
                      <Image
                        src={network.logo}
                        alt={`${network.name} logo`}
                        width={32}
                        height={32}
                        className="w-6 h-6 object-contain"
                        onError={() => {
                          setImageErrors(prev => new Set(prev).add(network.id));
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{network.name}</h3>
                  <p className="text-sm text-muted-foreground">{network.description}</p>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">Active</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {network.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className="text-sm text-muted-foreground">Supported Networks</div>
          </div>
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <div className="text-3xl font-bold text-secondary mb-2">Multi-Chain</div>
            <div className="text-sm text-muted-foreground">Bridge Technology</div>
          </div>
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Cross-Chain Support</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-card border border-border shadow-card">
          <h3 className="text-2xl font-bold mb-4 text-center">Multi-Chain Bridge System</h3>
          <p className="text-muted-foreground text-center mb-6">
            Transfer your Norah tokens seamlessly between all supported networks with our advanced bridge technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Bridge Features:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Instant cross-chain transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Low bridge fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure multi-signature validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Real-time transaction tracking</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-secondary">Supported Standards:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>ERC-20 (Ethereum, Base)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>BEP-20 (Binance Smart Chain)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>SPL (Solana)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>TRC-20 (Toronet, Bantu)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>DOXA Standard (Doxa Network)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>CLDX Standard (Cloudax Network)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedNetworks;
