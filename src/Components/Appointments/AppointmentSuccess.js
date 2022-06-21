import Button from "../../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import classes from "./AppointmentSuccess.module.css";
import SuccessAppointment from "../../Resources/Images/SuccessAppointment.jpg";

const AppointmentSuccess = (props) => {
  const formatDate = props.date.split(".");
  let newDay = formatDate[0];
  let newMonth = formatDate[1];
  if (newMonth === "01") {
    newMonth = "Jan";
  }
  if (newMonth === "02") {
    newMonth = "Feb";
  }
  if (newMonth === "03") {
    newMonth = "Mar";
  }
  if (newMonth === "04") {
    newMonth = "Apr";
  }
  if (newMonth === "05") {
    newMonth = "May";
  }
  if (newMonth === "06") {
    newMonth = "Jun";
  }
  if (newMonth === "07") {
    newMonth = "Jul";
  }
  if (newMonth === "08") {
    newMonth = "Aug";
  }
  if (newMonth === "09") {
    newMonth = "Sep";
  }
  if (newMonth === "10") {
    newMonth = "Oct";
  }
  if (newMonth === "11") {
    newMonth = "Nov";
  }
  if (newMonth === "12") {
    newMonth = "Dec";
  }
  const formatTime = props.time.split(" ");

  const newFormatTime = formatTime[0];
  const newFormatTimePeriod = formatTime[formatTime.length - 1];

  const editAppointmentHandler = (ev) => {
    ev.preventDefault();
    props.onChange();
  };
  return (
    <div className={classes["success-box"]}>
      <div className={`row ${classes["tin"]}`}>
        <div className='col-6'>
          <h5 className={classes.title}>Successfully booked!</h5>
          <div className={classes["successfull-info"]}>
            <div className={`row ${classes["tin"]}`}>
              <div className={`col-6 ${classes["border-line"]}`}>
                <h6>Date</h6>
                <h5>
                  {newDay} of {newMonth}
                </h5>
              </div>
              <div className='col-6'>
                <h6>Time</h6>
                <h5>
                  {newFormatTime} {newFormatTimePeriod}
                </h5>
              </div>
            </div>
          </div>
          <div className={classes["successfull-info-message"]}>
            <div className={`row`}>
              <div className='col-12'>
                <p>Save yourself prepared for the Interview.!</p>
                <p>
                  Refer
                  <Button className={"default-btn"}>
                    <b>Tips {`&`} Guidence</b>
                  </Button>
                  for preparation.
                </p>
              </div>
            </div>
          </div>
          <div className={classes["successfull-info-footer"]}>
            <Button className={classes.blue} onClick={editAppointmentHandler}>
              {<FontAwesomeIcon icon={faPen} className={"blue"} />}Edit
            </Button>
            <Button>
              {<FontAwesomeIcon icon={faGoogle} className={"blue"} />} Join
            </Button>
          </div>
        </div>
        <div className={`col-6 ${classes["bar-line"]}`}>
          <img
            src={SuccessAppointment}
            alt='Success Appointment'
            className={classes["Success-Appointment"]}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentSuccess;
