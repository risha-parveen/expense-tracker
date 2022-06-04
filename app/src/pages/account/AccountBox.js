import React from "react";
import "./Account.css";
import SelectOptions from "../../components/selectOptions/SelectOptions";

function AccountBox() {
  return (
    <div className="account-container">
      <p id="account-user">Username</p>
      <div id="line"></div>
      <div className="title-container">
        {/*<p className="account-titles">Currency</p>*/}
        <SelectOptions />
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
