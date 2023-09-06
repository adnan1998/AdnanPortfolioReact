import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/heroSection";
import SkillSlate from "./components/skillSlate";
import Experience from "./components/experience";
import Services from "./components/services";

function App() {
    return (
        <div className="portfolio">
            <div className="navSection">
                <Header />
            </div>
            <HeroSection />
            <SkillSlate />
            <Experience />
            <Services />
        </div>
    );
}

export default App;
