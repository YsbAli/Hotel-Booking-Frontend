// import "./GuestHouse.css";

import "./GHAll.css";

const GHAll = ({ url, name, city, price, rating, fdback }) => {
  return (
    <>
      <div className="MainContainer">
        <div className="itemContainer">
          <img src={url} alt="" className="imgDiv" />
          <span className="itemName">{name}</span>
          <span className="itemCity"> <i>{city}</i></span>
          <span className="itemPrice">{price}</span>
          <div className="ghRating">
            <button>{rating}</button>
            <span>{fdback}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GHAll;
