'use client'; import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Save, ExternalLink } from "lucide-react";

interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon_name: string;
  display_order: number;
}

const SocialLinks = () => {
  const [links, setLinks] = useState<SocialLink[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    const { data, error } = await supabase
      .from("social_links")
      .select("*")
      .order("display_order");

    if (!error && data) {
      setLinks(data);
    }
  };

  const handleUpdate = async (id: string, url: string) => {
    const { error } = await supabase
      .from("social_links")
      .update({ url })
      .eq("id", id);

    if (!error) {
      toast({
        title: "Success",
        description: "Social link updated successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to update social link",
        variant: "destructive",
      });
    }
  };

  const handleChange = (id: string, url: string) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, url } : link)));
  };

  return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Social Links</h2>
          <p className="text-muted-foreground">
            Manage your social media presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link) => (
            <Card
              key={link.id}
              className="bg-gradient-card border-border hover:shadow-card transition-all"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {link.platform}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`url-${link.id}`}>URL</Label>
                  <Input
                    id={`url-${link.id}`}
                    value={link.url}
                    onChange={(e) => handleChange(link.id, e.target.value)}
                    placeholder={`https://${link.platform.toLowerCase()}.com/...`}
                  />
                </div>
                <Button
                  onClick={() => handleUpdate(link.id, link.url)}
                  className="w-full bg-gradient-primary hover:shadow-glow-purple transition-all"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Update
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  );
};

export default SocialLinks;