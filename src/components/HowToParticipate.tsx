import { Wallet, ArrowRight, Coins, CheckCircle } from "lucide-react";

const HowToParticipate = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Your Wallet",
      description:
        "Connect your Web3 wallet (MetaMask, TronLink, Phantom, or other supported wallets) to access the multi-chain bridge system.",
    },
    {
      icon: ArrowRight,
      title: "Choose Network",
      description:
        "Select your preferred blockchain network from 6 supported networks: Ethereum, Binance, Base, Solana, Toronet, or Bantu.",
    },
    {
      icon: Coins,
      title: "Purchase Tokens",
      description:
        "Buy Norah tokens using USDT or native tokens. Tokens represent contractual rights to mining revenue streams.",
    },
    {
      icon: CheckCircle,
      title: "Receive Revenue Distributions",
      description:
        "Hold your tokens to receive up to 10% APR distributions from Norah Mining's lithium concentrate revenues.",
    },
  ];

  return (
    <section id="participate" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            How to Participate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to join the Norah Token presale and secure your tokens
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 rounded-xl bg-gradient-card border border-border hover:border-primary transition-all duration-300 hover:shadow-card group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-purple group-hover:shadow-glow-blue transition-all duration-300 font-bold text-xl text-primary-foreground">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-glow-purple group-hover:shadow-glow-blue transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-card border border-border shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-center">Important Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Requirements:</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Compatible Web3 wallet (MetaMask, Trust Wallet, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>BNB for gas fees and contribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Minimum contribution: 0.1 BNB</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Security Tips:</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Always verify the contract address before sending</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Never share your private keys or seed phrase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Only use official Norah Token links</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;
