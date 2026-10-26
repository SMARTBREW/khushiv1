import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { ARTICLES } from "./articles";

import Footer from "./components/footer";
import Header from "./components/header";
import Providers from "./components/providers";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import Careers from "./Careers";
import Privacy from "./Privacy";
import Education from "./Education";
import Galleries from "./Galleries";
import CommunityEmpowerment from "./CommunityEmpowerment";
import Contact from "./Contact";
import Home from "./Home";
import Kala from "./Kala";
import Leadership from "./Leadership";
import Manobal from "./Manobal";
import Reports from "./Reports";
import ShikshaantraPlus from "./ShikshaantraPlus";
import ShikshaAurVikas from "./ShikshaAurVikas";
import Stories from "./Stories";
import Story from "./Story";
import Swatantra from "./Swatantra";
import Wellbeing from "./Wellbeing";
import WhoWeAre from "./WhoWeAre";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}

function PreserveTrailingSlash() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const bare =
      pathname.length > 1 && pathname.endsWith("/")
        ? pathname.slice(0, -1)
        : pathname;
    if (LEGACY_REDIRECTS.some(([from]) => from === bare)) return;
    if (
      pathname !== "/" &&
      !pathname.endsWith("/") &&
      !pathname.includes(".")
    ) {
      navigate({ pathname: `${pathname}/`, search, hash }, { replace: true });
    }
  }, [hash, navigate, pathname, search]);

  return null;
}

function Canonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path =
      pathname === "/" ? "/" : pathname.endsWith("/") ? pathname : `${pathname}/`;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", `https://khushii.org${path}`);
  }, [pathname]);

  return null;
}

const LEGACY_REDIRECTS = [
  ["/home", "/"],
  ["/who-we-are/leadership-2", "/who-we-are/leadership/"],
  ["/report", "/resources/annual-reports/"],
  [
    "/blog/manoshakti-early-school-intervention-initiative",
    ARTICLES["manoshakti-early-school-intervention-initiative"],
  ],
  [
    "/blog/sensitive-teacher-successful-student",
    ARTICLES["sensitive-teacher-successful-student"],
  ],
  [
    "/blog/unveiling-the-menstrual-enigma-from-taboos-to-empowerment",
    ARTICLES["unveiling-the-menstrual-enigma-from-taboos-to-empowerment"],
  ],
  [
    "/blog/manoshakti-my-moment-of-joy",
    ARTICLES["manoshakti-my-moment-of-joy"],
  ],
  ["/blog/yuvashree", ARTICLES.yuvashree],
  ["/blog/dignity-kits", ARTICLES["dignity-kits"]],
  ["/blog/education-in-covid-times", ARTICLES["education-in-covid-times"]],
  [
    "/blog/sexual-health-and-reproduction-education",
    ARTICLES["sexual-health-and-reproduction-education"],
  ],
  ["/blog/a-lost-generation", ARTICLES["a-lost-generation"]],
  ["/blog/khushiis-shre", ARTICLES["khushiis-shre"]],
  ["/blog/savitri", ARTICLES.savitri],
  [
    "/blog/zero-tolerance-for-bullying",
    ARTICLES["zero-tolerance-for-bullying"],
  ],
  ["/blog/general-duty-attendant", ARTICLES["general-duty-attendant"]],
] as const;

export default function App() {
  return (
    <Providers>
      <Header />
      <ScrollToHash />
      <PreserveTrailingSlash />
      <Canonical />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are/" element={<WhoWeAre />} />
          <Route path="/who-we-are/leadership/" element={<Leadership />} />
          <Route path="/what-we-do/education/" element={<Education />} />
          <Route
            path="/what-we-do/education/swatantra-shikshaantra/"
            element={<Swatantra />}
          />
          <Route
            path="/what-we-do/education/shikshaantra-plus/"
            element={<ShikshaantraPlus />}
          />
          <Route path="/what-we-do/wellbeing/" element={<Wellbeing />} />
          <Route path="/what-we-do/wellbeing/manobal/" element={<Manobal />} />
          <Route
            path="/what-we-do/community-empowerment/"
            element={<CommunityEmpowerment />}
          />
          <Route
            path="/what-we-do/community-empowerment/kala/"
            element={<Kala />}
          />
          <Route
            path="/what-we-do/wellbeing/shiksha-aur-vikas/"
            element={<ShikshaAurVikas />}
          />
          <Route path="/what-we-do/success-stories/" element={<Stories />} />
          <Route path="/stories/:slug/" element={<Story />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/galleries/" element={<Galleries />} />
          <Route path="/resources/annual-reports/" element={<Reports />} />
          <Route
            path="/resources/annual-reports/fcra-reports/"
            element={<Reports />}
          />
          <Route path="/newsletter/" element={<Reports />} />
          <Route path="/blog/" element={<Blog />} />
          {Object.values(ARTICLES).map((path) => (
            <Route key={path} path={path} element={<BlogPost />} />
          ))}
          <Route path="/careers/" element={<Careers />} />
          <Route path="/privacy-policy-2/" element={<Privacy />} />
          {LEGACY_REDIRECTS.map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </Providers>
  );
}
