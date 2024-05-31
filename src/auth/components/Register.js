import React, { Component } from "react";
import { registerService } from "../service/auth.service";

export default class Register extends Component {
  // to maintain the state of the component
  // we have to work with the concept called state.
  constructor() {
    super();
    this.state = {
      name: "advik",
      email: "",
      password: "",
      password2: "",
      err: {},
    };
  }
  onChange = (e) => {
    // e.target.name
    // e.target.value
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    console.log("hello from submit" + JSON.stringify(this.state));

    registerService(this.state)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err.response.data);

        let errDetails = {};
        err.response.data.errors.forEach((e) => {
          console.log(e.param + e.msg);
          // param : key
          // msg : value
          // errDetails object
          errDetails[e.param] = e.msg;
        });
        console.log(errDetails);
        this.setState({ err: { ...errDetails } });
      });
  };
  render() {
    return (
      <>
        {" "}
        <section class="container">
          <h1 class="large text-primary">Sign Up</h1>
          <p class="lead">
            <i class="fas fa-user"></i> Create Your Account
          </p>
          <form class="form" onSubmit={this.onSubmit}>
            <div class="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.name}
                required
                onChange={this.onChange}
              />
              <div class="d-block invalid-feedback">{this.state.err.name}</div>
            </div>
            <div class="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <div class="d-block invalid-feedback">{this.state.err.email}</div>
              <small class="form-text">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={this.state.password}
                onChange={this.onChange}
              />
              <div class="d-block invalid-feedback">
                {this.state.err.password}
              </div>
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                value={this.state.password2}
                onChange={this.onChange}
              />
              <div class="d-block invalid-feedback">
                {this.state.err.password2}
              </div>
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
          </form>
          <p class="my-1">
            Already have an account? <a href="login.html">Sign In</a>
          </p>
        </section>
      </>
    );
  }
}
