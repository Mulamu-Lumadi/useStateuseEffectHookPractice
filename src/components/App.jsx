import React, { useState, useEffect } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [clock, setClock] = useState();

  const showTime = () => {
    setClock(time);
  };
  // const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const timerID = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);

  // Cleanup the interval on component unmount
  //   return () => clearInterval(timerID);
  // }, []);
  return (
    <div className="container">
      {clock && <h1>{time}</h1>}
      {/* <h1>{clock.toLocaleTimeString()}</h1> */}
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
