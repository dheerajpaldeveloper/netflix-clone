import { NextResponse } from "next/server";
import { createClient } from "../../utils/supabase/server";
import { cookies } from "next/headers";

export default async function POST(request: Response) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const { profileUsername, profileRole } = await request.json();
    const { data, error } = await supabase
      .from("users")
      .update({ username: profileUsername, role: profileRole })
      .select();

    if (error) {
      console.log("update error : ", error);
      return NextResponse.json(
        { success: false, message: "Internal server error" },
        { status: 500 }
      );
    } else if (data) {
      console.log("updata data fetch : ", data);
      return NextResponse.json(
        { message: "User inserted successfully", data: data },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log("update error : ", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
