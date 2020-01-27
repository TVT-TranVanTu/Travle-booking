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
export default class Searchhotel extends Component {
  render() {
    return (
        <div className="search-hotel">
              <Form className="formsearch pagehotel">
                <Row>
                  <Col sm="4">
                    <FormGroup>
                      <Input
                        placeholder="Nhập điểm đến ,khách sạn"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="2">
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
                    <Button color="info" type="button">
                      Search
                    </Button>
                  </Col>
                </Row>
              </Form>
              </div>
    );
  }
}
