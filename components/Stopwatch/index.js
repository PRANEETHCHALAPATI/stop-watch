import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {
    timerTime: 0,
    isRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  tick = () => {
    this.setState(prevState => ({
      timerTime: prevState.timerTime + 1,
    }))
  }

  onClickStart = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      this.intervalId = setInterval(this.tick, 1000)
      this.setState({isRunning: true})
    }
  }

  onClickStop = () => {
    clearInterval(this.intervalId)
    this.setState({isRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.intervalId)
    this.setState({timerTime: 0, isRunning: false})
  }

  formatTime = () => {
    const {timerTime} = this.state
    const minutes = String(Math.floor(timerTime / 60)).padStart(2, '0')
    const seconds = String(timerTime % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  render() {
    const formattedTime = this.formatTime()

    return (
      <div className="main-container">
        <div className="x">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="stop-watch-card">
            <div className="timer-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-logo"
                alt="stopwatch"
              />
              <p className="timer-name">Timer</p>
            </div>
            <h1 className="timer-countdown">{formattedTime}</h1>
            <div className="button-container">
              <button
                className="start-button"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="stop-button"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="reset-button"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
 
