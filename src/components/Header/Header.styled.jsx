import { styled } from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;

export const StyledHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  margin: 0 auto;
  max-width: 1280px;
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 31px 30px;
  }
`;

export const StyledMenuButton = styled.button`
  color: var(--main-color);
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: var(--accent-color);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  svg {
    stroke: currentColor;
    fill: currentColor;
  }
`;

export const StyledMenuIconText = styled.p`
  color: currentColor;
  text-align: center;
  font-family: "Anzeigen Grotesk T";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 90%;
  letter-spacing: -0.24px;
  text-transform: uppercase;
`;
