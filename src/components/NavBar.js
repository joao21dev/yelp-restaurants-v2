import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <Logo>YelpRestaurantes</Logo>
      <Menu></Menu>
    </Nav>
  );
};

const Nav = styled.div``;
const Menu = styled.div``;
const Logo = styled.div`
  font-size: 28px;
`;
export default NavBar;
