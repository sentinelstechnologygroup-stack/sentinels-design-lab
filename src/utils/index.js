// src/utils/index.js
const pageRoutes = {
  Home: "/",
  Projects: "/projects",
  Services: "/services",
  Industries: "/industries",
  Platform: "/platform",
  Process: "/process",
  Insights: "/insights",
  About: "/about",
  StartProject: "/start-project",
  Contact: "/start-project",
  Packages: "/packages",
  HostingMaintenance: "/hosting-maintenance",
  "services/website-design-development": "/services/website-design-development",
  "services/seo-services": "/services/seo-services",
  "services/ppc-paid-ads": "/services/ppc-paid-ads",
  "services/branding-identity": "/services/branding-identity",
};

export function createPageUrl(pageName = "Home") {
  return pageRoutes[pageName] ?? "/";
}