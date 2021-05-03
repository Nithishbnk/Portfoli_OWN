import React, {Component} from 'react'
import "./SkillProgress.css"
import { Progress } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from "aos";
import "aos/dist/aos.css";
class SkillProgress extends Component {
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
<div class="Skills">
<div data-aos="zoom-in-up"  data-aos-duration="3000">
<div class="card card1 rounded-4" >
  <div class="card-header text-uppercase font-weight-bold font-italic"><h4>Skill Set</h4></div>
  <div class="card-body">

          <div class="container con2">
              <div class="row">
                  <div class="col-md-4">
                    <div data-aos="fade-right">
                                <div class="skill-progress">
                                      <div class="row">
                                          <div class="col-4">
                                                <div class="skill-title">
                                                   <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                                   <span>Java script</span>
                                                </div>
                                          </div>
                                          <div class="col-8">
                                              <Progress class="progress" value={this.state.progress} animated color="warning" title="Saving the details">{this.state.progress}%</Progress>
                                          </div>
                                      </div>
                                </div>
                                <div class="skill-progress">
                                      <div class="row">
                                          <div class="col-4">
                                                <div class="skill-title">
                                                   <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                                   <span>HTML</span>
                                                </div>
                                          </div>
                                          <div class="col-8">
                                              <Progress class="progress" value={this.state.progress} animated color="info" title="Saving the details">{this.state.progress}%</Progress>
                                          </div>
                                      </div>
                                </div>
                                <div class="skill-progress">
                                      <div class="row">
                                          <div class="col-4">
                                                <div class="skill-title">
                                                   <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                                   <span>CSS</span>
                                                </div>
                                          </div>
                                          <div class="col-8">
                                              <Progress class="progress" value={this.state.progress} animated color="danger" title="Saving the details">{this.state.progress}%</Progress>
                                          </div>
                                      </div>
                                </div>
                                </div>
                  </div>
                  <div class="col-md-4">
                  <div data-aos="fade-left">
                  <div class="skill-progress">
                        <div class="row">
                            <div class="col-4">
                                  <div class="skill-title">
                                     <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                     <span>C</span>
                                  </div>
                            </div>
                            <div class="col-8">
                                <Progress class="progress" value={this.state.progress} animated color="info" title="Saving the details">{this.state.progress}%</Progress>
                            </div>
                        </div>
                  </div>
                  <div class="skill-progress">
                        <div class="row">
                            <div class="col-4">
                                  <div class="skill-title">
                                     <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                     <span>C++</span>
                                  </div>
                            </div>
                            <div class="col-8">
                                <Progress class="progress" value={this.state.progress} animated color="danger" title="Saving the details">{this.state.progress}%</Progress>
                            </div>
                        </div>
                  </div>
                  <div class="skill-progress">
                        <div class="row">
                            <div class="col-4">
                                  <div class="skill-title">
                                     <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                     <span>Java</span>
                                  </div>
                            </div>
                            <div class="col-8">
                                <Progress class="progress" value={this.state.progress} title="Saving the details"/>
                            </div>
                        </div>
                  </div>
                  </div>
                  </div>
                  <div class="col-md-4">
                  <div data-aos="fade-up-right">
                  <div class="skill-progress">
                        <div class="row">
                            <div class="col-4">
                                  <div class="skill-title">
                                     <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                     <span>C</span>
                                  </div>
                            </div>
                            <div class="col-8">
                                <Progress class="progress" value={this.state.progress} title="Saving the details"/>
                            </div>
                        </div>
                  </div>
                  <div class="skill-progress">
                        <div class="row">
                            <div class="col-4">
                                  <div class="skill-title">
                                     <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                     <span>C++</span>
                                  </div>
                            </div>
                            <div class="col-8">
                                <Progress class="progress" value={this.state.progress} title="Saving the details"/>
                            </div>
                        </div>
                  </div>
                  <div class="skill-progress">
                        <div class="row">
                            <div class="col-4">
                                  <div class="skill-title">
                                     <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                     <span>Java</span>
                                  </div>
                            </div>
                            <div class="col-8">
                                <Progress class="progress" value={this.state.progress} title="Saving the details"/>
                            </div>
                        </div>
                  </div>
                  </div>
                  </div>
              </div>
         </div>
  </div>
</div>


</div>

</div>

    );

  }

}

export default SkillProgress;
