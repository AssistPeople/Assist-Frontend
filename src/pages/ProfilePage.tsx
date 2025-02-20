import { Button, Text } from "@goorm-dev/vapor-core";
import GNB from "../components/layout/GNB";
import Header from "../components/layout/Header";
import ProfileForm from "../components/profile/ProfileForm";
import { Style } from "../styles/UI";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ProfilePage() {
    const [formData, setFormData] = useState({
        nickname: "",
        mbti: "",
        introduction: "",
        motivation: "",
        appeal: "",
    });

    useEffect(() => {
        async function fetchProfile() {
            const userData = await getUserProfile(); // 유저 데이터 불러오기
            setFormData(userData);
        }
        fetchProfile();
    }, []);

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        console.log("저장 버튼 클릭됨:", formData);
        // 저장 로직 추가 (예: API 호출)
    };

    return (
        <>
            <Header
                title="내 정보"
                rightComponent={
                    <Button color="background-normal" onClick={handleSave}>
                        <Text typography="subtitle1" style={{ color: "gray" }}>
                            저장
                        </Text>
                    </Button>
                }
            />

            <Style.Container width="332px" gap="14px">
                <ProfileImageWrapper>
                    <ProfileImage src="/user.svg" />
                </ProfileImageWrapper>
                <ProfileForm {...formData} onChange={handleChange} />
            </Style.Container>
            <Style.FloatBox>
                <Button size="xl" shape="fill" stretch color="primary" onClick={handleSave}>
                    <Text typography="heading6" style={{ color: "var(--orange-500)" }}>
                        저장하기
                    </Text>
                </Button>
            </Style.FloatBox>
            <GNB />
        </>
    );
}

const ProfileImage = styled.img`
    width: 116px;
    height: 116px;
    padding: 0;
`;

const ProfileImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
