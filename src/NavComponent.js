import React, { useState } from "react";
import {
   Navbar,
   Nav,
   Collapse,
   NavItem,
   NavLink,
   NavbarToggler,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
   const [navToggle, setNavToggle] = useState(true);

   return (
      <div>
         <Navbar fluid color="light" expand="md" light>
            <NavbarToggler
               className="me-2"
               onClick={() => setNavToggle(!navToggle)}
            />
            <Collapse isOpen={navToggle} navbar>
               <Nav className="me-auto" navbar>
                  <NavItem>
                     <Link className="linko" to="cards">
                        <NavLink>CARDS</NavLink>
                     </Link>
                  </NavItem>
                  <NavItem>
                     <Link className="linko" to="input">
                        <NavLink>INPUT</NavLink>
                     </Link>
                  </NavItem>
                  <NavItem>
                     <Link className="linko" to="image">
                        <NavLink>IMAGES</NavLink>
                     </Link>
                  </NavItem>
               </Nav>
               <NavbarText>FLASHCARDS</NavbarText>
            </Collapse>
         </Navbar>
      </div>
   );
};

export default Header;
