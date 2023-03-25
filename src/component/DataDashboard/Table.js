import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columnNames = {
  Bed: [
    "Doctor",
    "Hospital",
    "No of Beds",
    "Ward Type",
    "Bed Size",
    "ICU Facility",
    "Updated at",
    "Current status",
  ],
  Oxygen: [
    "Doctor",
    "Hospital",
    "No of Cylinders",
    "Cylinder Size(in Liters)",
    "Oxygen Level",
    "Working pressure",
    "Updated at",
    "Current status",
  ],
  Blood: [
    "Doctor",
    "Hospital",
    "Blood Type",
    "Blood Units",
    "Haemoglobin level",
    "White Blood Cell (WBC)",
    "Red Blood Cell (RBC)",
    "Updated at",
    "Current status",
  ],
  Medicine: [
    "Doctor",
    "Hospital",
    "Medicine",
    "Preferred for",
    "No of Units",
    "Price",
    "Updated at",
    "Current status",
  ],
  Chat: [],
};

export default function CustomizedTables({ type, data, isloading }) {
  if (isloading) return <CircularProgress />;
  else
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {columnNames[type].map((v, i) => {
                  return (
                    <>
                      <StyledTableCell>{v}</StyledTableCell>
                    </>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <StyledTableRow key={i}>
                  {columnNames[type].map((v, i) => {
                    if (v === "Updated at")
                      return (
                        <>
                          <StyledTableCell key={i} align="left">
                            {new Date(row.updatedAt).toLocaleString()}
                          </StyledTableCell>
                        </>
                      );
                    else if (v === "Doctor")
                      return (
                        <>
                          <StyledTableCell key={i} align="left">
                            <Avatar
                              alt="Profile Pic"
                              src={row?.id?.doctorPic}
                              sx={{ width: 60, height: 60 }}
                              variant="rounded"
                            />
                            <p
                              style={{ fontWeight: "bold" }}
                            >{`${row?.id?.name} (${row?.id?.specialization})`}</p>
                          </StyledTableCell>
                        </>
                      );
                    else if (v === "Hospital")
                      return (
                        <>
                          <StyledTableCell key={i} align="left">
                            <Avatar
                              alt="Profile Pic"
                              src={row?.id?.hPic}
                              sx={{ width: 60, height: 60 }}
                              variant="rounded"
                            />
                            <p style={{ fontWeight: "bold", color: "blue" }}>
                              {row?.id?.hospital}
                            </p>
                            {`${row?.id?.phone}, (${row?.id?.haddress})`}
                          </StyledTableCell>
                        </>
                      );
                    else
                      return (
                        <>
                          <StyledTableCell
                            key={i}
                            align={
                              v === "No of Beds" || v === "No of Cylinders"
                                ? "center"
                                : "left"
                            }
                            style={
                              row[v] === "Available" || row[v] === "Yes"
                                ? { color: "green" }
                                : row[v] === "No" || row[v] === "Out of stock"
                                ? { color: "red" }
                                : { color: "black" }
                            }
                          >
                            {row[v]}
                          </StyledTableCell>
                        </>
                      );
                  })}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}
