import { useState } from "react";
import Header from "./UI/Header/Header";
import SideBar from "./UI/SideBar/SideBar";
import Appointments from "./Components/Appointments/Appointments";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (toggleVal) => {
    setToggle(toggleVal);
  };
  return (
    <div>
      <div className={"row"}>
        <div className={toggle ? "col-1 effect" : "col-3 effect"}>
          <SideBar toggle={toggleHandler} value={toggle} />
        </div>
        <div className={toggle ? "col-11 effect" : "col-9 effect"}>
          <Header />
          <Appointments />
        </div>
      </div>
    </div>
  );
}

export default App;
