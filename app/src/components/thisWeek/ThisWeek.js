import React from "react";
import "./ThisWeek.css";
import ThisWeekCard from "./thisWeekCard/ThisWeekCard";

function ThisWeek() {
  const current = new Date();
  const firstday = new Date(
    current.getTime() - 60 * 60 * 24 * current.getDay() * 1000
  );

  let dayOfWeek = null;
  let currentDayNumber = null;

  let weekDays = [
    { Sunday: 7 },
    { Monday: 1 },
    { Tuesday: 2 },
    { Wednesday: 3 },
    { Thursday: 4 },
    { Friday: 5 },
    { Saturday: 6 },
  ];

  const findTodayDate = (index) => {
    if (index === 0) {
      const today = new Date(
        current.getTime() - 60 * 60 * 24 * current.getDay() * 1000
      );
      return date(today);
    }
    const today = new Date(firstday.getTime() + 60 * 60 * 24 * index * 1000);

    return date(today);
  };

  //to get the current date

  const date = (day) => {
    return `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`;
  };

  return (
    <div id="this-week-container">
      <p id="heading">This Week</p>

      {weekDays.map((day, index) => {
        let activity = "inactive";
        dayOfWeek = Object.keys(day)[0];
        currentDayNumber = Object.values(day)[0];
        let thisDate = findTodayDate(index);
        const dateNumber = thisDate.split("/")[0];

        if (current.getDay() === currentDayNumber) {
          activity = "active";
        }

        return (
          <ThisWeekCard
            key={index + 1}
            dayOfWeek={dayOfWeek}
            dateOfWeek={thisDate}
            activity={activity}
            nowDate={current.getDate()}
            dateNumber={dateNumber}
          />
        );
      })}
    </div>
  );
}

export default ThisWeek;
