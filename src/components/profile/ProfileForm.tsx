import { Text, TextInput } from "@goorm-dev/vapor-core";
import { Style } from "../../styles/UI";

type ProfileFormProps = {
    nickname?: string;
    mbti?: string;
    introduction?: string;
    motivation?: string;
    appeal?: string;
    onChange: (field: string, value: string) => void;
};

export default function ProfileForm({ nickname, mbti, introduction, motivation, appeal, onChange }: ProfileFormProps) {
    return (
        <>
            <div style={{ margin: "10px 0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <TextInput type="text" size="xl">
                    <TextInput.Label>
                        <Text typography="body1" color="foreground-secondary-on-transparent">
                            닉네임
                        </Text>
                    </TextInput.Label>
                    <TextInput.Field
                        placeholder="닉네임을 입력하세요."
                        value={nickname || ""}
                        onChange={e => onChange("nickname", e.target.value)}
                    />
                </TextInput>

                <TextInput type="text" size="xl">
                    <TextInput.Label>
                        <Text typography="body1" color="foreground-secondary-on-transparent">
                            MBTI
                        </Text>
                    </TextInput.Label>
                    <TextInput.Field
                        placeholder="MBTI를 입력하세요."
                        value={mbti || ""}
                        onChange={e => onChange("mbti", e.target.value)}
                    />
                </TextInput>

                <TextInput type="text" size="xl">
                    <TextInput.Label>
                        <Text typography="body1" color="foreground-secondary-on-transparent">
                            한 줄 자기소개 작성
                        </Text>
                        <Text typography="subtitle2" color="foreground-hint">
                            {" "}
                            * 최대 50자{" "}
                        </Text>
                    </TextInput.Label>
                    <Style.TextArea
                        placeholder="한 줄 자기소개를 작성하세요."
                        value={introduction || ""}
                        onChange={e => onChange("introduction", e.target.value)}
                    />
                </TextInput>

                <TextInput type="text" size="xl">
                    <TextInput.Label>
                        <Text typography="body1" color="foreground-secondary-on-transparent">
                            지원 동기 작성
                        </Text>
                        <Text typography="subtitle2" color="foreground-hint">
                            {" "}
                            * 최대 100자{" "}
                        </Text>
                    </TextInput.Label>
                    <Style.TextArea
                        placeholder="지원 동기를 작성하세요."
                        value={motivation || ""}
                        onChange={e => onChange("motivation", e.target.value)}
                    />
                </TextInput>

                <TextInput type="text" size="xl">
                    <TextInput.Label>
                        <Text typography="body1" color="foreground-secondary-on-transparent">
                            게스트하우스에 어필 사항
                        </Text>
                    </TextInput.Label>
                    <Style.TextArea
                        placeholder="ex) 이전 스텝 경험, 언어 능력 등"
                        value={appeal || ""}
                        onChange={e => onChange("appeal", e.target.value)}
                    />
                </TextInput>
            </div>
        </>
    );
}
