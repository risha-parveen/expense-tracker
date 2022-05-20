import React from "react";
import "./ThisWeek.css";
import ThisWeekCard from "./thisWeekCard/ThisWeekCard";

function ThisWeek() {
  const current = new Date();

  let weekDays = [
    { 7: "Sunday" },
    { 1: "Monday" },
    { 2: "Tuesday" },
    { 3: "Wednesday" },
    { 4: "Thursday" },
    { 5: "Friday" },
    { 6: "Saturday" },
  ];

  //to get the current date

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  //to get the day of the week
  console.log(current.toLocaleDateString("en-US", { weekday: "long" }));

  return (
    <div id="this-week-container">
      <p id="heading">This Week {current.getDay() - 1}</p>
      {weekDays.map((index) => {
        return <ThisWeekCard />;
      })}
    </div>
  );
}

export default ThisWeek;
