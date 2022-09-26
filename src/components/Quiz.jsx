import { useState } from "react"
import ExpandQuestionCard from "./expandables/ExpandableQuestionCard"
import ExpandScore from "./expandables/ExpandScore"
import QuestionsCard from "./QestionsCard"
import ScoreCard from "./ScoreCard"



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
        </section>
    )
}


export default Quiz