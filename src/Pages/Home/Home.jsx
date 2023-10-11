import GuestHouse from "../../Components/GuestHouse/guestHouse";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";
import Featured from "../../Components/featured/Featured";
import FooterMail from "../../Components/FooterMailCom/FooterMail";
import Footer from "../../Components/Footer/footer";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="home-title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home-title">Homes guest Love</h1>
        {/* <GuestHouse /> */}

        {/* FooterMail Section */}

        <h1 className="home-title">Browse by property type</h1>
        <PropertyList />

        <FooterMail />
        <Footer />
      </div>
    </div>
  );
};

export { Home };
