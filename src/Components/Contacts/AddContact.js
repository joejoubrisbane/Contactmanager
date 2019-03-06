import React, { Component } from "react";
import { Consumer } from "../../Context";
// import uuid from "uuid";
import TextinputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
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

    const newContact = {
      name,
      email,
      phone
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });
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
              <div className="card-header">Add Contact</div>
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
                    value="Add Contact"
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

export default AddContact;
