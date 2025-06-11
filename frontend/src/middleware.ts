import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    const protectedPaths = [
        "/dashboard",
        "/dashboard/mental",
        "/dashboard/physical",
        "/dashboard/reports",
    ];

    const isProtected = protectedPaths.some((path) =>
        request.nextUrl.pathname.startsWith(path)
    );

    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

// Este middleware se ejecuta solo en estas rutas:
export const config = {
    matcher: ["/dashboard/:path*", "/dashboard"],
};
