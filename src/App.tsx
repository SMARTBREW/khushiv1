import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

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

export default function App() {
  return (
    <Providers>
      <Header />
      <ScrollToHash />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/who-we-are/leadership" element={<Leadership />} />
          <Route path="/what-we-do/education" element={<Education />} />
          <Route
            path="/what-we-do/education/swatantra-shikshaantra"
            element={<Swatantra />}
          />
          <Route
            path="/what-we-do/education/shikshaantra-plus"
            element={<ShikshaantraPlus />}
          />
          <Route path="/what-we-do/wellbeing" element={<Wellbeing />} />
          <Route path="/what-we-do/wellbeing/manobal" element={<Manobal />} />
          <Route
            path="/what-we-do/community-empowerment"
            element={<CommunityEmpowerment />}
          />
          <Route
            path="/what-we-do/community-empowerment/kala"
            element={<Kala />}
          />
          <Route
            path="/what-we-do/wellbeing/shiksha-aur-vikas"
            element={<ShikshaAurVikas />}
          />
          <Route path="/what-we-do/success-stories" element={<Stories />} />
          <Route path="/stories/:slug" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/report" element={<Reports />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy-2" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </Providers>
  );
}
