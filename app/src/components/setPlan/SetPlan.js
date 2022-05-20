import React from "react";
import "./SetPlan.css";
import { BsFillPencilFill } from "react-icons/bs";

function SetPlan() {
  return (
    <div id="set-plan-container">
      <button className="set-plan-button" id="weekly-plan-button">
        Weekly set plan :<span id="set-plan-value"> €50 </span>
        <BsFillPencilFill fontSize="1.1rem" color="#3D4144" />
      </button>
      <button className="set-plan-button balance">
        Weekly balance :<span id="weekly-balance-value"> €30</span>
      </button>
      <button className="set-plan-button balance">
        Total balance :<span id="total-balance-value"> €1500</span>
      </button>
    </div>
  );
}

export default SetPlan;
