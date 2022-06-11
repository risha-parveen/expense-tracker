import React, { useState, useEffect } from "react";
import { BiX, BiCheck } from "react-icons/bi";

function ThisWeekCard(props) {
  const [open, setOpen] = useState(true);
  const [check, setCheck] = useState(true);

  const toggleDisplay = () => {
    if (open === true) setOpen(!open);
  };

  const toggleCheck = () => {
    setCheck(!check);
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
            <input className="revenue-field" placeholder="Revenue" />
            <input className="expense-field" placeholder="Expense" />
            <div
              className="green-tick"
              onClick={() => {
                toggleCheck();
              }}
            >
              <BiCheck
                fontSize="1.8rem"
                className="check-symbol"
                id={check ? "display-non-hidden" : "display-hidden"}
              />
              <BiX
                fontSize="1.8rem"
                className="x-symbol"
                id={check ? "display-hidden" : "display-non-hidden"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThisWeekCard;
