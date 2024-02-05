import {
  StyledFooter,
  StyledFooterText,
  StyledFooterWrap,
} from "./Footer.styled";
import { ReactComponent as LoginIcon } from "../../images/logo.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterWrap>
        <LoginIcon />
        <StyledFooterText>confetti © 2023</StyledFooterText>
      </StyledFooterWrap>
    </StyledFooter>
  );
};
