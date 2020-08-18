import React, { useState, useEffect } from "react";
import Dash from "./Pages/Dash";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Nav from "./Pages/Navigation.js";
import Music from "./Pages/MusicPlaylist";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { UserContext } from "./Pages/contextfile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [value, setValue] = useState("Hello from Joshua");

  useEffect(() => {
    if (value === true) {
      console.log(value);
      setLoggedIn(true);
    }
  });

  return (
    <div className="App">
      <Router>
        <div className="app">
          {loggedIn ? (
            <>
              <Nav />
              <Switch>
                <Route path="/About" exact component={About} />
                <Route path="/About" exact component={About} />
                <Route path="/Homepage" exact component={Dash} />
                <Route path="/MusicPlaylist" exact component={Music} />
              </Switch>
            </>
          ) : (
            <div>
              <Switch>
                <UserContext.Provider value={{ value, setValue }}>
                  <Route path="/Login" exact component={Login} />
                  <Route path="/Register" component={Register} />
                  <Route path="/" exact component={Login} />
                </UserContext.Provider>
              </Switch>
            </div>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
