import IntroSection from "../components/homepage/IntroSection";
import KnivesInfo from "../components/homepage/KnivesInfo";
import WhoAreWe from "../components/homepage/WhoAreWe";
import OurCrafter from "../components/homepage/OurCrafter";
import TheHistory from "../components/homepage/TheHistory";
import ItemsOnSale from "../components/homepage/ItemsOnSale";
import Features from "../components/homepage/Features";
import RecentItemsSlider from "../components/homepage/RecentItemsSlider";

function Home() {
  return (
    <>
      {" "}
      <IntroSection />
      <KnivesInfo />
      <WhoAreWe />
      <OurCrafter />
      <TheHistory />
      <ItemsOnSale />
      <Features />
      <RecentItemsSlider />
    </>
  );
}
export default Home;
