import React, { Component } from "react";
import TableData from "./TableData";
import API from "../utils/API";
import TableHeadings from "../components/TableHeadings";
import Nav from "../components/Nav";
// import "../styles/DataArea.css";

class TableArea extends Component {
    state={
        employees: {},
        sortOrder: {},
        filteredEmployees:{},

    }
}

export default TableArea;