import {Component} from 'react'

class ConditionalRender extends Component {
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

    if (isLoggedIn) {
      return (
        <button type="button" onClick={this.gotoLogin}>
          LogOut
        </button>
      )
    }

    return (
      <button type="button" onClick={this.gotoLogOut}>
        Login
      </button>
    )
  }

  render() {
    return <div className="container">{this.renderBtn()}</div>
  }
}

export default ConditionalRender
