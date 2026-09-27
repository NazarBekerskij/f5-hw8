import './App.css'
import { Component } from 'react'
import Statistics from './component/Statistics/Statistics'

class App extends Component{

  state = {
  good: 0,
  neutral: 0,
  bad: 0
}


  handleCounterFeedback = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1
      }
    }) 
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
     const {good} = this.state
     const positive = good / this.countTotalFeedback() * 100
      return Math.floor(positive)
      
  }

  render(){
    
    return(
      <>
      <section>
      <h1>Please leave feedback</h1>
      <Statistics options={option} onLeaveFeedback={this.handleCounterFeedback}/>
      </section>

      <section>
        <h2>Statistics</h2>
        {this.countTotalFeedback() > 0 && (
          <>
          <p>Good: {this.state.good}</p>
        <p>Neutral {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feetback: {this.state.good > 0? this.countPositiveFeedbackPercentage():0}%</p>
        </>
        )}
        
      </section>
      </>
    )
  }
}


export default App
