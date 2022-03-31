import React, { Component } from "react";
import "./Footer.css";
import { Progress } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
class Footer extends Component {
  state = {
    progress: 0,
  };
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    let counter = 1;
    const interval = setInterval(() => {
      counter = counter + 1;
      this.setState({
        progress: counter,
      });
      if (counter == 90) {
        clearInterval(interval);
      }
    }, 40);
  }

  render() {
    return (
          <footer class="footer-classic context-dark bg-image" data-aos="zoom-in">
            <div class="container">
              <div class="row row-30">
                <div class="col-md-4 col-xl-5">
                  <div class="pr-xl-4 summary">
                    <p>
                      Skilled and motivated Software Engineer with 2.5 years of
                      experience. Enhanced performance of several applications
                      using ReactJS, Salesforce Commerce Cloud. Worked with
                      Salesforce Marketing Cloud and as an AB testing Engineer.
                      Seeking to draw on proven software development and
                      engineering skills to grow.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <dl class="contact-list">
                    <dt>Address:</dt>
                    <dd>Chinna Chowk, Kadapa, Andhra Pradesh, India</dd>
                  </dl>
                  <dl class="contact-list">
                    <dt>email:</dt>
                    <dd>
                      <a href="mailto:#" class="email">bommireddynithishkumar@gmail.com</a>
                    </dd>
                  </dl>
                  <dl class="contact-list">
                    <dt>phone:</dt>
                    <dd>91-9629617873</dd>
                  </dl>
                </div>
                <div class="col-md-4 col-xl-3">
                  <ul class="nav-list">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row no-gutters social-container">
              <div class="col socialcol">
                <a
                  class="social-inner"
                  href="https://m.facebook.com/nithish.bommireddy?ref=bookmarks"
                >
                  <span class="icon mdi mdi-facebook"></span>
                  <span>Facebook</span>
                </a>
              </div>
              <div class="col socialcol">
                <a
                  class="social-inner"
                  href="https://www.instagram.com/nithu_since_1999/"
                >
                  <span class="icon mdi mdi-instagram"></span>
                  <span>instagram</span>
                </a>
              </div>
              <div class="col socialcol">
                <a class="social-inner" href="#">
                  <span class="icon mdi mdi-twitter"></span>
                  <span>twitter</span>
                </a>
              </div>
            </div>
          </footer>
    );
  }
}

export default Footer;
