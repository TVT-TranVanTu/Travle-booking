import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
export default class HotPlace extends Component {
  render() {
    return (
      <div className="hotplace">
        <div className="form-title">
          <h2 className="padding40">ĐIỂM ĐẾN VIỆT NAM PHỔ BIẾN</h2>
          <span>&nbsp;</span>
        </div>
        <Container>
          <Row className="picture">
            <Col sm="4" className="about-picture">
              <img
                alt="..."
                src={require("../../../assets/img/hotplace/quactugiam.jpg")}
              />
              <br />
              <p className="picture-title">Hà Nội</p>
              <p className="place-info place-info-head">
                <i className="fa fa-search"></i>
                1000 khách sạn Hà Nội
              </p>
              <p className="place-info place-info-body">
                <i className="fa fa-search"></i>
                Cẩm nang du lịch Hà Nội
              </p>
              <p className="place-info place-info-footer">
                <i className="fa fa-search"></i>
                khuyến mại du lịch Hà Nội
              </p>
            </Col>
            <Col sm="2" className="about-picture">
              <img
                alt="..."
                src={require("../../../assets/img/hotplace/danang.jpg")}
              />
              <br />
              <p className="picture-title">Đà Nẵng</p>
              
            </Col>
            <Col sm="2" className="about-picture">
              <img
                alt="..."
                src={require("../../../assets/img/hotplace/hoian.gif")}
              />
              <br />
              <p className="picture-title">Hội An</p>
              
            </Col>
            <Col sm="4" className="about-picture">
              <img
                alt="..."
                src={require("../../../assets/img/hotplace/tphochiminh.jpg")}
              />
              <br />
              <p className="picture-title">TP.Hồ Chí Minh</p>
             
            </Col>
          </Row>
          <Row className="picture">
            <Col sm="4" className="about-picture">
              <img
                alt="..."
                src={require("../../../assets/img/hotplace/phuquac.jpg")}
              />
              <br />
              <p className="picture-title">Phú Quấc</p>
              
            </Col>
            <Col sm="4" className="about-picture">
              <img
                alt="..."
                src={require("../../../assets/img/hotplace/nhatrang.jpg")}
              />
              <br />
              <p className="picture-title">Nha Trang</p>
              
            </Col>
            <Col sm="4" className="about-picture">
              <img
                alt="..."
                src={require("../../../assets/img/hotplace/dalat.jpg")}
              />
              <br />
              <p className="picture-title">Đà Lạt</p>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
