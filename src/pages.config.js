// src/pages.config.js
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Platform from './pages/Platform';
import Process from './pages/Process';
import Insights from './pages/Insights';
import About from './pages/About';
import StartProject from './pages/StartProject';
import Contact from './pages/start-project';
import Packages from './pages/Packages';
import WebsiteDesignDevelopment from './pages/services/WebsiteDesignDevelopment';
import SeoServices from './pages/services/SeoServices';
import PpcPaidAds from './pages/services/PpcPaidAds';
import BrandingIdentity from './pages/services/BrandingIdentity';
import __Layout from './Layout.jsx';

export const PAGES = {
  "Home": Home,
  "Work": Work,
  "Services": Services,
  "Industries": Industries,
  "Platform": Platform,
  "Process": Process,
  "Insights": Insights,
  "About": About,
  "StartProject": StartProject,
  "Contact": Contact,
  "Packages": Packages,
  "services/website-design-development": WebsiteDesignDevelopment,
  "services/seo-services": SeoServices,
  "services/ppc-paid-ads": PpcPaidAds,
  "services/branding-identity": BrandingIdentity,
};

export const pagesConfig = {
  mainPage: "Home",
  Pages: PAGES,
  Layout: __Layout,
};