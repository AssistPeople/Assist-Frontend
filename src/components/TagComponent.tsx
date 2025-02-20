import styled from "styled-components";
import { Text } from "@goorm-dev/vapor-core";

const tagStyles: Record<string, { emoji: string; textColor: string; bgColor: string }> = {
    활기찬: { emoji: "💥", textColor: "var(--red-500)", bgColor: "var(--red-100)" },
    힐링: { emoji: "🫧", textColor: "var(--blue-400)", bgColor: "var(--blue-100)" },
    설렘: { emoji: "💗", textColor: "var(--pink-500)", bgColor: "var(--pink-100)" },
    감성: { emoji: "🖼️", textColor: "#692503", bgColor: "#F5E6DA" },
    편안한: { emoji: "☺️", textColor: "var(--yellow-500)", bgColor: "var(--yellow-100)" },
    잔잔한: { emoji: "🌿", textColor: "#567F17", bgColor: "#E6F2D0" },
};

interface TagProps {
    tag: string;
}

const TagComponent = ({ tag }: TagProps) => {
    const tagData = tagStyles[tag] || { emoji: "", textColor: "var(--gray-700)", bgColor: "var(--gray-100)" };

    return (
        <TagWrapper style={{ background: tagData.bgColor, padding: "0px 10px" }}>
            <Text as="span" style={{ width: "100%", color: tagData.textColor }} typography="subtitle2">
                {tag} {tagData.emoji}
            </Text>
        </TagWrapper>
    );
};

const TagWrapper = styled.span`
    font-size: 12px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
`;

export default TagComponent;
