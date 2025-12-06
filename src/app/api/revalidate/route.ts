import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Props
type BodyKeys = {
  path: string;
  tag: string;
};

export async function POST(request: NextRequest) {
  // Verify secret token
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  try {
    const body: BodyKeys = await request.json();
    const { tag, path } = body;

    // Revalidate by path
    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path });
    }

    // Revaldiate by tag
    if (tag) {
      revalidateTag(tag);
      return NextResponse.json({ revalidated: true, tag });
    }

    return NextResponse.json({ error: "Missing path or tag" }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error instanceof Error && error.message) || "Revalidation failed",
      },
      { status: 500 },
    );
  }
}
