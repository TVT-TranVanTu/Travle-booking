import React from "react";

// reactstrap components
//import { Container } from "reactstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// core components

function Mathead() {
  return (
    
      <div className="sliderbar">
        <OwlCarousel items="1" autoplay={true}  dots loop autoplayTimeout="5000">
          <div className="item">
            <img height="400px"
              alt="..."
              src={require("../../../assets/img/sliderbar1.jpg")}
            />
          </div>
          <div className="item">
            <img height="400px"
              alt="..."
              src={require("../../../assets/img/sliderbar2.jpg")}
            />
          </div>
          <div className="item">
            <img height="400px"
              alt="..."
              src={require("../../../assets/img/sliderbar3.jpg")}
            />
          </div>
          <div className="item">
            <img height="400px"
              alt="..."
              src={require("../../../assets/img/sliderbar4.png")}
            />
          </div>
          
        </OwlCarousel>
      </div>
    
  );
}

export default Mathead;
