import { NextResponse } from "next/server";
import { createClient } from "../../utils/supabase/server";
import { cookies } from "next/headers";

export async function POST(request: Response) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const formData = await request.formData(); // ✅ Use formData(), not json()

    const id = formData.get("id") as string | null;
    const username = formData.get("profileUsername") as string | null;
    const role = formData.get("profileRole") as string | null;
    const profilePic = formData.get("profilePic") as File | null;
    console.log("profilePic : ",profilePic?.name)

    const imageUrl = await uploadFile(profilePic)

    if(imageUrl === null){
      return NextResponse.json(
        { success: false, message: "upload file failed" },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from("users")
      .update({ username: username, role: role , image_url : imageUrl })
      .eq("id",id)
      .select();

    if (error) {
      return NextResponse.json(
        { success: false, message: "Internal server error" },
        { status: 500 }
      );
    } else if (data) {
      return NextResponse.json(
        { message: "User inserted successfully", data: data },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

async function  uploadFile(file:any){
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  console.log("test file upload data :",file.name)
  const uniqueFileName = `avatar_${Math.random().toString(36).substring(2, 12)}_${Date.now()}${file.name ? file.name.substring(file.name.lastIndexOf('.')) : '.png'}`;
 
  const { data, error } = await supabase
  .storage
  .from('avatars')
  .upload(`public/${uniqueFileName}`, file); // e.g., public/avatar1.png
 
  console.log("test file upload data :",data)
  if (error) {
    console.error('Upload failed:', error.message);
    return null;
  }
 
  const publicUrl = supabase.storage.from('avatars').getPublicUrl(data.path).data.publicUrl;
 
  console.log('File uploaded successfully:', publicUrl);
  return publicUrl;
  
}