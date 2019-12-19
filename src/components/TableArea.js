import React, { Component } from "react";
import TableData from "./TableData";
import TableHeadings from "../components/TableHeadings";
// import Nav from "../components/Nav";
import API from "../utils/API";
// import "../styles/DataArea.css";

class TableArea extends Component {
      state = {
        result:[{}],
        filteredResult: [{}]
      };
    
  
    // when our page loads we make axios call to get random users, and set our state with the results we get back
    componentDidMount() {
      API.getUsers().then(results => {
        this.setState({
          result: results,
          filteredResult: results
        })
      });
    }


    render () {
      return(
        <div>
    
          <table class="table">
          <TableHeadings />
          {/* <TableData users={this.state.filteredResult} /> */}

          </table>

        </div>



      )
    }

  }
export default TableArea;