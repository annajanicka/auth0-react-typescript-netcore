import Paper from "@material-ui/core/Paper";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

interface IForecast {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

const ForecastTable: React.FC<{ items: IForecast[] }> = ({ items }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="forecast table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Temperature °C</TableCell>
            <TableCell align="right">Temperature °F</TableCell>
            <TableCell align="right">Summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.date.toString()}>
              <TableCell component="th" scope="row">
                {new Date(row.date).toLocaleDateString()}
              </TableCell>
              <TableCell align="right">{row.temperatureC}</TableCell>
              <TableCell align="right">{row.temperatureF}</TableCell>
              <TableCell align="right">{row.summary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ForecastTable;
