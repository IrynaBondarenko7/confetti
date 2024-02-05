import { styled } from "styled-components";
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,
} from "formik";

export const StyledContactsSection = styled.section`
  background-color: var(--background);
  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 100%;
  }
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 0 80px 0;
`;

export const StyledContavtsTitle = styled.h2`
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

export const StyledContactsText = styled.h3`
  color: var(--main-color);
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

export const StyledContacs = styled.a`
  color: var(--extra-text-color);
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: var(--accent-color);
  }
  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
  }
`;

export const StyledContactsEmail = styled(StyledContacs)`
  margin-bottom: 36px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  padding: 51px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--extra-accent-color);
`;

export const Field = styled(FormikField)`
  display: flex;
  width: 320px;
  padding: 20px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 9px;
  border: 1px solid var(--border-color);
  background: var(--background);
  color: ${(props) =>
    props.error ? "var(--accent-color)" : "var(--main-color)"};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  ::placeholder {
    flex: 1 0 0;
    color: #888;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.18px;
  }
  &:focus {
    outline: 1px solid var(--main-color);
  }
  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 100%;
  }
`;

export const StyledFormLabel = styled.label`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-bottom: 24px;
  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 100%;
  }
  span {
    flex: 1 0 0;
    color: var(--label-color);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.16px;
    padding-left: 24px;
  }
`;

export const StyledFormTextarea = styled(Field)`
  min-height: 128px;
`;

export const StyledSubmitButton = styled.button`
  display: flex;
  padding: 20px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  background-color: ${(props) =>
    props.disabled ? "var(--disabled-btn)" : "var(--accent-color)"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  color: #fff;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: uppercase;
  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 100%;
  }
`;
export const ErrorMessage = styled(FormikErrorMessage)`
  color: var(--accent-color);
  text-align: right;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
  padding-right: 24px;
`;
