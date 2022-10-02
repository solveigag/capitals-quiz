const ExpandQuiz = ({children, userInfo}) => {
    return <div>{userInfo.quizStarted === true ? children : null}</div>
}

export default ExpandQuiz