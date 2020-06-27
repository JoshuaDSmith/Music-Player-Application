import React, { useState, useContext } from "react";
import css from "./colors.module.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "./contextfile";
import { Link } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { value, setValue } = useContext(UserContext);
  const [clicked, setClicked] = useState(false);

  function Track(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }
  function Tracking(event) {
    setPassword(event.target.value);
    console.log(event.target.value);
  }
  function dissplay(e) {
    e.preventDefault();

    console.log(email + password);
  }

  function submitHandler(e) {
    e.preventDefault();
    setClicked(true);
    const data = { email, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:3002/Login", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.status);
        if (data.status === "success") {
          setValue(true);
          history.push("/About");
          console.log("this is", data);
        }
      });
  }

  return (
    <div className={css.Form}>
      <form className={css.input} onSubmit={dissplay}>
        <h1>Welcome Back, Log In</h1>
        <input onChange={Track} placeholder="Enter your email" value={email} />
        <input
          onChange={Tracking}
          placeholder="Enter your password"
          value={password}
        />

        {clicked ? (
          <button
            className={css.button}
            onClick={submitHandler}
            style={{ backgroundColor: "#33c8ff", borderRadius: 15 }}
          >
            Processing
          </button>
        ) : (
          <button
            className={css.button}
            onClick={submitHandler}
            style={{ backgroundColor: "#2efea1", borderRadius: 15 }}
          >
            Login
          </button>
        )}

        <p> No Registered Account?</p>
        <Link to="/Register">
          <p>Create an Account </p>
        </Link>
      </form>
    </div>
  );
}

export default Login;
