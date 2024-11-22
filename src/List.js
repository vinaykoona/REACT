import React from "react";
function List(){
    const color=["red","yellow"]
    return(
        <>
        <h1>
            THIS IS LIST</h1>
            <ul>
                {
                    color.map((color,index)=>(
                        <li>{color}</li>
                    )
                )
                }
            </ul>
            </>
    )
}
export default List;