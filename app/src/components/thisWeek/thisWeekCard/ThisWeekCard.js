import React from "react";

function ThisWeekCard(props) {
  if (props.activity === "inactive") {
    let id = "display-non-hidden";
    return (
      <div className="card" key={props.index} id={props.activity}>
        <div className="left-part">
          <p className="date-of-the-week">{props.dateOfWeek}</p>
          <p className="day-of-the-week">{props.dayOfWeek}</p>
        </div>
        {(() => {
          //console.log(props.currentDay, props.nowDate);
          if (props.dateNumber < props.nowDate) id = "display-non-hidden";
          else id = "display-hidden";
        })()}
        <div className="right-part" id={id}>
          <p className="income-today">0</p>
          <p className="expense-today">0</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" key={props.index} id={props.activity}>
        <div className="left-part">
          <p className="date-of-the-week">{props.dateOfWeek}</p>
          <p className="day-of-the-week">{props.dayOfWeek}</p>
        </div>
        <div className="right-part">
          <p className="expense-tag">Add Expenditure</p>
        </div>
      </div>
    );
  }
  
}

export default ThisWeekCard;
