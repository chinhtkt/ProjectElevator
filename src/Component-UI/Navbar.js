/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
function Navbar() {
  return (
    <div>
        <nav class="navbar " style={{height: "97px", background: "#1c2023"}} role="navigation" aria-label="main navigation">
          <div class="navbar-brand px-5" style={{margin: " 0 auto"}}>
            <a class="navbar-item" href="https://smarthouse.asia/home/">
              <img
                src="https://smarthouse.asia/wp-content/themes/doanhnghiep/images/logo_smarthouse_while.png"
                alt=""
              />
            </a>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
