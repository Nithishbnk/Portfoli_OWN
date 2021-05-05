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
                                                      <div data-aos="fade-up" data-aos-anchor-placement="top-center"><p class="text-left text-capitalize">Software Develovper</p></div>

                            </div>
                            <div class="col-md-6 colname1">

                                                    <div class="flip-card">
                                                    <div class="flip-card-inner">
                                                    <div class="flip-card-back">
                                                    <div class="col-sm-12">
                                                           <div class="row">
                                                                                          <div class="col infoclass">

                                                                                              <table class="table">
                                                                                                              <thead class="thead-light">
                                                                                                              <tr>

                                                                                                              </tr>
                                                                                                            </thead>
                                                                                                            <tbody>
                                                                                                            <tr>
                                                                                                              <th scope="row">
                                                                                                                   <p class="info"><strong>Birth: </strong> 1999 </p>
                                                                                                          </th>  </tr>
                                                                                                          <tr>
                                                                                                            <th scope="row">
                                                                                                                 <p class="info"><strong>Location: </strong> India </p>
                                                                                                        </th>  </tr>
                                                                                                        <tr>
                                                                                                          <th scope="row">
                                                                                                               <p class="info"><strong>Citizenship: </strong> Indian </p>
                                                                                                      </th>  </tr>

                                                                                                              <tr>
                                                                                                                <th scope="row">
                                                                                                                     <p class="info"><strong>About: </strong> Web Designer / UI. </p>
                                                                                                            </th>  </tr>
                                                                                                              <tr>
                                                                                                                <th scope="row">
                                                                                                                      <p class="info"><strong>Skills: </strong>
                                                                                                                          <span class="tags">ReactJS,</span>
                                                                                                                          <span class="tags"> UI/UX,</span>
                                                                                                                          <span class="tags"> A/B Test,</span>
                                                                                                                          <span class="tags"> Salesforce</span>
                                                                                                                      </p>
                                                                                                          </th>    </tr>
                                                                                                          <tr>
                                                                                                            <th scope="row">
                                                                                                                 <p class="info"><strong>Hobbies: </strong> Read, out with friends, listen to music, draw and learn new things. </p>
                                                                                                        </th>  </tr>
                                                                                                            </tbody>
                                                                                              </table>



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
