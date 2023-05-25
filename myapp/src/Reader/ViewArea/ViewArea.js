import './ViewArea.css'
import React, { useState, useEffect } from 'react';

export default function ViewArea() {
    var words=["word1","word2","word3"];
    var word = words[1];
    return(
        <div className="ViewArea">
        {word}
        <p>старт/стоп</p>
        <Timer/>
    </div>
    )
}
 function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
 }, []);

  return <p>The current time is: {time.toLocaleTimeString()}</p>;
}