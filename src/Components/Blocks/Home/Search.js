import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import { Container, Row, Col } from "reactstrap";
import Hotelsearch from "./elementsearch/Hotelsearch";
import Planesearch from "./elementsearch/Planesearch";
// react plugin used to create datetimepicker
//import ReactDatetime from "react-datetime";
export default class Search extends Component {
  render() {
    return (
      <Router>
        <div className="sectionsearch">
          <Container>
            <Row>
              <Col sm="12">
                <div className="datepicker">
                  <NavLink exact to="/" className="fas fa-globe-asia">
                    {" "}
                    Khách sạn
                  </NavLink>
                  <NavLink to="/plane" className="fas fa-plane-departure">
                    {" "}
                    Máy bay
                  </NavLink>
                </div>
                <Switch>
                  <Route path="/" exact={true} component={Hotelsearch}></Route>
                  <Route path="/plane" exact component={Planesearch}></Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}
