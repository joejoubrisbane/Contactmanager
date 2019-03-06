import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "wqwdq",
          email: "pl@getMaxListeners.com",
          phone: "0432794742"
        },
        {
          id: 2,
          name: "w2",
          email: "pl",
          phone: "0432794742"
        },
        {
          id: 3,
          name: "wq333q",
          email: "pl@getMax23rs.com",
          phone: "0432794742"
        }
      ]
    };
  }
  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
