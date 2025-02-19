import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>홈페이지입니다.</p>
            <Link to="/login">로그인 페이지로 이동</Link>
        </div>
    );
};

export default HomePage;
