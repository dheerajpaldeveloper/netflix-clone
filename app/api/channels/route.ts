import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const { data: channelData, error } = await supabase
      .from("channels")
      .select("*");

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    if (!channelData) {
      return NextResponse.json(
        { success: false, message: "No users found in the database." },
        { status: 404 }
      );
    }

    // ✅ Return the users on success
    const getData = channelData.map(channel => channel.totalUsers)
    // console.log("userData : ",getData)
    return NextResponse.json({ success: true, data: channelData }, { status: 200 });
  } catch (error: any) {
    console.error("[API /api/users] Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
