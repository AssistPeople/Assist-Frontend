import GNB from "../components/layout/GNB";
import { styled } from "styled-components";
import theme from "../styles/theme";
import { ImageContainer } from "./DetailPage";
import ConceptNav from "../components/ConceptNav";

const HomePage = () => {
    return (
        <>
            <HeaderContainer>
                <Logo src="/assets/logo.svg" alt="로고" />
                <ImageContainer style={{ width: 59.37, height: 18.51 }}>
                    <img src="/assets/logo_text.svg" alt="올래스텝" />
                </ImageContainer>
            </HeaderContainer>
            <ContentsContainer>
                <ConceptNav />
                <CustomTitle>
                    컨셉별 <OrangeText>인기</OrangeText> 게스트하우스
                </CustomTitle>
                {/* <Popup /> */}
                <CustomTitle>
                    놀멍 일하멍,
                    <br />
                    <OrangeText>제주도 떠나볼랜?</OrangeText> 🌴
                </CustomTitle>
                {/* <Banner /> */}
                <GNB />
            </ContentsContainer>
        </>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.size.headerHeight};
    gap: 4px;
    margin-bottom: 28px;
`;

const Logo = styled.img`
    width: 33.16px;
    height: 29.32px;
`;

const ContentsContainer = styled.div`
    width: 332px
    gap: 14px   
    height: ;
    display: flex;
    flex-direction: column;
    overflow: auto;
    gap: 28px;
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
