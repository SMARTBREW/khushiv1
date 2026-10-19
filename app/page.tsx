import Ambassadors from "./components/ambassadors";
import ChangingLives from "./components/changing-lives";
import DonateBanner from "./components/donate-banner";
import Hero from "./components/hero";
import Impact from "./components/impact";
import KapilDev from "./components/kapil-dev";
import KhushiiTree from "./components/khushii-tree";
import PartnerLogos from "./components/partner-logos";
import SuccessStories from "./components/success-stories";
import VideoBanner from "./components/video-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <ChangingLives />
      <KhushiiTree />
      <KapilDev />
      <Impact />
      <SuccessStories />
      <VideoBanner />
      <DonateBanner />
      <Ambassadors />
      <PartnerLogos />
    </>
  );
}
