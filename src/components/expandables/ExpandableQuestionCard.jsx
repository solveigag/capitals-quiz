const ExpandQuestionCard = ({children, userInfo, showScore}) => {
    return <div>{userInfo.quizStarted === true ? children : null}</div>
}

export default ExpandQuestionCard