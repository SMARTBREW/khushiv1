import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Alliances from "./components/who-we-are/alliances";
import Awards from "./components/who-we-are/awards";
import AboutBanner from "./components/who-we-are/banner";
import ChairmanQuote from "./components/who-we-are/chairman-quote";
import ImpactStats from "./components/who-we-are/impact-stats";
import AboutIntro from "./components/who-we-are/intro";
import LeadershipPreview from "./components/who-we-are/leadership-preview";
import VisionMission from "./components/who-we-are/vision-mission";

const PAGE_TITLE =
  "NGO For Children Education | NGO For Education in India | Khushii";

export default function WhoWeAre() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = "Khushii | NGO for Children | Child Welfare NGO in India";
    };
  }, []);

  return (
    <>
      <AboutBanner />
      <AboutIntro />
      <VisionMission />
      <ImpactStats />
      <ChairmanQuote />
      <LeadershipPreview />
      <Alliances />
      <Awards />
      <DonateBanner />
    </>
  );
}
