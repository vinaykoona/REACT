import React from "react";
function Childprops (props){
    var emp=[{
        name:"vinay",
        id:1,
    },
{
    name:"nani",
    id:2,
}]
props.getDetails(emp);
return(
    <div> <h1>THIS IS CHILD COMPONENT</h1></div>
)
}
export default Childprops;
// THIS IS DATA TRANSFER FROM CHILD TO PARENT 