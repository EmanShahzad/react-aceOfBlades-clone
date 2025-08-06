import Header from "./components/Header";
import NavBar from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import KnivesInfo from "./components/KnivesInfo";
import WhoAreWe from "./components/WhoAreWe";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <IntroSection />
      <div className="position-absolute" style={{ top: "160%" }}>
        <KnivesInfo />
        <WhoAreWe />
      </div>
    </div>
  );
}

export default App;
