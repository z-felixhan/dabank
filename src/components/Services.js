import Icon from "../images/undraw_personal_website_re_c8dv.svg";
import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesHeader>Our Services</ServicesHeader>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon}></ServicesIcon>
          <Subheader>Savings</Subheader>
          <Description>Save a lot!</Description>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon}></ServicesIcon>
          <Subheader>Savings</Subheader>
          <Description>Save a lot!</Description>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon}></ServicesIcon>
          <Subheader>Savings</Subheader>
          <Description>Save a lot!</Description>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  align-items: center;
  background: #010606;
  display: flex;
  flex-direction: column;
  height: 800px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

const ServicesWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const ServicesCard = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 340px;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

const ServicesIcon = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
`;

const ServicesHeader = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subheader = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export default Services;
