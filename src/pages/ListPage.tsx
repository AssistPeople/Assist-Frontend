import ListItem from "../components/ListItem";
import styled from "styled-components";
import { Style } from "../styles/UI";
import Header from "../components/layout/Header";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import { useHouseStore } from "../store/usehousestore";

const categoryData: Record<string, { name: string; icon: string }> = {
    party: { name: "파티 게하", icon: "/assets/concept1.svg" },
    view: { name: "뷰 맛집 게하", icon: "/assets/concept2.svg" },
    social: { name: "인싸모임 게하", icon: "/assets/concept3.svg" },
    rest: { name: "휴식 게하", icon: "/assets/concept4.svg" },
    experience: { name: "체험형 게하", icon: "/assets/concept5.svg" },
};

const listData = [
    {
        id: 1,
        tags: ["활기찬", "힐링"],
        title: "결 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
        imageUrl: "/assets/sample5.png",
    },
    {
        id: 2,
        tags: ["활기찬", "설렘", "힐링"],
        title: "PADO 게스트하우스",
        description: "대규모 헌팅 파티 게스트 하우스",
        location: "애월",
        recruitment: "남여 각 1명씩",
        imageUrl: "/assets/sample4.png",
    },
    {
        id: 3,
        tags: ["감성"],
        title: "<오늘> 게스트하우스",
        description: "우리집 같은 편안함",
        location: "김녕 해수욕장",
        recruitment: "여자 1명 모집",
        imageUrl: "/assets/sample3.png",
    },
    {
        id: 4,
        tags: ["설렘", "활기찬"],
        title: "구름 게스트하우스",
        description: "설렘 가득한 구름 게스트 하우스!!!",
        location: "중문",
        recruitment: "여자 1명 모집",
        imageUrl: "/assets/sample2.png",
    },
    {
        id: 5,
        tags: ["편안한", "잔잔한"],
        title: "Coco 게스트하우스",
        description: "제주도에서 가장 조용한 게하",
        location: "제주시청",
        recruitment: "남자 1명 모집",
        imageUrl: "/assets/sample1.png",
    },
    {
        id: 6,
        tags: ["힐링", "편안한", "감성"],
        title: "하루 게스트하우스",
        description: "여성전용 힐링 게스트 하우스",
        location: "남원읍",
        recruitment: "여자 2명 모집",
        imageUrl: "/assets/sample5.png",
    },
];

const ListPage = () => {
    // const { house, setHouse } = useHouseStore();
    const { category } = useParams<{ category: string }>();

    useEffect(() => {
        document.body.classList.add("no-bottom-padding");

        return () => {
            document.body.classList.remove("no-bottom-padding");
        };
    }, []);

    const selectedCategory =
        category && categoryData[category] ? categoryData[category] : { name: "숙소 목록", icon: "" };

    return (
        <Style.Container width="332px" gap="14px">
            <Header
                prefix="backButton"
                title={
                    <TitleWrapper>
                        {selectedCategory.icon && (
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={selectedCategory.icon}
                                alt={selectedCategory.name}
                            />
                        )}
                        {selectedCategory.name}
                    </TitleWrapper>
                }
            />
            <ListContainer>
                {listData.map((item) => (
                    <ListItem
                        id={item.id}
                        key={item.id}
                        tags={item.tags}
                        title={item.title}
                        description={item.description}
                        location={item.location}
                        recruitment={item.recruitment}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </ListContainer>
        </Style.Container>
    );
};

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export default ListPage;
