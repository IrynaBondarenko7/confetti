import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import { ReactComponent as UserTag } from "../../images/tag-user.svg";
import {
  StyledReviewSTitle,
  StyledReviewUserName,
  StyledRewiewText,
  StyledRewiewsCardWrap,
  StyledRewiewsSection,
} from "./Reviews.styled";

export const Reviews = () => {
  return (
    <StyledRewiewsSection id="reviews">
      <StyledReviewSTitle>Recenzje</StyledReviewSTitle>
      <Swiper
        modules={[Pagination]}
        className="mySwiper"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <StyledRewiewsCardWrap>
            <StyledRewiewText>
              Jeszcze raz wielkie dzięki! Ciężko nam było foty robić jak
              ustawili te stoły 🥰 ale sam klimat i dekoracja robiła meegaaa
              wrażenie! 
            </StyledRewiewText>
            <StyledReviewUserName>
              <UserTag />
              Aleksandra Murawska
            </StyledReviewUserName>
          </StyledRewiewsCardWrap>
        </SwiperSlide>
        <SwiperSlide>
          <StyledRewiewsCardWrap>
            <StyledRewiewText>
              Baaardzo super ścianka  , dziękuję za współpracę 🫶 
            </StyledRewiewText>
            <StyledReviewUserName>
              <UserTag />
              Anetta Ostalczyk 
            </StyledReviewUserName>
          </StyledRewiewsCardWrap>
        </SwiperSlide>
        <SwiperSlide>
          <StyledRewiewsCardWrap>
            <StyledRewiewText>
              Ścianka  była piękna , bardzo delikatna , Jeszcze raz bardzo
              dziękuję  ) 
            </StyledRewiewText>
            <StyledReviewUserName>
              <UserTag />
              Katia Maksymiw
            </StyledReviewUserName>
          </StyledRewiewsCardWrap>
        </SwiperSlide>
      </Swiper>
    </StyledRewiewsSection>
  );
};
