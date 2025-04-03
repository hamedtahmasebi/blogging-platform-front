import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
export function middleware(request: NextRequest, response: NextResponse) {
    const { pathname } = request.nextUrl;
    const loginUrl = new URL("/auth/login", request.url);
    if (pathname.startsWith("/dashboard")) {
        const accessToken = request.cookies.get("access_token")?.value;
        if (!accessToken) {
            // Redirect to login if no access_token
            return NextResponse.redirect(loginUrl);
        }
        const exp = jwt.decode(accessToken, {
            complete: false,
            json: true,
        })?.exp;
        if (!exp || new Date(exp * 1000) < new Date()) {
            const response = NextResponse.redirect(loginUrl);
            response.cookies.delete("access_token");
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
