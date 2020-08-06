import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "mahesh"
      }

      console.log('LifeCycle B constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle B getDerivedStateFromProps');
        return null
    }
    
    shouldComponentUpdate() {
        console.log("Lifecycle B shouldComponentUpdate");
        return true;
    }
    
    getSnapshotBeforeUpdate() {
        console.log("Lifecycle B getSnapshotBeforeUpdate");
        return null;
    }
 
    componentDidUpdate() {
        console.log('componentDidUpdate LifeCycle B');
    }
    render() {
        console.log("Render Lifecycle B");
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
