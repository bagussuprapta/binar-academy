import React from "react";

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  handleClickLesson() {
    alert(`${this.props.name}`)
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            {/* Add the onClick event */}
            <button
              className='modal-close-btn'
              onClick={() => { this.handleClickClose() }}
            >
              Close
            </button>
          </div>
        </div>
      );
    }

    return (
      <div>
        <p>{this.props.name}</p>
        <img src={this.props.image} />
        <button onClick={() => {this.handleClickLesson()}}>View Baby</button>
      </div>
    );
  }
}

export default Lesson;
