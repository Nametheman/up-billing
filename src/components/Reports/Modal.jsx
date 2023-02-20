import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ModalContent from "./ModalContent";

const Modal = ({ show }) => {
  return ReactDOM.createPortal(
    <Container>
      <ModalContent show={show} />
    </Container>                                ,
    document.getElementById("modal")
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;
