import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerService } from "../service/auth.service";

const Register2 = () => {
  const [data, setData] = useState({
    name: "abhi",
    email: "",
    password: "",
    password2: "",
  });

  // navigate
  const navigate = useNavigate();
  const { name, email, password, password2 } = data;
  const onChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    registerService({ name, email, password })
      .then((res) => {
        console.log(res.data);
        navigate("/auth/login");
      })
      .catch((err) => {
        console.log(err);
      });
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

export default Register2;
