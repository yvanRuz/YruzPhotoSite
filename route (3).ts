import { getCatalog } from '@/lib/catalog'
export const dynamic='force-dynamic'
export async function GET(){const data=await getCatalog();return new Response('window.YRUZ_PROJECTS = '+JSON.stringify(data).replace(/</g,'\u003c')+';\nwindow.yruzProjectUrl = p => 'projet.html?id='+encodeURIComponent(p.id);',{headers:{'Content-Type':'text/javascript; charset=utf-8','Cache-Control':'no-store'}})}
