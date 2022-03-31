import React, { Component } from "react";
import "./CircleProgress.css";
import { Progress } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";
class CircleProgress extends Component {
  state = {
    progress: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  increaseBar() {
    let counter = 1;
    let c1 = 1;
    let c2 = 1;
    let c3 = 1;
    const interval = setInterval(() => {
      this.setState({
        progress: counter,
        x: c1,
        y: c2,
        z: c3,
      });
      if (counter == 90) {
        clearInterval(interval);
      } else {
        counter = counter + 1;
      }
      if (c1 == 80) {
      } else {
        c1++;
      }
      if (c2 == 85) {
      } else {
        c2++;
      }
      if (c3 == 80) {
      } else {
        c3++;
      }
    }, 40);
  }
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    const interval = setInterval(() => {
      var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
      var scrollPercent = (s / (d - c)) * 100;
      var position = scrollPercent;

      if (position >= 24 && position <= 40) {
        this.increaseBar();
        clearInterval(interval);
      }
    }, 100);
  }

  render() {
    return (
      <div class="Circleprogress">
        <div class=" head1 text-uppercase">Emotional</div>
        <div class="row justify-content-center text-center conquered">
          <div class="col-md-2 justify-content-center text-center"></div>
          <div class="col-md-2 justify-content-center text-center">
            <div data-aos="flip-up" data-aos-duration="3000">
              <div class="progress progress1 blue">
                {" "}
                <span class="progress-left">
                  {" "}
                  <span class="progress-bar"></span>{" "}
                </span>{" "}
                <span class="progress-right">
                  {" "}
                  <span class="progress-bar"></span>{" "}
                </span>
                <div class="progress-value"> Creativity</div>
                {/* <div class="progress-value">{this.state.progress}%</div> */}
              </div>
              {/* <div class="circlename font-weight-bold text-capitalize">
                Creativity
              </div> */}
            </div>
          </div>
          <div class="col-md-2 justify-content-center text-center">
            <div data-aos="flip-up" data-aos-duration="3000">
              <div class="progress progress1 blue">
                {" "}
                <span class="progress-left">
                  {" "}
                  <span class="progress-bar"></span>{" "}
                </span>{" "}
                <span class="progress-right">
                  {" "}
                  <span class="progress-bar"></span>{" "}
                </span>
                <div class="progress-value">Content</div>
                {/* <div class="progress-value">Content{this.state.x}%</div> */}
              </div>
              {/* <div class="circlename font-weight-bold text-capitalize">
                Content
              </div> */}
            </div>
          </div>
          <div class="col-md-2 justify-content-center text-center">
            <div data-aos="flip-left" data-aos-duration="3000">
              <div class="progress progress1 blue">
                {" "}
                <span class="progress-left">
                  {" "}
                  <span class="progress-bar"></span>{" "}
                </span>{" "}
                <span class="progress-right">
                  {" "}
                  <span class="progress-bar"></span>{" "}
                </span>
                <div class="progress-value">Hardwork</div>
                {/* <div class="progress-value">Hardwork{this.state.y}%</div> */}
              </div>
              {/* <div class="circlename font-weight-bold text-capitalize">
                Hardwork
              </div> */}
            </div>
          </div>
          <div class="col-md-2 justify-content-center text-center">
            <div data-aos="flip-up" data-aos-duration="3000">
              <div class="progress progress1 blue">
                {" "}
                <span class="progress-left">
                  {" "}
                  <span class="progress-bar"></span>{" "}
                </span>{" "}
                <span class="progress-right">
                  {" "}
                  <span class="progress-bar"></span>{" "}
                </span>
                <div class="progress-value">Communication</div>
                {/* <div class="progress-value">{this.state.z}%</div> */}
              </div>
              {/* <div class="circlename circlename-com font-weight-bold text-capitalize">
                Communication
              </div> */}
            </div>
          </div>
          <div class="col-md-2 justify-content-center text-center extra"></div>
        </div>
      </div>
    );
  }
}

export default CircleProgress;
