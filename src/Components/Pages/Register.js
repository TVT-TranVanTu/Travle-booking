import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Label,
  Input,
  InputGroup,
  FormGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
function Register() {
  return (
    
        <Container className="form_ux">
          <Row>
            <Col className="mx-auto">
              <Card className="card-register">
                <h3 className="title mx-auto">Đăng ký</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <hr></hr>

                <Form className="register-form">
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="far fa-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nhập họ và tên" type="email" />
                  </InputGroup>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="far fa-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Tên tài khoản" type="email" />
                  </InputGroup>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-envelope"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Tài khoản Email" type="email" />
                  </InputGroup>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-key"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Mật khẩu" type="password" />
                  </InputGroup>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-key"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nhập lại mật khẩu" type="password" />
                  </InputGroup>
                  <FormGroup>
                    <Label for="exampleDate">Date of birth</Label>
                    <Input
                      type="date"
                      name="date"
                      id="exampleDate"
                      placeholder="date placeholder"
                    />
                  </FormGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Register
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
     
  );
}

export default Register;
