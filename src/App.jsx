import './App.css'
import { Component } from 'react'
import Statistics from './component/Statistics/Statistics'
import FeedBackOptions from './component/FeedBackOptions/FeedBackOptions'

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
    return (
      good + neutral + bad
    )
  }


  countPositiveFeedbackPercentage = () => {
    const {good} = this.state
    const positive = good / this.countTotalFeedback() * 100
    return Math.floor(positive)
  }


  render(){

    const option = Object.keys(this.state)


    return(
      <>

      <section>
      <h1>Please leave feedback</h1>
      <Statistics options={option} onLeaveFeedback={this.handleCounterFeedback}/>
      </section>

      <section>
        <h2>Statistics</h2>
        {this.countTotalFeedback() > 0 && 
        <FeedBackOptions 
        good={this.state.good}
        neutral={this.state.neutral}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}/>
        }
      </section>
      </>
    )
  }
}

export default App
