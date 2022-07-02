import {Component} from 'react'

class TernaryOperaters extends Component {
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

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        {isLoggedIn ? (
          <button type="button" onClick={this.gotoLogin}>
            LogOut
          </button>
        ) : (
          <button type="button" onClick={this.gotoLogOut}>
            Login
          </button>
        )}
      </div>
    )
  }
}

export default TernaryOperaters
