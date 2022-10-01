// import { useState } from "react"
import ExpandFinalScore from "./expandables/ExpandFinalScore"
import ExpandQuestionCard from "./expandables/ExpandQuestionCard"
import FinalScore from "./FinalScore"
// import ExpandScore from "./expandables/ExpandScore"
import QuestionsCard from "./QestionsCard"
// import ScoreCard from "./ScoreCard"



const Quiz = ({userInfo, setUserInfo}) => {
    // const [levelScore, setLevelScore] = useState(0)
    // const [showScore, setShowScore] = useState(false)
    
    return (
        <section>
            <ExpandQuestionCard userInfo={userInfo}>
                <QuestionsCard userInfo={userInfo} setUserInfo={setUserInfo}/>
            </ExpandQuestionCard>
            {/* <ExpandScore showScore={showScore}>
                <ScoreCard levelScore={levelScore}/>
            </ExpandScore> */}
            <ExpandFinalScore userInfo={userInfo}>
                <FinalScore userInfo={userInfo}/>
            </ExpandFinalScore>
        </section>
    )
}


export default Quiz