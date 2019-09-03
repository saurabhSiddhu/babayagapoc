import React from "react";
import axios from "axios";
import DatabaseList from "../../components/DatabaseList"
class DatabaseTransfer extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api.json").then(databaseList => {
       console.log(databaseList);
    });
  }

  render() { 
    return (
        <div className = "database-wrapper">
            <DatabaseList></DatabaseList>
            <DatabaseList></DatabaseList>
        </div>
    );
  }
}
export default DatabaseTransfer;
