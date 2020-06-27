import React, { useState } from "react";
import css from "./colors.module.css";

function App() {
  const [display, setDisplay] = useState(false);
  const [react, setReact] = useState(false);

  function handleChange() {
    if (display === false) {
      setDisplay(true);
    } else if (display === true) {
      setDisplay(false);
    }
  }
  function Frontend() {
    if (react === false) {
      setReact(true);
    } else if (react === true) {
      setReact(false);
    }
  }

  return (
    <div className={css.background}>
      <div>
        <div className={css.grid}>
          <div className={css.container}>
            <button className={css.button} onClick={handleChange}>
              SQL & POSTGRES
            </button>

            {display ? (
              <p className={css.textground}>
                Structured Query Language) is a domain-specific language used in
                programming and designed for managing data held in a relational
                database management system
              </p>
            ) : (
              <p></p>
            )}
          </div>

          <div className={css.container}>
            <button className={css.button} onClick={Frontend}>
              React & React Native
            </button>
            {react ? (
              <p className={css.textformat}>
                React is a declarative, efficient, and flexible JavaScript
                library for building user interfaces. It lets you compose
                complex UIs from small and isolated pieces of code called
                “components”.
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className={css.container}>
            <button className={css.button} onClick={Frontend}>
              Node.JS & Javascript
            </button>
            {react ? (
              <p className={css.textformat}>
                Node. js is a platform built on Chrome's JavaScript runtime for
                easily building fast and scalable network applications. Node. js
                uses an event-driven, non-blocking I/O model that makes it
                lightweight and efficient,
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className={css.container}>
            <button className={css.button} onClick={Frontend}>
              Bash/ Command Line & Github
            </button>
            {react ? (
              <p className={css.textformat}>
                Bash is a shell program. A shell program is typically an
                executable binary that takes commands that you type and (once
                you hit return), translates those commands into (ultimately)
                system calls to the Operating System API
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className={css.CircleContainer}>
            <img src={require("../Assets/Joshua.jpeg")} className={css.icon} />
            <p className={css.textformat}>Joshua Douglas-Smith</p>

            <p></p>
          </div>
          <div className={css.container}>
            <button className={css.button} onClick={Frontend}>
              Bash/ Command Line & Github
            </button>
            {react ? (
              <p className={css.textformat}>
                Bash is a shell program. A shell program is typically an
                executable binary that takes commands that you type and (once
                you hit return), translates those commands into (ultimately)
                system calls to the Operating System API
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className={css.container}>
            <button className={css.button} onClick={Frontend}>
              Bash/ Command Line & Github
            </button>
            {react ? (
              <p className={css.textformat}>
                Bash is a shell program. A shell program is typically an
                executable binary that takes commands that you type and (once
                you hit return), translates those commands into (ultimately)
                system calls to the Operating System API
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className={css.container}>
            <button className={css.button} onClick={Frontend}>
              Bash/ Command Line & Github
            </button>
            {react ? (
              <p className={css.textformat}>
                Bash is a shell program. A shell program is typically an
                executable binary that takes commands that you type and (once
                you hit return), translates those commands into (ultimately)
                system calls to the Operating System API
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className={css.container}>
            <button className={css.button} onClick={Frontend}>
              Bash/ Command Line & Github
            </button>
            {react ? (
              <p className={css.textformat}>
                Bash is a shell program. A shell program is typically an
                executable binary that takes commands that you type and (once
                you hit return), translates those commands into (ultimately)
                system calls to the Operating System API
              </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
