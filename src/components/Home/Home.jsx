import React, { useState, useEffect } from "react";
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
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../hooks/UseSessionStorage";

const Home = () => {
  const navigate = useNavigate();
  const { getSessionStorage } = useSessionStorage("__appUser");
  const token = getSessionStorage;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const formattedStartDate = moment(startDate).format("YYYY-MM-DD");
  const formattedEndDate = moment(endDate).format("YYYY-MM-DD");

  console.log(formattedStartDate, formattedEndDate);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [reportList, setReportList] = useState(false);
  const [categoryList, setCategoryList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [showLogout, setShowLogout] = useState(false);

  const [serverData, setServerData] = useState(null);

  const [reportFetched, setReportFetched] = useState(false);
  const [fetchedReport, setFetchedReport] = useState(null);

  const [categories, setCategories] = useState(null);

  const [copiedCat, setCopiedCat] = useState(null);
  const [copiedRep, setCopiedRep] = useState(null);

  console.log(categories);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);

  console.log(selectedCategory);
  const showSelectModalHandler = () => {
    setShowSelectModal(true);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getReport();
    console.log(fetchedReport);
  }, [selectedCategory]);
  // const fetchUser =

  const getUser = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://www.jonexy.somee.com/api/BiManager/GetReportCategories/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setServerData(data);
      setCategories(data?.data);
      setCopiedCat(data?.data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getReport = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://www.jonexy.somee.com/api/BiManager/GetReportsByCategory?category=${selectedCategory}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setFetchedReport(data?.data);
      setCopiedRep(data?.data);
      console.log(data);
      setIsLoading(false);
      setReportFetched(true);
    } catch (error) {
      console.log(error);
    }
  };

  // const [filteredReport, setFilteredReport] = useState(fetchedReport);
  // const [filteredCategory, setFilteredCategory] = useState(serverData?.data);

  const handleReportFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    const filteredReport = fetchedReport?.filter((report) =>
      report.toLowerCase().includes(filterValue)
    );

    if (filterValue.length < 1) {
      setFetchedReport(copiedRep);
    } else {
      setFetchedReport(filteredReport);
    }
    console.log(filteredReport);
  };
  const handleCategoryFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    const filteredCategory = categories?.filter((category) =>
      category.toLowerCase().includes(filterValue)
    );

    if (filterValue.length < 1) {
      setCategories(copiedCat);
    } else {
      setCategories(filteredCategory);
    }
    console.log(filteredCategory);
  };

  const { removeSessionStorage } = useSessionStorage("__appuser");

  const logoutHandler = () => {
    removeSessionStorage();
    navigate("/");
  };

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
          <div className="loggedUserInfo">
            <p>John Doe</p>
            <p style={{ color: "#00000080", fontSize: "12px" }}>UP BI</p>
          </div>
          <FaCaretDown size={13} />
          {showLogout && (
            <div className="logout" onClick={logoutHandler}>
              <Link to="#">
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
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <div>
              <p>Select report category</p>
              <div className="idktbh">
                <div
                  className="searchReport"
                  onClick={() => {
                    setCategoryList(!categoryList);
                  }}
                >
                  <p style={{ color: "#00000080", fontSize: "13px" }}>
                    {selectedCategory === null
                      ? "Select category"
                      : selectedCategory}
                  </p>
                  <FaCaretDown size={13} />
                </div>
                {categoryList && (
                  <div className="selectReports">
                    <div className="selectRptHead">
                      <p>Select category to run</p>
                      <FaCaretUp
                        size={16}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setCategoryList(false);
                        }}
                      />
                    </div>

                    <div className="reportList">
                      <input
                        type="text"
                        placeholder="search by keyword"
                        onChange={handleCategoryFilterChange}
                        className="searchInput"
                      />
                      {categories?.map((report) => {
                        return (
                          <button
                            onClick={(e) => {
                              setSelectedCategory(report);
                              setCategoryList(false);
                            }}
                          >
                            {report}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p>Select range to generate your billing report</p>
              <div className="idktbh">
                <div
                  className="searchReport"
                  style={{
                    cursor: `${
                      selectedCategory === null || reportFetched === false
                        ? "not-allowed"
                        : ""
                    }`,
                  }}
                  onClick={() => {
                    if (selectedCategory === null || reportFetched === false) {
                      return;
                    } else {
                      setReportList(!reportList);
                    }
                  }}
                >
                  <p style={{ color: "#00000080", fontSize: "13px" }}>
                    {selectedReport === null ? "Select report" : selectedReport}
                  </p>
                  <FaCaretDown size={13} />
                </div>
                {reportList && (
                  <div className="selectReports">
                    <div className="selectRptHead">
                      <p>Select report to run</p>
                      <FaCaretUp
                        size={16}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setReportList(false);
                        }}
                      />
                    </div>

                    <div className="reportList">
                      <input
                        type="text"
                        placeholder="search by keyword"
                        onChange={handleReportFilterChange}
                        className="searchInput"
                      />
                      {fetchedReport?.map((report) => {
                        return (
                          <button
                            href="#"
                            onClick={() => {
                              setSelectedReport(report);
                              setReportList(false);
                            }}
                          >
                            {report}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
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
              <p className="toPPP">to</p>
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

  @media only screen and (max-width: 450px) {
    width: 100vw;
    gap: 10px;
    padding: 10px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  border: 1px solid #00000080;
  align-items: center;
  width: 40em;
  height: 38px;
  border-radius: 6px;
  padding: 0 20px;

  @media only screen and (max-width: 450px) {
    width: 300px;
  }

  input {
    width: 98%;
    height: 98%;
    border: none;
    outline: none;
    padding: 0 10px;

    @media only screen and (max-width: 450px) {
      width: 99%;
    }
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
  @media only screen and (max-width: 450px) {
    margin-right: 0;
  }
  .loggedUserInfo {
    @media only screen and (max-width: 450px) {
      display: none;
    }
  }
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

  @media only screen and (max-width: 450px) {
    padding: 10px 10px !important;
  }

  h3 {
    @media only screen and (max-width: 450px) {
      text-align: center;
    }
  }
`;
const Content1 = styled.div`
  margin: 20px 0;
  background-color: #00b2fe23;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  padding: 50px;

  @media only screen and (max-width: 450px) {
    /* display: block;
        justify-content: center;
        width: 100%; */

    padding: 20px 30px 30px;
    font-size: 14px;
    text-align: center;
  }
  .idktbh {
    position: relative;
    width: 370px;

    @media only screen and (max-width: 450px) {
      display: flex;
      justify-content: center;
      width: 200px;
      gap: 15px;
      margin-left: 15%;
    }

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

      @media only screen and (max-width: 450px) {
        /* display: block;
        justify-content: center;
        width: 100%; */
        width: 200px;
      }

      .selectRptHead {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #0000001a;

        p {
          color: #000000b2;

          @media only screen and (max-width: 450px) {
            /* display: block;
        justify-content: center;
        width: 100%; */
            font-size: 13px;
          }
        }
      }

      .reportList {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        max-height: 160px;
        overflow-y: scroll;
        button {
          margin-bottom: 10px;
          padding: 10px;
          text-decoration: none;
          color: #000;
          transition: all 0.3s ease-in-out;
          outline: none;
          border: none;
          text-align: left;
          background-color: transparent;

          @media only screen and (max-width: 450px) {
            /* display: block;
        justify-content: center;
        width: 100%; */
            font-size: 13px;
          }

          &:hover {
            background-color: #fff0d2;
            border-radius: 8px;
          }
        }

        .searchInput {
          padding: 10px;
          margin: 10px 0;
          border-radius: 8px;
          outline: none;
          border: 1px solid #0000001a;
        }
      }
    }
  }
  .timeRange {
    margin-top: 60px;

    p {
      @media only screen and (max-width: 450px) {
        /* display: block;
        justify-content: center;
        width: 100%; */
        font-size: 15px;
        text-align: center;
      }
    }

    .toPPP {
      @media only screen and (max-width: 450px) {
        /* display: block;
        justify-content: center;
        width: 100%; */
        display: none;
      }
    }

    .rangeContainer {
      display: flex;
      width: 360px;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      @media only screen and (max-width: 450px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        gap: 15px;
      }
    }
  }

  .generateBtn {
    margin-top: 27px;

    @media only screen and (max-width: 450px) {
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 15px;
    }
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
