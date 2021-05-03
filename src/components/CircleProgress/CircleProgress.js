import React, {Component} from 'react'
import "./CircleProgress.css"
import { Progress } from 'reactstrap';
import AOS from "aos";
import "aos/dist/aos.css";
class CircleProgress extends Component {
    componentDidMount() {
    AOS.init({
      duration : 2000
    });
  }
  render() {

    return (
<div class="Circleprogress">
<div class=" head1 text-uppercase font-weight-bold font-italic"><h5>Emotional</h5></div>
<div class="row justify-content-center text-center">
<div class="col-md-2 justify-content-center text-center">
</div>
    <div class="col-md-2 justify-content-center text-center">
       <div data-aos="flip-up"  data-aos-duration="3000">
        <div class="progress progress1 blue"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
            <div class="progress-value">90%</div>
        </div>
        <div class="circlename font-weight-bold text-capitalize">Creativity</div>
        </div>
    </div>
    <div class="col-md-2 justify-content-center text-center align-self-center">
        <div data-aos="flip-right"  data-aos-duration="3000">
        <div class="progress progress1 yellow"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
            <div class="progress-value">37.5%</div>
        </div>
        <div class="circlename font-weight-bold text-capitalize">Content</div>
        </div>
    </div>
    <div class="col-md-2 justify-content-center text-center">
        <div data-aos="flip-left"  data-aos-duration="3000">
        <div class="progress progress1 blue"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
            <div class="progress-value">90%</div>
        </div>
        <div class="circlename font-weight-bold text-capitalize">Hardword</div>
        </div>
    </div>
    <div class="col-md-2 justify-content-center text-center">
     <div data-aos="flip-down"  data-aos-duration="3000">
        <div class="progress progress1 yellow"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
            <div class="progress-value">37.5%</div>
        </div>
        <div class="circlename font-weight-bold text-capitalize">Communication</div>
        </div>
    </div>
    <div class="col-md-2 justify-content-center text-center">
    </div>
</div>
</div>
  );

  }

}

export default CircleProgress;
