import { Component } from "react";

class Statistics extends Component {
    render(){
      
        return(
            <div>
        {this.props.options.map((btn) => {
          return (<button onClick={() => this.props.onLeaveFeedback(btn)} key={btn} type="button">{btn}</button>)
        })}
      </div>
        )
    }
}

export default Statistics 