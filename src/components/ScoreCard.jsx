import {level2} from "../data/level2"

const ScoreCard = ({setQuestionIndex, levelScore, userInfo, setQuestions, setShowScore, setLevelScore}) => {

   const nextLevel = () => {
    if (userInfo.level !== 5) {
        setQuestions(level2)
        setShowScore(false)
        setLevelScore(0)
        setQuestionIndex(0)
    }
   }
    return (<div>

        <p>Score: {levelScore}</p>
        <button onClick={nextLevel}>Next Level</button>
    </div>
    )
}

export default ScoreCard