import React, { Component } from "react";
import "../Styles/components/contact.scss";
import validator from "validator";

class Contact extends Component {
  state = {
    email: {
      inputStatus: 0, //0 empty, 1 ok, 2 not ok
      validationSuccess: true,
      message: "Email field cannot be empty"
    },
    validateFirstName: 0,
    validateLastName: 0,
    validateMessage: 0
  };

  validateEmail = event => {
    const value = event.target.value;
    if (validator.isEmpty(value)) {
      this.setState({
        email: { inputStatus: 0, validationSuccess: true }
      });
      return;
    }
    if (!validator.isEmpty(value)) {
      if (validator.isEmail(value)) {
        this.setState({
          email: { inputStatus: 1, validationSuccess: true }
        });
        return;
      }
      this.setState({
        email: {
          inputStatus: 2,
          validationSuccess: false,
          message: "Email isn't valid"
        }
      });
    }
  };

  validateInputs = event => {
    const { value, name } = event.target;
    if (validator.isEmpty(value)) {
      if (name === "firstName") this.setState({ validateFirstName: 0 });
      if (name === "lastName") this.setState({ validateLastName: 0 });
      if (name === "message") this.setState({ validateMessage: 0 });
      return;
    }
    if (name === "firstName") this.setState({ validateFirstName: 1 });
    if (name === "lastName") this.setState({ validateLastName: 1 });
    if (name === "message") this.setState({ validateMessage: 1 });
  };

  submitForm = event => {
    //Form submition here
  };

  render() {
    let {
      email,
      validateMessage,
      validateFirstName,
      validateLastName
    } = this.state;
    return (
      <div className="contact-wrapper">
        <div className="top-message">
          <h1>
            WE WOULD LOVE TO <br /> HEAR FROM YOU
          </h1>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="personal-info-container">
            <div className="input-container">
              <input
                id="firstName"
                type="text"
                className="input"
                name="firstName"
                onChange={this.validateInputs}
                placeholder="First name"
              />
              <label
                className={`${
                  validateFirstName === 0 || validateFirstName === 1
                    ? "label-valid"
                    : "label-notValid"
                }`}
                htmlFor="firstName"
              >
                This field cannot be empty
              </label>
              <i
                className={`fa fa-check ${
                  validateFirstName === 1
                    ? "input--ok"
                    : validateFirstName === 0
                      ? ""
                      : "input--bad"
                }`}
              />
            </div>
            <div className="input-container">
              <input
                id="lastName"
                type="text"
                className="input"
                name="lastName"
                onChange={this.validateInputs}
                placeholder="Last name"
              />
              <label
                className={`${
                  validateLastName === 0 || validateLastName === 1
                    ? "label-valid"
                    : "label-notValid"
                }`}
                htmlFor="lastName"
              >
                This field cannot be empty
              </label>
              <i
                className={`fa fa-check ${
                  validateLastName === 1
                    ? "input--ok"
                    : validateLastName === 0
                      ? ""
                      : "input--bad"
                }`}
              />
            </div>
            <div className="input-container">
              <input
                id="email"
                type="email"
                className="input"
                name="email"
                onChange={this.validateEmail}
                placeholder="E-mail"
              />
              <label
                className={`${
                  email.validationSuccess ? "label-valid" : "label-notValid"
                }`}
                htmlFor="email"
              >
                {this.state.email.message}
              </label>
              <i
                className={`fa fa-check ${
                  email.inputStatus === 1
                    ? "input--ok"
                    : email.inputStatus === 0
                      ? ""
                      : "input--bad"
                }`}
              />
            </div>
            <div className="input-container">
              <input
                id="phone"
                type="phone"
                className="input"
                name="phone"
                onChange={this.validateInputs}
                placeholder="Phone number (optional)"
              />
            </div>
          </div>
          <div className="message-input-container">
            <textarea
              id="message"
              className="input"
              name="message"
              onChange={this.validateInputs}
              placeholder="Message"
            />
            <label
              className={`${
                validateMessage === 0 || validateMessage === 1
                  ? "label-valid"
                  : "label-notValid"
              }`}
              htmlFor="email"
            >
              This field cannot be empty
            </label>
            <i
              className={`fa fa-check ${
                validateMessage === 1
                  ? "input--ok"
                  : validateMessage === 0
                    ? ""
                    : "input--bad"
              }`}
            />
          </div>
          <div className="submit-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
