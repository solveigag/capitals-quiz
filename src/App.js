import "./App.css";
import { useState } from "react";
import ExpandWelcome from "./components/expandables/ExpandWelcome";
import ExpandQuiz from "./components/expandables/ExpandQuiz";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";

function App() {
  const [userInfo, setUserInfo] = useState({
    quizStarted: false,
    quizEnded: false,
    level: 1,
    totalScore: 0,
    totalQuestions: 0,
  });

  return (
    <div>
      <ExpandWelcome userInfo={userInfo}>
        <Welcome setUserInfo={setUserInfo} />
      </ExpandWelcome>
      <ExpandQuiz userInfo={userInfo}>
        <Quiz userInfo={userInfo} setUserInfo={setUserInfo} />
      </ExpandQuiz>
    </div>
  );
}

export default App;
