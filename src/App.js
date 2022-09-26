import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";
import ExpandWelcome from "./components/expandables/ExpandWelcome"
import ExpandQuestions from "./components/expandables/ExpandQuestions"
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";

function App() {
  const [userInfo, setUserInfo] = useState({
    quizStarted: false,
    level: 1,
    question: 0,
    totalScore: 0,
    totalQuestions: 0
  });


  return ( 
    <div>
      <ExpandWelcome userInfo={userInfo}>
        <Welcome setUserInfo={setUserInfo}/>
      </ExpandWelcome>
      <ExpandQuestions userInfo={userInfo}>
        <Quiz userInfo={userInfo} setUserInfo={setUserInfo}/>
      </ExpandQuestions>
    </div>
  );
}

export default App;
