import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "mahesh"
      }

      console.log('LifeCycle A constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps');
        return null
    }
    
    componentDidMount() {
        console.log('componentDidMount LifeCycle A');
    }

    render() {
        console.log("Render LifeCycle A");
        return (
            <div>
                LifeCycleA
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
