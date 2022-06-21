import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./AppointmentDate.module.css";
const AppointmentDate = (props) => {
  const [selectedDate, setSelectedDate] = useState();
  // const [selectednewDate, setSelectedNewDate] = useState();
  useEffect(() => {}, []);
  const handleDateChange = (value) => {
    const day = value.getDate();
    const month = value.getMonth() + 1;
    const year = value.getFullYear();
    const newDate =
      (day <= 9 ? "0" + day : day) +
      "." +
      (month <= 9 ? "0" + month : month) +
      "." +
      year;

    setSelectedDate(value);
    props.onDate(newDate);

  };
  return (
    <Calendar
      className={classes["calandar-box"]}
      onChange={handleDateChange}
      value={selectedDate}
    />
  );
};
export default AppointmentDate;
