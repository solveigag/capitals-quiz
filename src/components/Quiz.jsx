import { useEffect, useState } from "react";
import Timer from "./Timer";
import FinalScore from "./FinalScore";
import QuestionsCard from "./QestionsCard";

const Quiz = ({ userInfo, setUserInfo }) => {
  const [time, setTime] = useState(20);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (userInfo.level === 1) {
      setTime(20);
    }
    if (userInfo.level === 2) {
      setTime(25);
    }
    if (userInfo.level === 3) {
      setTime(30);
    }
    if (userInfo.level === 4) {
      setTime(35);
    }
    if (userInfo.level === 5) {
      setTime(40);
    }
    // console.log(time, "useeffect triggered in quiz");
  }, [userInfo.level, time]);

  if (
    userInfo.quizStarted === true &&
    userInfo.quizEnded === false &&
    showScore === false
  ) {
    return (
      <section>
        <QuestionsCard
          showScore={showScore}
          setShowScore={setShowScore}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setTime={setTime}
        />
        <Timer time={time} />
      </section>
    );
  }

  if (
    userInfo.quizStarted === true &&
    userInfo.quizEnded === false &&
    showScore === true
  ) {
    return (
      <section>
        <QuestionsCard
          showScore={showScore}
          setShowScore={setShowScore}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setTime={setTime}
        />
      </section>
    );
  }

  if (userInfo.quizEnded === true) {
    return <FinalScore userInfo={userInfo} setUserInfo={setUserInfo}/>;
  }
};

export default Quiz;
