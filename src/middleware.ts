import {
  createRouteMatcher,
  nextjsMiddlewareRedirect,
  convexAuthNextjsMiddleware,
} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  const isAuthenticated = await convexAuth.isAuthenticated();

  if (!isPublicPage(request) && !isAuthenticated) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }
  //ToDo: Redirect user away from "/auth" when authenticated
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
