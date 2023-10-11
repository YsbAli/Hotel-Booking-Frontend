import "./Footer.css";
import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

function footer() {
  return (
    <>
      <div className="footerMain">
        <div className="footer-Wrapper">
          <ul className="footer-ul">
            <li className="list-item">Countries</li>
            <li className="list-item">Regions</li>
            <li className="list-item">Cityis</li>
            <li className="list-item">Districts</li>
            <li className="list-item">Airports</li>
            <li className="list-item">Hotels</li>
            <li className="list-item">Places of interest</li>
          </ul>

          <ul className="footer-ul">
            <li className="list-item">Unique places to stay</li>
            <li className="list-item">All destinations</li>
            <li className="list-item">All flight destinations</li>
            <li className="list-item">All car rental locations</li>
            <li className="list-item">Discover</li>
            <li className="list-item">Reviews</li>
            <li className="list-item">Discover monthly stays</li>
          </ul>

          <ul className="footer-ul">
            <li className="list-item">Car rental</li>
            <li className="list-item">Flight finder</li>
            <li className="list-item">Restaurant reservations</li>
            <li className="list-item">Great Travell for Travel Agents</li>
            <li className="list-item">Airports</li>
            <li className="list-item">Careers</li>
            <li className="list-item">Hotels</li>
          </ul>

          <ul className="footer-ul">
            <li className="list-item">Coronavirus (COVID-19) FAQs</li>
            <li className="list-item">About Great Booking</li>
            <li className="list-item">Customer Service Help</li>
            <li className="list-item">Partner help</li>
            <li className="list-item">Careers</li>
            <li className="list-item">Sustainability</li>
            <li className="list-item">Safety Resource Center</li>
          </ul>

          <ul className="footer-ul">
            <li className="list-item">Customer Service Help</li>
            <li className="list-item">Customer Service Help</li>
            <li className="list-item">Partner help</li>
            <li className="list-item">Careers</li>
            <li className="list-item">Sustainability</li>
            <li className="list-item">Safety Resource Center</li>
          </ul>

          <ul className="footer-ul">
            <li className="list-item text">- : Follow Me On : -</li>
            <li className="list-item links">
              <Link
                target="_black"
                to="https://www.linkedin.com/in/yousub-ali-7078ba211/"
              >
                <AiFillLinkedin className="icon" />
              </Link>
              <Link target="_black" to="https://github.com/YsbAli">
                <AiOutlineGithub className="icon" />
              </Link>
              <Link
                target="_black"
                to="https://www.linkedin.com/in/yousub-ali-7078ba211/"
              >
                <AiFillFacebook className="icon" />
              </Link>
              <Link
                target="_black"
                to="https://www.linkedin.com/in/yousub-ali-7078ba211/"
              >
                <AiFillYoutube className="icon" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-text">
          <h2>Copyright @ 2023 Great Booking</h2>
          <h3>
            ❤️Made By
            <Link target="_black" to="https://github.com/YsbAli">
              <span className="name">  Yousub Ali </span>
            </Link>
            ❤️
          </h3>
        </div>
      </div>
    </>
  );
}

export default footer;
