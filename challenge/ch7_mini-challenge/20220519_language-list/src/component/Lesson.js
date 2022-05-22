import React from "react";

class Lesson extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.name}</p>
        <img src={this.props.image}/>
      </div>
    )
  }
}

export default Lesson;