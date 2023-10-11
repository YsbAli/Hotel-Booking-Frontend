// import Image from "../featured/Image";
import PropertyItems from "./PropertyItems";
import "./PropertyList.css";

function PropertyList() {
  return (
    <>

      <div className="propertyList">
        <PropertyItems
          url="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
          title="Goa"
          desc="5,252 properties"
        />
        <PropertyItems
          url="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          title="New Delhi"
          desc="2,252 properties"
        />
        <PropertyItems
          url="https://images.pexels.com/photos/279805/pexels-photo-279805.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          title="Mumbai"
          desc="5,252 properties"
        />
        <PropertyItems
          url="https://images.pexels.com/photos/3701434/pexels-photo-3701434.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          title="Mumbai"
          desc="5,252 properties"
        />
        <PropertyItems
          url="https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          title="Mumbai"
          desc="5,252 properties"
        />
      </div>
    </>
  );
}

export default PropertyList;
