import { useEffect, useState } from "react";

const Timer = ({time}) => {

    // console.log('inside Timer')
    const [timeLeft, setTimeLeft] = useState(time)

    useEffect(()=> {
        setTimeLeft(time)
        // console.log(time, "useeffect triggered in timer")
      }, [time])

    
    useEffect(() => {
        if(timeLeft === 0) setTimeLeft(time)
        let timer = setInterval(countDown, 1000)
        return () => clearInterval(timer) // was cleartimeout before
    },[timeLeft, time])

    function countDown() {
        setTimeLeft((currTime) => {
            let newTime = currTime -=1
          return newTime
        });
      }

    return <>
    <div className="timer">Time left: <span className={timeLeft <= 5 ? "timer-red" : "timer"}>{timeLeft}</span></div>
    </>

}

export default Timer;