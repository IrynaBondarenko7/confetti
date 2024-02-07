import { useMediaQuery } from "react-responsive";
import ballons1 from "../../images/hero/balloons-mb-1.png";
import ballons2 from "../../images/hero/balloons-mb-2.png";
import ballons3 from "../../images/hero/ballons-tab-1.png";
import ballons4 from "../../images/hero/ballons-tab-2.png";
import ballons5 from "../../images/hero/balloons-1.png";
import ballons6 from "../../images/hero/balloons-2.png";
import {
  StyledHeroSection,
  StyledHeroTitle,
  StyledFirstBallonsImg,
  StyledSecondBallonsImg,
  StyledFirstTabBallonsImg,
  StyledSecondTabBallonsImg,
  StyledSecondBallonsDeskImg,
  StyledFirstBallonsDeskImg,
} from "./Hero.styled";

export const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <StyledHeroSection id="hero">
      {isMobile && <StyledFirstBallonsImg src={ballons1} alt="ballons" />}
      {isTablet && <StyledFirstTabBallonsImg src={ballons3} alt="ballons" />}

      {isDesktop && <StyledFirstBallonsDeskImg src={ballons5} alt="ballons" />}
      <StyledHeroTitle>
        Tworzymy unikalne <br />i niepowtarzalne
        <br />
        <span>dekoracje balonowe</span>
        <br /> na imprezy
      </StyledHeroTitle>
      {isMobile && <StyledSecondBallonsImg src={ballons2} alt="ballons" />}
      {isTablet && <StyledSecondTabBallonsImg src={ballons4} alt="ballons" />}
      {isDesktop && <StyledSecondBallonsDeskImg src={ballons6} alt="ballons" />}
    </StyledHeroSection>
  );
};
