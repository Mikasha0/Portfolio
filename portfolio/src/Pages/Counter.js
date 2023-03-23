// import React, { useState, useEffect } from "react";

// function Counter() {
//   const [cycleCounter, setCycleCounter] = useState(() => {
//     const storedCycleCounter = localStorage.getItem("cycleCounter");
//     return storedCycleCounter ? parseInt(storedCycleCounter, 10) : 0;
//   });
//   const [cycleStartTime, setCycleStartTime] = useState(() => {
//     const storedCycleStartTime = localStorage.getItem("cycleStartTime");
//     return storedCycleStartTime
//       ? parseInt(storedCycleStartTime, 10)
//       : new Date("2023-03-19").getTime();
//   });
//   const cycleDuration = 3 * 1000;

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const currentTime = new Date().getTime();
//       const elapsedTime = currentTime - cycleStartTime;

//       if (elapsedTime >= cycleDuration) {
//         setCycleCounter((prevCounter) => {
//           localStorage.setItem("cycleCounter", (prevCounter + 1).toString());
//           localStorage.setItem("cycleStartTime", currentTime.toString());
//           return prevCounter + 1;
//         });
//         setCycleStartTime(currentTime);
//       }
//     }, cycleDuration);

//     return () => clearInterval(intervalId);
//   }, [cycleDuration, cycleStartTime]);

//   return (
//     <div>
//       <h1 style={{ color: "black" }}>Counter: {cycleCounter}</h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// function Countdown() {
//   const [countDownDate, setCountDownDate] = useState(
//     new Date("2023-04-01").getTime()
//   );
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [showData, setShowData] = useState(false);
//   const [cycleData, setCycleData] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;

//       setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
//       setHours(
//         Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//       );
//       setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
//       setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

//       if (distance < 0) {
//         // The previous countdown has ended, so start a new one for 14 days
//         setShowData(true);
//         setCycleData([...cycleData, { days, hours, minutes, seconds }]);
//         setCountDownDate(
//           new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).getTime()
//         );
//         setDays(0);
//         setHours(0);
//         setMinutes(0);
//         setSeconds(0);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [countDownDate, cycleData]);

//   return (
//     <div>
//       <h1 style={{ color: "black" }}>
//         Countdown: {days}d {hours}h {minutes}m {seconds}s
//       </h1>
//       {!showData && (
//         <p style={{ color: "red" }}>
//           This data is for the current cycle and will be shown until April 1.
//         </p>
//       )}
//       {showData && (
//         <div>
//           <p style={{ color: "blue" }}>
//             Previous Cycle Data:
//             {cycleData[cycleData.length - 1] &&
//               ` ${cycleData[cycleData.length - 1].days}d ${
//                 cycleData[cycleData.length - 1].hours
//               }h ${cycleData[cycleData.length - 1].minutes}m ${
//                 cycleData[cycleData.length - 1].seconds
//               }s`}
//           </p>
//           <p style={{ color: "red" }}>
//             This data is for the current cycle and will be shown until the end
//             of the cycle.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Countdown;

import { useState, useEffect } from "react";

export default function Counter() {
  const [cycleCounter, setCycleCounter] = useState(0);

  useEffect(() => {
    const cycleDuration = 14 * 24 * 60 * 60 * 1000;
    const fixedDate = new Date("2023-03-19");
    const timerId = setInterval(() => {
      const currentTime = new Date("2023-04-04").getTime();
      const elapsedTime = currentTime - fixedDate.getTime();
      setCycleCounter(Math.floor(elapsedTime / cycleDuration));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <p style={{ color: "black" }}>Current Cycle: {cycleCounter}</p>
    </div>
  );
}
