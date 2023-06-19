import './ViewArea.css'
import React, { useState, useEffect } from 'react';

function ViewArea() {
  //var fr = new FileReader();
  var text = "This is sample text. And i'll try to read it!"
  
    //var words=["word1","word2","word3"];
    var words = text.split(" ");
    var wordNumber=0;
    var word = words[wordNumber];
    var textSize =words.length

    const[count,setCount] =useState(0);
    const incrementCount = () => {
      setCount(count+1);
      if (count == textSize) setCount(0);
    }
    
   
    
    /*useEffect(()=>{
        document.title = `count is ${count}`
    });*/
    word =words[count];
const start =()=>{
  while(count<5){
    console.log("next");
    incrementCount();
    sleep(1000);
    //setTimeout(() => { incrementCount(); }, 1000).then(start());
    /*const interval = setInterval(() => {
      }, 1000)
      incrementCount();*/
  }
      
}
    return(
        <div  className="ViewArea">
        {word}
        <p>старт/стоп</p>   
        <p>count is {count}</p>
        <p>size is {textSize}</p>
        <button onClick={start}>start</button> 
        <button onClick={incrementCount}>BUTTON</button>     
    </div>
    )
} 
export default ViewArea

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

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