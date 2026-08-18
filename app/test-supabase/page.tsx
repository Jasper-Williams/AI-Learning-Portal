"use client";

import { createBrowserClient } from "@supabase/ssr";

export default function SupabaseTest() {
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  return (
    <main>
      <h1>Supabase Test</h1>
      <p>Supabase client created successfully.</p>
    </main>
  );
}