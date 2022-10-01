const ExpandQuestionCard = ({children, userInfo, showScore}) => {
    return <div>{userInfo.quizStarted === true && userInfo.quizEnded === false ? children : null}</div>
}

export default ExpandQuestionCard