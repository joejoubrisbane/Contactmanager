import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class Contacts extends Component {
  state = {
    searchField: "",
    newContacts: []
  };
  componentDidMount() {}
  onChange = (contacts, e) => {
    this.setState({ searchField: e.target.value });

    const newcontact = contacts.filter(contact => {
      return contact.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });
    this.setState({ newContacts: newcontact });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span>
                List
              </h1>
              <input
                placeholder="search users"
                className="border border-primary rounded w-75 p-3 text-center font-weight-bold"
                onChange={this.onChange.bind(this, value.contacts)}
              />
              {this.state.searchField
                ? this.state.newContacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                  ))
                : value.contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                  ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
