import './ViewArea.css'
import React, { useState, useEffect } from 'react';

function ViewArea() {
    var words=["word1","word2","word3"];
    var wordNumber=0;
    var word = words[wordNumber];

    const[count,setCount] =useState(0);
    const incrementCount = () => setCount(count+1);
    
    useEffect(()=>{
        document.title = `count is ${count}`
    });
    return(
        <div  className="ViewArea">
        {word}
        <p>старт/стоп</p>   
        <p>count is {count}</p>
    <button onClick={incrementCount}>BUTTON</button>     
    </div>
    )
} 
export default ViewArea

/* <Timer/>
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

function clickEvent(e){
console.log(e);
setWord(words[0]);

}

function WordChange(){
  const[wordNumber,setWord]=useState(null);
  



  
  
}*/