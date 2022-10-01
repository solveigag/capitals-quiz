const ExpandFinalScore = ({children, userInfo}) => {
    return <div>{userInfo.quizEnded === true ? children : null}</div>
}

export default ExpandFinalScore