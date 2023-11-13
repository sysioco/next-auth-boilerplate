export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/app/:path*", // this is the path to the app
  ],
};
