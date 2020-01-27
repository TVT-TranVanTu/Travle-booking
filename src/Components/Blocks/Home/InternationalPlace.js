import React, { Component } from 'react'
import { Container,Row,Col} from 'reactstrap';

export default class InternationalPlace extends Component {
    render() {
        return (
            <div className="InternationalPlace">
                <div className="form-title">
                    <h2 className="padding40">ĐIỂM ĐẾN QUẤC TẾ PHỔ BIẾN</h2><span>&nbsp;</span>
                </div>
                <Container>
                    <Row className="picture">
                        <Col sm="8" className="about-picture">
                            <Row className="childpicture">
                                <Col sm="12" className="about-picture">
                                    <img  alt="..." src={require("../../../assets/img/InternationalPlace/bangcoc.jpg")} /><br/>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="about-picture">
                                    <img  alt="..." src={require("../../../assets/img/InternationalPlace/seoul.png")} /><br/>
                                </Col>
                                <Col sm="6" className="about-picture">
                                    <img  alt="..." src={require("../../../assets/img/InternationalPlace/kuala_lumpur.jpg")} /><br/>
                                </Col>
                            </Row>
                            
                        </Col>
                        <Col sm="4" className="about-picture2">
                            <img  alt="..." src={require("../../../assets/img/InternationalPlace/singapore.jpg")} /><br/>
                        </Col>
                    </Row>
                   
                </Container>
            </div>
        )
    }
}
