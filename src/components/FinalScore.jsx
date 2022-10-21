import scoreZero from "../media/scoreZero.jpg";
import level4 from "../media/level4.jpg";
import level5 from "../media/level5.jpg";
import level2 from "../media/level2.jpg";
import king from "../media/king.jpg";
import level3 from "../media/level3.jpg";
import level1 from "../media/level1.jpg";

const FinalScore = ({ userInfo, setUserInfo }) => {
  let sentence;
  let image;

  if (userInfo.totalScore === 0) {
    sentence =
      "Oh no! You can imporve your knowlege by exploring an Atlas. You'll do better next time! ";
    image = scoreZero;
  }

  if (userInfo.level === 1 && userInfo.totalScore > 0) {
    sentence = `You have completed level ${userInfo.level}. Try and explore the map more... So you can get better and move up a level!`;
    image = level1;
  }

  if (userInfo.level === 2) {
    sentence = `You have completed level ${userInfo.level}. You're getting there!`;
    image = level2;
  }
  if (userInfo.level === 3) {
    sentence = `You have completed level ${userInfo.level}. Good going! You have scored above average.`;
    image = level3;
  }

  if (userInfo.level === 4) {
    sentence = `You have completed level ${userInfo.level}. Well done! You're knowledge is very good!`;
    image = level4;
  }

  if (userInfo.level === 5 && userInfo.totalScore < 50) {
    sentence = `You have completed level ${userInfo.level}. Well done! Master level is insight for you!`;
    image = level5;
  }

  if (userInfo.totalScore === 50) {
    sentence = `You have completed level ${userInfo.level} and scored 100%. Bravo! You have exceptional Geography knowledge and earned a Royalty status!`;
    image = king;
  }

  return (
    <div className="column-container">
      <p>
        Final Score: {userInfo.totalScore}/{userInfo.totalQuestions}
      </p>
      <p>{sentence}</p>
      <img src={image} alt="decorative" />
      <button
        onClick={()=> setUserInfo({
          quizStarted: false,
          quizEnded: false,
          level: 1,
          totalScore: 0,
          totalQuestions: 0,
        })}
      >Try Again
      </button>
    </div>
  );
};

export default FinalScore;
