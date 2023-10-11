// import "./Featured.css";
import Image from "./Image";

function Featured() {
  return (
    <>
      <div className="container">
        <Image
          url="../../../Image/pic8.jpeg"
          title="Ellora Hotel"
          desc="123 Properties"
        />
        <Image
          url="../../../Image/pic2.webp"
          title="Rese Hotel"
          desc="456 Guest House"
        />
        <Image
          url="../../../Image/pic3.jpeg"
          title="Garden Hotel"
          desc="876 Apartment"
        />
      </div>
    </>
  );
}

export default Featured;
