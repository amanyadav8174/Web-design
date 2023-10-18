import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <input type="text" placeholder="Search.."></input>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
