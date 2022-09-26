const ExpandWelcome = ({children, userInfo}) => {
    return <div>{userInfo.quizStarted === false ? children : null}</div>
}

export default ExpandWelcome