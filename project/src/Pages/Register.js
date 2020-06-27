import React, { useState, useContext } from "react";
import css from "./colors.module.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "./contextfile";
import { Link } from "react-router-dom";

function Login() {
  const [username, setName] = useState();
  const [email, setEmail] = useState();
  const [job, setJob] = useState();
  const [password, setPassword] = useState();
  const [display, setdisplay] = useState();
  const { value, setValue } = useContext(UserContext);
  const [clicked, setClicked] = useState(false);

  function Track(event) {
    setName(event.target.value);
  }
  function Tracking(event) {
    setEmail(event.target.value);
  }

  function DoneTracked(event) {
    setJob(event.target.value);
  }
  function Traced(event) {
    setPassword(event.target.value);
  }

  let history = useHistory();

  function submitHandler(e) {
    setClicked(true);
    e.preventDefault();
    setdisplay("Submitted");

    const data = { username, email, job, password };
    console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:3002/Register", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.status);
        if (data.status === "success") {
          setValue(true);

          console.log("this is", data);
        } else {
          history.push("/Login");
        }
      });
  }

  return (
    <div className={css.Form}>
      <form className={css.input} onSubmit={submitHandler}>
        <h1>Create An Account</h1>
        <input onChange={Track} placeholder="name please" value={username} />
        <input onChange={Tracking} placeholder="email please" value={email} />
        <input
          onChange={DoneTracked}
          placeholder="Occupation please"
          value={job}
        />
        <input
          onChange={Traced}
          placeholder="Password please"
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
            Register Account
          </button>
        )}

        <p> Already Have an Account?</p>
        <Link to="/Login">
          <p>Go to Login </p>
        </Link>
      </form>
    </div>
  );
}

export default Login;
