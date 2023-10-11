import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <h2>
          <Link className="logo" to="/">
            Great Booking
          </Link>
        </h2>
        <div className="btn-items">
          <button className="navbtn">Register</button>
          <button className="navbtn"> Login </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
