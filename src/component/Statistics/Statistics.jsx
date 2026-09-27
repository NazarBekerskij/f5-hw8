import { Component } from "react";


class Statistics extends Component{
    render(){
        // const option = Object.keys(this.state)
        return(
             <div>
        {this.props.options.map((btn) => {
          return (
            <button key={btn} onClick={() => this.props.onLeaveFeedback(btn)} type="button">{btn}</button>
          )
        })}
      </div> 
        )
    }
}


export default Statistics