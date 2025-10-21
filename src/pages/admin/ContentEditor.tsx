import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const ContentEditor = () => {
  const [content, setContent] = useState({
    about_description: "",
    vision_statement: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const { data, error } = await supabase
      .from("project_content")
      .select("*");

    if (!error && data) {
      const contentMap: any = {};
      data.forEach((item) => {
        contentMap[item.content_key] = item.content_value;
      });
      setContent({
        about_description: contentMap.about_description || "",
        vision_statement: contentMap.vision_statement || "",
      });
    }
  };

  const handleUpdate = async (key: string, value: string) => {
    const { error } = await supabase
      .from("project_content")
      .update({ content_value: value })
      .eq("content_key", key);

    if (!error) {
      toast({
        title: "Success",
        description: "Content updated successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      });
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Content Editor</h2>
          <p className="text-muted-foreground">Edit your project's content and descriptions</p>
        </div>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>About Description</CardTitle>
            <CardDescription>
              Main description shown in the About section
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="about_description">Description</Label>
              <Textarea
                id="about_description"
                value={content.about_description}
                onChange={(e) =>
                  setContent({ ...content, about_description: e.target.value })
                }
                rows={6}
                placeholder="Enter your project's main description..."
              />
            </div>
            <Button
              onClick={() => handleUpdate("about_description", content.about_description)}
              className="bg-gradient-primary hover:shadow-glow-purple transition-all"
            >
              <Save className="w-4 h-4 mr-2" />
              Save About Description
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Vision Statement</CardTitle>
            <CardDescription>
              Your project's vision and future goals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="vision_statement">Vision</Label>
              <Textarea
                id="vision_statement"
                value={content.vision_statement}
                onChange={(e) =>
                  setContent({ ...content, vision_statement: e.target.value })
                }
                rows={6}
                placeholder="Enter your project's vision statement..."
              />
            </div>
            <Button
              onClick={() => handleUpdate("vision_statement", content.vision_statement)}
              className="bg-gradient-primary hover:shadow-glow-purple transition-all"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Vision Statement
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ContentEditor;
