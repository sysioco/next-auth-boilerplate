import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]/route";
import { NextResponse } from "next/server";

// GET client session token if exists
export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  console.info("GET SESSION", { authenticated: session });
  return NextResponse.json({ authenticated: !!session });
}
