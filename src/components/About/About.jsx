import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import {
  StyledAboutCardWrap,
  StyledAboutSection,
  StyledAboutText,
  StyledAboutTitle,
  StyledCardText,
  StyledCardTitle,
  StyledFourthAboutCardWrap,
  StyledSecondAboutCardWrap,
  StyledThirdAboutCardWrap,
} from "./About.styled";

export const About = () => {
  return (
    <StyledAboutSection id="about">
      <StyledAboutTitle>Kreatywny zespół dekoratorów</StyledAboutTitle>
      <StyledAboutText>
        Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
        dekoracji na imprezy i wydarzenia
      </StyledAboutText>
      <Swiper
        modules={[Pagination]}
        className="mySwiper"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <StyledAboutCardWrap>
            <StyledCardTitle>
              Kreatywne podejście i <br />
              dbałość o szczegóły
            </StyledCardTitle>
            <StyledCardText>
              Specjaliści zapewniają doradztwo i kreatywność przy wyborze
              dekoracji balonowych, z dbałością o szczegóły
            </StyledCardText>
          </StyledAboutCardWrap>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSecondAboutCardWrap>
            <StyledCardTitle>
              Materiały przyjazne <br />
              dla środowiska
            </StyledCardTitle>
            <StyledCardText>
              Wykorzystywane są materiały najwyższej jakości, w tym
              biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy
              ślad na środowisku.
            </StyledCardText>
          </StyledSecondAboutCardWrap>
        </SwiperSlide>
        <SwiperSlide>
          <StyledThirdAboutCardWrap>
            <StyledCardTitle>
              Szeroka gama kolorów <br />
              do personalizacji
            </StyledCardTitle>
            <StyledCardText>
              Balony i dekoracje są wybierane z szerokiej gamy kolorów, co
              pozwala spersonalizować wystrój na każdą okazję.
            </StyledCardText>
          </StyledThirdAboutCardWrap>
        </SwiperSlide>
        <SwiperSlide>
          <StyledFourthAboutCardWrap>
            <StyledCardTitle>
              Gwarancja dostawy <br />i montażu
            </StyledCardTitle>
            <StyledCardText>
              Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale
              także ich montaż, zapewniając klientom kompleksową obsługę.
            </StyledCardText>
          </StyledFourthAboutCardWrap>
        </SwiperSlide>
      </Swiper>
    </StyledAboutSection>
  );
};
