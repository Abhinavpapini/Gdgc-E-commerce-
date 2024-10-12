import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-info py-2">
      <ul className="nav justify-content-end ">
        <li className="nav-item">
          <Link to="" className="nav-link text-dark fs-5 fw-semibold">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="signup" className="nav-link text-dark fs-5 fw-semibold">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link to="signin" className="nav-link text-dark fs-5 fw-semibold">
            Signin
          </Link>
        </li>
        <li className="nav-item">
          <Link to="tech" className="nav-link text-dark fs-5 fw-semibold">
            Technologies
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
