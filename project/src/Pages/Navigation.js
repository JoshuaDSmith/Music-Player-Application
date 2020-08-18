import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

function NavBar() {
  const [options, setOptions] = useState(false);

  function displayOptions() {
    if (options == false) {
      setOptions(true);
    } else if (options == true) {
      setOptions(false);
    }
  }

  return (
    <div className={css.NavigationComponent}>
      <section>
        <img
          src={require("../Assets/Musify Logo.png")}
          width={150}
          height={100}
        />
      </section>
      <div>
        <Link to="/Homepage"></Link> Dashboard{" "}
      </div>
      <div>
        <li>Discounts </li>
      </div>
      <div>
        <li>Terms & Conditions</li>
      </div>
      <div>
        <li onClick={displayOptions}>Options</li>

        {options ? (
          <div>
            <ul>
              <Link to="/About">
                <li className={css.NavLinks} onClick={displayOptions}>
                  About
                </li>
              </Link>
              <Link to="/Homepage">
                <li className={css.NavLinks} onClick={displayOptions}>
                  Homepage
                </li>
              </Link>

              <Link to="/MusicPlaylist">
                <li className={css.NavLinks} onClick={displayOptions}>
                  My PlayList
                </li>
              </Link>
              <Link to="/Sales & Discount">
                <li className={css.NavLinks} onClick={displayOptions}>
                  Sales & Discount
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default NavBar;
