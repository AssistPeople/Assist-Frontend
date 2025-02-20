import { IconButton, Text } from "@goorm-dev/vapor-core";
import { StyleHeader, Title } from "./Header.styles.ts";
import { useNavigate } from "react-router-dom"; // navigate 함수 사용을 위해 import
import { DarkIcon } from "@goorm-dev/vapor-icons";
import { ChevronLeftOutlineIcon } from "@goorm-dev/vapor-icons";

interface Props {
    prefix?: "backButton" | "logo";
    title?: string; // 중앙 제목
    onclick?: () => void; // 뒤로가기 버튼 클릭 시 실행할 함수
}

export default function Header({ prefix, title, onclick }: Props) {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <StyleHeader>
            {prefix ? (
                prefix === "backButton" ? (
                    <>
                        <IconButton onClick={onclick || handleBackButtonClick} aria-label="submit" size="md">
                            <ChevronLeftOutlineIcon />
                        </IconButton>
                    </>
                ) : (
                    <DarkIcon />
                )
            ) : null}
            {title && (
                <Title>
                    <Text typography="heading5">{title}</Text>
                </Title>
            )}
        </StyleHeader>
    );
}
