import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../components/Button";
import React, { useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";

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
            to={
              useWindowDimensions().innerWidth >= 768
                ? "discover"
                : "discover-container"
            }
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={useWindowDimensions().innerWidth >= 768 ? -80 : 0}
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
  background: #010606;
  display: flex;
  height: 800px;
  justify-content: center;
  padding: 0 30px;
  position: relative;
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
  top: -10%;
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
  max-width: 600px;
  text-align: center;

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
