import { createGlobalStyle } from "styled-components";
import "swiper/css";
import "swiper/css/free-mode";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Pretendard Variable', 'Pretendard', '-apple-system', 'BlinkMacSystemFont',
      'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
      'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif';
    color: black;
    background-color: gray;
  }

  * {
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
    font-family: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  *::before,
  *::after {
    box-sizing: border-box !important;
  }

  html{
    margin: 0;
	  padding: 0;
	  border: 0;
    display: flex;
    justify-content: center;
}
  body {
    width: 393px;
    height: 100%;
    overscroll-behavior: none;
    background-color: white;
    margin: 0;
    padding: 0 30px 120px 30px;
    display: flex;
    align-items: flex-start;


  }

  a {
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    padding-block: 0;
    padding-inline: 0;
  }

  textarea {
    border: none;
    resize: none;
    outline: none;
  }

  input {
    outline: none;
    border: none;
    background: none;
  }

  .no-bottom-padding {
    padding: 0 30px 14px 30px !important;
  }  
`;

export default GlobalStyle;
