import classes from "./Modal.module.css";
import React from "react";

const Modal = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.modal}>
        <button
          onClick={(e) => {
            props.onclick(e);
          }}
          className={classes.button}
        >
          X
        </button>
        <span>{props.message}</span>
      </div>
    </div>
  );
};

export default Modal;
