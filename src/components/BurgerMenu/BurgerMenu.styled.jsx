import { styled } from "styled-components";

export const StyledBurgerManu = styled.section`
  width: 100vw;
  height: 100vh;
  top: 0;
  position: fixed;
  background-color: var(--background);
  z-index: 10;
  padding: 32px 20px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const StyledBurgerMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-top: 62px;
`;

export const StyledIconsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledMenuBtn = styled.button`
  background: transparent;
  border: none;
  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export const StyledBurgerMenuLink = styled.a`
  color: var(--main-color);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const StyledLogoText = styled.p`
  color: var(--accent-color);
  font-family: "Anzeigen Grotesk T";
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  text-transform: uppercase;
`;
