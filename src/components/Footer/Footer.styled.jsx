import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--background);
  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 100%;
  }
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px 32px 20px;
`;

export const StyledFooterWrap = styled.figure`
  border-top: 1px solid var(--accent-color);
  margin: 0;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFooterText = styled.figcaption`
  color: var(--main-color);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
`;
