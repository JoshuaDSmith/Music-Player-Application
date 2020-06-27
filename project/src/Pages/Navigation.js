import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./colors.module.css";

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
    <div className={css.grid2}>
      <div className={css.formatting}>
        <button>
          <Link to="/Homepage"></Link> Dashboard{" "}
        </button>
      </div>
      <div className={css.formatting}>
        <button onClick={displayOptions}> Options</button>
      </div>
      <div></div>
      {options ? (
        <div className={css.formatting}>
          <Link to="/About">
            <button className={css.NavLinks} onClick={displayOptions}>
              About
            </button>
          </Link>
          <Link to="/Homepage">
            <button className={css.NavLinks} onClick={displayOptions}>
              Homepage
            </button>
          </Link>

          <Link to="/FoodSection">
            <button className={css.NavLinks} onClick={displayOptions}>
              Food Products
            </button>
          </Link>
          <Link to="/Sales & Discount">
            <button className={css.NavLinks} onClick={displayOptions}>
              Sales & Discount
            </button>
          </Link>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default NavBar;
