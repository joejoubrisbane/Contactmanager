import React, { Component } from "react";
import { Consumer } from "../../Context";
// import uuid from "uuid";
import TextinputGroup from "../layout/TextInputGroup";
import axios from "axios";
import Contact from "./Contact";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      phone: contact.phone,
      email: contact.email
    });
  }
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    // without e.preventDefault(); , the website will refresh every time we submit
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      console.log("wow");
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      console.log(this.state.errors);
      return;
    }
    const updContacts = {
      name,
      email,
      phone
    };
    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContacts
    );
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };
  onChangeContact = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextinputGroup
                    name="name"
                    label="Name"
                    onChange={this.onChangeContact}
                    placeholder="Enter Name"
                    value={name}
                    error={errors.name}
                  />
                  <TextinputGroup
                    name="phone"
                    label="Phone"
                    onChange={this.onChangeContact}
                    placeholder="Enter Phone"
                    value={phone}
                    error={errors.phone}
                  />
                  <TextinputGroup
                    name="email"
                    type="email"
                    label="Email"
                    onChange={this.onChangeContact}
                    placeholder="Enter Email"
                    value={email}
                    error={errors.email}
                  />

                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-block btn-danger"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
