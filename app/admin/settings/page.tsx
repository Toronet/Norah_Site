"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    target_goal: "",
    raised_amount: "",
    contract_address: "",
    launch_date: "",
    participants_count: "",
  });
  const [settingsId, setSettingsId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from("project_settings")
      .select("*")
      .single();

    if (!error && data) {
      setSettingsId(data.id);
      setSettings({
        target_goal: data.target_goal.toString(),
        raised_amount: data.raised_amount.toString(),
        contract_address: data.contract_address,
        launch_date: new Date(data.launch_date).toISOString().slice(0, 16),
        participants_count: data.participants_count.toString(),
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!settingsId) return;

    const { error } = await supabase
      .from("project_settings")
      .update({
        target_goal: parseFloat(settings.target_goal),
        raised_amount: parseFloat(settings.raised_amount),
        contract_address: settings.contract_address,
        launch_date: new Date(settings.launch_date).toISOString(),
        participants_count: parseInt(settings.participants_count),
      })
      .eq("id", settingsId);

    if (!error) {
      toast({
        title: "Success",
        description: "Settings updated successfully",
      });
      fetchSettings();
    } else {
      toast({
        title: "Error",
        description: "Failed to update settings",
        variant: "destructive",
      });
    }
  };

  return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Presale Settings</h2>
          <p className="text-muted-foreground">
            Configure your presale parameters
          </p>
        </div>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Project Settings</CardTitle>
            <CardDescription>
              Update key metrics and information about your token presale
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="target_goal">Target Goal (BNB)</Label>
                  <Input
                    id="target_goal"
                    type="number"
                    step="0.01"
                    value={settings.target_goal}
                    onChange={(e) =>
                      setSettings({ ...settings, target_goal: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="raised_amount">Raised Amount (BNB)</Label>
                  <Input
                    id="raised_amount"
                    type="number"
                    step="0.01"
                    value={settings.raised_amount}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        raised_amount: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="contract_address">Contract Address</Label>
                  <Input
                    id="contract_address"
                    value={settings.contract_address}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        contract_address: e.target.value,
                      })
                    }
                    required
                    className="font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="launch_date">Launch Date & Time</Label>
                  <Input
                    id="launch_date"
                    type="datetime-local"
                    value={settings.launch_date}
                    onChange={(e) =>
                      setSettings({ ...settings, launch_date: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="participants_count">Participants Count</Label>
                  <Input
                    id="participants_count"
                    type="number"
                    value={settings.participants_count}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        participants_count: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-gradient-primary hover:shadow-glow-purple transition-all"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
  );
};

export default Settings;
