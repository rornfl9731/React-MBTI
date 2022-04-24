import React from "react";
import styled from "styled-components";
import PangImage from "../assets/po_jw.jpg";
import Button from 'react-bootstrap/Button';

const Home = () =>{
    return (
        <Wrapper>
            <Header>예비</Header>
            <Contents>
            <Title>포항 지우</Title>
            <LogoImage>
                <img src={PangImage} className={"rounded-circle"} width={250} height={250}/>
            </LogoImage>
            <Desc>이지우 찾기</Desc>
            <Button>다른 지우 보기</Button>
            </Contents>
        </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`
const LogoImage = styled.div`
  margin-top: 10px;
`
const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  margin-bottom: 20px;
`
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
