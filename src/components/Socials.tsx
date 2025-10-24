import { Twitter, Send, MessageCircle, Github, Globe, FileText } from "lucide-react";

const Socials = () => {
  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/norahmining?t=HPDtkUCZ4vegDtZYBliS2A&s=09",
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "Telegram Channel",
      icon: Send,
      url: "https://t.me/norahtoken",
      color: "hover:text-[#0088cc]",
    },
    {
      name: "Telegram Community",
      icon: MessageCircle,
      url: "https://t.me/norahcommunity",
      color: "hover:text-[#0088cc]",
    },
    {
      name: "LinkedIn",
      icon: Github,
      url: "https://www.linkedin.com/company/109183102",
      color: "hover:text-[#0077B5]",
    },
    {
      name: "Website",
      icon: Globe,
      url: "https://norahminingltd.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected and be part of the Norah Token revolution. Follow us on social media for
            the latest updates, announcements, and community discussions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-xl bg-gradient-card border border-border hover:border-primary transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col items-center gap-3 group ${social.color}`}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-purple group-hover:shadow-glow-blue transition-all duration-300">
                <social.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-center">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { label: "Community Members", value: "25,000+" },
            { label: "Token Holders", value: "12,500+" },
            { label: "Active Daily Users", value: "5,000+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-card border border-border text-center hover:border-primary transition-all duration-300 hover:shadow-card"
            >
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
