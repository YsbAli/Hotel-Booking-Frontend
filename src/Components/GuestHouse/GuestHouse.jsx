import GHAll from "./GHAll";
import "./GuestHouse.css";

function GuestHouse() {
  return (
    <>
      <div className="MainContainer">
        <GHAll
          url="https://images.pexels.com/photos/6970065/pexels-photo-6970065.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          name="Hotel Royal Garden"
          city="Kolkata"
          price="Staring with Rs-1000/"
          rating={8.5}
          fdback="Excelence"
        />

        <GHAll
          url="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400"
          name="Hotel ITC Royal Bengal"
          city="Kolkata"
          price="Staring with Rs-1000/"
          rating={8.5}
          fdback="Excelence"
        />
        <GHAll
          url="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Hotel TAJ Bengal"
          city="Kolkata"
          price="Staring with Rs-1000/"
          rating={8.5}
          fdback="Excelence"
        />
      </div>
    </>
  );
}

export default GuestHouse;
