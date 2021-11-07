import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../components/Button";
import React, { useState } from "react";
import styled from "styled-components";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBackgroundWrapper>
        <HeroBackground />
      </HeroBackgroundWrapper>
      <HeroContent>
        <HeroHeader>Virtual Banking Made Easy</HeroHeader>
        <HeroParagraph>
          Earn up to $500 when you open a chequing account! Plus, unlock your
          saving potential with an exclusive 3.25% interest rate for 1 year.
        </HeroParagraph>
        <HeroButtonWrapper onMouseEnter={onHover} onMouseLeave={onHover}>
          <Button
            to="sign-up"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  align-items: center;
  background: #0c0c0c;
  display: flex;
  height: 800px;
  justify-content: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 5;
  }
`;

const HeroBackgroundWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

const HeroBackground = styled.div`
  background-image: linear-gradient(#ff9d2f, #ff6126);
  height: 100%;
  position: absolute;
  top: -15%;
  transform: skewY(-5deg);
  width: 100%;
`;

const HeroContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 8px 24px;
  position: absolute;
  z-index: 5;
`;

const HeroHeader = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroParagraph = styled.p`
  color: #fff;
  font-size: 24px;
  margin-top: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const ArrowForward = styled(MdArrowForward)`
  font-size: 20px;
  margin-left: 8px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 20px;
  margin-left: 8px;
`;

export default Hero;
