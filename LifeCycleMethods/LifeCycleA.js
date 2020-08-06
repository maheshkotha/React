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
    
    shouldComponentUpdate() {
        console.log("Lifecycle A shouldComponentUpdate");
        return true;
    }
    
    getSnapshotBeforeUpdate() {
        console.log("Lifecycle A getSnapshotBeforeUpdate");
        return null;
    }
 
    componentDidUpdate() {
        console.log('componentDidUpdate LifeCycle A');
    }

    changeState = () => {
        this.setState({
            name: 'code'
        })
    }
    render() {
        console.log("Render LifeCycle A");
        return (
            <div>
                LifeCycleA
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
