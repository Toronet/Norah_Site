import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, TrendingUp, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import AdminLayout from "@/components/admin/AdminLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [settings, setSettings] = useState<any>(null);
  const [teamCount, setTeamCount] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    const [settingsData, teamData] = await Promise.all([
      supabase.from("project_settings").select("*").single(),
      supabase.from("team_members").select("*", { count: "exact" }),
    ]);

    if (settingsData.data) setSettings(settingsData.data);
    if (teamData.count) setTeamCount(teamData.count);
  };

  const progress = settings
    ? (Number(settings.raised_amount) / Number(settings.target_goal)) * 100
    : 0;

  const chartData = [
    { name: "Week 1", raised: 50 },
    { name: "Week 2", raised: 120 },
    { name: "Week 3", raised: 220 },
    { name: "Week 4", raised: 342 },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
          <p className="text-muted-foreground">Monitor your project's performance and stats</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-border hover:shadow-card transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Raised Amount</CardTitle>
              <TrendingUp className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {settings?.raised_amount || 0} BNB
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                of {settings?.target_goal || 0} BNB goal
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border hover:shadow-card transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Participants</CardTitle>
              <Users className="w-4 h-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">
                {settings?.participants_count || 0}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Total contributors</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border hover:shadow-card transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
              <Target className="w-4 h-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gold">{progress.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground mt-1">Goal completion</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border hover:shadow-card transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Team Size</CardTitle>
              <Calendar className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{teamCount}</div>
              <p className="text-xs text-muted-foreground mt-1">Active members</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Fundraising Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={progress} className="h-4" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {settings?.raised_amount || 0} BNB raised
              </span>
              <span className="text-muted-foreground">
                {settings?.target_goal || 0} BNB target
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="raised" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
