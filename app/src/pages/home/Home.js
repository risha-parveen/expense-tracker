import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import { useState } from "react";
import { HomeContext } from "../../contexts/Context.js";

function Home() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="home-page">
      <HomeContext.Provider value={{ sidebar, setSidebar }}>
        <Navbar />
        <div className="content-space">
          <Sidebar activity={sidebar ? "active" : "inactive"} />
        </div>
      </HomeContext.Provider>
    </div>
  );
}

export default Home;
