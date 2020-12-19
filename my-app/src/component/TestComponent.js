import React from "react";

class TestComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState(
      { counter: this.state.counter + 1 },
      console.log(this.state.counter)
    );
  };
  render() {
    console.log("called");
    return (
      <div>
        <p onClick={() => this.handleClick()}>TestComponent</p>
        {this.state.counter}
      </div>
    );
  }
}

export default TestComponent;
