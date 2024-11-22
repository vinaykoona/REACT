import React from "react";
class Mounting extends  React.Component{
    constructor(props){
        super(props);
            console.log("constructor:components beimng intaized");
        }
        componentDidMount(){
            console.log("componentDidMount:component is created added to DOM");
        }
        componentDidUpdate(){
            console.log("componentDidUpdate:component has been updated");
        }
        componentWillUnmount(){
            console.log("componentWillUnmount:it will remove from DOM");
        }
render(){
    return(
        <div><h1>THIS IS LIFE CYCLE MOUNTING FIRST PHASE </h1></div>
    )
}
    }
    export default Mounting;

