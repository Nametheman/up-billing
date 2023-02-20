import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Toast = ({ show }) => {
  return ReactDOM.createPortal(
    <Container
      onClick={() => {
        show(false);
      }}
    >
      <div className="toastMessage">
        <p className="toastHead">Report Generated</p>
        <p className="toastMsg">You can download the Report.</p>
      </div>
    </Container>,
    document.getElementById("portal")
  );
};

export default Toast;

const Container = styled.div`
  position: fixed;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;

  .toastMessage {
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    width: 350px;
    height: 100px;
    border-radius: 10px;
    animation: slideDown2 0.5s forwards;

    @keyframes slideDown2 {
      0% {
        /* transform: translateX(-100px); */
        top: -100px;
      }
      50% {
        top: 8%;
      }
      100% {
        top: 7%;
      }
    }

    .toastHead {
      font-weight: 600;
      margin-bottom: 15px;
    }
    .toastMsg {
      font-size: 14px;
      color: #475467;
    }
  }
`;
