import React from "react";
import styled from "styled-components";

const Modal = () => {
  return <ModalContainer>Modal</ModalContainer>;
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
