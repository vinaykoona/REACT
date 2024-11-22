// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;


// **** *class based democomponent--------------------------------------
// import React from 'react';
// import Democomponent from './components/Democomponent';
// function App() {
//   return (
//     <div className="App">
//       <Democomponent />
//     </div>
//   );
// }
// export default App;



// export default App;--------------------------------------------
// example for react project 
// import React from "react";
// import Home from './components/Home';
// function App(){
//   return(
//     <div className="App">
//       <p>HI This Is My Reactapp</p>
//       <Home></Home>

//     </div>
//   )  
// }
// export default App;



// ***function base example------------------------------------
// import React from "react";
// import Demofunction from './components/Demofunction';
// function App(){
//   return (
//     <div className="App">
//     <h1>FUNCTION BASED COMPONENT</h1>
//     </div>
//   );
// }
// export default App;



// ***rendor method example CLASS BASED EXAMPLE ----------------------------------------------
// import React from 'react';
// import  './App.css';
// import Home from './components/Home';

//  function App(){
//   return(
//   <div className="App">
//     <h1>THIS IS MY RENDURING METHOD CLASS BASED EXAMPLE </h1>
//   <Home></Home>
//   </div>
//   )
//  }
//  export default App;


// ***FUNCTIONSTATE BASED COMPONENT-----------------------------------------
// import React from "react";
// import FunctionState from "./components/FunctionState";
//  function App(){
//   return(
//     <div className="App"><h1>THIS IS FUNCTION BASED STATE COMPONENT</h1>
//     <FunctionState></FunctionState></div>
//   )
//  }
//  export default App;



 // ***PARENT TO CHILD PROPS-------------------------------------------------
// import React from "react";
// import Parentprops from "./components/Parentprops";
//   function App(){
//     var user={
//       name:"vinnu",
//       id:2,
//       Address:"Warangal",
//     }
//     return(
//       <div>
//         <h1>THIS PARENT PROPS</h1>
//         <Parentprops getData={user}></Parentprops>

//       </div>
//     )
//   }
//   export default App;





//** PROPS EXAMPLE FROM CHILD TO PARENT DATA TRANSFER */-------------------------------------
// import React from "react";
// import Childprops from './components/Childprops';
// function App() {
//   var getEmp=(emp)=>{
//   console.log(emp);
//   }
//   return (
//   <div className="App">
//   <h4>I am parent component </h4>
//   <Childprops getDetails={getEmp}></Childprops>
//   </div>
//   );
//   }
//   export default App;
 

//**LIFE CYCLE MOUNTING */------------------------------------------
// import React from "react";
// import Mounting from './components/Mounting';
// function App(){
//   return (
//     <div><h1>THIS IS LIFE CYCLE PROCESS</h1>
//     <Mounting></Mounting>
//     </div>
//   )
// }

// export default App;



// **UPDATING---------------------------------------------
// import React from "react";
// import Updating from './Updating';
// function App(){
//   return (
//     <div><h1>THIS IS LIFE CYCLE PROCESS UPDATING THE VALUE OF INCREMENT</h1>
// <Updating></Updating>
//     </div>
//   )
// }
// export default App;


//*** HOOKS USE STATE COLOR */--------------------------
// import React from "react";
// import Usestate from './Usestate';
// function App(){
//   return(
//     <div><h1>THIS IS USESTATE IN HOOKS </h1>
//     <Usestate></Usestate>
//     </div>
//   )
// }
// export default App;


// **USEEFFECT IN HOOKS -------------------------------------
// import React from "react";
// import Useeffect from "./Useeffect";
// function App(){
//     return(
//       <div><h1>THIS IS USEEFFECT IN HOOKS </h1>
//       <Useeffect></Useeffect>
//       </div>
//     )
//   }
//   export default App;


//*use context example by using prop handling----------------------------
// import React,{useContext} from "react";
// import { Usecontext } from "./Usecontext";
// import Auth from './Auth';
// import Unauth from './Unauth';
// function App(){
//   const{user}=useContext(Usecontext);
//   return user.auth?<Auth/>:<Unauth/>
// }
// export default App;

// USEREFERNCE EXAMPLE  
// import React from "react";
// import Useref from './Useref';

// function App(){
//  return(
//   <div><h1>THIS IS USE REF</h1>
//   <Useref></Useref>
//   </div>
//  );
// }
// export default App;

// LOGIN PAGE-----------------------------------------------------------

// import React from "react";
// import Login from './Login';
// // import Reg from './Reg';
// import { BrowserRouter, RouterProvider } from "react-router-dom";

// function App(){
// return(
// //     <div>
// // <Login></Login>
// //         <Reg></Reg>
// //     </div>
// <BrowserRouter>
// <Routes>
//     <Route path="/Login" element={<Login/>}/>
//     {/* <Route path="/Reg" element={<Reg/>}/> */}

// </Routes>
// </BrowserRouter>
// );
// };
// export default App;




// src/App.js----------------------------------------------------------------------

// src/App.js    for login page and reg home task
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Login from "./Login";
// import Reg from "./Reg";
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>GMS App</h1>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/Login">Login</Link>
//             </li>
//             <li>
//               <Link to="/Reg">Register</Link>
//             </li>
            
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/Login" element={<Login/>} />
//           <Route path="/Reg" element={<Reg />} />
       
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


//USE MEMO EXAMPLE------------------------------------------------------
// import React from "react";
// import Usememo from './Usememo';

// function App(){
//  return(
//   <div><h1>THIS IS USE Memo</h1>
//   <Usememo></Usememo>
//   </div>
//  );
// }
// export default App;



// ..........EMPLOYEE ADD EMPLOYEES  Deatils -----------------------------------------
// import React,{useState} from "react";
// import Employees from "./Employees";
// import './App.css';
// function App(){
//     const [employees,setEmployees]=useState([]);

//     // taking input fileds 
//     const [name,setName]=useState("");
//     const [position,setposition]=useState("");
//     // adding the new empolyees
//     const handleEmployees=()=>{
//         if(name&&position){
//             const newEmployees={name,position};
//             setEmployees([...employees, newEmployees]);
//             setName("");
//             setposition("");
//         };
//     };
//         return(
//             <div className="App">
//                 <h1>
//                     EmployeeManagement
//                 </h1>
//                 <div> <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter u r name " value={name}></input>
//                 <input
//               type="text"
//               placeholder="Enter position"
//               value={position}
//               onChange={(e) => setposition(e.target.value)}
//             />
//             <button onClick={handleEmployees}>Add Employees</button>
//                 </div>
//                 <Employees employees={employees} />
//             </div>
//         )
//     }
//    export default App;

// USE CALLBACK  thursday ---------------------------------------------------------  
// import React from "react";
// import Usecall from './Usecall';
// function App(){
//   return(
//     <div className="root">
//       <Usecall></Usecall>
//     </div>
//   )
// }
// export default App;

// CONDITIONAL RENDURING EXAMPLE 
// import React from "react";
// import Components from "./Components";

// function App(){
//   return(
//     <div>
//     <h1>CONDITIONAL RENDURING</h1>
//      <Components></Components>
//     </div>
//   )
// }
// export default App;


// list 
import React from "react";
import List from "./List";
function App(){
  return(
    <>
    <h1> </h1>
    <List></List>
    </>
  )
}
export default App;