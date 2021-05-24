import React from "react";

interface TimerProps {
  timer: string;
  setTimer: any;
}

const Timer: React.FC<TimerProps> = ({ timer, setTimer }) => {
  return <h1 className="timer">{timer}</h1>;
};

export default Timer;
