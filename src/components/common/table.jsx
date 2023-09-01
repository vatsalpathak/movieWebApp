import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ columns, onSort, sortColumn, data }) => {
  // const { columns, onSort, sortColumn, data } = props; we can directly call the objects from props while initialization as above
  return (
    <table className="table">
      {" "}
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} data={data} />{" "}
    </table>
  );
};

export default Table;
