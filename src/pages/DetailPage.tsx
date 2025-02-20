import styled from "styled-components";
import MapComponent from "../components/MapComponent";
import Header from "../components/layout/Header";
import { Button, Text } from "@goorm-dev/vapor-core";
import { LocationIcon, GroupIcon } from "@goorm-dev/vapor-icons";
import { Style } from "../styles/UI";
import { useEffect, useState } from "react";
import { Popover } from "@goorm-dev/vapor-core";
import { CallIcon } from "@goorm-dev/vapor-icons";
import { AssignmentIcon } from "@goorm-dev/vapor-icons";
import { useParams } from "react-router-dom";
import TagComponent from "../components/TagComponent";

export default function DetailPage() {
    const { id } = useParams();
    const [isExpanded, setIsExpanded] = useState(false);
    console.log(id);

    const place = {
        tags: ["활기찬", "설렘"],
        title: "필릿 게스트하우스",
        description:
            "🔥 제주도 핫한 게스트하우스 스태프 모집! 🔥제주에서 제일 핫한 게스트하우스에서 같이 즐기면서 일할 스태프를 찾습니다!새로운 사람들과 어울리는 걸 좋아하고, 흥 많은 분들 환영!🎉🌟 모집 대상친화력 넘치는 인싸 기질 가진 분파티 & 헌팅 문화에 거부감 없는 분최소 1개월 이상 가능하신 분🌟 업무 내용체크인/체크아웃 & 손님 응대파티 진행 보조 (BBQ, 술게임, 미팅주선🔥)게스트들과 자연스럽게 어울리기",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
        latitude: 33.542123,
        longitude: 126.661234,
        imageUrl: "/assets/image1.png",
    };

    useEffect(() => {
        document.body.classList.add("no-bottom-padding");

        return () => {
            document.body.classList.remove("no-bottom-padding");
        };
    }, []);

    return (
        <Style.Container width="332px" gap="14px">
            <Header prefix="backButton" title="숙소 상세 정보" />
            <ImageContainer>
                <img src={place.imageUrl} alt={place.title} />
            </ImageContainer>
            <ContentWrapper>
                <TagsContainer>
                    {place.tags.map((tag, index) => (
                        <TagComponent key={index} tag={tag} />
                    ))}
                </TagsContainer>
                <TitleWrapper>
                    <Text as="h1" typography="heading3">
                        {place.title}
                    </Text>
                </TitleWrapper>
                <RecruitmentWrapper>
                    <GroupIcon style={{ width: "20px", color: "var(--orange-500)" }} />
                    <Text as="span" typography="body2">
                        {place.recruitment}
                    </Text>
                </RecruitmentWrapper>
                <Description>
                    <Text as="p" typography="body2">
                        {isExpanded ? place.description : `${place.description.slice(0, 60)}... `}
                        {!isExpanded && (
                            <button onClick={() => setIsExpanded(true)}>
                                <Text as="span" typography="body2" color="foreground-hint">
                                    더보기
                                </Text>
                            </button>
                        )}
                    </Text>
                </Description>
                <LocationWrapper>
                    <LocationIcon style={{ width: "20px", color: "var(--orange-500)" }} />
                    <Text as="span" typography="body2" style={{ color: "var(--gray-500)" }}>
                        {place.location}
                    </Text>
                </LocationWrapper>
                <MapComponent latitude={place.latitude} longitude={place.longitude} />
            </ContentWrapper>
            <ButtonBox>
                <TextContainer>
                    <Popover side="top" align="center">
                        <Popover.Trigger asChild>
                            <StyledButton size="xl" shape="fill" stretch color="secondary">
                                <CallIcon />
                                <Text typography="heading6" style={{ color: "var(--gray-950)" }}>
                                    전화문의
                                </Text>
                            </StyledButton>
                        </Popover.Trigger>
                        <Popover.Content style={{ zIndex: 9999 }}>
                            <button
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10,
                                    zIndex: 9999,
                                }}
                            >
                                010-1234-5678
                            </button>
                        </Popover.Content>
                    </Popover>
                </TextContainer>

                <TextContainer>
                    <StyledButton size="xl" shape="fill" stretch color="warning">
                        <AssignmentIcon />
                        <Text typography="heading6" style={{ color: "var(--gray-000)" }}>
                            지원하기
                        </Text>
                    </StyledButton>
                </TextContainer>
            </ButtonBox>
        </Style.Container>
    );
}

export const ImageContainer = styled.div`
    width: 100%;
    max-height: 300px;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 12px;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

const TagsContainer = styled.div`
    display: flex;
    gap: 6px;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RecruitmentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Description = styled.div`
    background: #f9f9f9;
    padding: 12px;
    border-radius: 8px;
`;

const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const ButtonBox = styled.div`
    width: 100%;
    max-width: 332px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-top: 12px;
`;

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 8px;
`;

const StyledButton = styled(Button)`
    width: 100%;
`;
