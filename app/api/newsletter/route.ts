import { NextResponse } from "next/server";
import { emailPattern } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const raw =
    typeof body === "object" && body !== null && "email" in body
      ? (body as { email: unknown }).email
      : "";
  const email = typeof raw === "string" ? raw.trim().toLowerCase() : "";

  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return NextResponse.json({ ok: true, persisted: false }, { status: 201 });
  }

  try {
    const { neon } = await import("@neondatabase/serverless");
    const sql = neon(databaseUrl);
    await sql`
      insert into subscribers (email)
      values (${email})
      on conflict (email) do nothing
    `;
    return NextResponse.json({ ok: true, persisted: true }, { status: 201 });
  } catch (error) {
    console.error("newsletter insert failed", error);
    return NextResponse.json({ ok: false, error: "Database error" }, { status: 500 });
  }
}
