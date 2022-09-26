const Welcome = ({ setUserInfo }) => {
  const startQuiz = () => {
    setUserInfo((currUserInfo) => {
      const quizStarted = {...currUserInfo}
      quizStarted.quizStarted = true
      return quizStarted
    });
    
  };

  return (
    <section>
      <h1>CapMaster</h1>
      <div>
        <h2>Welcome to CapMaster!</h2>
        <p>
          Test your knowlege of capitals around the world and see what level you
          can reach!
        </p>
      </div>
      <button onClick={startQuiz}>Start Quiz</button>
    </section>
  );
};

export default Welcome;
