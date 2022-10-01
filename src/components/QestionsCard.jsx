import { useEffect, useState } from "react"
import {data} from "../data/data"

import ScoreCard from "./ScoreCard"

const QuestionsCard = ({userInfo, setUserInfo}) => {
    const [levelScore, setLevelScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [questions, setQuestions] = useState(data[`level${userInfo.level}`]);
    const [questionIndex, setQuestionIndex] = useState(0);
    
    useEffect(()=> {
        console.log("in effect")
        console.log(userInfo.level, "level in effect")
        setQuestions(data[`level${userInfo.level}`])
    }, [userInfo.level])

    const handleAnswer = (arg) => {
        setUserInfo((currUserInfo) => {
            const updated = {...currUserInfo}
            updated.totalQuestions++
            return updated
        });
        if (arg) {
            setLevelScore((currScore) => {
                return ++currScore
            })
            setUserInfo((currUserInfo) => {
                const updated = {...currUserInfo}
                updated.totalScore++
                return updated
            });
        }
        if (questionIndex < questions.length - 1) {
            setQuestionIndex((questionIndex) => {
                return questionIndex + 1
            })
        } else {
            setShowScore(true)
        }
    }
    
if (showScore) return <ScoreCard setQuestionIndex={setQuestionIndex} setShowScore={setShowScore} setLevelScore={setLevelScore} userInfo={userInfo} setUserInfo={setUserInfo} levelScore={levelScore} setQuestions={setQuestions}/>
    
    return (
        <div>
            <h2>{questions[questionIndex].question}</h2>
            {questions[questionIndex].answerOptions.map((option) => {
                return <button key={option.answer} onClick={()=> handleAnswer(option.isCorrect) }>{option.answer}</button>
            })}
        </div>
    )
}

export default QuestionsCard