import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SetPlan from "../../components/setPlan/SetPlan";
import "./Home.css";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/Context.js";

function Home() {
  const { sidebar } = useContext(SidebarContext);
  return (
    <div className="home-page">
      <Navbar />
      <div className="content-space">
        <Sidebar activity={sidebar ? "active" : "inactive"} />
        <div className="content">
          <SetPlan />
          <div id="this-week-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
