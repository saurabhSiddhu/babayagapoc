import React from "react";
import "./App.css";
import Header from "./components/Header";
import DatabaseTransfer from "./containers/DatabaseTransfer";

function App() {
  return (
    <div className="App">
      <Header> </Header>
      <DatabaseTransfer></DatabaseTransfer>
    </div>
  );
}

export default App;
