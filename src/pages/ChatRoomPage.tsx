import styled from "styled-components";
import Header from "../components/layout/Header";
import { Style } from "../styles/UI";
import { IconButton } from "@goorm-dev/vapor-core";
import { SendIcon } from "@goorm-dev/vapor-icons";
import ChatInfo from "../components/chat/ChatInfo";

export default function ChatRoomPage() {
    return (
        <>
            <Header prefix="backButton" title="채팅" />

            <Style.Container>
                {/* 게스트하우스 정보 */}
                <ChatInfo />
                <Style.Divider />
                {/* 채팅 내용 */}
            </Style.Container>

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

const ChatInfoItemWrapper = styled.div`
    width: 100%;
    height: 52.46px;
    display: flex;
    padding-bottom: 12px;
    justify-content: space-between;
    gap: 13px;
`;

const ProfileImage = styled.img`
    width: 52.46px;
    padding-top: 4px;
`;

const ProfileInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const EtcInfo = styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;
