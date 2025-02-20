import styled from "styled-components";
import Header from "../components/layout/Header";
import { Style } from "../styles/UI";
import { IconButton } from "@goorm-dev/vapor-core";
import { SendIcon } from "@goorm-dev/vapor-icons";
// import { IconButton, SendIcon } from "@goorm-dev/vapor-core";

export default function ChatRoomPage() {
    return (
        <>
            <Header prefix="backButton" title="채팅" />

            <Style.Container>ddd</Style.Container>

            <Style.FloatBox>
                <SendMessageBoxWrapper>
                    <InputText placeholder="메시지를 입력하세요." />
                    <IconButton color="background-normal">
                        <SendIcon style={{ color: "var(--orange-500)" }} />
                    </IconButton>
                </SendMessageBoxWrapper>
            </Style.FloatBox>
        </>
    );
}

const SendMessageBoxWrapper = styled.div`
    width: 331px;
    height: 48px;
    padding: 12px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e1e1e8;
    border-radius: 8px;
`;

const InputText = styled.input`
    width: 260px;
`;
