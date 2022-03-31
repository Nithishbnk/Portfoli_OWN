import React, { Component } from "react";
import "./TopSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import mypic from "./propic2.jpg";
class TopSection extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <div class="jumbotron  jumbotron-fluid">
        <div class="container con1">
          <div class="row row1">
            <div class="col-md-6 colname">
              <div class="text-left text-capitalize">
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h1>
                    Bommireddy Nithish Kumar
                    <h6><span class="w3-tag w3-black">D</span>
                    <span class="w3-tag w3-black">E</span>
                    <span class="w3-tag w3-black">V</span>
                    <span class="w3-tag w3-black">E</span>
                    <span class="w3-tag w3-black">L</span>
                    <span class="w3-tag w3-black">O</span>
                    <span class="w3-tag w3-black">P</span>
                    <span class="w3-tag w3-black">E</span>
                    <span class="w3-tag w3-black">R</span>
                    </h6>
                  </h1>{" "}
                  <span class="w3-tag w3-green">Travel</span>
                  <span class="w3-tag w3-blue">PC Gamer</span>
                  <span class="w3-tag w3-red">Travel</span>
                  <span class="w3-tag w3-black">Books</span>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <p class="text-left  text-capitalize">
                  Associate Software Development Engineer 2
                </p>
              </div>
              <div data-aos="fade-down" data-aos-anchor-placement="top-center">
                <p class="text-left company text-capitalize">
                  Publicis Sapient
                </p>
              </div>
              <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                <p class="text-left company text-capitalize">Bangalore</p>
              </div>
              <div class="row no-gutters social-container1">
                <div class="col socialcol">
                  <a
                    class="social-inner1"
                    href="https://m.facebook.com/nithish.bommireddy?ref=bookmarks"
                  >
                    <span class="icon mdi mdi-facebook"></span>
                    <span class="media">Facebook</span>
                  </a>
                </div>
                <div class="col socialcol">
                  <a
                    class="social-inner1"
                    href="https://www.instagram.com/nithu_since_1999/"
                  >
                    <span class="icon mdi mdi-instagram"></span>
                    <span class="media">instagram</span>
                  </a>
                </div>
                <div class="col socialcol">
                  <a
                    class="social-inner1"
                    href="https://www.linkedin.com/in/nithish-kumar-bnk/"
                  >
                    <span class="icon mdi "></span>
                    <span class="media">linkedin</span>
                  </a>
                </div>
              </div>
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
                                    <a
                                      href="https://www.linkedin.com/in/nithish-kumar-bnk/"
                                      target="blank"
                                    >
                                      <button type="button" class="btn">
                                        LinkedIn
                                      </button>
                                    </a>
                                  </div>

                                  <div class="profile-usermenu">
                                    <ul class="nav">
                                      <li>
                                        <a>
                                          <i class="glyphicon glyphicon-home"></i>
                                          Birth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                          Jan 1999{" "}
                                        </a>
                                      </li>
                                      <li>
                                        <a>
                                          <i class="glyphicon glyphicon-user"></i>
                                          Location &nbsp;&nbsp;&nbsp;&nbsp;:
                                          Andhra Pradesh{" "}
                                        </a>
                                      </li>
                                      <li>
                                        <a>
                                          <i class="glyphicon glyphicon-ok"></i>
                                          SkillSet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                          : Web Technologies
                                        </a>
                                      </li>
                                      <li>
                                        <a>
                                          <i class="glyphicon glyphicon-flag"></i>
                                          Citizenship : Indian{" "}
                                        </a>
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
                    <img
                      class="card-img-top imgadj img-circle img-responsive"
                      src={mypic}
                      alt=""
                    ></img>
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
    );
  }
}

export default TopSection;
