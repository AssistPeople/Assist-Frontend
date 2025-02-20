import styled from "styled-components";
import { Text } from "@goorm-dev/vapor-core";
import { LocationIcon } from "@goorm-dev/vapor-icons";
import { GroupIcon } from "@goorm-dev/vapor-icons";
import { useNavigate } from "react-router-dom";

interface ListItemProps {
    id: number;
    tags: string[];
    title: string;
    description: string;
    location: string;
    recruitment: string;
}

const ListItem = ({ id, tags, title, description, location, recruitment }: ListItemProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
    };

    return (
        <Container onClick={handleClick}>
            <ImagePlaceholder />
            <InfoContainer>
                <TagsContainer>
                    {tags.map((tag, index) => (
                        <Tag key={index}>
                            <Text as="h2" style={{ width: "100%" }} typography="subtitle2">
                                {tag}
                            </Text>
                        </Tag>
                    ))}
                </TagsContainer>
                <Text as="h2" style={{ width: "100%" }} typography="heading5">
                    {title}
                </Text>
                <Text as="h2" style={{ width: "100%" }} typography="subtitle1" color="foreground-hint">
                    {description}
                </Text>
                <LocationWrapper>
                    <LocationIcon style={{ width: "24px", color: "var(--orange-500)" }} />
                    <Text as="h2" style={{ width: "100%" }} typography="subtitle1" color="foreground-hint">
                        {location}
                    </Text>
                    <GroupIcon style={{ width: "24px", color: "var(--orange-500)" }} />
                    <Text as="h2" style={{ width: "100%" }} typography="subtitle1" color="foreground-hint">
                        {recruitment}
                    </Text>
                </LocationWrapper>
            </InfoContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    background: #ffffff;
    padding: 16px;
    border: 1px solid #f0f0f5;
    box-sizing: border-box;
    border-radius: 12px;
    gap: 10px;
    width: 332px;
    height: 112px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #f8f8f8;
    }
    &:active {
        background: #f0f0f0;
        transform: scale(0.98);
    }
`;

const ImagePlaceholder = styled.div`
    width: 88px;
    height: 88px;
    border-radius: 8px;
    left: 12px;
    background: #f0f0f5;
    top: calc(50% - 88px / 2);
    border-radius: 8px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
`;

const TagsContainer = styled.div`
    display: flex;
    gap: 6px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
    background: #f5f5f5;
`;

const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

export default ListItem;
