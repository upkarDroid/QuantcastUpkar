import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./alert.css";

const AlertBox = ({ title, message, handleClick }) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="custom-ui">
          <h1 className="alert-title">{title}</h1>
          <p className="alert-Body">{message}</p>
          <button
            className="alert-button"
            onClick={() => {
              handleClick();
              onClose();
            }}
          >
            ok
          </button>
        </div>
      );
    },
  });
};

export default AlertBox;
