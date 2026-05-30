import { head } from '@vercel/blob';
export const dynamic = 'force-dynamic';
export async function GET(){try{const b=await head('qasimflix/latest.json');const r=await fetch(b.url,{cache:'no-store'});if(!r.ok)return Response.json({apkUrl:null,error:'Metadata okunamadı.'});return Response.json(await r.json(),{headers:{'Cache-Control':'no-store'}})}catch{return Response.json({apkUrl:null,version:null,notes:'',publishedAt:null},{headers:{'Cache-Control':'no-store'}})}}
