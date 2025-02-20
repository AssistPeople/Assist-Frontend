import ListItem from "../components/ListItem";
import styled from "styled-components";
import { Style } from "../styles/UI";
import Header from "../components/layout/Header";
import { useParams } from "react-router-dom";
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
        tags: ["활기찬", "설렘"],
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
    },
    {
        id: 2,
        tags: ["설렘", "감성"],
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
    },
    {
        id: 3,
        tags: ["힐링", "감성"],
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
    },
    {
        id: 4,
        tags: ["잔잔한", "편안한"],
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
    },
    {
        id: 5,
        tags: ["감성", "힐링"],
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
    },
    {
        id: 6,
        tags: ["힐링", "감성"],
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
    },
];

const ListPage = () => {
    // const { house, setHouse } = useHouseStore();
    const { category } = useParams<{ category: string }>();

    const selectedCategory =
        category && categoryData[category] ? categoryData[category] : { name: "숙소 목록", icon: "" };

    return (
        <Style.Container width="332px" gap="14px">
            <Header
                prefix="backButton"
                title={
                    <TitleWrapper>
                        {selectedCategory.icon && <Icon src={selectedCategory.icon} alt={selectedCategory.name} />}
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

const Icon = styled.img`
    width: 20px;
    height: 20px;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export default ListPage;
