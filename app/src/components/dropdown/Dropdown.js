import React, { useState } from "react";
import Select from "react-select";

function Dropdown() {
  const options = [
    { label: "$ - U.S Dollar", value: "dollar" },
    { label: "€ - Euro", value: "euro" },
    { label: "₹ - Rupee", value: "rupee" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="dropdown">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className="dropdown-select"
        classNamePrefix="dropdown-inner"
      />
    </div>
  );
}

export default Dropdown;
