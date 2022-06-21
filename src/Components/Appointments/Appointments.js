import { useState } from "react";
import Card from "../../UI/Card/Card";
import AppointmentDate from "./AppointmentDate";
import AppointmentTime from "./AppointmentTime";
import AppointmentSuccess from "./AppointmentSuccess";
import Breadcumbs from "./Breadcumbs";
import Modal from "../../UI/Modal";
import classes from "./Appointments.module.css";

const Appointments = (props) => {
  const [modalData, setModalData] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [successsAppointment, setSuccesssAppointment] = useState(false);
  let dateValue = "";
  let timeValue = "";

  const dateHandler = (val) => {
    dateValue = val;
    if (timeValue) {
      console.log(dateValue, timeValue);
    }
  };
  const timeHandler = (val) => {
    timeValue = val;
    if (dateValue) {
      setModalData({
        title: "Confirm Booking",
        secondaryTitle: "This is to confirm your booking with us.",
        time: timeValue,
        date: dateValue,
      });
      setModalShow(true);
    }
  };
  const modalConfirmHandler = () => {
    setModalShow(false);
    setSuccesssAppointment(true);
  };
  const modalCancelHandler = () => {
    setModalShow(false);
  };
  const editAppointmentHandler = () => {
    setSuccesssAppointment(false);
  };
  return (
    <div>
      {modalShow ? (
        <Modal
          title={modalData.title}
          secondaryTitle={modalData.secondaryTitle}
          time={modalData.time}
          date={modalData.date}
          onConfirm={modalConfirmHandler}
          onCancel={modalCancelHandler}
        />
      ) : (
        ""
      )}
      <Breadcumbs />
      <div className='row'>
        <h4 className={classes["sub-title"]}>Upcoming Events</h4>
      </div>
      <Card className={classes.header}>
        <h3>Final Assesment Appoinment</h3>
        <h5>Duration - 45 Mins</h5>
      </Card>
      {!successsAppointment && (
        <div className={classes["appointment-box"]}>
          <div className='row'>
            <div className='col-5'>
              <AppointmentDate onDate={dateHandler} />
            </div>
            <div className='col-7'>
              <AppointmentTime onTime={timeHandler} />
            </div>
          </div>
        </div>
      )}
      {successsAppointment && (
        <AppointmentSuccess
          onChange={editAppointmentHandler}
          date={modalData.date}
          time={modalData.time}
        />
      )}
    </div>
  );
};
export default Appointments;
