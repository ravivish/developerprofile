import React from "react";
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <React.Fragment>
      {/* <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop> */}
      <Backdrop show={props.show}></Backdrop>
    <div
      className="Modal"
      style={{
        display: props.show ? "block" : "none",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;
