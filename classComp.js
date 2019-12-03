import React, { Component } from 'react'

class Welcome extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                message: 'Welcome visitor'
             }
        }
        
        
        changeMessage() {
            this.setState({
                message: "Thank u"
            })
        }
     
    render() {
        return (
        <div>
            <h1>Hello world { this.state.message} </h1>
            <button onClick = {() =>this.changeMessage()}>Subscribe</button>
        </div>
        );
    }

}

export default Welcome;