import React from "react";
import styled from "styled-components";

const Table = () => {
  const tableHead = [
    { name: "Report Name", field: "reportName" },
    { name: "Report Date", field: "reportDate" },
    { name: "Country", field: "country" },
    { name: "Report Type", field: "reportType" },
    { name: "File URL", field: "fileUrl" },
    { name: "Status", field: "status" },
    { name: "", field: "" },
  ];

  return <Container>Table</Container>;
};

export default Table;

const Container = styled.div``;
