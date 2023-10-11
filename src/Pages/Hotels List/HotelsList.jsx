import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
// import Footer from "../../Components/Footer/Footer";

import "./HotelList.css";
import { useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "./SearchItem";

function HotelsList() {
  const location = useLocation();
  // console.log(location.state);           //insite location we have state property...

  const [place, setplace] = useState(location.state.place);
  const [date, setDate] = useState(location.state.date);
  const [bookingDetails, setbookingDetails] = useState(
    location.state.bookingDetails
  );
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="showlist" />

      <div className="ListContainer">
        <div className="ListWrapper">
          <div className="listSearch">
            <h1 className="Search-title">Search Hotels</h1>
            <div className="SearchItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={place} name="" id="" />
            </div>
            <div className="SearchItem">
              <label htmlFor="">Check in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(i) => setDate([i.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="SearchItem">
              <label htmlFor="" className="Details">
                Details
              </label>
              <div className="SearchListItem">
                <span className="searchText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="searchIteminput" />
              </div>

              <div className="SearchListItem">
                <span className="searchText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="searchIteminput" />
              </div>

              <div className="SearchListItem">
                <span className="searchText">Adult</span>
                <input
                  type="number"
                  className="searchIteminput"
                  placeholder={bookingDetails.adult}
                  min={1}
                />
              </div>

              <div className="SearchListItem">
                <span className="searchText">Children</span>
                <input
                  type="number"
                  className="searchIteminput"
                  placeholder={bookingDetails.children}
                  min={0}
                />
              </div>

              <div className="SearchListItem">
                <span className="searchText">Room</span>
                <input
                  type="number"
                  className="searchIteminput"
                  placeholder={bookingDetails.room}
                  min={1}
                />
              </div>
            </div>
            <button className="Search-btn">Search</button>
          </div>
          <div className="listSearchItems">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default HotelsList;
