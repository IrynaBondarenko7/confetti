import { useEffect, useState } from "react";
import { ReactComponent as LoginIcon } from "../../images/logo.svg";
import { ReactComponent as Menu } from "../../images/menu.svg";
import {
  StyledHeader,
  StyledHeaderWrap,
  StyledMenuButton,
  StyledMenuIconText,
} from "./Header.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onMenuBtnClick = () => {
    setIsVisible(!isVisible);
  };

  const openMenu = () => {
    document.body.classList.add("menu-open");
    onMenuBtnClick();
  };

  // Видаліть клас при закритті бургер меню
  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    onMenuBtnClick();
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollThreshold = 100;

    setIsScrolled(scrollTop > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeader>
      <StyledHeaderWrap
        style={{
          justifyContent: isScrolled ? "end" : "space-between",
        }}
      >
        <LoginIcon
          style={{
            display: isScrolled ? "none" : "block",
          }}
        />
        <StyledMenuButton onClick={openMenu}>
          <StyledMenuIconText
            style={{
              display: isScrolled ? "none" : "block",
            }}
          >
            menu
          </StyledMenuIconText>
          <Menu />
        </StyledMenuButton>
      </StyledHeaderWrap>
      {isVisible && <BurgerMenu closeMenu={closeMenu} />}
    </StyledHeader>
  );
};
