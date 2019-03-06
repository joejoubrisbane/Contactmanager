import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapse from "./Collapse";
class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    // because it is a class so we need to use this.props otherwise just props
    const { name, email, phone ,id} = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down "
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer ", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        <Collapse showContactInfo={this.state.showContactInfo}>
          <ul className="list-group">
            <li className="list-group-item">Email:{email}</li>
            <li className="list-group-item">Phone:{phone}</li>
          </ul>
        </Collapse>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
