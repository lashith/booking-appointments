import ReactDom from "react-dom";
import Card from "./Card/Card";
import Button from "./Button";
import classes from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <Button className={"close"} onClick={props.onCancel}>
          <FontAwesomeIcon icon={faClose} className={classes.blue} />
        </Button>

        <h2>{props.title}</h2>
        <h4>{props.secondaryTitle}</h4>
      </header>
      <div className={classes.content}>
        <div className='row center'>
          <div className='col-6'>
            <FontAwesomeIcon icon={faCalendar} className={classes.blue} />
            <h4> {props.time}</h4>
          </div>
          <div className='col-6'>
            <FontAwesomeIcon icon={faClock} className={classes.blue} />
            <h4>{props.date}</h4>
          </div>
        </div>
        <div className={classes.contentmessage}>
          <h6>Please Note,</h6>
          <h6>
            Once you book the interview it can only be changed,{" "}
            <b>48 hours prior</b> to the booking.
          </h6>
        </div>
      </div>
      <footer className={classes.actions}>
        <Button className={`${"btn-cancel"}`} onClick={props.onCancel}>
          {props.btnCancel}
        </Button>
        <Button className={`${"btn-confirm"}`} onClick={props.onConfirm}>
          {props.btnOk}
        </Button>
      </footer>
    </Card>
  );
};
const Modal = (props) => {
  return (
    <div>
      {ReactDom.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          secondaryTitle={props.secondaryTitle}
          time={props.time}
          date={props.date}
          onConfirm={props.onConfirm}
          onCancel={props.onCancel}
          btnOk={props.btnOk}
          btnCancel={props.btnCancel}
        />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};
export default Modal;
