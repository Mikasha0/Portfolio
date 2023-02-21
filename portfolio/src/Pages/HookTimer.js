import React from "react";
import { useEffect, useState, useRef } from "react";

export default function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((value) => value + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div>Start Timer - {timer}</div>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </>
  );
}
