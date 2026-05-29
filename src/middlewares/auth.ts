import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

export async function authMiddleware(req: NextRequest) {
  try {
    const pathname = req.nextUrl.pathname;

    const token = req.cookies.get("token")?.value;

    // auth pages
    const authRoutes = ["/login", "/register"];

    // protected routes
    const protectedRoutes = ["/home", "/dashboard", "/admin"];

    // protected check
    const isProtectedRoute = protectedRoutes.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
    );

    // auth route check
    const isAuthRoute = authRoutes.includes(pathname);

    let isValidToken = false;

    if (token) {
      try {
        jwt.verify(token, process.env.JWT_SECRET!);

        isValidToken = true;
      } catch {
        isValidToken = false;
      }
    }

    // logged-in users should not
    // access login/register
    if (isValidToken && isAuthRoute) {
      return NextResponse.redirect(new URL("/home", req.url));
    }

    // protect private routes
    if (isProtectedRoute && !isValidToken) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.log("Error in auth middleware", error);

    return NextResponse.redirect(new URL("/login", req.url));
  }
}
