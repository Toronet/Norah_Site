import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  avatar_initials: string;
  display_order: number;
}

const TeamManagement = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    avatar_initials: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from("team_members")
      .select("*")
      .order("display_order");

    if (!error && data) {
      setMembers(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingMember) {
      const { error } = await supabase
        .from("team_members")
        .update(formData)
        .eq("id", editingMember.id);

      if (!error) {
        toast({ title: "Success", description: "Team member updated successfully" });
        fetchMembers();
        closeDialog();
      }
    } else {
      const { error } = await supabase.from("team_members").insert([
        {
          ...formData,
          display_order: members.length + 1,
        },
      ]);

      if (!error) {
        toast({ title: "Success", description: "Team member added successfully" });
        fetchMembers();
        closeDialog();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this team member?")) {
      const { error } = await supabase.from("team_members").delete().eq("id", id);

      if (!error) {
        toast({ title: "Success", description: "Team member deleted successfully" });
        fetchMembers();
      }
    }
  };

  const openDialog = (member?: TeamMember) => {
    if (member) {
      setEditingMember(member);
      setFormData({
        name: member.name,
        role: member.role,
        bio: member.bio || "",
        avatar_initials: member.avatar_initials,
      });
    } else {
      setEditingMember(null);
      setFormData({ name: "", role: "", bio: "", avatar_initials: "" });
    }
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setEditingMember(null);
    setFormData({ name: "", role: "", bio: "", avatar_initials: "" });
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Team Management</h2>
            <p className="text-muted-foreground">Manage your team members</p>
          </div>
          <Button
            onClick={() => openDialog()}
            className="bg-gradient-primary hover:shadow-glow-purple transition-all"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <Card key={member.id} className="bg-gradient-card border-border hover:shadow-card transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-xl font-bold text-primary-foreground shadow-glow-purple">
                    {member.avatar_initials}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => openDialog(member)}
                      className="h-8 w-8"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => handleDelete(member.id)}
                      className="h-8 w-8 hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm text-primary">{member.role}</p>
                {member.bio && <p className="text-sm text-muted-foreground">{member.bio}</p>}
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingMember ? "Edit Team Member" : "Add Team Member"}
              </DialogTitle>
              <DialogDescription>
                Fill in the details for the team member
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="initials">Avatar Initials</Label>
                <Input
                  id="initials"
                  value={formData.avatar_initials}
                  onChange={(e) =>
                    setFormData({ ...formData, avatar_initials: e.target.value.toUpperCase() })
                  }
                  maxLength={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={closeDialog}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-primary hover:shadow-glow-purple transition-all"
                >
                  {editingMember ? "Update" : "Add"} Member
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default TeamManagement;
