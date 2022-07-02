import {Component} from 'react'

class ElementVariables extends Component {
  state = {
    isLoggedIn: true,
  }

  gotoLogin = () => {
    this.setState(() => ({
      isLoggedIn: false,
    }))
  }

  gotoLogOut = () => {
    this.setState(() => ({
      isLoggedIn: true,
    }))
  }

  renderBtn = () => {
    const {isLoggedIn} = this.state
    let resultButton
    if (isLoggedIn) {
      resultButton = (
        <button type="button" onClick={this.gotoLogin}>
          LogOut
        </button>
      )
    } else {
      resultButton = (
        <button type="button" onClick={this.gotoLogOut}>
          Login
        </button>
      )
    }
    return resultButton
  }

  render() {
    return <div className="container">{this.renderBtn()}</div>
  }
}

export default ElementVariables
