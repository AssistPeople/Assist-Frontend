import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <p>로그인 페이지입니다.</p>
            <Link to="/">홈으로 가기</Link>
        </div>
    );
};

export default LoginPage;
