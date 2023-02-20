import React from "react";
import styled from "styled-components";
import { HeadPane, SearchBox, ContentWrapper } from "../Home/Home";
import { GrSearch } from "react-icons/gr";
import { FaLock } from "react-icons/fa";
import cover from "../../assets/images/Cover.svg";

const Home = () => {
  return (
    <Container>
      <HeadPane>
        <SearchBox style={{ width: "100%" }}>
          {" "}
          <GrSearch />
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search for existing reports "
          />
        </SearchBox>
      </HeadPane>
      <ContentWrapper style={{ padding: "40px" }}>
        <SettingsWrapper>
          <div className="header">
            <div className="head">
              <p>Settings</p>
              <button>
                <FaLock size={12} style={{ marginRight: "10px" }} />
                Change Password
              </button>
            </div>
          </div>
          <div className="settingsMain"></div>
        </SettingsWrapper>

        <div>
          <img src={cover} alt="cover" />
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
const Container = styled.div``;

const SettingsWrapper = styled.div`
  background-color: #fff;
  height: 600px;
  border-radius: 12px;

  .header {
    border-bottom: 1px solid #cccccc;
    .head {
      display: flex;
      justify-content: space-between;
      padding: 20px 50px 20px 20px;
      align-items: center;

      button {
        background-color: #ff993a;
        color: #fff;
        border: none;
        outline: none;
        padding: 12px 30px;
        font-size: 13px;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }

  .settingsMain {
    padding: 40px;
  }
`;
