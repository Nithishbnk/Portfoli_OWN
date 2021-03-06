import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import TopSection from "./components/TopSection/TopSection";
import SkillProgress from "./components/SkillProgress/SkillProgress";
import CircleProgress from "./components/CircleProgress/CircleProgress";
import Timeline from "./components/Timeline/Timeline";
import Certifications from "./components/Certifications/Certifications";
import Footer from "./components/Footer/Footer";
import ModalComponent from "./components/Modal/Modal"

library.add(fab, faCheckSquare, faCoffee);
function App() {
  return (
    <div className="App">
      <ModalComponent/>
      <div class="common-footer">
        <TopSection />
        <SkillProgress /> 
        <CircleProgress />
        <Timeline /> 
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}

export default App;
