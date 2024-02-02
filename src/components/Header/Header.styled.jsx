import { styled } from "styled-components";

export const StyledMenuIconText = styled.p`
  color: var(--main-color);
  text-align: center;
  font-family: "Anzeigen Grotesk T";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 90%;
  letter-spacing: -0.24px;
  text-transform: uppercase;
`;

export const StyledHeader = styled.header`
  padding-top: 30px;
  padding-bottom: 30px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const StyledHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledIconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
