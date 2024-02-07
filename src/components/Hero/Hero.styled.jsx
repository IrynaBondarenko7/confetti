import { styled } from "styled-components";
import herobg from "../../images/hero/hero-mb-bg.png";
import heroBG from "../../images/hero/hero-bg-1.png";
import yelloyRmbBg from "../../images/hero/hero-yelloy-mb-rt-bg.png";
import yelloyLmbBg from "../../images/hero/hero-yelloy-mb-lt-bg.png";
import yelloyTabRmbBg from "../../images/hero/herro-yellov-tab-rt-bg.png";
import yelloyTabLmbBg from "../../images/hero/herro-yellov-tab-lt-bg.png";

export const StyledHeroSection = styled.section`
  background-image: url(${herobg}), url(${yelloyRmbBg}), url(${yelloyLmbBg});
  background-repeat: no-repeat;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 212px;
  padding-bottom: 234px;
  z-index: -2;
  background-position: top 0 right 30px, top 272px right 0, top 60px left 0;
  overflow-x: hidden;
  overflow-y: hidden;
  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-top: 247px;
    padding-bottom: 327px;
    background-image: url(${heroBG}), url(${yelloyTabRmbBg}),
      url(${yelloyTabLmbBg});
    background-position: top 0 right 0, top 30px right 0, top 12px left 0;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    background-position: top 0 right -170px, top 178px right 0,
      top 97px left 10px;
    padding-top: 344px;
    padding-bottom: 342px;
  }
`;
export const StyledFirstBallonsImg = styled.img`
  position: absolute;
  top: 56px;
  left: 0;
  z-index: -1;
`;
export const StyledFirstTabBallonsImg = styled.img`
  position: absolute;
  top: 97px;
  left: 0;
  z-index: -1;
`;

export const StyledSecondBallonsImg = styled.img`
  position: absolute;
  top: 272px;
  right: 0;
  z-index: -1;
`;
export const StyledSecondTabBallonsImg = styled.img`
  position: absolute;
  top: 339px;
  right: 0;
  z-index: -1;
`;

export const StyledFirstBallonsDeskImg = styled.img`
  position: absolute;
  top: 195px;
  left: 0;
  z-index: -1;
`;
export const StyledSecondBallonsDeskImg = styled.img`
  position: absolute;
  top: 415px;
  right: -20px;
  z-index: -1;
`;

export const StyledHeroTitle = styled.h1`
  color: var(--accent-color);
  text-align: center;
  font-family: "Anzeigen Grotesk T";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
  text-transform: uppercase;
  span {
    color: var(--main-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 88px;
  }
`;
