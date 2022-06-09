import React, { useState } from "react";
import Select from "react-select";

function Dropdown() {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "20px",
      border: "none",
      width: "120px",
      fontFamily: "Verdana",
      backgroundColor: "rgba(212, 184, 84,0.85)",
    }),
    input: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      color: "white",
      border: "none",
    }),
    menu: (provided, state) => ({
      ...provided,
      color: "grey",
      backgroundColor: "white",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
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
        className="dropdown-select"
        classNamePrefix="dropdown-inner"
      />
    </div>
  );
}

export default Dropdown;
