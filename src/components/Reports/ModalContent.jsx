import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalContent = ({ show }) => {
  const [showConfirmedModal, setShowConfirmedModal] = useState(false);
  return (
    <div>
      {!showConfirmedModal && (
        <Content>
          <h5>Delete Report</h5>
          <p>Are you sure you want to delete this report?</p>

          <div className="modalActions">
            <button
              className="cancel"
              onClick={() => {
                show(false);
              }}
            >
              Cancel
            </button>
            <button
              className="confirm"
              onClick={() => {
                setShowConfirmedModal(true);
              }}
            >
              Confirm
            </button>
          </div>
        </Content>
      )}
      {showConfirmedModal && (
        <Content2>
          <h5>Report Deleted</h5>
          <p>Report has been successfully deleted.</p>

          <div className="modalActions">
            <button
              className="cancel"
              onClick={() => {
                show(false);
                setShowConfirmedModal(false);
              }}
            >
              Okay
            </button>
          </div>
        </Content2>
      )}
      ;
    </div>
  );
};

export default ModalContent;
const Content = styled.div`
  position: absolute;
  z-index: 1100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px 20px;
  width: 400px;
  border-radius: 10px;
  animation: slideDown 0.3s ease-in forwards;

  h5 {
    font-size: 17px;
    letter-spacing: 1.05px;
  }

  p {
    margin-top: 9px;
    font-size: 14px;
    color: #475467;
  }

  .modalActions {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    button {
      padding: 14px 58px;
      border-radius: 8px;
      border: none;
      font-size: 16px;
      outline: none;
      cursor: pointer;
    }

    .cancel {
      background-color: transparent;
      border: 1px solid #d0d5dd;
    }

    .confirm {
      background-color: #fe0e0e;
      color: #fff;
    }
  }
  @keyframes slideDown {
    0% {
      top: 0;
    }

    25% {
      top: 10%;
    }
    50% {
      top: 30%;
    }
    75% {
      top: 40%;
    }
    100% {
      top: 50%;
    }
  }
`;

const Content2 = styled.div`
  position: absolute;
  z-index: 1100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px 20px;
  width: 400px;
  border-radius: 10px;
  animation: slideDown 0.3s ease-in forwards;

  h5 {
    font-size: 17px;
    letter-spacing: 1.05px;
  }

  p {
    margin-top: 9px;
    font-size: 14px;
    color: #475467;
  }

  .modalActions {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    button {
      padding: 3px 20px;
      border-radius: 8px;
      border: none;
      font-size: 16px;
      outline: none;
      cursor: pointer;
    }

    .cancel {
      background-color: transparent;
      border: 1px solid #d0d5dd;
    }
  }

  @keyframes slideDown {
    0% {
      top: 0;
    }
    25% {
      top: 10%;
    }
    50% {
      top: 30%;
    }
    75% {
      top: 40%;
    }
    100% {
      top: 50%;
    }
  }
`;
