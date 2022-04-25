import React from "react";
import styled from "styled-components";
import {ProgressBar,Button} from "react-bootstrap";
import {QuestionData} from "../assets/data/questiondata"
import { createSearchParams, useNavigate } from 'react-router-dom';

const Question = () => {
    const [questionNo,setQuestionNo] = React.useState(0);
    const [totalScore,setTotalScore] = React.useState([
        {id:"EI",score:0},
        {id:"SN",score:0},
        {id:"TF",score:0},
        {id:"JP",score:0}
    ]);
    const navigate = useNavigate();

    console.log('totalScore',totalScore);

    const handleClickButtonA = (no,type) =>{
        const newScore = totalScore.map((s)=>
            s.id === type ? {id:s.id,score:s.score+no} : s
        )

        setTotalScore(newScore);
        if(QuestionData.length !== questionNo+1){
            setQuestionNo(questionNo+1);
        }else {
            const mbti = "ISFP"
            navigate({
                pathname: "/result",
                search: `?${createSearchParams({
                    mbti: mbti,
                })}`
            });
        }

    }


    return (
        <Wrapper>
            <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length)*100} style={{marginTop:'20px'}}/>
            <Title>{QuestionData[questionNo].title}</Title>
            <ButtonGroup>
                <Button onClick={()=>handleClickButtonA(1,QuestionData[questionNo].type)} style={{width:'40%',minHeight:'200px',fontSize:'15pt'}}>{QuestionData[questionNo].answera}</Button>
                <Button onClick={()=>handleClickButtonA(0,QuestionData[questionNo].type)} style={{width:'40%',minHeight:'200px',fontSize:'15pt',marginLeft:'20px'}}>{QuestionData[questionNo].answerb}</Button>
            </ButtonGroup>
        </Wrapper>
    )
}

export default Question;


const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 30pt;
    font-family:"Rf";
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 20px;
    font-family: "Rf"; 
`;