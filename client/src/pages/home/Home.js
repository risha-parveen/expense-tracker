import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import { sidebarStack } from "../../components/navbar/Navbar";
let sidebar = null;
const bleh = () => {
  console.log(sidebarStack);
};

function Home() {
  return (
    <div className="home-page" onClick={bleh}>
      <Navbar />
      <div className="content-space">
        <Sidebar activity={sidebarStack ? "active" : "inactive"} />
      </div>
    </div>
  );
}

export default Home;
