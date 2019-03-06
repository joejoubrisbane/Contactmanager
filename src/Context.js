import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
/* the name of Context can be any other name, the createContext call
the Context.API where it comes with two elements: <Provider> and <Consumer> */

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(json => json.json())
    //   .then(data => {
    //     this.setState({ contacts: data });
    //   });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ contacts: res.data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
// so we can use Consumer instead of Context.Consumer.
