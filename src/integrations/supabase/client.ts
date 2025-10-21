import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL =
  process.env.VITE_SUPABASE_URL || "https://vnwzwdzsaciylaihuhbd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZud3p3ZHpzYWNpeWxhaWh1aGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4Mjk4NTYsImV4cCI6MjA3NTQwNTg1Nn0.uL1EzQJ6LKSa5k0jnbI4FYG1V0Z-cwdABBWJRJ79Jjs";

// 2. Create a dummy storage object for the server
const noOpStorage = {
  getItem: (_key: string) => null,
  setItem: (_key: string, _value: string) => {},
  removeItem: (_key: string) => {},
};

// 3. Conditionally choose the storage
//    - If 'window' is defined, we're in the browser, so use localStorage.
//    - Otherwise, we're on the server, so use the dummy storage.
const storage = typeof window !== "undefined" ? localStorage : noOpStorage;

// 4. Create your client with the conditional storage
export const supabase = createClient<Database>(
  String(SUPABASE_URL),
  String(SUPABASE_PUBLISHABLE_KEY),
  {
    auth: {
      storage: storage, // <-- Use the conditional storage here
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);
