import { Text } from "@goorm-dev/vapor-core";
import { Container, MenuItem } from "./GNB.styles";
import { HomeIcon } from "@goorm-dev/vapor-icons";
import { AichatOutlineIcon } from "@goorm-dev/vapor-icons";
import { UserOutlineIcon } from "@goorm-dev/vapor-icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function GNB() {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: HomeIcon, label: "홈", path: "/" },
        { icon: AichatOutlineIcon, label: "채팅", path: "/chats" },
        { icon: UserOutlineIcon, label: "내 정보", path: "/profile" },
    ];

    return (
        <Container>
            {menuItems.map(item => {
                const isActive = location.pathname === item.path;

                return (
                    <MenuItem key={item.path} isActive={isActive} onClick={() => navigate(item.path)}>
                        <item.icon size="sm" fill={isActive ? "#FF8821" : "#CDCED6"} />
                        {/* <Text typography="body1" color={isActive ? "#FF8821" : "#CDCED6"}>
                            {item.label}
                        </Text> */}
                        <Text typography="body2" style={{ color: isActive ? "var(--orange-500)" : "var(--gray-400)" }}>
                            {item.label}
                        </Text>
                    </MenuItem>
                );
            })}
        </Container>
    );
}
