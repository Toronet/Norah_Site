import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    color: "bg-blue-500",
    description: "Ethereum Mainnet"
  },
  {
    id: "binance",
    name: "Binance Smart Chain",
    symbol: "BNB",
    icon: "🟡",
    color: "bg-yellow-500",
    description: "BSC Network"
  },
  {
    id: "base",
    name: "Base",
    symbol: "ETH",
    icon: "🔵",
    color: "bg-blue-600",
    description: "Base Network"
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    icon: "🟣",
    color: "bg-purple-500",
    description: "Solana Network"
  },
  {
    id: "toronet",
    name: "Toronet",
    symbol: "TORO",
    icon: "🟠",
    color: "bg-orange-500",
    description: "Toronet Network"
  },
  {
    id: "bantu",
    name: "Bantu",
    symbol: "XBN",
    icon: "🟢",
    color: "bg-green-500",
    description: "Bantu Network"
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
            <span className="text-lg">{currentNetwork.icon}</span>
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
            <span className="text-lg">{network.icon}</span>
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
              <div className="text-sm text-muted-foreground">6 networks supported</div>
            </div>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NetworkSelector;
