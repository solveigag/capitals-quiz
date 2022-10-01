
import {data} from "../data/data"

const ScoreCard = ({setQuestionIndex, levelScore, userInfo, setUserInfo, setQuestions, setShowScore, setLevelScore}) => {

   const nextLevel = () => {
    console.log(userInfo.level, "after click")
       if (userInfo.level !== 5) {
           setUserInfo((currUserInfo) => {
            const updated = {...currUserInfo}
                updated.level++
                console.log(userInfo.level, "update")
                return updated
           })
           console.log(userInfo, "in set user")
            let level = data[`level${userInfo.level}`]
            console.log(level)
            console.log(userInfo.level, "before st questions")
            setQuestions(level)
            console.log(userInfo.level, "after st questions")
            setLevelScore(0)
            setShowScore(false)
            setQuestionIndex(0)
        } else {

            
            setUserInfo((currUserInfo) => {
                const updated = {...currUserInfo}
                updated.quizEnded = true
                return updated
            })
            setShowScore(false)
        }
       
   }

   const endQuiz = () => {
    setUserInfo((currUserInfo) => {
        const updated = {...currUserInfo}
            updated.quizEnded = true
            return updated
       })
       setShowScore(false)
   }

        if (userInfo.level === 3) return <div>
        <p>Score: {levelScore}</p>
        <button onClick={endQuiz}>Finish</button>
        </div>


    return (<div>

        <p>Score: {levelScore}</p>
        <button onClick={nextLevel}>Next Level</button>
        <button onClick={endQuiz}>Finish</button>
    </div>
    )
}

export default ScoreCard