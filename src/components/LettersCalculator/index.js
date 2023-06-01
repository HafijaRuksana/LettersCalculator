// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChange = event => {
    const inputText = event.target.value
    this.setState({
      count: inputText.length,
    })
  }

  render() {
    const {count, searchInput} = this.state

    return (
      <div className="count-letter-app">
        <div className="content-card">
          <div className="input-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="description" htmlFor="userInput">
              Enter the phrase
            </label>
            <input
              type="text"
              value={searchInput}
              className="input-element"
              placeholder="Enter the phrase"
              onChange={this.onChange}
              id="userInput"
            />
            <p className="letter-count">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
