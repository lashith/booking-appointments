import Button from "../UI/Button";
import classes from "./AppointmentTime.module.css";
const AppointmentTime = (props) => {
  const timeTable = {
    morningTime: [
      "08:00 - 08:45",
      "09:00 - 09:45",
      "10:00 - 10:45",
      "11:00 - 11:45",
    ],
    afternoonTime: [
      "12:00 - 12:45",
      "01:00 - 01:45",
      "02:00 - 02:45",
      "03:00 - 03:45",
      "04:00 - 04:45",
      "05:00 - 05:45",
    ],
    eveningTime: [
      "06:00 - 06:45",
      "07:00 - 07:45",
      "08:00 - 08:45",
      "09:00 - 09:45",
      "10:00 - 10:45",
    ],
  };

  const timeHandler = (ev) => {
    ev.preventDefault();
    // console.log(ev.target.textContent);
    props.onTime(ev.target.textContent);
  };
  return (
    <div>
      <h5 className={classes.title}>Select your appointment time slot</h5>
      <div className={`row ${classes["tin"]}`}>
        <div className={`col-4 ${classes["bar-line"]}`}>
          <h5 className={classes['sub-title']}>Morning</h5>
          <div>
            <ul className={classes.timelist}>
              {timeTable.morningTime.map((time) => (
                <li key={time}>
                  <Button
                    className={classes.btn}
                    id={time}
                    onClick={timeHandler}
                  >
                    {time} {`AM`}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`col-4 ${classes["bar-line"]}`}>
          <h5 className={classes['sub-title']}>Afternoon</h5>
          <div>
            <ul className={classes.timelist}>
              {timeTable.afternoonTime.map((time) => (
                <li key={time}>
                  <Button
                    className={classes.btn}
                    id={time}
                    onClick={timeHandler}
                  >
                    {time} {`PM`}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={"col-4"}>
          <h5 className={classes['sub-title']}>Evening</h5>
          <div>
            <ul className={classes.timelist}>
              {timeTable.eveningTime.map((time) => (
                <li key={time}>
                  <Button
                    className={classes.btn}
                    id={time}
                    onClick={timeHandler}
                  >
                    {time} {`PM`}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppointmentTime;
