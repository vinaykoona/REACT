import React,{useState} from "react";
function FunctionState(){
    const[loginForm,setLoginForm]=useState({
    username:"",
    password:"",
    });
    const getData=(event) =>{
    var value=event.target.value;
    var name=event.target.name;
    setLoginForm({...loginForm,
    [name]:value
    });
    }
    const submitData=(event)=>{event.preventDefault();
        console.log("Final state",loginForm);
        }
        return(
        <div>
        <form>
        <input type='text' onChange={getData} name='username' />
        <br></br>
        <input type='password' onChange={getData} name='password'
        /> <br></br>
        
<button onClick={submitData} >Login</button>
</form>
</div>
        )
    }
    export default FunctionState;

    