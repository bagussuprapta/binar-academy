import React from "react";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Gusde" };
  }

  nameClick(name){
    this.setState({name: name})
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Halo, {this.state.name}</h1>
        <button onClick={() => {this.nameClick("Gusde")}}>Gusde</button>
        <button onClick={() => {this.nameClick("FSW-13")}}>FSW-13</button>
      </div>
    );
  }
}

export default App;
