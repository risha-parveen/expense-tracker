import React from "react";
import "./ThisWeek.css";
import ThisWeekCard from "./thisWeekCard/ThisWeekCard";

function ThisWeek() {
  const current = new Date();

  let dayOfWeek = null;

  let weekDays = [
    { Sunday: 7 },
    { Monday: 1 },
    { Tuesday: 2 },
    { Wednesday: 3 },
    { Thursday: 4 },
    { Friday: 5 },
    { Saturday: 6 },
  ];

  //to get the current date

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  //to get the day of the week
  let currentDayOfWeek = current.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <div id="this-week-container">
      <p id="heading">This Week</p>
      {weekDays.map((day, index) => {
        dayOfWeek = Object.keys(day)[0];

        return (
          <ThisWeekCard
            key={index + 1}
            dayOfWeek={dayOfWeek}
            dateOfWeek="12/02/22"
          />
        );
      })}
    </div>
  );
}

export default ThisWeek;
