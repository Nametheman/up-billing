import React from "react";
import styled from "styled-components";
// import tableData from "./data";
import bin from "../../assets/images/bin.svg";
import file from "../../assets/images/file.svg";

const Table = ({ data, showModal }) => {
  const tableHead = [
    { name: "Report Name", field: "reportName" },
    { name: "Report Date", field: "reportDate" },
    { name: "Country", field: "country" },
    { name: "Report Type", field: "reportType" },
    { name: "File URL", field: "fileUrl" },
    { name: "Status", field: "status" },
    { name: "", field: "" },
  ];

  return (
    <Container>
      <table>
        <thead>
          <tr className="theadtr">
            {tableHead.map((head) => {
              return <th className="th">{head.name}</th>;
            })}
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((data, index) => {
            return (
              <tr
                key={data.id}
                style={{
                  background: index % 2 === 0 ? "#FFF" : "#FAFAFA",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                <td>{data.rn}</td>
                <td>{data.rd}</td>
                <td>{data.country}</td>
                <td>{data.rt}</td>
                <td className="fileData">
                  {/* <div> */}
                  <img src={file} alt="file" />
                  <p>File</p>
                  {/* </div> */}
                </td>
                <td>{data.status}</td>
                <td className="delete">
                  <img
                    src={bin}
                    alt="delete"
                    onClick={() => {
                      showModal(true);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  @media screen and (max-width: 600px) {
    table {
      width: 100%;
    }
    thead {
      display: none;
    }
    tr:nth-of-type(2n) {
      background-color: inherit;
    }
    tr td:first-child {
      background: #f0f0f0;
      font-weight: bold;
      font-size: 1.3em;
    }
    tbody td {
      display: block;
      text-align: center;
    }
    tbody td:before {
      content: attr(data-th);
      display: block;
      text-align: center;
    }
  }

  table {
    text-align: left;
    border-collapse: collapse;
    width: 100%;
    border-radius: 5px;
    /* border: 1px solid #d7d7d/÷780; */
    margin-top: 30px;

    .theadtr {
      /* padding: 0 80px; */
      /* border: 1px solid; */
      .th {
        /* padding-left: 30px; */
        padding: 16px 0 16px 20px;
        font-size: 0.8rem;
        font-weight: 500;
        color: #687182;
        background: #fafafa;
        text-transform: capitalize;
        text-align: lefts;
      }
    }
    .tbody {
      font-size: 0.65rem;

      tr {
        td {
          text-align: left;
          padding: 16px 0 16px 20px;
          font-weight: 400;
          /* padding-left: 20px; */
        }
        .delete {
          padding-right: 30px;
          img {
            cursor: pointer;
          }
        }
        .fileData {
          display: flex;
          align-items: center;
          gap: 13px;
          background-color: #ff993a;
          margin-top: 10px;
          border-radius: 4px;
          height: 30px;
          color: #fff;
          font-size: 15px;
          cursor: pointer;
        }
      }
    }
  }
`;
