import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Label,
  Input,
  CustomInput,
  Media,
} from "reactstrap";
import StarRatings from "react-star-ratings";

import Item from "../../Data/area";
import accommodations from "../../Data/accommodation";
import convenient from "../../Data/hotelDV";
import relate from "../../Data/Related ";
import Rightbar from "./Rightbar";



export default class LeftBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Item,
      accommos: accommodations,
      convenients: convenient,
      relateds: relate
    };
  }
  render() {
    let itemsorigin = this.state.items;
    const listitems = itemsorigin.map(itemsorigin => (
      <li key={itemsorigin.id}>
        <Label className="control-checkbox">
          <Input type="checkbox"></Input>
          {itemsorigin.name}
        </Label>
        <span>{itemsorigin.status}</span>
      </li>
    ));

    let listMotel = this.state.accommos;
    const Motels = listMotel.map(listMotel => (
      <li key={listMotel.id}>
        <Label className="control-checkbox">
          <Input type="checkbox"></Input>
          {listMotel.name}
        </Label>
        <span>{listMotel.status}</span>
      </li>
    ));

    let listconvenients = this.state.convenients;
    const listhotel = listconvenients.map(listconvenients => (
      <li key={listconvenients.id}>
        <Label className="control-checkbox">
          <Input type="checkbox"></Input>
          {listconvenients.name}
        </Label>
        <span>{listconvenients.status}</span>
      </li>
    ));

    let relates = this.state.relateds;
    const listrelate = relates.map(relates => (
      <li key={relates.id}>
        <Media>
          <Media left middle>
            <Media object src={require(`../../../assets/img/relatedimg/${relates.picture}`)} />
          </Media>
          <Media body>
            <p>{relates.status} {' '}<i className="fa fa-external-link"></i></p>
          </Media>
        </Media>
      </li>
    ));
    return (
      <div className="leftbar">
        <Container>
          <Row>
            <Col sm="3">
              <div className="mapBlock">
                <a className="switchmap">
                  <img
                    width="100%"
                    alt="..."
                    src={require("../../../assets/img/thanhtuu/Google-Maps.jpg")}
                  />
                </a>
                <a className="searchmap">
                  <i className="fa fa-expand"></i>
                  Xem bản đồ
                </a>
              </div>
              <div className="commitment">
                <span className="cheapest-img">
                  <img
                    width="80px"
                    height="60px"
                    alt="..."
                    src={require("../../../assets/img/thanhtuu/images-cheapest.png")}
                  />
                </span>
                <p className="title-adv">
                  <strong className="title-strong">Rẻ hơn giá rẻ nhất:</strong>
                  <br /> Nếu bạn tìm được đơn vị khác cung cấp cùng loại phòng,
                  ở cùng khách sạn vào cùng thời điểm, liên hệ ngay với
                  Travle-booking.vn để được mua giá rẻ hơn rẻ nhất.. <br />
                  <a
                    href="#"
                    id="adv-left-detail"
                    data-tracking="HOTELLIST_CHEAPEST_PRICE"
                  >
                    Chi tiết
                  </a>
                </p>
              </div>
              <div className="price">
                <p className="title-price">Mức giá</p>
                <ul>
                  <li>
                    <Label className="control-checkbox">
                      <Input type="checkbox"></Input> Dưới 500.000đ
                    </Label>
                    <span>155</span>
                  </li>
                  <li>
                    <Label className="control-checkbox">
                      <Input type="checkbox"></Input> 500.000 - 1000.000đ
                    </Label>
                    <span>155</span>
                  </li>
                  <li>
                    <Label className="control-checkbox">
                      <Input type="checkbox"></Input> 1000.000 - 2000.000đ
                    </Label>
                    <span>155</span>
                  </li>
                  <li>
                    <Label className="control-checkbox">
                      <Input type="checkbox"></Input> 2000.000 - 5000.000đ
                    </Label>
                    <span>155</span>
                  </li>
                  <li>
                    <Label className="control-checkbox">
                      <Input type="checkbox"></Input> Trên 5000.000đ
                    </Label>
                    <span>155</span>
                  </li>
                </ul>
                <div>
                  <CustomInput
                    type="range"
                    id="exampleCustomRange"
                    name="customRange"
                  />
                </div>
                <div className="checkbox-price">
                  <Input type="checkbox"></Input> Xem giá cuối(Bao gồm
                  <br /> phí dịch vụ khách sạn)
                </div>
              </div>
              <div className="evaluate-star">
                <p className="title-evaluate">Xếp hạng khách sạn</p>
                <ul>
                  <li>
                    <Label className="control-checkbox">
                      <Input type="checkbox"></Input>
                      <StarRatings
                        className="starrating"
                        rating={5}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="orange"
                        numberOfStars={5}
                        name="rating"
                      />
                    </Label>
                    <span>155</span>
                  </li>
                  <li>
                    <Label className="control-checkbox">
                      <Input type="checkbox"></Input>
                      <StarRatings
                        className="starrating"
                        rating={4}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="orange"
                        numberOfStars={5}
                        name="rating"
                      />
                    </Label>
                    <span>155</span>
                  </li>
                  <li>
                    <Label className="control-checkbox">
                      <Input type="checkbox"></Input>
                      <StarRatings
                        className="starrating"
                        rating={3}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="orange"
                        numberOfStars={5}
                        name="rating"
                      />
                    </Label>
                    <span>155</span>
                  </li>
                  <li>
                    <Label className="control-checkbox">
                      <Input type="checkbox"></Input>
                      <StarRatings
                        className="starrating"
                        rating={2}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="orange"
                        numberOfStars={5}
                        name="rating"
                      />
                    </Label>
                    <span>155</span>
                  </li>
                  <li>
                    <Label className="control-checkbox">
                      <Input type="checkbox"></Input>
                      <StarRatings
                        className="starrating"
                        rating={1}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="orange"
                        numberOfStars={5}
                        name="rating"
                      />
                    </Label>
                    <span>155</span>
                  </li>
                </ul>
              </div>
              <div className="area-checkbox">
                <p>Khu vực</p>
                <ul>{listitems}</ul>
              </div>
              <div className="accommodation">
                <p>Loại chỗ ở</p>
                <ul>{Motels}</ul>
              </div>
              <div className="accommodation">
                <p>Tiện nghi khách sạn</p>
                <ul>{listhotel}</ul>
              </div>
              <div className="related-image">
                <p>Tin liên quan</p>
                <ul>{listrelate}</ul>
              </div>
            </Col>

            <Col sm="9">
              <Rightbar></Rightbar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
