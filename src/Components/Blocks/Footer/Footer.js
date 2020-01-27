import React, { Component } from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-head">
          <div className="footer-title">
            <span>Khách sạn theo Tỉnh Thành</span>
          </div>
          <div className="footer-hr">
            <hr></hr>
          </div>
        </div>
        <div className="list-hotel">
          <Container>
            <Row>
              <Col sm="2" className="hotel">
                Khách sạn An Giang
              </Col>
              <Col sm="2" className="hotel">
                Bà Rịa - Vũng Tàu
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Bắc Giang
              </Col>
              <Col sm="2" className="hotel">
                {" "}
                Khách sạn Bình Thuận
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Bến Tre
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Bình Định
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Bình Dương
              </Col>
              <Col sm="2" className="hotel">
                {" "}
                Khách sạn Điện Biên
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Cần Thơ
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Đà Nẵng
              </Col>
              <Col sm="2" className="hotel">
                {" "}
                Khách sạn Đắk Lắk
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Điện Biên
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Đồng Nai
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Hà Nội
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Hà Tĩnh
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Hải Phòng
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Hòa Bình
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Khánh Hòa
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Kiên Giang
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Lai Châu
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Lâm Đồng
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Lạng Sơn
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Lào Cai
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Nghệ An
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Ninh Bình
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Ninh Thuận
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Phú Yên
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Quảng Bình
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Quảng Nam
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Quảng Ngãi
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Quảng Ninh
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Quảng Trị
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Thái Nguyên
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Thanh Hóa
              </Col>
              <Col sm="2" className="hotel">
                KS Thừa Thiên Huế
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Tiền Giang
              </Col>
              <Col sm="2" className="hotel">
                KS TP Hồ Chí Minh
              </Col>
              <Col sm="2" className="hotel">
                Khách sạn Vĩnh Phúc
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="body-hr"></hr>
        <div className="about-travle-booking">
          <Container>
            <Row>
              <Col sm="2">
                <ul>
                  <li>TRAVLE-BOOKING</li>
                  <li>Liên hệ</li>
                  <li>Chính sách bảo mật</li>
                  <li>Điều khoản sử dụng</li>
                  <li>Hợp tác khách sạn</li>
                  <li>Blog du lịch</li>
                  <li>Tuyển dụng</li>
                  <li>Hoàn tiền thành viên</li>
                  <li>Hợp tác đại lý</li>
                </ul>
              </Col>
              <Col sm="2">
                <div className="title-folow">
                  <h5>Folow us on</h5>
                </div>
                <ul>
                  <ul className="social-icon">
                    <li>
                      <i className="fab fa-facebook"></i>
                    </li>
                    <li>
                      <i className="fab fa-twitter-square"></i>
                    </li>
                    <li>
                      <i className="fab fa-instagram"></i>
                    </li>
                    <li>
                      <i className="fab fa-google-plus-square"></i>
                    </li>
                    <li>
                      <i className="fab fa-youtube"></i>
                    </li>
                  </ul>
                </ul>
                <div className="title-folow">
                  <h5>Download app</h5>
                </div>
                <ul className="image-app">
                  <li>
                    <img
                      width="150px"
                      alt="..."
                      src={require("../../../assets/img/thanhtuu/appstore.png")}
                    />
                  </li>
                  <li>
                    <img
                      width="150px"
                      alt="..."
                      src={require("../../../assets/img/thanhtuu/google-play-btn.png")}
                    />
                  </li>
                </ul>
              </Col>
              <Col sm="4">
                <div className="title-folow">
                  <h5>Thông tin về công ty</h5>
                </div>
                <ul>
                  <li>
                    <span>
                      <strong>Tầng 2 Tòa nhà 17T4 Hapulico Complex</strong>
                    </span>
                  </li>
                  <li>Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</li>
                  <li>Số tài khoản: 0491000136688</li>
                  <li>Ngân hàng: Vietcombank</li>
                  <li>Chi nhánh Thăng Long</li>
                  <li>Ngày cấp ĐKKD: 9/5/2016</li>
                  <li>Email: cs@vntrip.vn</li>
                  <li>Hotline:0963 266 688</li>
                </ul>
              </Col>
              <Col sm="4">
                <p className="subscribe-title">
                  <b>Du lịch thông minh !</b>Đăng ký nhận tin để lên kế hoạch
                  cho kỳ nghỉ tới ngay từ bây giờ:
                </p>
                <div className="form">
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Nhập địa chi email..."
                  />
                  <Button className="button">Đăng ký</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="end-page">
          <Container>
            <Row>
              <Col sm="7" className="left-footer">
                <div className="p-footer">
                  <p>Copyright &copy; 2019 Travel</p>
                </div>
                <div className="img-footer">
                  <img
                    width="150px"
                    alt="..."
                    src={require("../../../assets/img/thanhtuu/20150827110756-dadangky.png")}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
