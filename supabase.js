import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Connection() {
  const supabase = createServerComponentClient({ cookies });
  return supabase;
}
