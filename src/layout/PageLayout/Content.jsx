import React from "react";
import styled from "styled-components";

const Content = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;

const Container = styled.section`
  background-color: #f5f5f5;
  width: calc(100% - 300px);
`;
