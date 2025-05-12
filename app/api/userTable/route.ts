import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const { data: userData, error } = await supabase
      .from("userTable")
      .select("*");

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    if (!userData) {
      return NextResponse.json(
        { success: false, message: "No users found in the database." },
        { status: 404 }
      );
    }

    // ✅ Return the users on success
    const getData = userData.map(user => user.totalUsers)
    return NextResponse.json({ success: true, data: userData }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
