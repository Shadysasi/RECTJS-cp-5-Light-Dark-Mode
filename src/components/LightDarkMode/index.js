// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const modeClassName = isDarkMode ? 'dark-Mode' : 'light-Mode'

    return (
      <div className="bg-container">
        <div className={`card-container ${modeClassName}`}>
          <h1 className="title">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
