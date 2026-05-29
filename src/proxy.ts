import { NextRequest } from "next/server";
import { authMiddleware } from "./middlewares/auth";

export async function proxy(req: NextRequest) {
  const authResponse = await authMiddleware(req);

  if (authResponse) {
    return authResponse;
  }
}

export const config = {
  matcher: [
    "/",
    "/landing",
    "/login",
    "/register",
    "/dashboard",
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};