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

    componentDidMount(){

    }

    searchMovies = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };


    render(){
        return (
        <h1>Hello Douglas!</h1>
        )
    }
}

export default TableArea;