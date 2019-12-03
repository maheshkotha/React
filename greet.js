import React, { Component } from 'react';


// function Greet() {
//     return <h1>Hello World</h1>
// }

const Greet = (props) => {
    console.log(props);
return <h1>Hello World {props.name}</h1>
}
export default Greet;