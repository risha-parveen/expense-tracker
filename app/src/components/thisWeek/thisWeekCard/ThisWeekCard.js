import React from "react";

function ThisWeekCard(props) {
  return (
    <div className="card" key={props.index}>
      <div className="left-part">
        <p className="date-of-the-week">{props.dateOfWeek}</p>
        <p className="day-of-the-week">{props.dayOfWeek}</p>
      </div>
      <div className="right-part"></div>
    </div>
  );
}

export default ThisWeekCard;
