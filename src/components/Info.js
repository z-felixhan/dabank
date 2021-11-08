import { Button } from "../components/Button";
import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Info = (props) => {
  const {
    id,
    buttonLabel,
    containerId,
    description,
    dark,
    darkText,
    even,
    headline,
    img,
    imgStart,
    last,
    lightBg,
    lightText,
    lightTextDesc,
    primary,
    to,
    topLine,
  } = props;

  return (
    <>
      <InfoContainer id={containerId} even={even} last={last} lightBg={lightBg}>
        <InfoWrapper even={even}>
          <InfoRow id={id} imgStart={imgStart}>
            <InfoColumnOne>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Header lightText={lightText}>{headline}</Header>
                <Subheader darkText={darkText}>{description}</Subheader>
                <ButtonWrapper>
                  <Button
                    to={
                      useWindowDimensions().innerWidth >= 768
                        ? to
                        : to + "-container"
                    }
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={useWindowDimensions().innerWidth >= 768 ? -80 : 0}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </ButtonWrapper>
              </TextWrapper>
            </InfoColumnOne>
            <InfoColumnTwo>
              <ImageWrapper>
                <Image src={img} imgStart={imgStart} />
              </ImageWrapper>
            </InfoColumnTwo>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

const InfoContainer = styled.div`
  background: ${({ last, lightBg }) => {
    if (last) {
      if (lightBg) {
        return "transparent";
      } else {
        return "#010606";
      }
    } else {
      if (lightBg) {
        return "linear-gradient(#ff9d2f, #ff6126)";
      } else {
        return "#010606";
      }
    }
  }};
  color: #fff;
  position: relative;
  transform: ${({ even }) => (even ? "skewY(-5deg)" : "skewY(5deg)")};
  z-index: 0;

  &::before {
    background: ${({ lightBg }) =>
      lightBg ? "linear-gradient(#ff9d2f, #ff6126)" : "#010606"};
    bottom: 0;
    content: "";
    height: 950px;
    left: 0;
    opacity: ${({ last }) => (last ? 1 : 0)};
    position: absolute;
    right: 0;
    top: 0;
    z-index: -10;
  }

  @media screen and (max-width: 768px) {
    padding: 100px 0;

    &::before {
      height: 1200px;
    }
  }
`;

const InfoWrapper = styled.div`
  align-items: center;
  display: grid;
  height: 860px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  padding: 0 24px;
  transform: ${({ even }) => (even ? "skewY(5deg)" : "skewY(-5deg)")};
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const InfoRow = styled.div`
  align-items: center;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  height: 75%;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    height: 100%;
  }
`;

const InfoColumnOne = styled.div`
  grid-area: col1;
  margin-bottom: 15px;
  padding: 0 15px;
`;

const InfoColumnTwo = styled.div`
  grid-area: col2;
  margin-bottom: 15px;
  padding: 0 15px;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 60px;
  padding-top: 0;
`;

const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  line-height: 16px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const Header = styled.h1`
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  font-size: 48px;
  font-weight: 600;
  line-height: 1.1.%;
  margin-bottom: 24px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subheader = styled.p`
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;
  max-width: 440px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ImageWrapper = styled.div`
  height: 100%;
  max-width: 555px;
`;

const Image = styled.img`
  margin: 0 0 10px 0;
  padding-right: 0;
  width: 100%;
  transform: ${({ imgStart }) => (imgStart ? "scaleX(-1)" : "scaleX(1)")};
`;

export default Info;
