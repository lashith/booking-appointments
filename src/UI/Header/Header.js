import Card from "../Card/Card";
import classes from "./Header.module.css";
import userLogo from "../../../src/Resources/Images/user_avatar_icon.png";
const Header = () => {
  return (
    <div>
      <Card className={classes["header-bar"]}>
        <div className={"row"}>
          <div className={"col-1"}>
            <img src={userLogo} alt='Logo' className={classes["user-img"]} />
          </div>
          <div className={`col-11 ${classes["user-info"]}`}>
            <div>
              <h5>Denzel Washington</h5>
              <h6>Candidate</h6>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Header;
