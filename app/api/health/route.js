export async function GET() {
  return Response.json({ ok: true, app: "QasimFlix APK Download Site" }, { headers: { "Cache-Control": "no-store" } });
}
