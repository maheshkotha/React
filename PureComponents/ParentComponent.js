import React, { Component } from 'react'
import RegComponent from './RegComponent'
import PureComp from './PureComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "mahesh"
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "mahesh"
            })
        }, 2000)
    }
    
    render() {
        console.log("****************Parent Component **************");
        return (
            <div>
                Parent Component                
                <RegComponent name={this.state.name}></RegComponent>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComponent
