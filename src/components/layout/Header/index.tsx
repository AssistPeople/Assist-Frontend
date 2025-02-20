import { IconButton, Text } from "@goorm-dev/vapor-core";
import { StyleHeader, Title } from "./Header.styles.ts";
import { useNavigate } from "react-router-dom"; // navigate 함수 사용을 위해 import
import { DarkIcon } from "@goorm-dev/vapor-icons";
import { ChevronLeftOutlineIcon } from "@goorm-dev/vapor-icons";
import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
    prefix?: "backButton" | "logo";
    title?: string | ReactNode;
    onclick?: () => void; // 뒤로가기 버튼 클릭 시 실행할 함수
    rightComponent?: React.ReactNode;
}

export default function Header({ prefix, title, onclick, rightComponent }: Props) {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <StyleHeader>
            {prefix ? (
                prefix === "backButton" ? (
                    <IconButton
                        onClick={onclick || handleBackButtonClick}
                        aria-label="submit"
                        size="md"
                        color="secondary"
                        shape="outline"
                    >
                        <ChevronLeftOutlineIcon />
                    </IconButton>
                ) : (
                    <DarkIcon />
                )
            ) : null}

            {title && <Title>{typeof title === "string" ? <Text typography="heading5">{title}</Text> : title}</Title>}
            {rightComponent && <RightContent>{rightComponent}</RightContent>}
        </StyleHeader>
    );
}

const RightContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
`;
