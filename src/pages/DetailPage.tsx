import { useParams, useNavigate } from "react-router-dom";

const DetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }

    return (
        <div>
            <h1>상세 페이지</h1>
            <p>숙소 ID: {id}</p>
            <button onClick={handleClick}>뒤로가기</button>
        </div>
    );
};

export default DetailPage;
