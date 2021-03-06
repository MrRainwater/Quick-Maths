import * as React from 'react'
import Matrix from './matrix'

export default class Vector extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      vector: [0,0,0] || props.vector
    }
  }

  onChange(matrix) {
    let vector = matrix
    this.setState({
      vector
    }, () => {
      this.props.onChange(this.state.vector)
    })
  }

  render() {
    return (
      <Matrix
        columns={[this.state.vector]}
        resize="vertical"
        onChange={this.onChange.bind(this)}/>
    )
  }
}
