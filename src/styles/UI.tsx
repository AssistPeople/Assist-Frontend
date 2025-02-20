import styled from "styled-components";
import theme from "./theme";

// GDS에 존재하지 않는 스타일 컴포넌트 모음
type Style = {
    width?: string;
    height?: string;
    pointer?: boolean;
    border?: string;
    gap?: string;
};

export const Style = {
    TextArea: styled.textarea`
        width: 100%;
        height: 120px;
        font-size: 14px;
        color: #6c6e7e;
        border: 1px solid #e1e1e8;
        border-radius: 8px;
        padding: 8px 24px;
        font-size: 16px;
        transition: 0.3s;
        &:hover {
            border-color: black;
        }

        &:focus {
            border-color: #2a6ff3;
        }
    `,
    Container: styled.div<Style>`
        width: ${props => (props.width ? props.width : "100%")};
        height: ${props => (props.width ? props.height : "auto")};
        gap: ${props => props.gap};
        display: flex;
        flex-direction: column;
        margin-top: ${theme.size.headerHeight};
        overflow: auto;
    `,
    FloatBox: styled.div`
        width: 332px;
        display: flex;
        justify-content: space-between; // float button이 두개일 경우를 위함
        gap: 8px;
        position: fixed;
        bottom: 0;
        margin-bottom: 20px;
    `,
    Divider: styled.div`
        width: 331px;
        border: 0.5px solid #e8e8ee;
    `,
};
