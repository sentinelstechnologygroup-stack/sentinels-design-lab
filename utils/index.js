export const pageRoutes = {
  Home: "/",
  Work: "/work",
  Services: "/services",
  Industries: "/industries",
  Platform: "/platform",
  Process: "/process",
  Insights: "/insights",
  About: "/about",
  StartProject: "/start-project",
  Contact: "/contact",
};

export function createPageUrl(pageName = "Home") {
  return pageRoutes[pageName] ?? "/";
}
