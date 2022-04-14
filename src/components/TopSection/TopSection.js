import React, { Component } from "react";
import "./TopSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import mypic from "./propic.jpeg";
import mypic2 from "./propic2.jpg";
import mypic3 from "./propic3.jpg";
import mypic4 from "./propic4.jpg";
import mypic5 from "./propic5.jpg";
import mypic6 from "./propic6.jpg";
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
                    <h6>
                      <span class="w3-tag w3-black">D</span>
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
                  <span class="w3-tag w3-red">Music</span>
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
              <div class="cube">
                <div class="face front"> <img src={mypic} class="heropicture" id="logoimage" alt="Hero" /></div>
                <div class="face back"><img src={mypic2} id="logoimage" class="heropicture" alt="Hero" /></div>
                <div class="face left"><img src={mypic3} id="logoimage" class="heropicture"  alt="Hero" /></div>
                <div class="face right"><img src={mypic4} id="logoimage" class="heropicture" alt="Hero" /></div>
                <div class="face top"><img src={mypic5} id="logoimage" class="heropicture" alt="Hero" /></div>
                <div class="face bottom"><img src={mypic6} id="logoimage" class="heropicture" alt="Hero" /></div>
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
