import React, { Component } from "react";

class Test extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    console.log("compoent did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
