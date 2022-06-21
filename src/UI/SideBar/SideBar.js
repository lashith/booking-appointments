import Button from "../Button";
import classes from "./SideBar.module.css";
import Logo from "../../../src/Resources/Images/logo.jpg";
import LogoMin from "../../../src/Resources/Images/logo-min.jpg";
import Hamburge from "../../../src/Resources/Images/menu_hamburger_icon.png";
import CloseIcon from "../../../src/Resources/Images/close_icon.png";
const SideBar = (props) => {
  const ids = ["journey", "education", "experience", "yourself", "appointment"];
  const toggleMenuHandler = () => {
    if (props.value === false) {
      props.toggle(true);
    } else {
      props.toggle(false);
    }
  };
  const eventHandler = (ev) => {
    props.onItem(ev.currentTarget.id);
  };
  return (
    <div className={classes["side-bar"]}>
      <div className={classes["side-bar--header"]}>
        <div className={"row"}>
          <div className={`col-9 ${classes["side-bar--logo"]}`}>
            {props.value === false ? (
              <img src={Logo} alt='Logo' className={classes["logo"]} />
            ) : (
              <img src={LogoMin} alt='Logo' className={classes["logo-min"]} />
            )}
          </div>
          <div className={"col-3"}>
            {
              <Button className={"btn-sidebar"} onClick={toggleMenuHandler}>
                {props.value === false ? (
                  <img
                    src={Hamburge}
                    alt='Hamburge'
                    className={classes["hamburge-img"]}
                  />
                ) : (
                  <img
                    src={CloseIcon}
                    alt='Hamburge'
                    className={classes["close-img"]}
                  />
                )}
              </Button>
            }
          </div>
        </div>
      </div>
      <h3>
        <ul className={classes["side-bar-menu"]}>
          <li>
            <Button
              id={ids[0]}
              className={
                props.value === false
                  ? "btn-sidebar-menu"
                  : "btn-sidebar-menu-2"
              }
              onClick={eventHandler}
            >
              <span className={classes.journey}></span>
              {props.value === false ? "Your Journey" : ""}
            </Button>
          </li>
          <li>
            <Button
              id={ids[1]}
              className={
                props.value === false
                  ? "btn-sidebar-menu"
                  : "btn-sidebar-menu-2"
              }
              onClick={eventHandler}
            >
              <span className={classes.education}></span>{" "}
              {props.value === false ? "Education details" : ""}
            </Button>
          </li>
          <li>
            <Button
              id={ids[2]}
              className={
                props.value === false
                  ? "btn-sidebar-menu"
                  : "btn-sidebar-menu-2"
              }
              onClick={eventHandler}
            >
              <span className={classes.experience}></span>{" "}
              {props.value === false ? "Experience" : ""}
            </Button>
          </li>
          <li>
            <Button
              id={ids[3]}
              className={
                props.value === false
                  ? "btn-sidebar-menu"
                  : "btn-sidebar-menu-2"
              }
              onClick={eventHandler}
            >
              <span className={classes.yourself}></span>{" "}
              {props.value === false ? "Yourself" : ""}
            </Button>
          </li>
          <li className={classes.active}>
            <Button
              id={ids[4]}
              className={
                props.value === false
                  ? "btn-sidebar-menu active"
                  : "btn-sidebar-menu-2 active"
              }
              onClick={eventHandler}
            >
              <span className={classes.appoinments}></span>{" "}
              {props.value === false ? "Appointment" : ""}
            </Button>
          </li>
        </ul>
      </h3>
    </div>
  );
};
export default SideBar;
