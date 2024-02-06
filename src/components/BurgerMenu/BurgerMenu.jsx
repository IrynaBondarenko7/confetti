import { ReactComponent as Close } from "../../images/close-square.svg";
import {
  StyledBurgerManu,
  StyledBurgerMenuLink,
  StyledBurgerMenuList,
  StyledIconsWrap,
  StyledLogoText,
  StyledMenuBtn,
} from "./BurgerMenu.styled";

export const BurgerMenu = ({ closeMenu }) => {
  return (
    <StyledBurgerManu>
      <StyledIconsWrap>
        <StyledLogoText>CONFETTI</StyledLogoText>
        <StyledMenuBtn type="button" onClick={closeMenu}>
          <Close />
        </StyledMenuBtn>
      </StyledIconsWrap>
      <StyledBurgerMenuList>
        <li>
          <StyledBurgerMenuLink href="#hero" onClick={closeMenu}>
            główna
          </StyledBurgerMenuLink>
        </li>
        <li>
          <StyledBurgerMenuLink href="#about" onClick={closeMenu}>
            O nas
          </StyledBurgerMenuLink>
        </li>
        <li>
          <StyledBurgerMenuLink href="#reviews" onClick={closeMenu}>
            Recenzje
          </StyledBurgerMenuLink>
        </li>
        <li>
          <StyledBurgerMenuLink href="#contacts" onClick={closeMenu}>
            Kontakty
          </StyledBurgerMenuLink>
        </li>
      </StyledBurgerMenuList>
    </StyledBurgerManu>
  );
};
