import React, {Component} from 'react'
import "./Timeline.css"
import { Progress } from 'reactstrap';
import AOS from "aos";
import "aos/dist/aos.css";
class Timeline extends Component {
  state = {
    progress: 0,
  }
  componentDidMount() {
  AOS.init({
    duration : 2000
  });
  let counter = 1;
    const interval = setInterval(() => {
        counter=counter+1;
        this.setState({
            progress : counter
        })
        if(counter == 90) {
            clearInterval(interval);
        }
    }, 40);
}

  render() {

    return (
<div class="Timeline">


<div class="">
  <div class="container">
    <h2 class="pb-3 pt-2 border-bottom mb-5 head2">- - <i class="fa fa-file" aria-hidden="true"></i> Resume - -</h2>
    <div data-aos="zoom-in"  data-aos-duration="3000">
    <div class="row align-items-center how-it-works d-flex">
      <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
        <div class="circle font-weight-bold">1</div>
      </div>
      <div class="col-6">
        <h5>Education 2016-2020</h5>
        <p>SASTRA Deemed University • Thanjavur, Tamil Nadu
08/2020<br/>
Attended GUCON research paper publishing conference in DELHI.
Article: Bias/variance analysis using optimized regression technique.Mr.M.Rajasekhar reddy, associate professor,
SASTRA University.
Research credit scholar.
</p>
      </div>
    </div>
    <div class="row timeline">
      <div class="col-2">
        <div class="corner top-right"></div>
      </div>
      <div class="col-8">
        <hr/>
      </div>
      <div class="col-2">
        <div class="corner left-bottom"></div>
      </div>
    </div>
    <div class="row align-items-center justify-content-end how-it-works d-flex">
      <div class="col-6 text-right">
        <h5>Turned into a Develovper 2017</h5>
        <p>Salesforce Marketing Cloud Email Specialist. A/B test Developer. Comfortable in front end, back end stacks related to development work. Develop UIs with React, JavaScript, HTML and
CSS. Participated in full lifecycle of development for Applications using Spring framework and
RESTful APIs.</p>
      </div>
      <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
        <div class="circle font-weight-bold">2</div>
      </div>
    </div>
    <div class="row timeline">
      <div class="col-2">
        <div class="corner right-bottom"></div>
      </div>
      <div class="col-8">
        <hr/>
      </div>
      <div class="col-2">
        <div class="corner top-left"></div>
      </div>
    </div>
    <div class="row align-items-center how-it-works d-flex">
      <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
        <div class="circle font-weight-bold">3</div>
      </div>
      <div class="col-6">
        <h5>Working at Sapient 2020-Present</h5>
        <p>Associate Technology L1
Publicis Sapient • Bengaluru, Karnataka
01/2020 - Present</p>
      </div>
    </div>
    </div>
  </div>
</div>
</div>
  );

  }

}

export default Timeline;
