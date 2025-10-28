import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const networks = [
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    icon: "⟠",
    logo: "/eth.svg",
    color: "bg-blue-500",
    description: "Ethereum Mainnet"
  },
  {
    id: "binance",
    name: "Binance Smart Chain",
    symbol: "BNB",
    icon: "🟡",
    logo: "/bsc.svg",
    color: "bg-yellow-500",
    description: "BSC Network"
  },
  {
    id: "base",
    name: "Base",
    symbol: "ETH",
    icon: "🔵",
    logo: "/base.svg",
    color: "bg-blue-600",
    description: "Base Network"
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    icon: "🟣",
    logo: "/sol.svg",
    color: "bg-purple-500",
    description: "Solana Network"
  },
  {
    id: "toronet",
    name: "Toronet",
    symbol: "TORO",
    icon: "🟠",
    logo: "/toronet.svg",
    color: "bg-orange-500",
    description: "Toronet Network"
  },
  {
    id: "bantu",
    name: "Bantu",
    symbol: "XBN",
    icon: "🟢",
    logo: "/bantu.svg",
    color: "bg-green-500",
    description: "Bantu Network"
  },
  {
    id: "doxa",
    name: "Doxa",
    symbol: "DOXA",
    icon: "🔷",
    logo: "/doxa.svg",
    color: "bg-cyan-500",
    description: "Doxa Network"
  },
  {
    id: "cloudax",
    name: "Cloudax",
    symbol: "CLDX",
    icon: "☁️",
    logo: "/clodaxlogo.svg",
    color: "bg-sky-500",
    description: "Cloudax Network"
  }
];

interface NetworkSelectorProps {
  selectedNetwork?: string;
  onNetworkChange?: (networkId: string) => void;
  showAllNetworks?: boolean;
}

const NetworkSelector = ({ 
  selectedNetwork = "ethereum", 
  onNetworkChange,
  showAllNetworks = false 
}: NetworkSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  
  const currentNetwork = networks.find(network => network.id === selectedNetwork) || networks[0];
  const displayNetworks = showAllNetworks ? networks : networks.slice(0, 3);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-w-[200px] justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 relative">
              {imageErrors.has(currentNetwork.id) ? (
                <span className="text-lg">{currentNetwork.icon}</span>
              ) : (
                <div className="w-5 h-5 flex items-center justify-center bg-white/90 rounded-full p-0.5">
                  <Image
                    src={currentNetwork.logo}
                    alt={`${currentNetwork.name} logo`}
                    width={20}
                    height={20}
                    className="w-4 h-4 object-contain"
                    onError={() => {
                      setImageErrors(prev => new Set(prev).add(currentNetwork.id));
                    }}
                  />
                </div>
              )}
            </div>
            <span className="font-medium">{currentNetwork.name}</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        {displayNetworks.map((network) => (
          <DropdownMenuItem
            key={network.id}
            onClick={() => {
              onNetworkChange?.(network.id);
              setIsOpen(false);
            }}
            className="flex items-center gap-3 p-3 cursor-pointer"
          >
            <div className="w-5 h-5 relative">
              {imageErrors.has(network.id) ? (
                <span className="text-lg">{network.icon}</span>
              ) : (
                <div className="w-5 h-5 flex items-center justify-center bg-white/90 rounded-full p-0.5">
                  <Image
                    src={network.logo}
                    alt={`${network.name} logo`}
                    width={20}
                    height={20}
                    className="w-4 h-4 object-contain"
                    onError={() => {
                      setImageErrors(prev => new Set(prev).add(network.id));
                    }}
                  />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="font-medium">{network.name}</div>
              <div className="text-sm text-muted-foreground">{network.description}</div>
            </div>
            {selectedNetwork === network.id && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
        {!showAllNetworks && (
          <DropdownMenuItem
            onClick={() => {
              // Show all networks logic
              setIsOpen(false);
            }}
            className="flex items-center gap-3 p-3 cursor-pointer border-t"
          >
            <span className="text-lg">🌐</span>
            <div className="flex-1">
              <div className="font-medium">View All Networks</div>
              <div className="text-sm text-muted-foreground">8 networks supported</div>
            </div>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NetworkSelector;
