import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends Component {
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
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;
