import { NextResponse } from "next/server";

// Authentication is temporarily disabled for development purposes.
// TODO: Re-enable authentication before deploying to production.

export default function middleware() {
  // Allow all requests to pass through without authentication
  return NextResponse.next();
}

// Keep the config to ensure middleware is applied to all routes
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};
