import { useState } from "react";
import Header from "./UI/Header/Header";
import SideBar from "./UI/SideBar/SideBar";
import Journey from "./Components/Journey/journey";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Yourself from "./Components/Yourself/Yourself";
import Appointments from "./Components/Appointments/Appointments";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [item, setItem] = useState("appointment");
  const toggleHandler = (toggleVal) => {
    setToggle(toggleVal);
  };
  const itemHandler = (val) => {
    setItem(val);
  };
  return (
    <div>
      <div className={"row"}>
        <div className={toggle ? "col-1 effect" : "col-3 effect"}>
          <SideBar toggle={toggleHandler} value={toggle} onItem={itemHandler} />
        </div>
        <div className={toggle ? "col-11 effect" : "col-9 effect"}>
          <Header />
          {item === "journey" && <Journey />}
          {item === "education" && <Education />}
          {item === "experience" && <Experience />}
          {item === "yourself" && <Yourself />}
          {item === "appointment" && <Appointments />}
        </div>
      </div>
    </div>
  );
}

export default App;
