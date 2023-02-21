import React from "react";
import { useEffect, useState } from "react";

export default function HookTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((value) => value + 1);
    }, 1000);
  }, []);

  return (
    <>
      <div>Start Timer - {timer}</div>
      <button>Clear Timer</button>
    </>
  );
}
