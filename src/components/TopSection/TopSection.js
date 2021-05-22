import React, {Component} from 'react'
import  "./TopSection.css"
import AOS from "aos";
import "aos/dist/aos.css";
import mypic from "./propic.jpeg";
class TopSection extends Component {
  componentDidMount() {
  AOS.init({
    duration : 2000
  });
}
  render() {

    return (
<div>

      <div class="jumbotron  jumbotron-fluid">
        <div class="container con1">
                        <div class="row row1">
                            <div class="col-md-6 colname">
                                                      <div class="text-left text-capitalize">
                                                      <div data-aos="flip-left"
                                                            data-aos-easing="ease-out-cubic"
                                                            data-aos-duration="2000">
                                                        <h1>B. Nithish Kumar</h1></div>
                                                      </div>
                                                      <div data-aos="fade-up" data-aos-anchor-placement="top-center"><p class="text-left  font-weight-bolder text-capitalize">Software Develovper</p></div>
                                                      <div data-aos="fade-down" data-aos-anchor-placement="top-center"><p class="text-left font-weight-bolder company text-capitalize">Publicis Sapient<br/>Bangalore</p></div>


                            </div>
                            <div class="col-md-6 colname1">

                                                    <div class="flip-card">
                                                    <div class="flip-card-inner">
                                                    <div class="flip-card-back">
                                                    <div class="col-sm-12">
                                                           <div class="row row1">
                                                                                          <div class="col infoclass">


<div class="container">
<div class="row profile">
<div class="col-md-12">
  <div class="profile-sidebar">


    <div class="profile-usertitle">
      <div class="profile-usertitle-name">
        Nithish Kumar
      </div>
      <div class="profile-usertitle-job">
        Developer
      </div>
    </div>

    <div class="profile-userbuttons">
      <a href="https://www.instagram.com/nithu_since_1999/"><button type="button" class="btn btn-success btn-sm">Follow</button></a>&nbsp;&nbsp;
        <a href="https://www.instagram.com/nithu_since_1999/"><button type="button" class="btn btn-danger btn-sm">Message</button></a>
    </div>

    <div class="profile-usermenu">
      <ul class="nav">
        <li>
          <a>
          <i class="glyphicon glyphicon-home"></i>
          Birth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Jan 1999 </a>
        </li>
        <li>
          <a>
          <i class="glyphicon glyphicon-user"></i>
          Location &nbsp;&nbsp;&nbsp;&nbsp;: Andhra Pradesh </a>
        </li>
        <li>
          <a>
          <i class="glyphicon glyphicon-ok"></i>
          SkillSet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Front End, Full Stack, Cloud</a>
        </li>
        <li>
          <a>
          <i class="glyphicon glyphicon-flag"></i>
          Citizenship : Indian </a>
        </li>
      </ul>
    </div>

  </div>
</div>

</div>
</div>
                                                                                        </div>

                                                                                      </div>
                                                                      </div>
                                                    </div>
                                                    <div class="flip-card-front">
                                                    <img class="card-img-top imgadj img-circle img-responsive" src={mypic} alt="" ></img>

                                                    </div>
                                                    </div>

                                                    </div>

                            </div>
                        </div>
                        <div class="Scroll">
                            <div class="Scrolldown">
                              <div class="chevron"></div>
                              <div class="chevron"></div>
                              <div class="chevron"></div>
                            </div>
                        </div>


        </div>
      </div>

</div>

    );

  }

}

export default TopSection;
