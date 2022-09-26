import { useState } from "react"
import {level1} from "../data/level1"

import ScoreCard from "./ScoreCard"

const QuestionsCard = ({userInfo, setUserInfo}) => {
    const [levelScore, setLevelScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [questions, setQuestions] = useState(level1);
    const [questionIndex, setQuestionIndex] = useState(0);

    const handleAnswer = (arg) => {
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
    
if (showScore) return <ScoreCard setQuestionIndex={setQuestionIndex} setShowScore={setShowScore} setLevelScore={setLevelScore} userInfo={userInfo} levelScore={levelScore} setQuestions={setQuestions}/>
    
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