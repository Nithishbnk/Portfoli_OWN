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
import $ from "jquery";

library.add(fab, faCheckSquare, faCoffee);
function App() {

  // function myGreeting() {
  //   $('#myModal').modal('show');
  // }
  // setTimeout(myGreeting, 5000);

  // $("#myModal").modal("show");

  return (
    <div className="App">
      {/* <div id="myModal" class="modal fade show">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Subscribe our Newsletter</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <p>Subscribe to our mailing list to get the latest updates straight in your inbox.</p>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name"/>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email Address"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</div> */}
      <div class="common-footer">
        <TopSection />
        <SkillProgress /> 
        <CircleProgress />
        <Timeline /> 
        <Certifications />
        <Footer />
        <div class="centerdiv">
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
      </div>
    </div>
  );
}

export default App;
