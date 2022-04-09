import React from "react";
import styled from "styled-components";

const HomeNavbar = () => {
  return (
    <Nav>
      <Logo>YelpRestaurantes</Logo>
      <Menu>
        <HomeLink>Home</HomeLink>
        <MenuLink>Restaurantes</MenuLink>
        <MenuLink>Entrar</MenuLink>
        <MenuLink>Cadastre-se</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  padding: 0 2rem;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  color: #dc3545;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2rem 0;
`;
const Logo = styled.div`
  font-size: 28px;
`;
const Menu = styled.div`
  display: flex;
  opacity: 1;
  font-size: 16px;
`;

const HomeLink = styled.div`
  color: "#DC3545";
  border-bottom: 0.25rem solid white;
`;

const MenuLink = styled.div`
  font-weight: 700;
  color: #dc3545;
  margin-left: 1rem;
  border-bottom: 0.25rem solid transparent;
  &:hover {
    color: #dc3546b6;
    border-bottom-color: rgba(255, 255, 255, 0.5);

    cursor: pointer;
  }
`;

export default HomeNavbar;
