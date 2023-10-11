import "./SearchItem.css";
import { Link } from "react-router-dom";

function SearchItem() {
  return (
    <>
      <div className="SearchItemCont">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/493048208.webp?k=45b49016af407891a29cca9dfd4a2b4b8b34e968920f81a6b81632465d7410ee&o="
          alt=""
          className="search-img"
        />

        <div className="SearchDesc">
          <h1 className="searchtitle">Bijoya Apartment, Dum Dum</h1>
          <span className="SearchDistancetext">
            200m from Durganagar Station
          </span>
          <span className="SearchOptions">Free airport taxy</span>
          <span className="SearchSubtitle">
            Very Peachful apartment with playground
          </span>
          <span className="SearchSubFeatures">
            Entire Flat - 2 bathroom - 2 big room with big space
          </span>
          <span className="SearchCancelOptions">Free Cancellation</span>
          <span className="SrcCnclOptSubtitle">
            You can cancel later, so look at this great price todat!
          </span>
        </div>
        <div className="SearchDetails">
          <div className="SRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="SiDetailsText">
            <span className="Siprice">Rs1500</span>
            <span className="SiTax">includes GST and Fees</span>
            <button className="Sibtn">
              <Link className="Sibtn" to="/hotels/:id">
                See Availability
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchItem;
