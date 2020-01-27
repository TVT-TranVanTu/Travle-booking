import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap';
export default class Reason extends Component {
    render() {
        return (
            <div className="reason">
                <Container>
                    <Row>
                        <Col sm="4">
                            <img width="80px" alt="..." src={require("../../../assets/img/margin.png")} /><br/>
                            <h6>RẺ HƠN GIÁ RẺ NHẤT, NGẠI GÌ KHÔNG ĐẶT ?</h6> 
                            <p>Ở đâu giá rẻ hơn, <span className="orange">Thông báo ngay với travle-booking</span> để được mua giá rẻ hơn rẻ nhất
                             <a className="reason-show bestPrice-modal" data-tracking="HOME_CHEAPEST_PRICE">
                                 <i className="fa fa-angle-right"></i></a></p>
                        </Col>
                        <Col sm="4">
                            <img width="80px" alt="..." src={require("../../../assets/img/capitalization.png")} /><br/>
                            <h6>THANH TOÁN LINH HOẠT & AN TOÀN</h6>
                            <p>Chấp nhận mọi hình thức thanh toán, không cần thẻ tín dụng. Bảo mật tuyệt đối thông tin cá nhân.</p>
                        </Col>
                        <Col sm="4">
                            <img width="80px" alt="..." src={require("../../../assets/img/heart.png")} /><br/>
                            <h6>HỖ TRỢ 24/7</h6>
                            <p>Gọi ngay 0963 266 688 kể cả 2h sáng để được hỗ trợ.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
