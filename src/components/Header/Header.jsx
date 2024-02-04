import { ReactComponent as LoginIcon } from "../../images/logo.svg";
import { ReactComponent as Menu } from "../../images/menu.svg";
import {
  StyledHeader,
  StyledHeaderWrap,
  StyledMenuButton,
  StyledMenuIconText,
} from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrap>
        <LoginIcon />
        <StyledMenuButton>
          <StyledMenuIconText>menu</StyledMenuIconText>
          <Menu />
        </StyledMenuButton>
      </StyledHeaderWrap>
    </StyledHeader>
  );
};
