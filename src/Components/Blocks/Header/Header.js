import React, { Component } from "react";

// import react-reponsive-modal
import Modal from "react-responsive-modal";

//import library in reactStrap

import {
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Navbar,
  Container,
  Collapse,
  Button
} from "reactstrap";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Home from "../Home/Home";
import Hotelpages from "../Hotelpages/Hotelpages";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sign: false,
      login: false
    };
  }

  onOpenModal = () => {
    this.setState({ sign: true });
  };

  onOpenModalLogin = () => {
    this.setState({ login: true });
  };

  onCloseModal = () => {
    this.setState({ sign: false });
  };

  onCloseModalclose = () => {
    this.setState({ login: false });
  };

  render() {
    const { login, sign } = this.state;
    return (
      <div>
        <Router>
          <Navbar>
            <Container className="header">
              <NavbarBrand
                data-placement="bottom"
                tag={Link}
                exact={"true"}
                to="/"
              >
                Travle booking
              </NavbarBrand>
              <Collapse aria-expanded="true" navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/khachsan">
                      Khách sạn
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Nhà hàng</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Đặt hướng dẫn viên</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Đặt sân thể thao</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>MassageSPA</NavLink>
                  </NavItem>
                </Nav>
                <Nav navbar>
                  <NavItem>
                    <NavLink id="login" onClick={this.onOpenModalLogin}>
                      Đăng nhập
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink id="signup" onClick={this.onOpenModal}>
                      Đăng ký
                    </NavLink>
                  </NavItem>
                  
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route
              path="/"
              exact={true}
              render={props => <Home {...props} />}
            ></Route>
            <Route
              path="/khachsan"
              render={props => <Hotelpages {...props}></Hotelpages>}
            ></Route>
            <Route path="/login" render={props => <Login {...props} />}></Route>
            <Route
              path="/register"
              render={props => <Register {...props} />}
            ></Route>
            <Redirect to="/home" />
          </Switch>
        </Router>

        <Modal open={sign} onClose={this.onCloseModal}>
          <div className="modal-body">
            <Register></Register>
          </div>
        </Modal>

        <Modal open={login} onClose={this.onCloseModalclose}>
          <div className="modal-body">
            <Login></Login>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Header;
