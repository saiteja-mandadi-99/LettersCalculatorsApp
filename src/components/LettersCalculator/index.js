import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  // Initializing the state with a count of 0
  state = {count: ''}

  // Method to handle changes in the input field
  // It updates the state with the length of the input value
  onChangecount = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state // Destructuring count from the state

    return (
      <div className="appContainer">
        <div className="input-container">
          <h1 className="mainHeading">Calculate the Letters you enter</h1>

          <label htmlFor="inputEle" className="labelfor">
            Enter the phrase
          </label>

          <input
            id="inputEle"
            placeholder="Enter the phrase"
            type="text"
            className="input"
            onChange={this.onChangecount}
            value={count}
          />
          <br />

          <p className="button">No.of letters: {count.length}</p>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className=""
        />
      </div>
    )
  }
}

export default LettersCalculator
