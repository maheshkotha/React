import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
      console.log("Pure Component");
    return (
      <>
        Pure component {this.props.name}
      </>
    )
  }
}

export default PureComp
