import { styled } from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 100%;
  }
  max-width: 1280px;
  margin: 0 auto;
`;

export const StyledHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
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
