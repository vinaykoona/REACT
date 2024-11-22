import {useCallback, useState, } from "react";

export default function Usecall(){
    const [count, setCount]=useState(0);
 // here we impiment the memoization
 const handleClick =useCallback(()=>{
    setCount(count+1);
 },[count])

 //recreat handleClick when count changes

   return(
    <>
    <p>count:{count}</p>
    <Childcomponent onClick={handleClick}></Childcomponent>
    </>
   );
}
   //this is the child component in same file

   function Childcomponent({onClick}){
      return(
         <button onClick={onClick}>Increment</button>
      )
   }