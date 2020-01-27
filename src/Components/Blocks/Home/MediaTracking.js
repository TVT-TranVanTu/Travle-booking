import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

export default class MediaTracking extends Component {
    render() {
        return (
            <div className="mediatracking">
                <div className="form-title">
                    <h2 className="padding40">TRUYỀN THÔNG NÓI VỀ CHÚNG TÔI</h2>
                    <span>&nbsp;</span>
                </div>
                <Container>
                    <Row className="picture">
                        <Col sm="2">
                            <a href="https://vtv.vn/kinh-te/doanh-nghiep-viet-gianh-thi-phan-du-lich-truc-tuyen-20170506195725496.htm">
                            <img
                                width="100px"
                                alt="..."
                                src={require("../../../assets/img/thanhtuu/vtv.png")}
                            />
                            </a>
                        </Col>
                        <Col sm="2">
                            <a href="https://vnexpress.net/kinh-doanh/ung-dung-dat-phong-khach-san-viet-duoc-tap-doan-thuy-sy-rot-von-3795054.html">
                            <img
                                width="120px"
                                alt="..."
                                src={require("../../../assets/img/thanhtuu/VnExpress_logo.png")}
                            />
                            </a>
                        </Col>
                        <Col sm="2">
                            <a href="https://cafebiz.vn/vntripvn-goi-von-thanh-cong-lan-3-duoc-tap-doan-thuy-sy-dinh-gia-1000-ty-dong-20180820111940602.chn">
                            <img
                                width="100px"
                                alt="..."
                                src={require("../../../assets/img/thanhtuu/cafebiz-1.png")}
                            />
                            </a>
                        </Col>
                        <Col sm="2">
                            <a href="https://nhandan.com.vn/">
                            <img
                                width="100px"
                                alt="..."
                                src={require("../../../assets/img/thanhtuu/nhan-dan.png")}
                            />
                            </a>
                        </Col>
                        <Col sm="2">
                            <a href="http://vneconomictimes.com/article/business/vntrip-vn-secures-funding-from-swiss-investor">
                            <img
                                width="120px"
                                alt="..."
                                src={require("../../../assets/img/thanhtuu/economics.png")}
                            />
                            </a>
                        </Col>
                        <Col sm="2">
                            <a href="https://thanhnien.vn/">
                            <img
                                width="120px"
                                alt="..."
                                src={require("../../../assets/img/thanhtuu/thanh-nien.png")}
                            />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
