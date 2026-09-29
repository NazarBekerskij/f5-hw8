import { Component } from "react";


class FeedBackOptions extends Component{
    render(){
        return(
        <>
        <p>Good:{this.props.good}</p>
        <p>Neutral {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.good > 0 ? this.props.positivePercentage:0}%</p>
        </> 
        )
    }
}


export default FeedBackOptions