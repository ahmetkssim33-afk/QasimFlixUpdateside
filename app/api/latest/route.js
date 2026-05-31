import { head } from "@vercel/blob";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const b = await head("qasimflix/latest.json");
    const r = await fetch(b.url, { cache: "no-store" });
    if (!r.ok) return Response.json({ apkUrl: null, error: "Metadata okunamadı." }, { headers: { "Cache-Control": "no-store" } });
    const metadata = await r.json();
    return Response.json(metadata, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ apkUrl: null, version: null, notes: "", publishedAt: null, sha256: "" }, { headers: { "Cache-Control": "no-store" } });
  }
}
