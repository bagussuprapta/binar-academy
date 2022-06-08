import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Gusde", number: 0 };
  }

  nameClick(name) {
    this.setState({ name: name });
  }

  countClick() {
    this.setState({ number: this.state.number + 1});
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Halo, {this.state.name}</h1>
        <button
          onClick={() => {
            this.nameClick("Gusde");
          }}
        >
          Gusde
        </button>
        <button
          onClick={() => {
            this.nameClick("FSW-13");
          }}
        >
          FSW-13
        </button>
        <h1>{this.state.number}</h1>
        <button onClick={() => {this.countClick()}}>+</button>
      </div>
    );
  }
}

export default App;
