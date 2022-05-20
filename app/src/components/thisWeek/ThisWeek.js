import React from "react";
import "./ThisWeek.css";
import ThisWeekCard from "./thisWeekCard/ThisWeekCard";

function ThisWeek() {
  return (
    <div id="this-week-container">
      <p id="heading">This Week</p>
      <ThisWeekCard />
      <ThisWeekCard />
    </div>
  );
}

export default ThisWeek;
