import { styled } from "styled-components";
import theme from "../styles/theme";
import ConceptNav from "../components/ConceptNav";
import PopupCarousel from "../components/PopUpCarousel";
import PopupCarousel2 from "../components/PopUpCarousel2";
import GNB from "../components/layout/GNB";

const HomePage = () => {
    return (
        <>
            <HeaderContainer>
                <Logo src="/assets/logo.svg" alt="로고" />
                <ImageContainer style={{ width: 59, height: 18 }}>
                    <img src="/assets/logo_text.svg" alt="올래스텝" />
                </ImageContainer>
            </HeaderContainer>
            <ContentsContainer>
                <ConceptNav />

                <PopupCarouselWrapper>
                    <CustomTitle>
                        컨셉별 <OrangeText>인기</OrangeText> 게스트하우스
                    </CustomTitle>
                    <PopupCarousel />
                </PopupCarouselWrapper>

                <PopupCarouselWrapper>
                    <CustomTitle>
                        <OrangeText>취향저격</OrangeText> 게스트하우스 🌴
                    </CustomTitle>
                    <PopupCarousel2 />
                </PopupCarouselWrapper>

                <GNB />
            </ContentsContainer>
        </>
    );
};

const PopupCarouselWrapper = styled.div`
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.size.headerHeight};
    gap: 4px;
    margin-bottom: 8px;
`;

const ImageContainer = styled.div`
    width: 100%;
    max-height: 300px;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const Logo = styled.img`
    width: 33.16px;
    height: 29.32px;
`;

const ContentsContainer = styled.div`
    display: flex;
    width: 332px;
    gap: 24px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const CustomTitle = styled.span`
    color: var(--black, #1c1c1c);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
`;

const OrangeText = styled.span`
    color: var(--orange-500, #ff7a00);
`;

export default HomePage;
