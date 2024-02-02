import { styled } from "styled-components";
import herobg from "../../images/hero/hero-mb-bg.png";

export const StyledHeroSection = styled.section`
  background-image: url(${herobg});
  background-repeat: no-repeat;
  position: relative;
`;

export const StyledFirstBallonsImg = styled.img`
  position: absolute;
  top: 56px;
  left: 0;
  z-index: -1;
`;

export const StyledSecondBallonsImg = styled.img`
  position: absolute;
  top: 272px;
  right: 0;
  z-index: -1;
`;

export const StyledHeroWrap = styled.div`
  padding-top: 212px;
  padding-bottom: 234px;
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
`;
