import React, {Component} from 'react'
import "./Certifications.css"
import { Progress } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
class Certifications extends Component {
  state = {
    progress: 0,
  }
  componentDidMount() {
  AOS.init({
    duration : 2000
  });
  let counter = 1;
    const interval = setInterval(() => {
        counter++;
        this.setState({
            progress : counter
        })
        if(counter == 60) {
            clearInterval(interval);
        }
    }, 100);
}

  render() {

    return (
<div class="Certifications">
  <div class="row mainrow">
   <div class="col-md-6 colone">

<div data-aos="zoom-in-right">
                      <div class="card cert" >
                     <div class="card-header Name1 font-weight-bold font-italic">
                       Certifications
                     </div>
                     <div class="card-body">
                           <div class="font-weight-bold">Salesforce Marketing Cloud Email Specialist</div>
                           <div class="font-weight-bold">Entity Framework</div>
                           <div class="font-weight-bold">Machine Learning</div>
                           <div class="font-weight-bold">Deep Learning</div>
                           <div class="font-weight-bold">ASP .net Core</div>
                     </div>
                   </div>
</div>
   </div>
   <div class="col-md-6 coltwo">
   <div data-aos="zoom-in-left">
               <div class="card lang">
               <div class="card-header Name1 font-weight-bold font-italic">
                 Languages Known
               </div>
                  <div class="card-body">
                                        <div class="skill-progress">
                                              <div class="row">
                                                  <div class="col-2"></div>
                                                  <div class="col-3">
                                                        <div class="skill-title title font-weight-bold">

                                                           <span>English</span>
                                                        </div>
                                                  </div>
                                                  <div class="col-5">
                                                      <Progress class="progress progress5" value={this.state.progress} animated color="warning" title="Saving the details">{this.state.progress}%</Progress>
                                                  </div>
                                                  <div class="col-2"></div>
                                              </div>
                                        </div>
                                        <div class="skill-progress">
                                              <div class="row">
                                                  <div class="col-2"></div>
                                                  <div class="col-3">
                                                        <div class="skill-title title font-weight-bold">

                                                           <span>Hindi</span>
                                                        </div>
                                                  </div>
                                                  <div class="col-5">
                                                      <Progress class="progress progress5" value={this.state.progress} animated color="Info" title="Saving the details">{this.state.progress}%</Progress>
                                                  </div>
                                                  <div class="col-2"></div>
                                              </div>
                                        </div>
                                        <div class="skill-progress">
                                              <div class="row">
                                                  <div class="col-2"></div>
                                                  <div class="col-3">
                                                        <div class="skill-title title font-weight-bold">

                                                           <span>Telugu</span>
                                                        </div>
                                                  </div>
                                                  <div class="col-5">
                                                      <Progress class="progress progress5" value={this.state.progress} animated color="secondary" title="Saving the details">{this.state.progress}%</Progress>
                                                  </div>
                                                  <div class="col-2"></div>
                                              </div>
                                        </div>
                                        <div class="skill-progress">
                                              <div class="row">
                                                  <div class="col-2"></div>
                                                  <div class="col-3">
                                                        <div class="skill-title title font-weight-bold">

                                                           <span>Tamil</span>
                                                        </div>
                                                  </div>
                                                  <div class="col-5">
                                                      <Progress class="progress progress5" value={this.state.progress} animated color="secondary" title="Saving the details">{this.state.progress}%</Progress>
                                                  </div>
                                                  <div class="col-2"></div>
                                              </div>
                                        </div>

                    </div>
                  </div></div>
      </div>
  </div>

</div>

    );

  }

}

export default Certifications;
