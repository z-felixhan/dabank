import { Button } from "../components/Button";
import React from "react";
import styled from "styled-components";

const Info = (props) => {
  const {
    id,
    buttonLabel,
    description,
    dark,
    darkText,
    headline,
    img,
    imgStart,
    lightBg,
    lightText,
    lightTextDesc,
    primary,
    topLine,
  } = props;
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <InfoColumnOne>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Header lightText={lightText}>{headline}</Header>
                <Subheader darkText={darkText}>{description}</Subheader>
                <ButtonWrapper>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
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
                <Image src={img} />
              </ImageWrapper>
            </InfoColumnTwo>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  height: 860px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  padding: 0 24px;
  width: 100%;
  z-index: 1;
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const InfoColumnOne = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const InfoColumnTwo = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
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
`;

export default Info;
