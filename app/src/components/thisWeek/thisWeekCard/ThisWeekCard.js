import React, { useState, useEffect } from "react";

function ThisWeekCard(props) {
  const [open, setOpen] = useState(true);

  const toggleDisplay = () => {
    setOpen(!open);
  };

  if (props.activity === "inactive") {
    let id = "display-non-hidden";
    return (
      <div className="card" key={props.index} id={props.activity}>
        <div className="left-part">
          <p className="date-of-the-week">{props.dateOfWeek}</p>
          <p className="day-of-the-week">{props.dayOfWeek}</p>
        </div>
        {(() => {
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
    let id = "display-non-hidden";
    return (
      <div
        className="card"
        key={props.index}
        id={props.activity}
        onClick={(e) => {
          e.preventDefault();
          toggleDisplay();
        }}
      >
        <div className="left-part">
          <p className="date-of-the-week">{props.dateOfWeek}</p>
          <p className="day-of-the-week">{props.dayOfWeek}</p>
        </div>
        <div className="right-part">
          <p
            className="expense-tag"
            id={open ? "display-non-hidden" : "display-hidden"}
          >
            Add Expenditure
          </p>
          <div
            className="right-part"
            id={open ? "display-hidden" : "display-non-hidden"}
          >
            <button className="revenue-button">Revenue</button>
            <button className="expense-button">Expense</button>
            <button className="green-tick"></button>
          </div>
        </div>
      </div>
    );
  }
}

export default ThisWeekCard;
