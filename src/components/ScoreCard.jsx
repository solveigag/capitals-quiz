import { data } from "../data/data";

const ScoreCard = ({
  setQuestionIndex,
  levelScore,
  userInfo,
  setUserInfo,
  setQuestions,
  setShowScore,
  setLevelScore,
}) => {
  const nextLevel = () => {
    if (userInfo.level !== 5) {
      setUserInfo((currUserInfo) => {
        const updated = { ...currUserInfo };
        updated.level++;
        return updated;
      });
      let level = data[`level${userInfo.level}`];
      setQuestions(level);
      setLevelScore(0);
      setShowScore(false);
      setQuestionIndex(0);
    }
  };

  const endQuiz = () => {
    setUserInfo((currUserInfo) => {
      const updated = { ...currUserInfo };
      updated.quizEnded = true;
      return updated;
    });
    setShowScore(false);
  };

  if (userInfo.level === 5 || levelScore < 8)
    return ( 
      <div>
        <p>Score: {levelScore}</p>
        <button onClick={endQuiz}>Finish</button>
      </div>
    );

  return (
    <div>
      <p>Score: {levelScore}</p>
      <button onClick={nextLevel}>Next Level</button>
      <button onClick={endQuiz}>Finish</button>
    </div>
  );
};

export default ScoreCard;
