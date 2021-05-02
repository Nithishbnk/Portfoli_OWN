import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import TopSection from "./components/TopSection/TopSection";
import SkillProgress from "./components/SkillProgress/SkillProgress";
library.add(fab, faCheckSquare, faCoffee)
function App() {
  return (
    <div className="App">
      <TopSection/>
      <SkillProgress/>
    </div>
  );
}

export default App;
