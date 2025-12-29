import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: "Thanks for reaching out! Our team will respond shortly.",
    submittedAt: new Date().toISOString(),
  });
}

export function GET() {
  return NextResponse.json(
    { message: "Submit a POST request to send a contact message." },
    { status: 405 },
  );
}

