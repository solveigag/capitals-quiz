const FinalScore = ({userInfo}) => {
    const percentile = userInfo.totalScore / userInfo.totalQuestions
    let level = "basic";
    let sentence = "You'll get better!";

    if (userInfo.totalScore === 0) {
        level = "begginer's";
        sentence = "Try and explore the map and try again!";
    }

    if (percentile === 1 && userInfo.level === 3) {
        level = "Master";
        sentence= "Bravo! You have exceptional Geography knowledge!"
    }

    if (percentile >= 0.75 && userInfo.level === 3) {
        level = "Advanced";
        sentence= "Well done! Master level is insight for you!"
    }

    if (percentile >= 0.5 && userInfo.level >=2) {
        level = "Average";
        sentence= "Not bad!"
    }

    

   

    return <div>
        
        <p>Final Score: {userInfo.totalScore}/{userInfo.totalQuestions}</p>
        <p>You have achieved {level} level. {sentence}</p>
        

    </div>
}

export default FinalScore