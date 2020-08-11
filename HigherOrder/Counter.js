import React from 'react'

// Why Higher Order Components?

/*
    To Share common functionality between components

    A pattern where a function takes a component as an argument and return a new component.

    const NewComponent = higherOrderComponent(originalComponent)

    const EnhancedComponent = higherOrderComponent(originalComponent)

*/

const withCounter = (WrappedComponent, incrementNumber) => {
    
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
        }
          
        incrementCount = () => {
            this.setState(previousState => {
                return { count: previousState.count + incrementNumber }
            })
        }

        
        render() {
            return <WrappedComponent 
                        count={this.state.count} 
                        incrementCount={this.incrementCount} 
                        {...this.props}
                    />
        }
    }

    return WithCounter
}

export default withCounter;