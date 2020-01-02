import React, { Component } from "react";
import TableData from "./TableData";
import TableHeadings from "../components/TableHeadings";
// import Nav from "../components/Nav";
import API from "../utils/API";
// import "../styles/DataArea.css";

class TableArea extends Component {
      state = {
        result:[{
          "gender": "female",
          "name": {
              "title": "Ms",
              "first": "Lillian",
              "last": "Beck"
          },
          "location": {
              "street": {
                  "number": 840,
                  "name": "E Center St"
              },
              "city": "Santa Rosa",
              "state": "Kansas",
              "country": "United States",
              "postcode": 77668,
              "coordinates": {
                  "latitude": "-50.8410",
                  "longitude": "173.7384"
              },
              "timezone": {
                  "offset": "+5:45",
                  "description": "Kathmandu"
              }
          },
          "email": "lillian.beck@example.com",
          "login": {
              "uuid": "90fb12c4-c4e7-47cd-85ba-a44e672c3b30",
              "username": "redmouse346",
              "password": "purple",
              "salt": "p5EEUYtv",
              "md5": "76b0436909e1eaa7c5e1d05b17fc6fdd",
              "sha1": "094427f48176ed9c014e232c34c21e6e04a54961",
              "sha256": "1882e4bdb83c4634048e100143cebd08c94816ca759df83139c9eef619b795ba"
          },
          "dob": {
              "date": "1961-05-26T06:32:59.580Z",
              "age": 58
          },
          "registered": {
              "date": "2018-05-02T02:47:43.501Z",
              "age": 1
          },
          "phone": "(417)-262-0093",
          "cell": "(850)-983-1745",
          "id": {
              "name": "SSN",
              "value": "919-27-7655"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/39.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
          },
          "nat": "US"
      }],
        filtered: [{
          "gender": "female",
          "name": {
              "title": "Ms",
              "first": "Lillian",
              "last": "Beck"
          },
          "location": {
              "street": {
                  "number": 840,
                  "name": "E Center St"
              },
              "city": "Santa Rosa",
              "state": "Kansas",
              "country": "United States",
              "postcode": 77668,
              "coordinates": {
                  "latitude": "-50.8410",
                  "longitude": "173.7384"
              },
              "timezone": {
                  "offset": "+5:45",
                  "description": "Kathmandu"
              }
          },
          "email": "lillian.beck@example.com",
          "login": {
              "uuid": "90fb12c4-c4e7-47cd-85ba-a44e672c3b30",
              "username": "redmouse346",
              "password": "purple",
              "salt": "p5EEUYtv",
              "md5": "76b0436909e1eaa7c5e1d05b17fc6fdd",
              "sha1": "094427f48176ed9c014e232c34c21e6e04a54961",
              "sha256": "1882e4bdb83c4634048e100143cebd08c94816ca759df83139c9eef619b795ba"
          },
          "dob": {
              "date": "1961-05-26T06:32:59.580Z",
              "age": 58
          },
          "registered": {
              "date": "2018-05-02T02:47:43.501Z",
              "age": 1
          },
          "phone": "(417)-262-0093",
          "cell": "(850)-983-1745",
          "id": {
              "name": "SSN",
              "value": "919-27-7655"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/39.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
          },
          "nat": "US"
      }]
      };
    
  
    // when our page loads we make axios call to get random users, and set our state with the results we get back
    componentDidMount() {
      console.log("starting")
      API.getUsers().then(results => {
        console.log(results.data.results);

        this.setState({
          result: results.data.results,
          filtered: results.data.results
        })


      });
    }


    render () {
      return(
        <div>
    
          <table class="table">
          <TableHeadings />
          <TableData users={this.state.filtered} />

          </table>

        </div>



      )
    }

  }
export default TableArea;