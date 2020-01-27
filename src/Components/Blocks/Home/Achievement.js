import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "reactstrap";
export default class Achievement extends Component {
  render() {
    return (
      <div className="achievement">
        <div className="form-title">
          <h2 className="padding40">
            TRAVLE-BOOKING.VN - THÀNH TỰU &amp; GIẢI THƯỞNG
          </h2>
          <span>&nbsp;</span>
        </div>
        <Container>

          <Row className="picture">
          <OwlCarousel items="6" autoplay={true} loop nav={true} navText={['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']}>

              <Col sm="2" className="element-icons">
                <img className="vilacaed"
                  alt="..."
                  src={require("../../../assets/img/thanhtuu/vilacaed.png")}
                />
                <p className="title-icons">Bảng vàng</p>
                <p className="vi">Doanh nghiệp uy tín, phát triển thịnh vượng</p>
              </Col>
              <Col sm="2"  className="element-icons">
                <img
                  width="100px"
                  alt="..."
                  src={require("../../../assets/img/thanhtuu/img2.PNG")}
                />
                <p className="title-icons">Tuyên dương</p>
                <p className="vi">Gương thanh niên thủ đô khởi nghiệp tiêu biểu</p>
              </Col>
              <Col sm="2"  className="element-icons">
                <img
                  alt="..."
                  src={require("../../../assets/img/thanhtuu/img3.PNG")}
                />
                <p className="title-icons">Giải thưởng</p>
                <p className="vi">Dịch vụ chất lượng cao ASEAN 2018</p>
              </Col>
              <Col sm="2"  className="element-icons">
                <img
                  alt="..."
                  src={require("../../../assets/img/thanhtuu/img4.PNG")}
                />
                <p className="title-icons">Giải thưởng</p>
                <p className="vi">Doanh nghiệp văn hóa việt nam tiêu biểu</p>
              </Col>
              <Col sm="2"  className="element-icons">
                <img
                  alt="..."
                  src={require("../../../assets/img/thanhtuu/img5.PNG")}
                />
                <p className="title-icons">Top 10</p>
                <p className="vi">Dịch vụ xuất sắc vì người tiêu dùng</p>
              </Col>
              <Col sm="2"  className="element-icons">
                <img className="theguid"
                  alt="..."
                  src={require("../../../assets/img/thanhtuu/The-guide-awards3249.png")}
                />
                <p className="title-icons">Giải thưởng</p>
                <p className="vi">The Guide Awards</p>
              </Col>
              <Col sm="2"  className="element-icons">
                <img
                  alt="..."
                  src={require("../../../assets/img/thanhtuu/danhhieu.PNG")}
                />
                <p className="title-icons">Danh hiệu</p>
                <p className="vi">Doanh nghiệp tiêu biểu của năm</p>
              </Col>
          </OwlCarousel>
              
          </Row>

        </Container>
      </div>
    );
  }
}
