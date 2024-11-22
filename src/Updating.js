import React from "react";
class Updating extends  React.Component{
    constructor(props){
        super(props);
        this.state={count:0}
            console.log("constructor:components beimng intaized");
        }
        componentDidMount(){
            console.log("componentDidMount:component is created added to DOM");
        }
        componentDidUpdate(prevProps,prevState){
            console.log("componentDidUpdate:component has been updated");
        }
        componentWillUnmount(){
            console.log("componentWillUnmount:it will remove from DOM");
        }
        increment=()=>{
            this.setState((prevState)=>({
count:prevState.count+2
            }))
        }
render(){
    console.log("component rendering");
    return(
        <div><h1>THIS IS LIFE CYCLE </h1>
        <h3>counter:{this.state.count}</h3>
        <button onClick={this.increment}>increment</button>
        </div>
    )
}
    }
    export default Updating;