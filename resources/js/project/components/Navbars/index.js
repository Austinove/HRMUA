import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Logo from "../../assets/img/logo/logo.jpg";

function TopNavbar() {
  const [navbarColor, setNavbarColor] = useState("");
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  onmouseenter = () => setDropdownOpen(true);
  onmouseleave = () => setDropdownOpen(false);
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("scroll-height");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      <Navbar className="dark" color-on-scroll="300" expand="lg">
        <Container></Container>
      </Navbar>
      <Navbar
        className={classnames("fixed-top px-4", navbarColor)}
        color-on-scroll="300"
        expand="lg">
        <Container className="custom-container">
          <div className="navbar-translate">
            <NavbarBrand
              className="custom-brand"
              data-placement="bottom"
              to="/admin/dashboard"
              tag={Link}>
              <img src={Logo} height="60px" alt="Logo" />
            </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse,
              })}
              onClick={toggleNavbarCollapse}>
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}>
            <Nav navbar className="custom-nav ml-auto">
              <NavItem>
                <NavLink className="text-white" to="/index" tag={Link}>
                  {" "}
                  Home{" "}
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown
                  onMouseEnter={onmouseenter}
                  onMouseLeave={onmouseleave}
                  isOpen={dropdownOpen}
                  toggle={toggle}>
                  <DropdownToggle
                    tag={NavLink}
                    className="navlink-dropdown"
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                    caret>
                    About
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/about" tag={Link}>
                      About HRMAU
                    </DropdownItem>
                    <DropdownItem to="/leadership" tag={Link}>
                      Leadership
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink to="/membership" tag={Link}>
                  {" "}
                  Membership{" "}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/news" tag={Link}>
                  Newsletter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/knowledge" tag={Link}>
                  {" "}
                  Knowledge Hub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/application" tag={Link}>
                  Login/Register
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
