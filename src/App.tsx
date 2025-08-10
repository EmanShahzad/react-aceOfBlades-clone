import Header from "./components/Header";
import NavBar from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import KnivesInfo from "./components/KnivesInfo";
import WhoAreWe from "./components/WhoAreWe";
import OurCrafter from "./components/OurCrafter";
import TheHistory from "./components/TheHistory";
import ItemsOnSale from "./components/ItemsOnSale";
import Footer from "./components/Footer";
import Features from "./components/Features";
import RecentItemsSlider from "./components/RecentItemsSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <IntroSection />
      <div className="position-absolute" style={{ top: "160%" }}>
        <KnivesInfo />
        <WhoAreWe />
        <OurCrafter />
        <TheHistory />
        <ItemsOnSale />
        <Features />
        <RecentItemsSlider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
