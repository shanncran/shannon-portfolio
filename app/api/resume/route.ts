import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const resume = await readFile(join(process.cwd(), "public/resume.pdf"));

  return new Response(new Uint8Array(resume), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Shannon-Crandley-Resume.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
