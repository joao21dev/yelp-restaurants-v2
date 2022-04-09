import React from "react";
import styled from "styled-components";
import HomeNavbar from "../components/HomeNavbar";
import img from "../assets/background2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <HomeNavbar />
      <WelcomeWrapper>
        <WelcomeText>
          <Title>YelpRestaurants</Title>
          <DescrpWrapper>
            <Descrp> Seja bem vindo ao YelpRestaurants! </Descrp>
            <Descrp> Entre e descubra os melhores restaurantes. </Descrp>
            <Descrp>
              {" "}
              Sinta-se à vontade para compartilhar com a comunidade suas
              experiências!
            </Descrp>
          </DescrpWrapper>
          <BtnLink style={{ color: "#FFF" }} to="/restaurants">
            Explorar Restaurantes
          </BtnLink>
        </WelcomeText>
      </WelcomeWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-size: cover;
  background-position: center;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
`;
const WelcomeWrapper = styled.div``;
const WelcomeText = styled.div`
  text-align: center;
  margin-top: 23vh;
`;
const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 30px;
`;

const DescrpWrapper = styled.div`
  margin-bottom: 40px;
`;
const Descrp = styled.p`
  color: #dfdfdf;
  font-weight: 900;
  line-height: 10px;
  letter-spacing: 1px;
`;
const BtnLink = styled(Link)`
  justify-content: center;
  margin-top: 30px;
  color: white;
  background: #dc3545;
  border-radius: 5px;
  border: none;
  padding: 0.6rem;
  text-decoration: none;
`;

export default Home;
