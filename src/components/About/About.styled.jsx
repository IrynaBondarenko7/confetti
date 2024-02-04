import { styled } from "styled-components";

export const StyledAboutCardWrap = styled.aside`
  background-color: var(--accent-color);
  width: 320px;
  height: 253px;
  margin: 0 auto 36px auto;
  display: block;
  border-radius: 24px;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 45px;
`;

export const StyledSecondAboutCardWrap = styled(StyledAboutCardWrap)`
  background-color: var(--main-color);
`;

export const StyledThirdAboutCardWrap = styled(StyledAboutCardWrap)`
  background-color: var(--card-bg);
`;

export const StyledFourthAboutCardWrap = styled(StyledAboutCardWrap)`
  background-color: var(--card-background);
`;

export const StyledCardTitle = styled.h3`
  color: var(--background);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.24px;
  text-transform: uppercase;
`;

export const StyledCardText = styled.p`
  color: var(--background);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 23.2px */
  letter-spacing: -0.16px;
`;

export const StyledAboutSection = styled.section`
  background-color: var(--background);
  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 100%;
  }
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledAboutTitle = styled.h2`
  color: var(--main-color);
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const StyledAboutText = styled.p`
  color: var(--extra-text-color);
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  letter-spacing: -0.2px;
  margin-bottom: 36px;
`;
