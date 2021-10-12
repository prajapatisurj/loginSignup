import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, mobile, password, reEnterPassword } = user;
    if (name && email && mobile && password && password === reEnterPassword) {
      axios.post("http://localhost:8000/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="register">
      <div className="wrapper">
        <h1>Register</h1>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        <label htmlFor="mobile">Mobile</label>
        <input
          type="mobile"
          name="mobile"
          value={user.mobile}
          placeholder="Your Mobile Number"
          onChange={handleChange}
        ></input>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <label htmlFor="Re-Enter-Password">Re-Enter Password</label>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <div className="createAccount">
          <button className="button" type="submit" onClick={register}>
            Create Account
          </button>
        </div>
        <div className="createAccount">
          <button
            className="button"
            type="submit"
            onClick={() => history.push("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
