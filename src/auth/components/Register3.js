import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";

import { registerAction } from "../redux/actions/authActions";
// we will get the store content via props
const Register3 = ({ isAuthenticated, registerAction }) => {
  const [data, setData] = useState({
    name: "abhi",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = data;
  const onChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    registerAction(data);

    //
  };
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Create Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={name}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
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
              value={password}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={onChange}
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};
// we need to provide the details of props
// better to provide the details to have understanding about the
// module data usage in component.
Register3.propTypes = {
  isAuthenticated: PropTypes.bool,
  registerAction: PropTypes.func.isRequired,
};
// reducer usage mapping

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});
// we will have the deatils about ur actions.
const mapDispatchToProps = {
  registerAction,
};
// here we are confirming that we are going to connect to the store for the following purposes
export default connect(mapStateToProps, mapDispatchToProps)(Register3);
