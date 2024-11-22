import React,{useState} from "react";
function App(){
const[color,setcolor]=useState("vanish");
return(
    <div><h1>This is color{color}</h1>
    <button onClick={()=>setcolor("green,yellow")}>colors</button>
    </div>
)
}
export default App;
