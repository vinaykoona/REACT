import React from 'react'
function Parentprops(props) {
console.log(props);
return (
<div>
<h1>I am Child Component</h1>
<h2>{props.getData.name}</h2>
<h2>{props.getData.id}</h2>
<h2>{props.getData.Address}</h2>
</div>
)
}
export default Parentprops;

// DATA TRANSFER FROM PARENT TO CHILD