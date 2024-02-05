import { useEffect, useState } from "react";
import { ReactComponent as LoginIcon } from "../../images/logo.svg";
import { ReactComponent as Menu } from "../../images/menu.svg";
import {
  StyledHeader,
  StyledHeaderWrap,
  StyledMenuButton,
  StyledMenuIconText,
} from "./Header.styled";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <StyledMenuButton>
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
    </StyledHeader>
  );
};
