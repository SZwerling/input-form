import React from 'react';
import { Navbar, Nav, Collapse, NavItem, NavLink, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText  } from 'reactstrap'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
  <Navbar
    fluid
    color="light"
    expand="md"
    light
  >
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
          <NavItem>
                <Link to="image">
                    <NavLink>IMAGES</NavLink>
                </Link>
          </NavItem>
          <NavItem>
                <Link to="cards">
                    <NavLink>CARDS</NavLink>
                </Link>
          </NavItem>
          <NavItem>
                <Link to="input">
                    <NavLink>INPUT</NavLink>
                </Link>
          </NavItem>
        
      </Nav>
      <NavbarText>
        FLASHCARDS
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
    )
}

export default Header;