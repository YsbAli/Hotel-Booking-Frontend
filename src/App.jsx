import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import HotelsList from "./Pages/Hotels List/HotelsList";
import HotelDetails from "./Pages/HotelDetails/HotelDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<HotelsList />}>
        </Route>
        <Route path="/hotels/:id" element={<HotelDetails />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
