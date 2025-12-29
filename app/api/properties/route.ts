import { NextResponse } from "next/server";
import {
  properties,
  getPropertyByAddressSlug,
  getPropertyById,
} from "@/lib/data/properties";
import { z } from "zod";

const querySchema = z.object({
  id: z
    .string()
    .regex(/^\d+$/)
    .optional(),
  slug: z
    .string()
    .max(200)
    .regex(/^[a-z0-9-]+$/i)
    .optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(50).default(20),
});

export async function GET(request: Request) {
  const url = new URL(request.url);
  const parsed = querySchema.safeParse(
    Object.fromEntries(url.searchParams.entries()),
  );

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid query parameters" },
      { status: 400 },
    );
  }

  const { id, slug, page, pageSize } = parsed.data;

  if (slug) {
    const property = getPropertyByAddressSlug(slug);
    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ property });
  }

  if (id) {
    const numericId = Number(id);
    const property = getPropertyById(numericId);
    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ property });
  }

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const slice = properties.slice(start, end);

  return NextResponse.json({
    properties: slice,
    page,
    pageSize,
    total: properties.length,
  });
}