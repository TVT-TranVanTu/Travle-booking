import React, {Component} from 'react';

class Topbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="dropdown">
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
            </div>
        );
    }
}

export default Topbar;