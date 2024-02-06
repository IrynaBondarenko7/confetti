import { styled } from "styled-components";

export const StyledRewiewsSection = styled.section`
  background-color: var(--background);

  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 20px;

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

export const StyledReviewSTitle = styled.h2`
  color: var(--accent-color);
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 39.6px */
  letter-spacing: -0.36px;
  text-transform: uppercase;
  margin-bottom: 36px;
`;

export const StyledRewiewsCardWrap = styled.aside`
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
  gap: 42px;
  background: var(--extra-accent-color);
  @media screen and (min-width: 768px) {
    width: 346px;
    justify-content: space-between;
  }
`;

export const StyledRewiewText = styled.p`
  color: var(--main-color);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 23.4px */
  letter-spacing: -0.18px;
`;

export const StyledReviewUserName = styled.p`
  color: var(--extra-text-color);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;
  svg {
    width: 24px;
    height: 24px;
  }
`;
