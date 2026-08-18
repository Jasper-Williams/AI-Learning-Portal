"use client";

import { createClient } from "@/utils/supabase/client";

export default function SupabaseTest() {
  const supabase = createClient();

  return (
    <main>
      <h1>Supabase Test</h1>
      <p>Supabase client created successfully.</p>
    </main>
  );
}