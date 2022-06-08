import React, { useState } from "react";
import "./Account.css";
import Dropdown from "../../components/dropdown/Dropdown";

function AccountBox() {
  const [selected, setSelected] = useState("");
  return (
    <div className="account-container">
      <p id="account-user">Username</p>
      <div id="line"></div>
      <div className="title-container">
        <p className="account-titles">Currency</p>
        <Dropdown selected={selected} setSelected={setSelected} />
      </div>
      <div className="title-container">
        <p className="account-titles">Initial Amount</p>
      </div>
      <div className="title-container">
        <p className="account-titles">Set Weekly Plan</p>
      </div>
      <button id="save-button">Save</button>
    </div>
  );
}

export default AccountBox;
