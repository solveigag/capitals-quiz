const Welcome = ({ setUserInfo }) => {
  const startQuiz = () => {
    setUserInfo((currUserInfo) => {
      const quizStarted = { ...currUserInfo };
      quizStarted.quizStarted = true;
      return quizStarted;
    });
  };

  return (
    <section className="column-container">     
      <div>
        <h2></h2>
        <p>Test your knowlege of capitals around the world and see if you can reach level 5!<br/>If you score less than 8 correct questions - you can't move on to the next level. Good luck!
        </p>
      </div>
      <button onClick={startQuiz}>Start Quiz</button>
    </section>
  );
};

export default Welcome;
