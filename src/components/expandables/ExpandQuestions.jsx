const ExpandQuestions = ({children, userInfo}) => {
    return <div>{userInfo.quizStarted === true ? children : null}</div>
}

export default ExpandQuestions