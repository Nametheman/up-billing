import React, { useState } from "react";
import styled from "styled-components";
import { HeadPane, SearchBox, ContentWrapper } from "../Home/Home";
import { GrSearch } from "react-icons/gr";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Filter from "./Filter";
import Table from "./Table";
import tableData from "./data";
import Modal from "./Modal";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const [showModal, setShowModal] = useState(false);

  const indexOfLastPost = postPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const numberOfPages = Math.ceil(tableData.length / postPerPage);

  const slicedData = tableData.slice(indexOfFirstPost, indexOfLastPost);
  const endNumber = slicedData.length;

  const prevPageHandler = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
  };
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
          <Table data={slicedData} showModal={setShowModal} />
          <PaginationWrapper>
            <p className="count">
              1-{endNumber} of {tableData.length}
            </p>

            <div className="paginationPart">
              <p>Rows per page: {postPerPage}</p>
              <div className="paginationBtns">
                <button
                  disabled={currentPage === 1 ? true : false}
                  onClick={prevPageHandler}
                >
                  <RxCaretLeft size={17} />
                </button>
                <p className="numberOfPages">
                  <span>{currentPage}/</span>
                  {numberOfPages}
                </p>
                <button
                  disabled={currentPage === numberOfPages ? true : false}
                  onClick={nextPageHandler}
                >
                  <RxCaretRight size={17} />
                </button>
              </div>
            </div>
          </PaginationWrapper>
        </TableWrapper>
      </ContentWrapper>
      {showModal && <Modal show={setShowModal} />}
    </Container>
  );
};

export default Home;

const Container = styled.section``;

const TableWrapper = styled.div`
  background-color: #fff;
  border-radius: 13px;
  padding: 20px 0;

  @media only screen and (max-width: 450px) {
    /* padding: 20p; */
  }
  margin-top: 30px;
`;
const PaginationWrapper = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 450px) {
    /* padding: 0; */
  }

  .count {
    font-size: 14px;
    color: #687182;
  }

  .paginationPart {
    display: flex;
    align-items: center;
    gap: 18px;

    p {
      font-size: 13px;
      color: #687182;
    }

    .paginationBtns {
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        border: 1px solid #b5b3b3;
        outline: none;
        padding: 4px 9px;
        border-radius: 9px;
        background-color: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          border: 1px solid #878686;
        }

        &:disabled {
          border: 1px solid #bab9b9;
          cursor: not-allowed;
        }
      }

      .numberOfPages {
        font-size: 13px;
        color: #687182;

        span {
          color: #000000;
        }
      }
    }
  }
`;
