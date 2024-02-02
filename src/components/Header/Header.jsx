import { ReactComponent as LoginIcon } from "../../images/logo.svg";
import { ReactComponent as Menu } from "../../images/menu.svg";
import { Container } from "../Container/Container";
import {
  StyledHeader,
  StyledHeaderWrap,
  StyledIconWrap,
  StyledMenuIconText,
} from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrap>
          <LoginIcon />
          <StyledIconWrap>
            <StyledMenuIconText>menu</StyledMenuIconText>
            <Menu />
          </StyledIconWrap>
        </StyledHeaderWrap>
      </Container>
    </StyledHeader>
  );
};
