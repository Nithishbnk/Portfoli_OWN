import React, { Component } from "react";
import { useState, useEffect } from "react";

import "./SkillProgress.css";
import { Progress } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";
class SkillProgress extends Component {
  state = {
    progress1: 0,
    progress2: 0,
    x: 0,
    y: 0,
    z: 0,
    a: 0,
    b: 0,
    c: 0,
    d: 0,
  };

  increaseBar() {
    let counter1 = 1;
    let counter2 = 1;

    let c = 1;
    let c1 = 1;
    let c2 = 1;
    let c3 = 1;
    let c4 = 1;
    let c5 = 1;
    let c6 = 1;

    const interval = setInterval(() => {
      this.setState({
        progress1: counter1,
        progress2: counter2,

        x: c,
        y: c1,
        z: c2,
        a: c3,
        b: c4,
        c: c5,
        d: c6,
      });
      if (counter1 == 80) {
        clearInterval(interval);
      } else {
        counter1++;
      }
      if (counter2 == 50) {
      } else {
        counter2++;
      }

      if (c == 75) {
      } else {
        c++;
      }
      if (c1 == 75) {
      } else {
        c1++;
      }
      if (c2 == 60) {
      } else {
        c2++;
      }
      if (c3 == 70) {
      } else {
        c3++;
      }
      if (c4 == 80) {
      } else {
        c4++;
      }
      if (c5 == 50) {
      } else {
        c5++;
      }
      if (c6 == 70) {
      } else {
        c6++;
      }
    }, 100);
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
      <div class="Skills">
        <div data-aos="zoom-in-up" data-aos-duration="3000">
          <div class="card1 rounded-4">
            <div class="card-header text-uppercase">
              <p>Skill Set</p>
            </div>
            <div class="card-body skill-body">
              <div class="container con2">
                <div class="row">
                  <div class="col-md-4">
                    <div data-aos="fade-right">
                      <div class="skill-progress">
                        <div class="row">
                          <div class="col-4">
                            <div class="skill-title">
                              <span>SFCC</span>
                            </div>
                          </div>
                          <div class="col-8">
                            <Progress
                              class="progress"
                              value={this.state.progress1}
                              title="Saving the details"
                            >
                              {this.state.progress1}%
                            </Progress>
                          </div>
                        </div>
                      </div>
                      <div class="skill-progress">
                        <div class="row">
                          <div class="col-4">
                            <div class="skill-title">
                              <span>ReactJS</span>
                            </div>
                          </div>
                          <div class="col-8">
                            <Progress
                              class="progress"
                              value={this.state.progress1}
                              title="Saving the details"
                            >
                              {this.state.progress1}%
                            </Progress>
                          </div>
                        </div>
                      </div>
                      <div class="skill-progress">
                        <div class="row">
                          <div class="col-4">
                            <div class="skill-title">
                              <span>NextJS</span>
                            </div>
                          </div>
                          <div class="col-8">
                            <Progress
                              class="progress"
                              value={this.state.progress2}
                              title="Saving the details"
                            >
                              {this.state.progress2}%
                            </Progress>
                          </div>
                        </div>
                      </div>
                      <div class="skill-progress">
                        <div class="row">
                          <div class="col-4">
                            <div class="skill-title">
                              <span>SFMC</span>
                            </div>
                          </div>
                          <div class="col-8">
                            <Progress
                              class="progress"
                              value={this.state.x}
                              title="Saving the details"
                            >
                              {this.state.x}%
                            </Progress>
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
                              <span>AB testing</span>
                            </div>
                          </div>
                          <div class="col-8">
                            <Progress
                              class="progress"
                              value={this.state.y}
                              title="Saving the details"
                            >
                              {this.state.y}%
                            </Progress>
                          </div>
                        </div>
                      </div>
                      <div class="skill-progress">
                        <div class="row">
                          <div class="col-4">
                            <div class="skill-title">
                              <span>C, C++</span>
                            </div>
                          </div>
                          <div class="col-8">
                            <Progress
                              class="progress"
                              value={this.state.z}
                              title="Saving the details"
                            >
                              {this.state.z}%
                            </Progress>
                          </div>
                        </div>
                      </div>
                      <div class="skill-progress">
                        <div class="row">
                          <div class="col-4">
                            <div class="skill-title">
                              <span>Java</span>
                            </div>
                          </div>
                          <div class="col-8">
                            <Progress
                              class="progress"
                              value={this.state.a}
                              title="Saving the details"
                            >
                              {this.state.a}%
                            </Progress>
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
                              <span>RestfulAPIS</span>
                            </div>
                          </div>
                          <div class="col-8">
                            <Progress
                              class="progress"
                              value={this.state.b}
                              title="Saving the details"
                            >
                              {this.state.b}%
                            </Progress>
                          </div>
                        </div>
                      </div>
                      <div class="skill-progress">
                        <div class="row">
                          <div class="col-4">
                            <div class="skill-title">
                              <span>AWS</span>
                            </div>
                          </div>
                          <div class="col-8">
                            <Progress
                              class="progress"
                              value={this.state.c}
                              title="Saving the details"
                            >
                              {this.state.c}%
                            </Progress>
                          </div>
                        </div>
                      </div>
                      <div class="skill-progress">
                        <div class="row">
                          <div class="col-4">
                            <div class="skill-title">
                              <span>SQL</span>
                            </div>
                          </div>
                          <div class="col-8">
                            <Progress
                              class="progress"
                              value={this.state.d}
                              title="Saving the details"
                            >
                              {this.state.d}%
                            </Progress>
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
