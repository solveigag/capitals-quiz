import { useEffect, useState } from "react";
import { data } from "../data/data";

import ScoreCard from "./ScoreCard";

const QuestionsCard = ({
  userInfo,
  setUserInfo,
  time,
  setTime,
  showScore,
  setShowScore,
}) => {
  const [levelScore, setLevelScore] = useState(0);
  const [questions, setQuestions] = useState(data[`level${userInfo.level}`]);
  const [questionIndex, setQuestionIndex] = useState(0);

  let levelTime;

  if (userInfo.level === 1) {
    levelTime = 20;
  }
  if (userInfo.level === 2) {
    levelTime = 25;
  }
  if (userInfo.level === 3) {
    levelTime = 30;
  }
  if (userInfo.level === 4) {
    levelTime = 35;
  }
  if (userInfo.level === 5) {
    levelTime = 40;
  }

  useEffect(() => {
    setQuestions(data[`level${userInfo.level}`]);
    // console.log("in useEffect");
  }, [userInfo.level]);

  useEffect(() => {
    const timer = setTimeout(handleAnswer, levelTime * 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [questionIndex]);

  function handleAnswer(arg) {
    // console.log("Inside handle answer");
    setTime(11);
    setUserInfo((currUserInfo) => {
      const updated = { ...currUserInfo };
      updated.totalQuestions++;
      return updated;
    });
    if (arg) {
      setLevelScore((currScore) => {
        return ++currScore;
      });
      setUserInfo((currUserInfo) => {
        const updated = { ...currUserInfo };
        updated.totalScore++;
        return updated;
      });
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((questionIndex) => {
        return questionIndex + 1;
      });
    } else {
      setShowScore(true);
    }
  }

  if (showScore)
    return (
      <ScoreCard
        setQuestionIndex={setQuestionIndex}
        setShowScore={setShowScore}
        setLevelScore={setLevelScore}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        levelScore={levelScore}
        setQuestions={setQuestions}
        setTime={setTime}
      />
    );

  return (
    <div className="column-container">
      <h2>{questions[questionIndex].question}</h2>
      {questions[questionIndex].answerOptions
        .sort(() => Math.random() - 0.5)
        .map((option) => {
          return (
            <button className="answer"
              key={option.answer}
              onClick={() => handleAnswer(option.isCorrect)}
            >
              {option.answer}
            </button>
          );
        })}
    </div>
  );
};

export default QuestionsCard;
