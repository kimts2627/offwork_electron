import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import TimeTable from "./components/TimeTable";
import "./index.css";

const App: React.FC = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [time, setTime] = useState("00:00:00");
  const [isTimerOn, setTimer] = useState(false);
  useEffect(() => {
    if (isTimerOn) {
      setTimeout(() => {
        setSec(sec + 1);
      }, 1000);
    } else {
      setTime("00:00:00");
    }
  }, [isTimerOn, sec]);

  useEffect(() => {
    if (hour === 9) {
      setTimer(false);
    }
  }, [hour]);

  useEffect(() => {
    if (min === 60) {
      setHour(hour + 1);
      setMin(0);
    }
  }, [min]);

  useEffect(() => {
    if (sec === 60) {
      setMin(min + 1);
      setSec(0);
    }
  }, [sec]);

  useEffect(() => {
    if (hour >= 9) {
      setTimer(false);
    }
    let hours: string;
    let minute: string;
    let second: string;

    hours = `0${hour}`;
    minute = String(min).length === 2 ? String(min) : `0${String(min)}`;
    second = String(sec).length === 2 ? String(sec) : `0${String(sec)}`;
    setTime(`${hours}:${minute}:${second}`);
  }, [sec]);

  return (
    <div className="App">
      <h1>근무시간 타이머</h1>
      <Timer timer={time} setTimer={setTime} />
      {!isTimerOn ? <button onClick={() => setTimer(true)}>출근</button> : null}
      {/* <TimeTable /> */}
    </div>
  );
};

export default App;
