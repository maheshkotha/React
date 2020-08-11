import React, { Component, version } from 'react'
import withCounter from './Counter'


class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props

        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hovered { count } Times</h1>                                
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10);
