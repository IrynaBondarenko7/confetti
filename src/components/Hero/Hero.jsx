import ballons1 from "../../images/hero/balloons-mb-1.png";
import ballons2 from "../../images/hero/balloons-mb-2.png";
import {
  StyledFirstBallonsImg,
  StyledHeroSection,
  StyledHeroTitle,
  StyledSecondBallonsImg,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <StyledHeroSection>
      <StyledFirstBallonsImg src={ballons1} alt="ballons" />
      <StyledHeroTitle>
        Tworzymy unikalne <br />i niepowtarzalne
        <br />
        <span>dekoracje balonowe</span>
        <br /> na imprezy
      </StyledHeroTitle>
      <StyledSecondBallonsImg src={ballons2} alt="ballons" />
    </StyledHeroSection>
  );
};
