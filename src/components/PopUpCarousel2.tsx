import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Text } from "@goorm-dev/vapor-core";

const slides = [
    {
        id: 1,
        title: "잉 게스트하우스",
        subtitle: "아름다운\n자연속에서 힐링",
        name: "잉 게스트하우스",
        image: "/assets/sample5.png",
        link: "/detail/5",
    },
    {
        id: 2,
        title: "도피 게스트하우스",
        subtitle: "파워 E들의\n시끌벅적\n도파민 충전",
        name: "도피 게스트하우스",
        image: "/assets/sample4.png",
        link: "/detail/4",
    },
    {
        id: 3,
        title: "<3 게스트하우스",
        subtitle: "나홀로 조용히 여유롭게\n힐링하기",
        name: "<3 게스트하우스",
        image: "/assets/sample3.png",
        link: "/detail/3",
    },
    {
        id: 4,
        title: "DO 게스트하우스",
        subtitle: "한 달 동안,\n제주가\n나의 집이 된다",
        name: "DO 게스트하우스",
        image: "/assets/sample2.png",
        link: "/detail/2",
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
                                    {slide.subtitle.split("\n").map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
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
