import "./Header.css";
import { FaBed } from "react-icons/fa";
import { BsFillAirplaneFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { BiSolidTaxi } from "react-icons/bi";
import HeaderSearch from "./HeaderSearch";

function Header({ type }) {
  return (
    <div className="header">
      <div
        className={
          type === "showlist" ? "headerContainer listmode" : "headerContainer"
        }
      >
        <div className="header-list">
          <div className="h-list-items active">
            {/* <FaHotel /> */}
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="h-list-items">
            <BsFillAirplaneFill />
            <span>Flights</span>
          </div>
          <div className="h-list-items">
            <AiFillCar />
            <span>Car Rentals</span>
          </div>
          <div className="h-list-items">
            <FaBed />
            <span>Attractions</span>
          </div>
          <div className="h-list-items">
            <BiSolidTaxi />
            <span>Airport taxis</span>
          </div>
        </div>

        {/* This is will not show in the hotel list page */}
        {type !== "showlist" && (
          <>
            <h1 className="headerTitle">
              A Lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get Rewared For Your Travel - Unlock instant saving of 10%
              discounts with a Free GreateHotel Accound!
            </p>
            <button className="header-btn">Sign in/Register</button>
            <HeaderSearch />

            {/* <div className="checkbox">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">I'm looking for flight</label>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">I'm traveling for work</label>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
