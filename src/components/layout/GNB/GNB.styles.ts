import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    width: 393px;
    height: 72px;
    padding: 10px 84px;
    position: fixed;
    background-color: white;
    bottom: 0;
    box-shadow: 0px -3px 10px -2px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px -3px 10px -2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px -3px 10px -2px rgba(0, 0, 0, 0.2);
    /* border: 1px solid red; */
`;

export const MenuItem = styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;

    span {
        font-weight: ${props => (props.isActive ? "semibold" : "normal")};
        color: ${props => (props.isActive ? "#FF8821" : "#CDCED6")};
        height: 20px;
        display: flex;
        justify-content: center;
    }
`;
