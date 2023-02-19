import React, { useState } from "react";
import styled from "styled-components";
import { GrSearch } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import user from "../../assets/images/user.svg";
import DatePicker from "react-datepicker";
import calendar from "../../assets/images/calendar.svg";
import generateBtn from "../../assets/images/exportBtn.svg";
import "react-datepicker/dist/react-datepicker.css";
import Toast from "./Toast";
import { Link } from "react-router-dom";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [showSelectModal, setShowSelectModal] = useState(false);
  const [reportList, setReportList] = useState(false);

  const [showLogout, setShowLogout] = useState(false);

  const showSelectModalHandler = () => {
    setShowSelectModal(true);
  };
  const reports = [
    { title: "Report 1" },
    { title: "Report 2" },
    { title: "Report 3" },
  ];
  return (
    <Container>
      <HeadPane>
        <SearchBox>
          <GrSearch />
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search for existing reports "
          />
        </SearchBox>
        <UserProfileWrapper
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowLogout(!showLogout);
          }}
        >
          <div className="userAVI">
            <img src={user} alt="" />
          </div>
          <div>
            <p>John Doe</p>
            <p style={{ color: "#00000080", fontSize: "12px" }}>UP BI</p>
          </div>
          <FaCaretDown size={13} />
          {showLogout && (
            <div className="logout">
              <Link to="/login">
                <BiLogOut />
                <p>Logout</p>
              </Link>
            </div>
          )}
        </UserProfileWrapper>
      </HeadPane>
      <ContentWrapper>
        <h3>UP BILLING REPORT</h3>
        <Content1>
          <div>
            <p>Select range to generate your Billing Report</p>
            <div className="idktbh">
              <div
                className="searchReport"
                onClick={() => {
                  setReportList(!reportList);
                }}
              >
                <p style={{ color: "#00000080", fontSize: "13px" }}>
                  Select Report
                </p>
                <FaCaretDown size={13} />
              </div>
              {reportList && (
                <div className="selectReports">
                  <div className="selectRptHead">
                    <p>Select report to run</p>{" "}
                    <FaCaretUp
                      size={16}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setReportList(false);
                      }}
                    />
                  </div>

                  <div className="reportList">
                    {reports.map((report) => {
                      return <a href="#">{report.title}</a>;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="timeRange">
            <p>Time Range:</p>
            <div className="rangeContainer">
              <Range>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="myInput"
                />
                <img src={calendar} alt="" />
              </Range>
              <p>to</p>
              <Range>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="myInput"
                />
                <img src={calendar} alt="" />
              </Range>
            </div>
          </div>

          <div className="generateBtn">
            <img src={generateBtn} alt="" onClick={showSelectModalHandler} />
          </div>
        </Content1>
        <Content2 style={{ backgroundColor: "#fff" }}></Content2>
      </ContentWrapper>
      {showSelectModal && <Toast show={setShowSelectModal} />}
    </Container>
  );
};

export default Home;
const Container = styled.section``;

export const HeadPane = styled.div`
  background-color: #fff;
  height: 80px;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBox = styled.div`
  display: flex;
  border: 1px solid #00000080;
  align-items: center;
  width: 40em;
  height: 38px;
  border-radius: 6px;
  padding: 0 20px;

  input {
    width: 98%;
    height: 98%;
    border: none;
    outline: none;
    padding: 0 10px;

    &::placeholder {
      color: #00000080;
      font-size: 14px;
    }
  }
`;

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-right: 20px;
  position: relative;

  .logout {
    a {
      display: flex;
      align-items: center;
      gap: 9px;
      position: absolute;
      right: 5px;
      top: 50px;
      background-color: #fff;
      padding: 10px;
      z-index: 2;
      color: red;
      text-decoration: none;
    }
  }

  .userAVI {
    img {
      width: 50px;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px 40px;
`;
const Content1 = styled.div`
  margin: 20px 0;
  background-color: #00b2fe23;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  padding: 50px;
  .idktbh {
    position: relative;
    width: 370px;
    .searchReport {
      margin-top: 16px;
      width: 360px;
      height: 46px;
      background-color: #fff;
      border: 1px solid #00000035;
      border-radius: 8px;
      padding: 20px 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }

    .selectReports {
      background-color: #fff;
      padding: 10px;
      width: 360px;
      margin: 0 auto;
      position: absolute;
      z-index: 10000;
      top: 50px;
      border-radius: 8px;

      .selectRptHead {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #0000001a;

        p {
          color: #000000b2;
        }
      }

      .reportList {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        a {
          margin-bottom: 10px;
          padding: 10px;
          text-decoration: none;
          color: #000;
          transition: all 0.3s ease-in-out;

          &:hover {
            background-color: #fff0d2;
            border-radius: 8px;
          }
        }
      }
    }
  }
  .timeRange {
    margin-top: 60px;

    .rangeContainer {
      display: flex;
      width: 360px;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
    }
  }

  .generateBtn {
    margin-top: 27px;
    img {
      cursor: pointer;
      width: 180px;
    }
  }
`;
const Content2 = styled.div`
  margin: 20px 0;
  background-color: #00b2fe23;
  width: 100%;
  height: 400px;
  border-radius: 10px;
`;

export const Range = styled.div`
  display: flex;
  border: 1px solid #e1e2e5;
  background-color: #fff;
  width: 160px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 6px;
  .myInput {
    height: 30px;
    width: 120px;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
  }
  img {
    width: 15px;
  }
`;
