import styled from "styled-components";
import Header from "../components/layout/Header";
import { Style } from "../styles/UI";
import { IconButton, Text } from "@goorm-dev/vapor-core";
import { SendIcon, LocationIcon } from "@goorm-dev/vapor-icons";

export default function ChatRoomPage() {
    return (
        <>
            <Header prefix="backButton" title="채팅" />

            <Style.Container>
                {/* 게스트하우스 정보 */}
                <ChatInfoItemWrapper>
                    <ProfileImage src="/profile.svg" alt="게스트하우스 프로필" />

                    <ProfileInfo>
                        <Text typography="heading6">필릿 게스트하우스</Text>

                        <Location>
                            <LocationIcon style={{ color: "var(--orange-500)" }} />
                            <Text typography="body3" style={{ color: "var(--gray-500)" }}>
                                함덕 해수욕장
                            </Text>
                        </Location>
                    </ProfileInfo>
                    <EtcInfo>
                        <Text typography="body4">열람함</Text>
                    </EtcInfo>
                </ChatInfoItemWrapper>
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
