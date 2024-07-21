export const dynamic = "force-dynamic"; //To avoid cache

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
