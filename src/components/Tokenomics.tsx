import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Tokenomics = () => {
  const tokenData = [
    { name: "Private Sale", value: 20, color: "#8B5CF6" },
    { name: "Presale", value: 15, color: "#0EA5E9" },
    { name: "Exchange Listing", value: 7, color: "#10B981" },
    { name: "Team and Advisors", value: 10, color: "#F59E0B" },
    { name: "Revenue Pool", value: 6, color: "#EF4444" },
    { name: "Mining Operations", value: 17, color: "#8B5CF6" },
    { name: "Marketing", value: 10, color: "#0EA5E9" },
    { name: "Treasury", value: 10, color: "#10B981" },
    { name: "Ecosystem Development", value: 5, color: "#F59E0B" },
  ];

  const tokenMetrics = [
    { label: "Token Name", value: "Norah Token" },
    { label: "Token Symbol", value: "$NORAH" },
    { label: "Max Supply", value: "8,000,000" },
    { label: "Year-1 Circulating Cap", value: "1,600,000" },
    { label: "Vault Reserve", value: "6,400,000 locked" },
    { label: "Token Standard", value: "ERC-20/BEP-20/SPL/TRC-20" },
  ];

  return (
    <section id="tokenomics" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent and sustainable token distribution model
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-card border border-border shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-center">Token Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tokenData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {tokenData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 space-y-2">
              {tokenData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-8 rounded-2xl bg-gradient-card border border-border shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-center">Token Information</h3>
              <div className="space-y-4">
                {tokenMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg bg-muted/20 border border-border hover:border-primary transition-colors"
                  >
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className="font-semibold text-foreground">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-card border border-border shadow-card">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Team and Advisors tokens have 12 months cliff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Multi-chain bridge system (6 networks: Ethereum, Binance, Base, Solana, Toronet, Bantu)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Real World Asset (RWA) tokenization backed by lithium concentrate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Up to 10% APR distributions from lithium mining revenues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
