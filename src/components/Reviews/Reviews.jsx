import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import { ReactComponent as UserTag } from "../../images/tag-user.svg";
import {
  StyledDeskCardWrap,
  StyledReviewSTitle,
  StyledReviewUserName,
  StyledRewiewText,
  StyledRewiewsCardWrap,
  StyledRewiewsSection,
} from "./Reviews.styled";

export const Reviews = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <StyledRewiewsSection id="reviews">
      <StyledReviewSTitle>Recenzje</StyledReviewSTitle>
      {isMobile && (
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
                dziękuję   
              </StyledRewiewText>
              <StyledReviewUserName>
                <UserTag />
                Katia Maksymiw
              </StyledReviewUserName>
            </StyledRewiewsCardWrap>
          </SwiperSlide>
        </Swiper>
      )}
      {isTablet && (
        <Swiper
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
          navigation={true}
          scrollbar={{ draggable: true }}
          slidesPerView={2}
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
                dziękuję   
              </StyledRewiewText>
              <StyledReviewUserName>
                <UserTag />
                Katia Maksymiw
              </StyledReviewUserName>
            </StyledRewiewsCardWrap>
          </SwiperSlide>
        </Swiper>
      )}
      {isDesktop && (
        <StyledDeskCardWrap>
          <StyledRewiewsCardWrap>
            <StyledRewiewText>
              Baaardzo super ścianka  , dziękuję za współpracę 🫶 
            </StyledRewiewText>
            <StyledReviewUserName>
              <UserTag />
              Anetta Ostalczyk 
            </StyledReviewUserName>
          </StyledRewiewsCardWrap>
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
          <StyledRewiewsCardWrap>
            <StyledRewiewText>
              Ścianka  była piękna , bardzo delikatna , Jeszcze raz bardzo
              dziękuję   
            </StyledRewiewText>
            <StyledReviewUserName>
              <UserTag />
              Katia Maksymiw
            </StyledReviewUserName>
          </StyledRewiewsCardWrap>
        </StyledDeskCardWrap>
      )}
    </StyledRewiewsSection>
  );
};
