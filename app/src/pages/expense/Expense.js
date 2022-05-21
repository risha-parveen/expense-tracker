import React from "react";
import "./Expense.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/Context.js";

function Expense() {
  const { sidebar } = useContext(SidebarContext);
  return (
    <div className="expense-page">
      <Navbar />
      <div className="content-space">
        <Sidebar activity={sidebar ? "active" : "inactive"} />
        <div className="content"></div>
      </div>
    </div>
  );
}

export default Expense;
