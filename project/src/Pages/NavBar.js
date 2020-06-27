import React from "react";
import { Link } from "react-router-dom";
import css from "./colors.module.css";
function NavBar() {
  return (
    <div className={css.grid2}>
     
        <div className={css.formatting}>
          <Link to="/Login">
            <button className={css.NavLinks}> Login Here </button>
          </Link>
          </div>

          <div className={css.formatting}>
          <Link to="/Register">
            <button className={css.NavLinks}> Register Here </button>
          </Link>
          </div>
        </div>
     

  );
}

export default NavBar;
