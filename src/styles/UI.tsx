import styled from "styled-components";

// GDS에 존재하지 않는 스타일 컴포넌트 모음
type Style = {
    width?: string;
    height?: string;
    pointer?: boolean;
    border?: string;
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
};
