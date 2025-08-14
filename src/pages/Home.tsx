import IntroSection from "../components/IntroSection";
import KnivesInfo from "../components/KnivesInfo";
import WhoAreWe from "../components/WhoAreWe";
import OurCrafter from "../components/OurCrafter";
import TheHistory from "../components/TheHistory";
import ItemsOnSale from "../components/ItemsOnSale";
import Features from "../components/Features";
import RecentItemsSlider from "../components/RecentItemsSlider";

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
