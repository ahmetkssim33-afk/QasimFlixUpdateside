import { handleUpload } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        let payload = {};
        try { payload = JSON.parse(clientPayload || "{}"); } catch {}
        if (!process.env.ADMIN_PASSWORD) throw new Error("ADMIN_PASSWORD env ayarı eksik.");
        if (payload.password !== process.env.ADMIN_PASSWORD) throw new Error("Admin şifresi yanlış.");
        if (!pathname.toLowerCase().endsWith(".apk")) throw new Error("Sadece APK yüklenebilir.");
        if (!pathname.includes("qasimflix/apk/")) throw new Error("Geçersiz upload yolu.");
        return {
          allowedContentTypes: ["application/vnd.android.package-archive", "application/octet-stream"],
          maximumSizeInBytes: 1024 * 1024 * 1024,
          addRandomSuffix: true,
          allowOverwrite: false,
          cacheControlMaxAge: 60,
          tokenPayload: JSON.stringify({ ok: true }),
        };
      },
      onUploadCompleted: async () => undefined,
    });
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json({ error: error.message || "Upload token oluşturulamadı." }, { status: 400 });
  }
}
