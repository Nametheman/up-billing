import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import styled from "styled-components";
import Modal from "./Modal";

const Index = ({ children }) => {
  return (
    <Container>
      {/* <Modal /> */}
      <Sidebar />
      <Content children={children} />
    </Container>
  );
};

export default Index;
const Container = styled.div`
  display: flex;
  position: relative;
`;
