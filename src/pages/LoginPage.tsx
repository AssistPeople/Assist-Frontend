import { Button, Text, TextInput } from "@goorm-dev/vapor-core";
import styled from "styled-components";
import theme from "../styles/theme";

const LoginPage = () => {
    return (
        <Container>
            <LogoWrapper>
                <LogoImage src="/logo.svg" />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Text typography="heading6" style={{ color: "var(--orange-500)" }}>
                        제주도 숙박공간과
                    </Text>
                    <Text typography="heading6" style={{ color: "var(--orange-500)" }}>
                        스텝의 연결고리
                    </Text>
                </div>
            </LogoWrapper>

            <EnterInfo>
                <TextInput>
                    <TextInput.Label>아이디</TextInput.Label>
                    <TextInput.Field placeholder="아이디를 입력하세요." />
                </TextInput>
                <TextInput>
                    <TextInput.Label>비밀번호</TextInput.Label>
                    <TextInput.Field type="password" placeholder="비밀번호를 입력하세요." />
                </TextInput>

                <Button stretch style={{ color: "var(--orange-500)" }}>
                    <Text typography="heading6" style={{ color: "#fff" }}>
                        로그인
                    </Text>
                </Button>
            </EnterInfo>
        </Container>
    );
};

export default LoginPage;

const LogoWrapper = styled.div`
    width: 131px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 200px;
`;

const LogoImage = styled.img`
    width: 131px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 331px;
    height: calc(100vh - ${theme.size.headerHeight} - ${theme.size.navHeight});
    gap: 80px;
`;

const EnterInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
`;
