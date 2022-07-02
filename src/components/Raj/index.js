import {Component} from 'react'

class Raj extends Component {
  render() {
    const {name, role} = this.props
    return (
      <div>
        <h4>{name}</h4>
        <h3>{role}</h3>
      </div>
    )
  }
}
Raj.defaultProps = {
  name: 'Epsoft',
  role: 'React developer',
}
export default Raj
