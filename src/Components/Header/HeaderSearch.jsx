import "./HeaderSearch.css";
import { FaBed } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { BsFillPersonFill } from "react-icons/bs";

// css for date range
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { format } from "date-fns";

import { DateRange } from "react-date-range";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeaderSearch() {
  const [place, setPlace] = useState();
  const navigate = useNavigate();

  //for set the person details
  const [openDetails, setOpenDetails] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  //date
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const HandleSubmitDetails = (name, operation) => {
    setBookingDetails((prev) => {
      return {
        ...prev,
        [name]:
          operation === "inc"
            ? bookingDetails[name] + 1
            : bookingDetails[name] - 1,
      };
    });
  };

  //this data will go when the search button clicked with given place, date, details
  const HandleSearch = () => {
    navigate("/hotels", {
      state: { place, date, bookingDetails },
    });
  };

  return (
    <>
      <div className="headerSearch">
        <div className="HeaderSearch-Items">
          <FaBed className="headerIcon" />
          <input
            type="text"
            className="HeaderSearch-input"
            placeholder="What is your Favoite Place ?"
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div className="HeaderSearch-Items">
          <FcCalendar className="headerIcon" />

          <span
            onClick={() => setOpenDate(!openDate)}
            className="Header-search-text"
          >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}</span>

          {openDate && (
            <DateRange
              className="date"
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
            />
          )}
        </div>
        <div className="HeaderSearch-Items">
          <BsFillPersonFill className="headerIcon" />
          <span
            onClick={() => setOpenDetails(!openDetails)}
            className="Header-search-text"
          >{`${bookingDetails.adult} adult - ${bookingDetails.children} children - ${bookingDetails.room} room `}</span>

          {openDetails && (
            <div className="options">
              <div className="options-items">
                <span className="option-text">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={bookingDetails.adult <= 1}
                    className="option-counter-btn"
                    onClick={() => HandleSubmitDetails("adult", "dec")}
                  >
                    -
                  </button>
                  <span className="option-counter-number">
                    {bookingDetails.adult}
                  </span>
                  <button
                    className="option-counter-btn"
                    onClick={() => HandleSubmitDetails("adult", "inc")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="options-items">
                <span className="option-text">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={bookingDetails.children <= 0}
                    className="option-counter-btn"
                    onClick={() => HandleSubmitDetails("children", "dec")}
                  >
                    -
                  </button>
                  <span className="option-counter-number">
                    {bookingDetails.children}
                  </span>
                  <button
                    className="option-counter-btn"
                    onClick={() => HandleSubmitDetails("children", "inc")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="options-items">
                <span className="option-text">Room</span>
                <div className="optionCounter">
                  <button
                    disabled={bookingDetails.room <= 1}
                    className="option-counter-btn"
                    onClick={() => HandleSubmitDetails("room", "dec")}
                  >
                    -
                  </button>
                  <span className="option-counter-number">
                    {bookingDetails.room}
                  </span>
                  <button
                    className="option-counter-btn"
                    onClick={() => HandleSubmitDetails("room", "inc")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="HeaderSearch-Items">
          <button className="Header-btn" onClick={HandleSearch}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderSearch;
