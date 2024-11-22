import React,{createContext,useState} from "react";
export const Usecontext=createContext({
    name:'',
    auth:false,

});
export const UserProvider=({children})=>{
    const[user,setUser]=useState({name:'',auth:false});
    const login=(name)=>{
        setUser({name,auth:true})
    };
    const logout=()=>{
        setUser({name:'',auth:false});
    };
    return(
        <Usecontext.Provider value={{user,login,logout}}>
            {children}

        </Usecontext.Provider>
    );

};