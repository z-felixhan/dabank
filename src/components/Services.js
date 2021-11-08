import ChequingIcon from "../images/undraw_wallet_aym5.svg";
import DebitCreditIcon from "../images/undraw_credit_card_re_blml.svg";
import React from "react";
import SavingsIcon from "../images/undraw_make_it_rain_iwk4.svg";
import styled from "styled-components";

const Services = () => {
  return (
    <ServicesContainer id="services-container">
      <ServicesWrapper id="services">
        <ServicesHeader>Our Services</ServicesHeader>
        <ServicesCardWrapper>
          <ServicesCard>
            <ServicesIcon src={ChequingIcon}></ServicesIcon>
            <Subheader>Chequing</Subheader>
            <Description>
              Whether you want a premium banking experience, just the basics or
              something in between, we’ve got you covered.
            </Description>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={DebitCreditIcon}></ServicesIcon>
            <Subheader>Debit & Credit</Subheader>
            <Description>
              Shop safely online and in person with your dabank card. It'll come
              in handy when you're at an ATM, but it can do so much more.
            </Description>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={SavingsIcon}></ServicesIcon>
            <Subheader>Savings</Subheader>
            <Description>
              No matter what’s on your savings to-do list, we’ve got an account
              to help get you there. Unlock your savings potential today!
            </Description>
          </ServicesCard>
        </ServicesCardWrapper>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  align-items: center;
  background: #010606;
  display: flex;
  flex-direction: column;
  height: 860px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 1300px;
    padding-top: 0;
  }
`;

const ServicesWrapper = styled.div`
  align-items: center;
  display: grid;
  height: 65%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  padding: 0 24px;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-bottom: 100px;
    padding-top: 100px;
  }
`;

const ServicesCardWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 50px;

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
  height: 125px;
  margin-bottom: 10px;
  width: 125px;
`;

const ServicesHeader = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;

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
