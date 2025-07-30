import "./App.css";
import GymProgressChart from "./components/GymProgressChart";
import MyChart from "./components/MyChart";
// import DaisyNav from './components/DaisyNav'
import Navbar from "./components/Navbar";
import Phones from "./components/Phones";
import PriceOption from "./components/PriceOption";

function App() {
  return (
    <div className="max-w-10/12 mx-auto bg-gray-200 space-y-5">
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <PriceOption></PriceOption>
      {/* <MyChart></MyChart> */}
      <GymProgressChart></GymProgressChart>
      <Phones></Phones>
    </div>
  );
}

export default App;
