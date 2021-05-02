import React, {Component} from 'react'
import  "./TopSection.css"
import AOS from "aos";
import "aos/dist/aos.css";
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
                        <div class="row row1 w-50">
                            <div class="col colname">
                                                      <div class="text-left text-capitalize">
                                                      <div data-aos="flip-left"
                                                            data-aos-easing="ease-out-cubic"
                                                            data-aos-duration="2000">
                                                        <h1>B. Nithish Kumar</h1></div>
                                                      </div>
                                                      <div data-aos="fade-up"
                 data-aos-anchor-placement="top-center"><p class="text-left text-capitalize">Software Develovper</p></div>

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
