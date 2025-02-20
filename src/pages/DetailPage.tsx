import { useParams } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import { Style } from "../styles/UI";
import Header from "../components/layout/Header";

const DetailPage = () => {
    const { id } = useParams();

    const place = {
        title: "필릿 게스트하우스",
        description: "바다 근처 힙한 게스트 하우스",
        latitude: 33.542123,
        longitude: 126.661234,
    };

    return (
        <Style.Container width="332px" gap="14px">
            <Header prefix="backButton" title="숙소 상세 정보" />
            <h1>{place.title}</h1>
            <p>{place.description}</p>
            <MapComponent latitude={place.latitude} longitude={place.longitude} />
        </Style.Container>
    );
};

export default DetailPage;
