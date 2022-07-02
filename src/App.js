import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
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
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />

        {this.renderBtn()}
      </div>
    )
  }
}

export default App
