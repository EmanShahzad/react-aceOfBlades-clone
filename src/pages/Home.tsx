import IntroSection from "../homepage/IntroSection";
import KnivesInfo from "../homepage/KnivesInfo";
import WhoAreWe from "../homepage/WhoAreWe";
import OurCrafter from "../homepage/OurCrafter";
import TheHistory from "../homepage/TheHistory";
import ItemsOnSale from "../homepage/ItemsOnSale";
import Features from "../homepage/Features";
import RecentItemsSlider from "../homepage/RecentItemsSlider";

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
