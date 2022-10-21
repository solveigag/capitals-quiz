import "./App.css";
import { useState } from "react";
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
    
    <div id="main-container">
       <h1>World Capitals Quiz</h1>
      {userInfo.quizStarted ? (
        <Quiz userInfo={userInfo} setUserInfo={setUserInfo} />
      ) : (
        <Welcome setUserInfo={setUserInfo} />
      )}
    </div>
    
  );
}

export default App;
