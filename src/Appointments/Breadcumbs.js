import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from "./Breadcumbs.module.css";
const Breadcumbs = () => {
  return (
    <div className={classes["breadcrumb"]}>
      <a href='#' className={classes["active"]}>
        <FontAwesomeIcon icon={faStar} className={"white"} /> Level 5:
        Apprentice
      </a>
      <a href='#'> Level 5: Completion: 0%</a>
    </div>
  );
};
export default Breadcumbs;
