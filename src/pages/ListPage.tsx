import ListItem from "../components/ListItem";
import styled from "styled-components";
import { Style } from "../styles/UI";
import Header from "../components/layout/Header";

const listData = [
    {
        id: 1,
        tags: ["안주맛집", "오션뷰"],
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
    },
    {
        id: 2,
        tags: ["안주맛집", "오션뷰"],
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
    },
    {
        id: 3,
        tags: ["안주맛집", "오션뷰"],
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
    },
    {
        id: 4,
        tags: ["안주맛집", "오션뷰"],
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        recruitment: "남자 2명 모집",
    },
];

const ListPage = () => {
    return (
        <Style.Container width="332px" gap="14px">
            <Header prefix="backButton" title="대규모 숙소" />
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

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export default ListPage;
