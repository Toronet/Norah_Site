import { Shield, Zap, Users, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Legal Framework",
      description: "Operates under standard contract law with SPV fiduciary structure",
    },
    {
      icon: Zap,
      title: "Multi-Chain Bridge",
      description: "Cross-chain transfers across 6 networks: Ethereum, Binance, Base, Solana, Toronet, and Bantu",
    },
    {
      icon: Users,
      title: "Revenue Sharing",
      description: "2.8% quarterly USDT distributions from lithium mining revenues",
    },
    {
      icon: TrendingUp,
      title: "Commodity-Based Minting",
      description: "Automatic token creation based on lithium price and yield performance",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About NORAH Token
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            NORAH Token represents a contractual right to participate in Norah Mining&apos;s verified lithium concentrate revenue streams.
            Our mission is to tokenize real-world mining assets and provide transparent, automated revenue distribution
            through blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary transition-all duration-300 hover:shadow-card hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-glow-purple group-hover:shadow-glow-blue transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-card border border-border shadow-card">
          <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-primary bg-clip-text text-transparent">
            Our Vision
          </h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            We envision a future where real-world assets are seamlessly integrated with blockchain technology,
            providing transparent and automated revenue distribution. NORAH Token serves as a bridge between
            traditional mining operations and the decentralized world, offering token holders direct participation
            in verified lithium mining revenue streams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
