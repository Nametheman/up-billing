import React, { useEffect } from "react";
import styled from "styled-components";
import upLogo from "../../assets/images/upLogo.svg";
import upLogoTexts from "../../assets/images/upLogoTexts.svg";
import { FiHome } from "react-icons/fi";
import { IoCellularOutline } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currPath = JSON.parse(localStorage.getItem("pathname"));
  const myPath = location.pathname;
  console.log(location.pathname, currPath);
  const sideBarLinks = [
    { name: "Home", logo: FiHome, path: "/home", id: "link1" },
    {
      name: "Report History",
      logo: IoCellularOutline,
      path: "/reports",
      id: "link2",
    },
    { name: "Settings", logo: MdSettings, path: "/settings", id: "link3" },
  ];
  let activeStyle = {
    backgroundColor: "#ff993a",
    border: " 1px solid",
    color: "#fff",
    borderRadius: "8px",
  };

  const LinksWrapper = styled.nav`
    margin-top: ${myPath === "/home" ? "20px" : "70px"};
  `;
  return (
    <Container>
      {myPath === "/home" ? (
        <div className="homeLogoSection">
          <p className="welcome">Welcome Back!</p>
          <div className="logoImage">
            <img src={upLogo} alt="" />
          </div>
          <p style={{ color: "#52C3F1", fontWeight: "600" }}>Unified Payment</p>
          <p style={{ fontSize: "13px" }}>
            Last logged in on 10th of Feb, 2023 2:30pm{" "}
          </p>
        </div>
      ) : (
        <div className="logoSection">
          <img src={upLogo} alt="" />
          <img src={upLogoTexts} alt="" />
        </div>
      )}

      <LinksWrapper>
        {sideBarLinks.map((link) => {
          return (
            <SideLink
              key={link.id}
              to={link.path}
              onClick={() => {
                localStorage.setItem("pathname", JSON.stringify(link.path));
              }}
              style={{
                color: myPath === link.path ? "#fff" : "",
                background: myPath === link.path ? "#ff993a" : "",
                borderRadius: myPath === link.path ? "8px" : "",
              }}
            >
              {<link.logo size={25} />}
              {link.name}
            </SideLink>
          );
        })}
      </LinksWrapper>
    </Container>
  );
};

export default Sidebar;
const Container = styled.div`
  width: 300px;
  height: 100vh;
  padding: 15px;

  .logoSection {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-top: 1.3em;
    gap: 10px;
  }
  .homeLogoSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.3em;
    gap: 10px;

    .welcome {
      font-size: 14px;
      font-weight: 600;
    }
    .logoImage {
      border: 1px solid #2d90ec;
      height: 80px;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      img {
        height: 78px;
        width: 78px;
      }
    }
  }
`;

const SideLink = styled(NavLink)`
  display: flex;
  width: 270px;
  margin: 0 auto;
  align-items: center;
  padding: 14px 0 14px 28px;
  gap: 10px;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  border: none;
  outline: none;

  &:hover {
    background-color: #ff993a;
    border: 1px solid;
    color: #fff;
    border-radius: 8px;
  }

  .active {
    background-color: #ff993a;
    border: 1px solid;
    color: #fff;
    border-radius: 8px;
  }
`;
