import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { username, password } = await request.json();

  // Check if user already exists
  const { data: existingUser } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .eq("password", password)
    .single();

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  // for create user
  const { data: users, error } = await supabase
    .from("users")
    .insert([{ username, password }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } else {
    return NextResponse.json(
      { message: "User inserted successfully" },
      { status: 200 }
    );
  }
}
