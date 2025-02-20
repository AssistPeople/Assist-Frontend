import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const concepts = [
    { id: "party", name: "파티", icon: "/assets/concept1.svg" },
    { id: "view", name: "뷰 맛집", icon: "/assets/concept2.svg" },
    { id: "social", name: "인싸모임", icon: "/assets/concept3.svg" },
    { id: "rest", name: "휴식", icon: "/assets/concept4.svg" },
    { id: "experience", name: "체험형", icon: "/assets/concept5.svg" },
];

const ConceptNav = () => {
    const navigate = useNavigate();

    const handleClick = (id: string) => {
        navigate(`/list/${id}`);
    };

    return (
        <NavContainer>
            {concepts.map((concept) => (
                <NavItem key={concept.id} onClick={() => handleClick(concept.id)}>
                    <IconWrapper>
                        <img src={concept.icon} alt={concept.name} />
                    </IconWrapper>
                    <ConceptText>{concept.name}</ConceptText>
                </NavItem>
            ))}
        </NavContainer>
    );
};

const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background: white;
    gap: 22px;
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    width: 47px;
    height: 74.53px;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 47px;
    height: 47px;
    border-radius: 50%;
    background: white;
    border: 1px solid var(--gray-200);
    overflow: hidden;
    margin-bottom: 6px;

    img {
        width: 30.14px;
        height: 30.14px;
    }
`;

const ConceptText = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-800);
    width: 56px;
`;

export default ConceptNav;
