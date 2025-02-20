import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Header from "../components/layout/Header";
import { Style } from "../styles/UI";
import ChatInfo from "../components/chat/ChatInfo";
import { IconButton } from "@goorm-dev/vapor-core";
import { SendIcon } from "@goorm-dev/vapor-icons";

export default function ChatRoomPage() {
    const [messages, setMessages] = useState([
        { id: 1, sender: "user", content: "안녕하세요. 게스트하우스 스태프 문의 드립니다!", timestamp: new Date() },
        {
            id: 2,
            sender: "guest",
            content: "안녕하세요. 홍길동님 필립 게스트하우스 입니다. 이번주부터 가능하세요?",
            timestamp: new Date(),
        },
        { id: 3, sender: "user", content: "네!! 수요일부터 바로 출근가능합니다!", timestamp: new Date() },
        { id: 4, sender: "guest", content: "넵! 010-1234-5678 로 전화 한 번 부탁 드려요", timestamp: new Date() },
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() === "") return;
        const newMessage = { id: messages.length + 1, sender: "user", content: input, timestamp: new Date() };
        setMessages([...messages, newMessage]);
        setInput("");
    };

    // 마지막 메시지로 스크롤을 자동으로 이동하기 위한 ref
    const messagesEndRef = useRef(null);

    // 메시지 배열이 변경될 때마다 가장 마지막 메시지로 자동 스크롤
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            <Header prefix="backButton" title="채팅" />

            <Style.Container>
                {/* 게스트하우스 정보 */}
                <ChatInfo />
                <Style.Divider />
                {/* 채팅 내용 */}
                <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />
            </Style.Container>

            <Style.FloatBox>
                <SendMessageBoxWrapper>
                    <InputText
                        placeholder="메시지를 입력하세요."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && sendMessage()}
                    />
                    <IconButton color="background-normal" onClick={sendMessage}>
                        <SendIcon style={{ color: "var(--orange-500)" }} />
                    </IconButton>
                </SendMessageBoxWrapper>
            </Style.FloatBox>
        </>
    );
}

const formatTimestamp = timestamp => {
    const hours = timestamp.getHours().toString().padStart(2, "0");
    const minutes = timestamp.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
};

const SendMessageBoxWrapper = styled.div`
    width: 331px;
    height: 48px;
    padding: 12px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e1e1e8;
    border-radius: 8px;
    background-color: white;
`;

const InputText = styled.input`
    width: 260px;
`;

const MessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`;

const ChatMessages = ({ messages, messagesEndRef }) => {
    return (
        <MessagesWrapper>
            {messages.map(msg => (
                <MessageWrapper key={msg.id} sender={msg.sender}>
                    <MessageBubble sender={msg.sender}>{msg.content}</MessageBubble>
                    <Timestamp sender={msg.sender}>{formatTimestamp(msg.timestamp)}</Timestamp>
                </MessageWrapper>
            ))}
            {/* 가장 최근 메시지 위치 */}
            <div ref={messagesEndRef} />
        </MessagesWrapper>
    );
};

const MessageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    flex-direction: ${({ sender }) => (sender === "user" ? "row-reverse" : "row")}; /* 좌우 반전 */
`;

const MessageBubble = styled.div`
    max-width: 50%;
    padding: 10px 14px;
    font-size: small;
    font-weight: 500;
    background-color: ${({ sender }) => (sender === "user" ? "#FF8821" : "#F0F0F5")};
    color: ${({ sender }) => (sender === "user" ? "#fff" : "#000")};
    border-radius: ${({ sender }) => (sender === "user" ? "20px 20px 2px 20px" : "2px 20px 20px 20px")};
    margin: 10px 0;
`;

const Timestamp = styled.div`
    font-size: 12px;
    color: #888;
    margin-left: ${({ sender }) => (sender === "user" ? "0" : "8px")};
    margin-right: ${({ sender }) => (sender === "guest" ? "0" : "8px")};
    align-self: flex-end;
`;
