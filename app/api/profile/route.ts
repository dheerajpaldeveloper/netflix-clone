import { NextResponse } from "next/server";
import { createClient } from "../../utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    let { data: users, error } = await supabase.from("users").select("*");

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    } else if (users) {
      // console.log("users : ",users)
      return NextResponse.json({ success: true, data: users }, { status: 200 });
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
