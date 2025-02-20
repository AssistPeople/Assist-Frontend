import { Text } from "@goorm-dev/vapor-core";
import { Container, MenuItem } from "./GNB.styles";
import { HomeIcon } from "@goorm-dev/vapor-icons";
import { GroupIcon } from "@goorm-dev/vapor-icons";
import { UserIcon } from "@goorm-dev/vapor-icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function GNB() {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: HomeIcon, label: "홈", path: "/" },
        { icon: GroupIcon, label: "채팅", path: "/chats" },
        { icon: UserIcon, label: "내 정보", path: "/profile" },
    ];

    return (
        <Container>
            {menuItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                    <MenuItem key={item.path} isActive={isActive} onClick={() => navigate(item.path)}>
                        <item.icon size="sm" fill={isActive ? "#FF8821" : "#CDCED6"} />
                        {/* <Text typography="body1" color={isActive ? "#FF8821" : "#CDCED6"}>
                            {item.label}
                        </Text> */}
                        <Text typography="body1" style={{ color: isActive ? "var(--orange-500)" : "var(--gray-400)" }}>
                            {item.label}
                        </Text>
                    </MenuItem>
                );
            })}
        </Container>
    );
}
