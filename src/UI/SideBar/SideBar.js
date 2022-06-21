import Button from "../Button";
import classes from "./SideBar.module.css";
import Logo from "../../../src/Resources/Images/logo.jpg";
import LogoMin from "../../../src/Resources/Images/logo-min.jpg";
import Hamburge from "../../../src/Resources/Images/menu_hamburger_icon.png";
import CloseIcon from "../../../src/Resources/Images/close_icon.png";
const SideBar = (props) => {
  const toggleMenuHandler = () => {
    console.log("test");
    if (props.value === false) {
      props.toggle(true);
    } else {
      props.toggle(false);
    }
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
            <Button className={"btn-sidebar-menu"}>
              <span className={classes.journey}></span>
              {props.value === false ? "Your Journey" : ""}
            </Button>
          </li>
          <li>
            <Button className={"btn-sidebar-menu"}>
              <span className={classes.education}></span>{" "}
              {props.value === false ? "Education details" : ""}
            </Button>
          </li>
          <li>
            <Button className={"btn-sidebar-menu"}>
              {" "}
              <span className={classes.experience}></span>{" "}
              {props.value === false ? "Experience" : ""}
            </Button>
          </li>
          <li>
            <Button className={"btn-sidebar-menu"}>
              <span className={classes.yourself}></span>{" "}
              {props.value === false ? "Yourself" : ""}
            </Button>
          </li>
          <li className={classes.active}>
            <Button className={"btn-sidebar-menu active"}>
              {" "}
              <span className={classes.appoinments}></span>{" "}
              {props.value === false ? "Appoinments" : ""}
            </Button>
          </li>
        </ul>
      </h3>
    </div>
  );
};
export default SideBar;
