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

const places = [
    {
        id: 1,
        tags: ["활기찬", "힐링"],
        title: "결 게스트하우스",
        description:
            "🔥 바다와 함께하는 힙한 게스트하우스! 🔥 함덕 해수욕장에서 가장 핫한 숙소! 새로운 사람들과 어울리기 좋아하는 분들 환영! 🌟 모집 대상: 친화력 넘치는 인싸 기질 가진 분, 파티 & 헌팅 문화에 거부감 없는 분, 최소 1개월 이상 가능하신 분 🌟 업무 내용: 체크인/체크아웃 & 손님 응대, 파티 진행 보조 (BBQ, 술게임, 미팅 주선🔥), 게스트들과 자연스럽게 어울리기",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
        latitude: 33.542123,
        longitude: 126.661234,
        imageUrl: "/assets/sample5.png",
    },
    {
        id: 2,
        tags: ["활기찬", "설렘", "힐링"],
        title: "PADO 게스트하우스",
        description:
            "🌊 대규모 헌팅 파티 게스트하우스! 🌊 낮에는 바다를 즐기고, 밤에는 파티로 스트레스 해소! 🎉 다양한 사람들이 모이는 최고의 교류의 장! 🌟 모집 대상: 적극적이고 사교적인 성격을 가진 분, 헌팅 & 파티 좋아하는 분, 최소 2주 이상 숙박 가능하신 분 🌟 업무 내용: 체크인/체크아웃 & 손님 응대, 파티 준비 및 진행 보조, 게스트들과 자연스럽게 어울리기",
        location: "애월",
        recruitment: "남여 각 1명씩",
        latitude: 33.466789,
        longitude: 126.328567,
        imageUrl: "/assets/sample4.png",
    },
    {
        id: 3,
        tags: ["감성"],
        title: "<오늘> 게스트하우스",
        description:
            "📸 감성적인 분위기의 소규모 게스트하우스! 📸 김녕 해수욕장 근처에서 아늑한 시간을 보낼 수 있는 곳. 조용한 분위기를 좋아하는 분들을 위한 최적의 숙소 🌿 모집 대상: 편안한 휴식을 원하는 분, 사진 촬영 & 감성 여행을 즐기는 분, 최소 1주 이상 숙박 가능 🌿 업무 내용: 체크인/체크아웃 & 손님 응대, 숙소 관리 보조, 게스트들과 감성적인 여행 이야기 나누기",
        location: "김녕 해수욕장",
        recruitment: "여자 1명 모집",
        latitude: 33.527412,
        longitude: 126.787654,
        imageUrl: "/assets/sample3.png",
    },
    {
        id: 4,
        tags: ["설렘", "활기찬"],
        title: "구름 게스트하우스",
        description:
            "🎊 설렘 가득한 인싸들의 성지! 🎊 다양한 이벤트와 만남이 이루어지는 게스트하우스! 혼자 와도 친구를 만들 수 있는 곳 💃 모집 대상: 활발하고 긍정적인 에너지를 가진 분, 사람들과 어울리기 좋아하는 분, 최소 3주 이상 숙박 가능 🎊 업무 내용: 체크인/체크아웃 & 손님 응대, 파티 & 액티비티 보조, 게스트들과 자연스럽게 어울리며 분위기 업 시키기",
        location: "중문",
        recruitment: "여자 1명 모집",
        latitude: 33.251234,
        longitude: 126.421987,
        imageUrl: "/assets/sample2.png",
    },
    {
        id: 5,
        tags: ["편안한", "잔잔한"],
        title: "Coco 게스트하우스",
        description:
            "🏡 제주에서 가장 조용한 게스트하우스! 🏡 바쁜 일상을 벗어나 평온한 자연 속에서 힐링하는 공간. 아늑한 분위기 속에서 편안한 숙박을 원하는 분들에게 추천! ☕ 모집 대상: 조용하고 차분한 분위기를 좋아하는 분, 독서 & 명상을 즐기는 분, 최소 1주 이상 숙박 가능 ☕ 업무 내용: 체크인/체크아웃 & 손님 응대, 숙소 관리 보조, 게스트들과 차 한잔하며 이야기 나누기",
        location: "제주시청",
        recruitment: "남자 1명 모집",
        latitude: 33.509765,
        longitude: 126.521875,
        imageUrl: "/assets/sample1.png",
    },
    {
        id: 6,
        tags: ["힐링", "편안한", "감성"],
        title: "하루 게스트하우스",
        description:
            "🌿 여성전용 힐링 게스트하우스 🌿 남원읍에서 가장 조용하고 자연 친화적인 공간. 건강한 라이프스타일과 요가를 함께 즐길 수 있는 숙소. 모집 대상: 자연 속에서 힐링하고 싶은 분, 요가 & 명상에 관심 있는 분, 최소 2주 이상 숙박 가능 🌿 업무 내용: 체크인/체크아웃 & 손님 응대, 숙소 관리 보조, 요가 & 힐링 프로그램 진행 보조",
        location: "남원읍",
        recruitment: "여자 2명 모집",
        latitude: 33.384214,
        longitude: 126.762398,
        imageUrl: "/assets/sample5.png",
    },
];

export default function DetailPage() {
    const { id } = useParams();
    const [isExpanded, setIsExpanded] = useState(false);

    const place = places.find((p) => p.id === Number(id));

    useEffect(() => {
        document.body.classList.add("no-bottom-padding");

        return () => {
            document.body.classList.remove("no-bottom-padding");
        };
    }, []);

    if (!place) {
        return (
            <Style.Container width="332px" gap="14px">
                <Header prefix="backButton" title="숙소 상세 정보" />
                <Text typography="body2">해당 숙소를 찾을 수 없습니다.</Text>
            </Style.Container>
        );
    }

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
                                    margin: "5px",
                                    padding: "5px",
                                }}
                            >
                                010-1234-5678
                            </button>
                        </Popover.Content>
                    </Popover>
                </TextContainer>

                <TextContainer>
                    <StyledButton
                        size="xl"
                        shape="fill"
                        stretch
                        color="warning"
                        onClick={() => {
                            console.log("지원완료");

                            alert("지원이 완료되었습니다!");
                        }}
                    >
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
