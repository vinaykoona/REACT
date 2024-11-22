
import React,{useContext,useState} from "react";
import { Usecontext } from "./Usecontext";
function Unauth(){
const {login}=useContext(Usecontext);
const[name,setName]=useState('');
return(
    <>
    <h2>Hlo,please login</h2>
    <label>Name:</label>
<input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
<button onClick={()=>login(name)}>Login</button>
    </>
);
};
export default Unauth;
