export async function GET() {
  return Response.json({ ok: true, app: "SineQ APK Download Site" }, { headers: { "Cache-Control": "no-store" } });
}
