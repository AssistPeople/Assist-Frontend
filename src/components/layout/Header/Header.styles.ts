import styled from "styled-components";
import theme from "../../../styles/theme";

export const StyleHeader = styled.header`
    position: fixed;
    top: 0;
    z-index: ${theme.zIndex.header};
    width: 100%; /* 전체 너비를 차지 */
    height: ${theme.size.headerHeight};
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* 최대 너비와 중앙 정렬 */
    max-width: ${theme.size.maxWidth};
    min-width: ${theme.size.minWidth};
    left: 50%;
    transform: translateX(-50%);
    padding: 30px;
`;

export const Title = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
    color: black;
    white-space: nowrap;
    text-align: center;
`;
