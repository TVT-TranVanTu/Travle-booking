import React, { Component } from "react";
import {
  Row,
  Col,
  Container
} from "reactstrap";

import StarRatings from "react-star-ratings";

import ElementHotel from '../../Data/elements-hotel';

export default class Rightbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements : ElementHotel,
    };
  }
  render() {

    let Element =this.state.elements;
    const listElements =Element.map(Element => (
      <li key={Element.id}>
          <div className="elementitem">
          <Container>
            <Row>
              <Col sm="3">
                <img
                  width="200px"
                  alt="..."
                  src={require(`../../../assets/img/hotelpages/${Element.picture}`)}
                />
              </Col>
              <Col sm="6" className="content-infor">
                <div className="item-infor">
                  <div className="infor-name">
                    <h2>{Element.name}</h2>
                    <div className="rating-hotel">
                      <StarRatings
                        className="starrating"
                        rating={5}
                        starDimension="15px"
                        starSpacing="1px"
                        starRatedColor="orange"
                        numberOfStars={5}
                        name="rating"
                      />
                    </div>
                    <div className="address-infor">
                      <i className="fa fa-map-marker"></i>
                      <p>
                        {Element.address}
                        <a className="a-map-hotel">(Xem bản đồ)</a>
                      </p>
                    </div>
                    <ul>
                      <li>
                        <i className="fas fa-wifi"></i>wifi
                      </li>
                      <li>
                        <i className="fas fa-utensils"></i>restaurent
                      </li>
                      <li>
                        <i className="fas fa-spa"></i>spa
                      </li>
                    </ul>
                  </div>
                  <div className="accum-point">
                  <img
                  width="40px"
                  alt="..."
                  src={require("../../../assets/img/hotelpages/viplogo.png")}
                  />
                  <span>
                    Hòan tiền {Element.Refund}đ
                  </span>
                  </div>
                </div>
              </Col>
              <Col sm="3" className="content-infor">
                <div className="price-hotel">
                  <p className="price-number">{Element.prices}đ</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </li>
      ))
    return (
      <div className="main-rightbar">
        <h1>Hello word</h1>
        <div className="place-name">
          <h1>Khách sạn tại Hà Nội</h1>
        </div>
        <div className="soft-search">
          <div className="sortBlock-left">
            <div className="collap-filter-nav">
              <ul className="filter-nav">
                <li className="first-sort">
                  <a>Sắp xếp theo được gợi ý</a>
                </li>
                <li className="">
                  <a>Giá rẻ trước</a>
                </li>
                <li>
                  <a>Giá cao trước</a>
                </li>

                <li>
                  <a>Đánh giá cao</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pull-right select-time-price">Giá 1 đêm</div>
        </div>
        {/* <div className="prvItem">
            <div className="prv-last">
              <i className="fa fa-bolt"></i>
              <span>Khuyến mãi giờ chót</span>
            </div>
            <div className="prv-last-dropdow">
              <p>Giảm giá đặc biệt chỉ trong</p>
            </div>
        </div> */}
        <ul className="content-rightbarHotel">
          {listElements}
        </ul>

        <div className="footer-rightbar">
          <div className="box-filter-title">
            <h3>Khách sạn Hà Nội Theo Hạng sao</h3>
          </div>
            <Row className="box-filter-content">
              <Col sm="4">Khách sạn 1 sao Hà Nội</Col>
              <Col sm="4">Khách sạn 2 sao Hà Nội</Col>
              <Col sm="4">Khách sạn 3 sao Hà Nội</Col>
              <Col sm="4">Khách sạn 4 sao Hà Nội</Col>
              <Col sm="4">Khách sạn 5 sao Hà Nội</Col>
            </Row>
          <div className="box-filter-title">
            <h3>Khách sạn Hà Nội Theo Quận Huyện</h3>
          </div>
            <Row className="box-filter-content">
              <Col sm="4">Khách sạn Hoàn Kiếm Hà Nội</Col>
              <Col sm="4">Khách sạn Hai Bà Trưng Hà Nội</Col>
              <Col sm="4">Khách sạn Đông Anh Hà Nội</Col>
            </Row>
        </div>
      </div>
    );
  }
}
