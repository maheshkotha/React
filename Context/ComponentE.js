import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentE extends Component {
    render() {
        return (
            
            <UserConsumer>
                {
                    (userName, wish) => {
                        return <div>Hello {userName } { wish }</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentE
