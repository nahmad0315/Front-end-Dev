import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("photo"); // Ensure "photo" matches the key in FormData

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Here, you would handle the file upload logic (e.g., store in Cloudinary, AWS S3, etc.)
    // Simulating a successful upload response:
    return NextResponse.json(
      { path: `/uploads/${file.name}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload photo", details: error.message },
      { status: 500 }
    );
  }
}
