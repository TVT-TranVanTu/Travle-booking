import React, {Component} from 'react';

class Topbar extends Component {
    render() {
        return (
            <div className="topbar">
                <div className="phone_number">
                    <a>
                        <i className="fas fa-phone-alt"></i>0396998025
                    </a>
                </div>
                <div className="topbar_dropdown">
                    <button className="dropbtn">VNĐ
                        <i className="fa fa-angle-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <div className="arrow"></div>
                        <div className="txt">Currency</div>
                        <a href="#"><span>VND</span>Việt Nam Đồng</a>
                        <a href="#"><span>USD</span>US Dollar</a>
                    </div>
                </div>
                <div className="topbar_dropdown">
                    <button className="dropbtn">
                    <img
                    alt="..."
                    src={require("../../../assets/img/flags/VN.png")}
                  />
                        Tiếng Việt
                        <i className="fa fa-angle-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <div className="arrow"></div>
                        <div className="txt">Currency</div>
                        <a href="#"><span>VND</span>Tiếng Việt</a>
                        <a href="#"><span>USD</span>English</a>
                    </div>
                </div>
                <div className="user">
                    <a>
                    <i className="fas fa-user-circle"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Topbar;