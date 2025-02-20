import { useState } from "react";
import { Button, Text } from "@goorm-dev/vapor-core";
import Header from "../components/layout/Header";
import { Style } from "../styles/UI";
import ProfileForm from "../components/profile/ProfileForm";

export default function ProfileSetUpPage() {
    const [formData, setFormData] = useState({
        nickname: "",
        mbti: "",
        introduction: "",
        motivation: "",
        appeal: "",
    });

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <Style.Container width="332px" gap="14px">
                <Header prefix="backButton" title="자기소개 작성" />
                <ProfileForm {...formData} onChange={handleChange} />
            </Style.Container>
            <Style.FloatBox>
                <Button size="xl" shape="fill" stretch color="primary">
                    <Text typography="heading6" style={{ color: "var(--orange-500)" }}>
                        시작하기
                    </Text>
                </Button>
            </Style.FloatBox>
        </>
    );
}
