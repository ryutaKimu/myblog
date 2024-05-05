import { FC } from "react";
import Header from "../layouts/Header";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const baseUrl = "http://localhost:8888";

export const Home: FC = () => {
    return (
        <SDiv>
            <Header />
            <MainContent>
            <MainImage src={baseUrl + "/Img/sample.jpg"} alt="例の画像" />
            <SiteSummary>
            <Title>Welcome to Ryu Blog</Title>
            <p>
                こちらのブログは日々、管理人が得た哲学、政治、宗教、あらゆる話を投稿する<br/>ブログサイトです
            </p>
            <StyledLink to="/home/blog">記事はこちらから</StyledLink>
            </SiteSummary>
            </MainContent>
        </SDiv>
    );
};

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
`;

const Title = styled.h2`
font-size:50px;
margin-bottom:32px;
font-weight:600;
font-family:"Montserrat";
text-align:center;
`

const P = styled.p`

`

const MainImage = styled.img`
    width: 100%;
    margin-bottom: 20px;
`;

const SDiv = styled.div`
    margin: 0;
`;

const SiteSummary = styled.div`
    text-align: center;
    max-width: 600px;
    margin: 0, auto;
    margin-top:20px
`;

const StyledLink = styled(Link)`
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    display:inline-block;
    transition: background-color 0.3s ease;
    margin-top:40px;
    font-family: 'Roboto', sans-serif; /* Robotoフォントを適用 */


    &:hover {
        background-color: #0056b3;
    }
`;