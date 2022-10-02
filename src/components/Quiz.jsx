import ExpandFinalScore from "./expandables/ExpandFinalScore";
import ExpandQuestionCard from "./expandables/ExpandQuestionCard";
import FinalScore from "./FinalScore";
import QuestionsCard from "./QestionsCard";

const Quiz = ({ userInfo, setUserInfo }) => {
  return (
    <section>
      <ExpandQuestionCard userInfo={userInfo}>
        <QuestionsCard userInfo={userInfo} setUserInfo={setUserInfo} />
      </ExpandQuestionCard>
      <ExpandFinalScore userInfo={userInfo}>
        <FinalScore userInfo={userInfo} />
      </ExpandFinalScore>
    </section>
  );
};

export default Quiz;
