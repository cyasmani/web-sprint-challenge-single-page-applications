import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import "../styles/homepage.css"
import pizzaplanetname from "../images/pizzaplanetname.jpg"
import {Route, Link, Switch} from 'react-router-dom'
import Pizzaform from './Pizzaform'


function MainNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/"><img src={pizzaplanetname} className="pizzaplanetname"></img></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem >
                    <Link class="Navitem" to="/">Homepage</Link>
                    </NavItem>
                    <NavItem>
                    <Link to="/pizza">Order Now</Link>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            
        </div>
    )
}

export default MainNavbar