import "./HotelDetails.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { FaLocationDot } from "react-icons/fa6";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineFullscreenExit,
} from "react-icons/ai";

import FooterMail from "../../Components/FooterMailCom/FooterMail";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

function HotelDetails() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const Hotelimages = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/477277806.webp?k=61a4697e0e52544cb03b732db7ed9425b4e07eaad025add25274f6bc913a50c0&o=",
      alt: "hotel_img",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/401624011.webp?k=a9578ef746108bd9a6522362da316c8f766237ef41fb26784225d9e0d7b3f8fe&o=",
      alt: "hotel_img",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/398909405.webp?k=722a629618bd116e2a8a3dc08d91aa50abec82654a0a69cfcc7e72c3fdd397ce&o=",
      alt: "hotel_img",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/478464906.webp?k=9e4e4ffb33ecdaad05cf6481784eba67e08559d3968fb6e7d832cb5cb0439a9e&o=",
      alt: "hotel_img",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/477277806.webp?k=61a4697e0e52544cb03b732db7ed9425b4e07eaad025add25274f6bc913a50c0&o=",
      alt: "hotel_img",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/401624011.webp?k=a9578ef746108bd9a6522362da316c8f766237ef41fb26784225d9e0d7b3f8fe&o=",
      alt: "hotel_img",
    },
  ];

  const HandleOpenSlide = (i) => {
    setSlideIndex(i);
    setOpenSlider(true);
  };

  const HandleMoveSlider = (direction) => {
    let newSlideIndex;
    if (direction === "left") {
      newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
    }
    newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
    setSlideIndex(newSlideIndex);
  };

  return (
    <>
      <div>
        <Navbar />
        <Header type="showlist" />

        <div className="hotelContainer">
          {/* Slider  */}

          {openSlider && (
            <div className="ImageSlider">
              <AiOutlineFullscreenExit
                className="close"
                onClick={() => setOpenSlider(false)}
              />

              <div className="sliderWrapper">
                <AiOutlineArrowLeft
                  className="arrow"
                  onClick={() => HandleMoveSlider("left")}
                />
                <img
                  className="sliderImg"
                  src={Hotelimages[slideIndex].src}
                  alt=""
                />
                <AiOutlineArrowRight
                  className="arrow"
                  onClick={() => HandleMoveSlider("right")}
                />
              </div>
            </div>
          )}

          {/* Imaegs Wrapper*/}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">Royal Garden </h1>
            <div className="hotelAddress">
              <FaLocationDot />
              <span className="h-location">Kolkata, Mallick Bajar</span>
            </div>
            <span className="hotelDistance">
              Excellence location - 500m from Sealdah
            </span>
            <span className="PriceHighlight">
              Book a stay over Rs1500 at this property and get a free
              complementary
            </span>
            <div className="hotelImages">
              {Hotelimages.map((item, i) => (
                <div key={i} className="hotelImageWrapper">
                  <img
                    onClick={() => HandleOpenSlide(i)}
                    src={item.src}
                    alt={item.alt}
                    className="h-img"
                  />
                </div>
              ))}
            </div>
            <div className="h-details">
              <div className="h-detailstext">
                <span className="h-title">Stay in the heart of Kolkata</span>
                <p className="h-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi quo laudantium sunt dolore, eaque quos, doloribus eos
                  cumque voluptatibus iste accusamus rerum iusto minus! Minima
                  inventore nesciunt ipsum distinctio qui! Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit. Commodi quo laudantium
                  sunt dolore, eaque quos, doloribus eos cumque voluptatibus
                  iste accusamus rerum iusto minus! Minima inventore nesciunt
                  ipsum distinctio qui! sit amet consectetur adipisicing elit.
                  Commodi quo laudantium sunt dolore, eaque quos, doloribus eos
                  cumque voluptatibus iste accusamus rerum iusto minus! Minima
                  inventore nesciunt ipsum distinctio qui! sit amet consectetur
                  adipisicing elit. Commodi quo laudantium sunt dolore, eaque
                  quos, doloribus eos cumque voluptatibus iste accusamus rerum
                  iusto minus! Minima inventore nesciunt ipsum distinctio qui!
                </p>
              </div>
              <div className="rightSideDetails">
                <h1>Perfect for 10 Night Stay</h1>
                <span>
                  Location is best for staying in the best city the best vertion
                  of the hotel
                </span>
                <h2>
                  <b>Rs 2000 </b>(One Night)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <FooterMail />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HotelDetails;
