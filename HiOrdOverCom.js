import React, { Component } from 'react'
import UpdatedComponent from "./CounterCom"

class HiOrdOverCom extends Component {
   
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver = {incrementCount}>
                     Over {count} times 
                </h2>
            </div>
        )
    }
}

export default UpdatedComponent(HiOrdOverCom) 