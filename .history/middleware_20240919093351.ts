import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Authentication is temporarily disabled for development purposes.
// TODO: Re-enable full authentication before deploying to production.

const isProtectedRoute = createRouteMatcher([]);

export default clerkMiddleware(async (auth, req) => {
  // Allow all requests to pass through without authentication
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};
