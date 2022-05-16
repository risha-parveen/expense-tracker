import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import { useRef } from "react";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="content-space">
        <Sidebar />
        <div className="balance-container"></div>
        <div className="this-week-container"></div>
      </div>
    </div>
  );
}

export default Home;
