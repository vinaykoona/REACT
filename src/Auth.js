import React,{useContext} from 'react';
import {Usecontext} from './Usecontext'

function Auth() {
    const { user, logout } = useContext(Usecontext);
    return (
    <>
    <h1>Hello, {user.name}!</h1>
    <button onClick={logout}>Logout</button>
    </>
    );
    }
    export default Auth;