import GNB from "../components/layout/GNB";
import Header from "../components/layout/Header";
import { Style } from "../styles/UI";

export default function ChatListPage() {
    return (
        <>
            <Header title="채팅 리스트" />

            <Style.Container>
                <Style.Divider />
            </Style.Container>
            <GNB />
        </>
    );
}
