import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginAction } from "../redux/actions/authActions";
export const Login3 = ({ isAuthenticated, loginAction }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const onChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    loginAction(data);

    //
  };
  return (
    <>
      {" "}
      return (
      <>
        <section class="container">
          <div class="alert alert-danger">Invalid credentials</div>
          <h1 class="large text-primary">Sign In</h1>
          <p class="lead">
            <i class="fas fa-user"></i> Sign into Your Account
          </p>
          <form class="form" action="dashboard.html">
            <div class="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
              />
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" name="password" />
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
          </form>
          <p class="my-1">
            Don't have an account? <a href="register.html">Sign Up</a>
          </p>
        </section>
      </>
      );
    </>
  );
};
Login3.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginAction: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

const mapDispatchToProps = { loginAction };

export default connect(mapStateToProps, mapDispatchToProps)(Login3);
