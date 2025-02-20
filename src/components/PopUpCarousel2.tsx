import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Text } from "@goorm-dev/vapor-core";

const slides = [
    {
        id: 1,
        title: "아름다운 경관",
        subtitle: "뷰 맛집 게스트하우스",
        name: "hey 게스트 하우스",
        image: "/assets/sample1.png",
        link: "/detail/1",
    },
    {
        id: 2,
        title: "힐링 스팟",
        subtitle: "조용한 감성숙소",
        name: "소소한 제주",
        image: "/assets/sample2.png",
        link: "/detail/2",
    },
    {
        id: 3,
        title: "파티 분위기",
        subtitle: "핫한 게스트하우스",
        name: "올나잇 제주",
        image: "/assets/sample3.png",
        link: "/detail/3",
    },
];

const PopupCarousel2 = () => {
    const navigate = useNavigate();

    return (
        <CarouselContainer>
            <Swiper modules={[FreeMode]} spaceBetween={10} slidesPerView={"auto"} freeMode={true}>
                {slides.map((slide) => (
                    <SwiperSlideStyled key={slide.id} onClick={() => navigate(slide.link)}>
                        <Slide>
                            <img src={slide.image} alt={slide.title} />
                            <Overlay>
                                <Text typography="body2" style={{ color: "var(--gray-000)" }}>
                                    {slide.title}
                                </Text>
                                <Text typography="heading5" style={{ color: "var(--gray-000)" }}>
                                    {slide.subtitle}
                                </Text>
                            </Overlay>
                            <PlusOverlay>
                                <Text typography="body2" style={{ color: "var(--gray-000)" }}>
                                    더보기
                                </Text>
                            </PlusOverlay>
                        </Slide>
                    </SwiperSlideStyled>
                ))}
            </Swiper>
        </CarouselContainer>
    );
};

const CarouselContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;

const SwiperSlideStyled = styled(SwiperSlide)`
    width: 147px !important;
`;

const Slide = styled.div`
    position: relative;
    cursor: pointer;
    width: 147px;
    img {
        width: 100%;
        height: 175px;
        border-radius: 8px;
        object-fit: cover;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 6px;
    left: 6px;
    color: white;
    padding: 12px;
    border-radius: 8px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const PlusOverlay = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    color: white;
`;

export default PopupCarousel2;
