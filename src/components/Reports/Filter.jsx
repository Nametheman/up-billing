import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const Filter = () => {
  return (
    <Cont>
      <div>
        <p>Report Type</p>
        <select name="reportType" id="#"></select>
      </div>
    </Cont>
  );
};

export default Filter;
const Cont = styled.div``;
