import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/actions";

export async function middleware(request: NextRequest) {
  try {
    const response = await updateSession(request);
    return response || NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
