import React, { Component } from "react";

import {
  Button,
  FormGroup,
  Input,
  Row,
  Col,
  Form,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Planesearch extends Component {
  render() {
    return (
      <div>
        <Form className="formsearch">
          <Row>
            <Col sm="4">
              <p>Điểm khởi hành</p>
              <FormGroup>
                <Input placeholder="Nhập điểm đến ,khách sạn" type="text" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <p>Điểm đến</p>
              <FormGroup>
                <Input placeholder="Nhập điểm đến ,khách sạn" type="text" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <p>Số hành khách</p>
              <UncontrolledDropdown>
                <DropdownToggle className="dropdowntoggles" caret>Dropdown</DropdownToggle>
                <DropdownMenu  className="dropdownsearch">
                  <DropdownItem >4 Người lớn</DropdownItem>
                  <DropdownItem >0 Trẻ em</DropdownItem>
                  <DropdownItem>0 Trẻ sơ sinh</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <p>Khởi hành</p>
              <FormGroup>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                />
              </FormGroup>
            </Col>
            <Col sm="4">
              <p>Quay về</p>
              <FormGroup>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                />
              </FormGroup>
            </Col>
            <Col>
              <Button className="buttonplanesearch" color="info" type="button">
              <i className="fas fa-search"></i>
                Tìm kiếm
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
