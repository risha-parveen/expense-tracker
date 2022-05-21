import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Account.css";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/Context.js";

function Account() {
  const { sidebar } = useContext(SidebarContext);
  return (
    <div className="account-page">
      <Navbar />
      <div className="content-space">
        <Sidebar activity={sidebar ? "active" : "inactive"} />
        <div className="content"></div>
      </div>
    </div>
  );
}

export default Account;
