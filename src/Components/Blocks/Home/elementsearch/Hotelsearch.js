import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Input,
  Row,
  Col,
  Form
} from "reactstrap";
// react plugin used to create datetimepicker
//import ReactDatetime from "react-datetime";
export default class Hotelsearch extends Component {
  render() {
    return (
        <div>
              <Form className="formsearch">
                <Row>
                  <Col sm="4">
                    <p>Địa điểm hoặc tên khách sạn</p>
                    <FormGroup>
                      <Input
                        placeholder="Nhập điểm đến ,khách sạn"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="2">
                    <p>Nhận phòng</p>
                    <FormGroup>
                      <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="2">
                    <p>Trả phòng</p>
                    <FormGroup>
                      <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="2">
                    <p>Số người</p>
                    <FormGroup>
                      <Input type="select" name="select" id="exampleSelect">
                        <option value="1">One-person room</option>
                        <option value="2">Two-person room</option>
                        <option value="3">Family rooms</option>
                        <option value="4">Multiple rooms</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <Button className="buttonsearch" color="info" type="button">
                      Search
                    </Button>
                  </Col>
                </Row>
              </Form>
              </div>
    );
  }
}
