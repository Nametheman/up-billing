import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { Range } from "../Home/Home";
import calendar from "../../assets/images/calendar.svg";

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startPack, setStartPack] = useState(new Date());
  const [endPack, setEndPack] = useState(new Date());

  return (
    <Cont>
      <div className="reportType">
        <p>Report Type</p>
        <div className="select">
          <select name="reportType" id="#">
            <option value="dog">All</option>
            <option value="cat">Really</option>
            <option value="hamster">Have</option>
            <option value="parrot">No</option>
            <option value="spider">Idea</option>
          </select>
        </div>
      </div>

      <div className="datePickers">
        <p>Start Date</p>
        <Range>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="myInput"
          />
          <img src={calendar} alt="" />
        </Range>
      </div>
      {/* <p>-</p> */}
      <div className="datePickers">
        <p>End Date</p>
        <Range>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="myInput"
          />
          <img src={calendar} alt="" />
        </Range>
      </div>
      <div className="datePickers">
        <p>Start Pack No.</p>
        <Range>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="myInput"
          />
          <img src={calendar} alt="" />
        </Range>
      </div>
      {/* <p>-</p> */}
      <div className="datePickers">
        <p>End Pack No.</p>
        <Range>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="myInput"
          />
          <img src={calendar} alt="" />
        </Range>
      </div>
    </Cont>
  );
};

export default Filter;
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .reportType {
    p {
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .select {
      border: 1px solid #e1e2e5;
      border-radius: 8px;
      width: 180px;
      height: 43px;
      select {
        width: 170px;
        height: 41px;
        padding: 0 10px;
        border: none;
        outline: none;
        vertical-align: middle;
        background: transparent;
      }
    }
  }

  .datePickers {
    p {
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 500;
    }
  }
`;
