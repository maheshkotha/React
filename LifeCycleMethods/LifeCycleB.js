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
    
    componentDidMount() {
        console.log('componentDidMount Lifecycle B');
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
