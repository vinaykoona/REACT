import { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// Use setTimeout() to count 1 second after initial render:
function Timer () {
const [count,setCount] = useState(0);
useEffect(() => {
    setTimeout(()=>{
        setCount((count) => count +1);
    } , 1000);
    // return ()=>clearTimeout(Timer)
    } ,[]) ;

    // when we give an square brackets inside([Empty Array]) the set count then it will be stops the increasing 
    return (
    <h1> I have rendered {count} times !</h1>
    )

}

export default Timer;