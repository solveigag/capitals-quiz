import { data } from "../data/data";

const ScoreCard = ({
  setQuestionIndex,
  levelScore,
  userInfo,
  setUserInfo,
  setQuestions,
  setShowScore,
  setLevelScore,
  setTime
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
      setTime((currTime) => {
        return currTime + 10
      })
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
        <p>Level: {userInfo.level}</p>
        <p>Score: {levelScore}/10</p>
        <button onClick={endQuiz}>Finish</button>
      </div>
    );

  return (
    <div className="column-container">
      <p>Level: {userInfo.level}</p>
        <p>Score: {levelScore}/10</p>
        <div className="row-container">
      <button onClick={nextLevel}>Next Level</button>
      <button onClick={endQuiz}>Finish</button>

        </div>
    </div>
  );
};

export default ScoreCard;
