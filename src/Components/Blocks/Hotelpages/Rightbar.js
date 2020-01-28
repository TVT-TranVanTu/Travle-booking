import React, { Component } from "react";
export default class Rightbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <h1>Hello word</h1>
        <div className="place-name">
          <h1>Khách sạn tại Hà Nội</h1>
        </div>
        <div class="soft-search">
          <div class="sortBlock-left">
            <div class="collap-filter-nav">
              <ul class="filter-nav">
                <li class="first-sort">
                  <a>Sắp xếp theo được gợi ý</a>
                </li>
                <li class="">
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
          <div class="pull-right select-time-price">Giá 1 đêm</div>
        </div>
        <div className="prvItem">
            <div className="prv-last">
              <i class="fa fa-bolt"></i>
              <span>Khuyến mãi giờ chót</span>
            </div>
            <div className="prv-last-dropdow">
              <p>Giamr giá đặc biệt chỉ trong</p>
            </div>
            <div className="prv-last-dropdow">
              <p>Test</p>
            </div>
        </div>
      </div>
    );
  }
}
