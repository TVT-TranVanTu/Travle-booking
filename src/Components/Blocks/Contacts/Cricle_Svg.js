import React, { Component } from "react";

export default class Cricle_Svg extends Component {
  render() {
    return (
        <div className="class-svg">
          <svg
            className="onesignal-bell-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="99.7"
            height="99.7"
            viewBox="0 0 99.7 99.7"
          >
            <circle
              className="background"
              cx="49.9"
              cy="49.9"
              r="49.9"
            ></circle>
            <path
              className="foreground"
              d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"
            ></path>
            <ellipse
              className="stroke"
              cx="49.9"
              cy="49.9"
              rx="37.4"
              ry="36.9"
            ></ellipse>
          </svg>
        </div>
    );
  }
}
