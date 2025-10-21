-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create user_roles table for admin access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check user role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Project settings table
CREATE TABLE public.project_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  target_goal NUMERIC NOT NULL DEFAULT 500,
  raised_amount NUMERIC NOT NULL DEFAULT 342,
  contract_address TEXT NOT NULL DEFAULT '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  launch_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW() + INTERVAL '15 days',
  participants_count INTEGER NOT NULL DEFAULT 1247,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

ALTER TABLE public.project_settings ENABLE ROW LEVEL SECURITY;

-- Insert default settings
INSERT INTO public.project_settings (id) VALUES (gen_random_uuid());

-- Team members table
CREATE TABLE public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  avatar_initials TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Insert default team members
INSERT INTO public.team_members (name, role, bio, avatar_initials, display_order) VALUES
  ('Sarah Mitchell', 'CEO & Founder', 'Blockchain enthusiast with 10+ years in fintech', 'SM', 1),
  ('David Chen', 'CTO', 'Former Google engineer, crypto developer', 'DC', 2),
  ('Emily Rodriguez', 'Head of Marketing', 'Growth expert, community builder', 'ER', 3),
  ('Michael Park', 'Lead Developer', 'Smart contract specialist', 'MP', 4);

-- Social links table
CREATE TABLE public.social_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform TEXT NOT NULL UNIQUE,
  url TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

ALTER TABLE public.social_links ENABLE ROW LEVEL SECURITY;

-- Insert default social links
INSERT INTO public.social_links (platform, url, icon_name, display_order) VALUES
  ('Twitter', 'https://twitter.com/norahtoken', 'Twitter', 1),
  ('Telegram', 'https://t.me/norahtoken', 'Send', 2),
  ('Discord', 'https://discord.gg/norahtoken', 'MessageCircle', 3),
  ('GitHub', 'https://github.com/norahtoken', 'Github', 4),
  ('Website', 'https://norahtoken.com', 'Globe', 5),
  ('Medium', 'https://medium.com/@norahtoken', 'FileText', 6);

-- Project content table
CREATE TABLE public.project_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_key TEXT NOT NULL UNIQUE,
  content_value TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

ALTER TABLE public.project_content ENABLE ROW LEVEL SECURITY;

-- Insert default content
INSERT INTO public.project_content (content_key, content_value) VALUES
  ('about_description', 'Norah Token is a next-generation cryptocurrency designed to revolutionize the DeFi ecosystem. Our mission is to provide a secure, fast, and community-driven platform that empowers users to take control of their financial future.'),
  ('vision_statement', 'We envision a future where financial systems are transparent, accessible, and controlled by the people. Norah Token serves as a bridge between traditional finance and the decentralized world, offering innovative solutions that benefit our entire community. Join us in building the future of finance.');

-- RLS Policies

-- Profiles: Users can read their own profile, admins can read all
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- User roles: Only admins can manage
CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Project settings: Public read, admin write
CREATE POLICY "Anyone can view settings" ON public.project_settings
  FOR SELECT USING (true);

CREATE POLICY "Admins can update settings" ON public.project_settings
  FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

-- Team members: Public read, admin write
CREATE POLICY "Anyone can view team" ON public.team_members
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage team" ON public.team_members
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Social links: Public read, admin write
CREATE POLICY "Anyone can view socials" ON public.social_links
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage socials" ON public.social_links
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Project content: Public read, admin write
CREATE POLICY "Anyone can view content" ON public.project_content
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage content" ON public.project_content
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_settings_updated_at
  BEFORE UPDATE ON public.project_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_team_updated_at
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_socials_updated_at
  BEFORE UPDATE ON public.social_links
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_content_updated_at
  BEFORE UPDATE ON public.project_content
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();