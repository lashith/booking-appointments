import Button from "../../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from "./Breadcumbs.module.css";
const Breadcumbs = () => {
  return (
    <div className={classes["breadcrumb"]}>
      <Button className={"btnbreadcrumb active"}>
        <FontAwesomeIcon icon={faStar} className={"white"} /> Level 5:
        Apprentice
      </Button>
      <Button className={"btnbreadcrumb"}> Level 5: Completion: 0%</Button>
    </div>
  );
};
export default Breadcumbs;
