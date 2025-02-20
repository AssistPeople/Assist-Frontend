import { Button, Text, TextInput } from "@goorm-dev/vapor-core";
import Header from "../components/layout/Header";
import { Style } from "../styles/UI";

export default function ProfileSetUpPage() {
    return (
        <>
            <Style.Container width="332px" gap="14px">
                <Header prefix="backButton" title="자기소개 작성" />
                <TextInput type="text" size="xl">
                    <TextInput.Label>
                        <Text typography="body1" color="foreground-secondary-on-transparent">
                            닉네임
                        </Text>
                    </TextInput.Label>
                    <TextInput.Field placeholder="닉네임을 입력하세요." />
                </TextInput>
                <TextInput type="text" size="xl">
                    <TextInput.Label>
                        <Text typography="body1" color="foreground-secondary-on-transparent">
                            MBTI
                        </Text>
                    </TextInput.Label>

                    <TextInput.Field placeholder="MBTI를 입력하세요." />
                </TextInput>
                <TextInput type="text" size="xl">
                    <TextInput.Label>
                        <Text typography="body1" color="foreground-secondary-on-transparent">
                            한 줄 자기소개 작성
                        </Text>{" "}
                        <Text typography="subtitle2" color="foreground-hint">
                            * 최대 50자
                        </Text>
                    </TextInput.Label>

                    <Style.TextArea
                        color="foreground-secondary-on-transparent"
                        placeholder="한 줄 자기소개를 작성하세요."
                    />
                </TextInput>
                <TextInput type="text" size="xl">
                    <TextInput.Label>
                        <Text typography="body1" color="foreground-secondary-on-transparent">
                            지원 동기 작성
                        </Text>{" "}
                        <Text typography="subtitle2" color="foreground-hint">
                            * 최대 100자
                        </Text>
                    </TextInput.Label>

                    <Style.TextArea color="foreground-secondary-on-transparent" placeholder="지원 동기를 작성하세요." />
                </TextInput>
                <TextInput type="text" size="xl">
                    <TextInput.Label>
                        <Text typography="body1" color="foreground-secondary-on-transparent">
                            게스트하우스에 어필 사항
                        </Text>
                    </TextInput.Label>

                    <Style.TextArea
                        color="foreground-secondary-on-transparent"
                        placeholder="ex) 이전 스텝 경험, 언어 능력 등"
                    />
                </TextInput>
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
