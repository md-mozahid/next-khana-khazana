import { ImageResponse } from "next/og";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title") : "KhanaKhazana";

  return new ImageResponse(
    (
      <div tw="text-7xl bg-sky-500 w-full h-full flex items-center justify-center text-center">
        {title}
      </div>
    ),
    { width: 1200, height: 600 }
  );
}
