// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {btnText: 'Light Mode'}

  onClickBtn = () => {
    this.setState(prevState => ({
      btnText: prevState.btnText === 'Light Mode' ? 'Dark Mode' : 'Light Mode',
    }))
  }

  headAuth = () => {
    const {btnText} = this.state

    if (btnText === 'Light Mode') {
      return <h1 className="headingWhite">Click To Change Mode</h1>
    }
    return <h1 className="headingBlack">Click To Change Mode</h1>
  }

  bgCardAuth = () => {
    const {btnText} = this.state
    if (btnText === 'Light Mode') {
      return 'cardDark'
    }
    return 'cardLight'
  }

  render() {
    const {btnText} = this.state

    return (
      <div className="bg">
        <div className={this.bgCardAuth()}>
          {this.headAuth()}
          <button type="button" className="btnEl" onClick={this.onClickBtn}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
