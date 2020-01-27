import React from "react";

// reactstrap components
//import { Container } from "reactstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// core components

function Mathead() {
  return (
    <>
      {/* <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../../assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">travle booking</h1>
              <div className="fog-low">
                <img alt="..." src={require("../../../assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("../../../assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Let's enjoy a wonderful holiday together
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("../../../assets/img/clouds.png") + ")"
          }}
        />
        
      </div> */}
      <div className="sliderbar">
        <OwlCarousel items="1" autoplay={true}  dots loop autoplayTimeout="5000">
          <div className="item">
            <img height="500px"
              alt="..."
              src={require("../../../assets/img/sliderbar1.jpg")}
            />
          </div>
          <div className="item">
            <img height="500px"
              alt="..."
              src={require("../../../assets/img/sliderbar2.jpg")}
            />
          </div>
          <div className="item">
            <img height="500px"
              alt="..."
              src={require("../../../assets/img/sliderbar3.jpg")}
            />
          </div>
          <div className="item">
            <img height="500px"
              alt="..."
              src={require("../../../assets/img/sliderbar4.png")}
            />
          </div>
          
        </OwlCarousel>
      </div>
    </>
  );
}

export default Mathead;
