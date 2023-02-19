import React from "react";
import styled from "styled-components";
import { HeadPane, SearchBox, ContentWrapper } from "../Home/Home";
import { GrSearch } from "react-icons/gr";
import Filter from "./Filter";
import Table from "./Table";

const Home = () => {
  return (
    <Container>
      <HeadPane>
        <SearchBox style={{ width: "100%" }}>
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
        <h3 className="pageName">UP BILLING REVENUE</h3>
        <TableWrapper>
          <Filter />
          <Table />
        </TableWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.section``;

const TableWrapper = styled.div`
  background-color: #fff;
  border-radius: 13px;
  padding: 20px;
  margin-top: 30px;
`;
