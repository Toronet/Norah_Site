import { Shield, Zap, Users, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Tokenized Access to Mineral Wealth",
      description: "Conventional mining finance excludes retail and diaspora investors. Tokenization allows transparent, fractional participation through compliant smart contracts that mirror real production data.",
    },
    {
      icon: Zap,
      title: "Real-World Performance on Chain",
      description: "The $NORAH system links verified export-revenues data directly to its on-chain distribution contract. This converts physical-world performance into programmable digital yield.",
    },
    {
      icon: Users,
      title: "Economic Inclusion and Sovereignty",
      description: "By converting resource flows into participatory financial instruments, Norah Mining enables local and global communities to benefit from the energy transition — not as spectators but as stakeholders.",
    },
    {
      icon: TrendingUp,
      title: "Sustainability and Governance",
      description: "Responsible concentrate production, environmental monitoring, and transparent revenue sharing. Each on-chain payout is both a yield event and a record of accountability.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            The Norah Vision - Engineering Shared Prosperity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To transform Africa's lithium endowment into a globally accessible, digitally verifiable source of sustainable wealth — 'from mine to wallet.'
            The $NORAH token translates physical production value into programmable digital rights, representing fractional entitlement to verified concentrate revenues.
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
            The Global Context — From Oil to Lithium
          </h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            The twenty-first century is powered not by crude oil but by electrons. Every battery that stores those electrons is built on one quiet element — <strong>lithium</strong>. 
            As the global industry moves towards electric mobility and renewable grids, lithium is rapidly becoming the world's most strategic commodity. 
            Yet the geography of supply remains narrow. Australia, Chile, and China dominate global production, while Africa — despite vast pegmatite belts — captures only a fragment of market value. 
            This imbalance mirrors the early oil age: resources located in the Global South, but value captured elsewhere. 
            <strong className="text-primary">Norah Mining seeks to rewrite that history by using Fintech and blockchain rails to ensure that Africa's participation in the energy transition is both early and equitable.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
