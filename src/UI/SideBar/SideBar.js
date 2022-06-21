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
              <a href='#' onClick={toggleMenuHandler}>
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
              </a>
            }
          </div>
        </div>
      </div>
      <h3>
        <ul className={classes["side-bar-menu"]}>
          <li>
            <a href='#'>
              <span className={classes.journey}></span>
              {props.value === false ? "Your Journey" : ""}
            </a>
          </li>
          <li>
            <a href='#'>
              <span className={classes.education}></span>{" "}
              {props.value === false ? "Education details" : ""}
            </a>
          </li>
          <li>
            <a href='#'>
              {" "}
              <span className={classes.experience}></span>{" "}
              {props.value === false ? "Experience" : ""}
            </a>
          </li>
          <li>
            <a href='#'>
              <span className={classes.yourself}></span>{" "}
              {props.value === false ? "Yourself" : ""}
            </a>
          </li>
          <li className={classes.active}>
            <a href='#'>
              {" "}
              <span className={classes.appoinments}></span>{" "}
              {props.value === false ? "Appoinments" : ""}
            </a>
          </li>
        </ul>
      </h3>
    </div>
  );
};
export default SideBar;
