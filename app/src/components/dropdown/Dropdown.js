import React, { useState } from "react";
import "./Dropdown.css";
import Select from "react-select";

function Dropdown() {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "pink",
    }),
  };

  const options = [
    { label: "$ - U.S Dollar", value: "dollar" },
    { label: "€ - Euro", value: "euro" },
    { label: "₹ - Rupee", value: "rupee" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="dropdown">
      <Select
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default Dropdown;
