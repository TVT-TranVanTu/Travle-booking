import React from 'react'

//import classnames
import classnames from 'classnames';

//import library in reactStrap

import {Nav,NavItem,NavLink,NavbarBrand,Navbar,Container, Collapse} from 'reactstrap';
import { BrowserRouter as Router ,Link, Route,Switch ,Redirect} from 'react-router-dom';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';
import Home from '../Home/Home';
import Hotelpages from '../Hotelpages/Hotelpages';


//import library in react router dom


//import in 

function Header() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  }; 
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
});
    return(
        <Router>
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <div className="navbar-transparent">
                    <NavbarBrand data-placement="bottom"
                    tag={Link} exact={"true"} to="/"
                    >
                        Travle booking
                    </NavbarBrand>
                    <button
                    aria-expanded={navbarCollapse}
                    className={classnames("navbar-toggler navbar-toggler", {
                    toggled: navbarCollapse
                    })}
                    onClick={toggleNavbarCollapse}
                    >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse 
                className="justify-content-end"
                navbar
                isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/khachsan">
                                Khách sạn
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                Nhà hàng
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                            Đặt hướng dẫn viên
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                            Đặt sân thể thao
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                            MassageSPA
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/login">
                                 Đăng nhập
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/register">
                                 Đăng ký
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        <Switch>
            <Route path="/" exact={true} render={props => <Home {...props} />}></Route>
            <Route path="/khachsan" render={props => <Hotelpages {...props}></Hotelpages>}></Route>
            <Route path="/login" render={props => <Login {...props}/>}></Route>
            <Route path="/register" render={props => <Register {...props}/>}></Route>
            <Redirect to="/home" />
        </Switch>

        </Router>
    )
}
export default Header;