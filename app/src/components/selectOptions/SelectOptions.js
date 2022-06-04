import React from "react";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function SelectOptions() {
  return (
    <div>
      <Select
        defaultValue="$"
        style={{ color: "white" }}
        onChange={handleChange}
        className={StyleSheet.customSelect}
      >
        <Option value="€" style={{ color: "white" }}>
          €
        </Option>
        <Option value="$" style={{ color: "white" }}>
          $
        </Option>
        <Option value="₹" style={{ color: "white" }}>
          ₹
        </Option>
      </Select>
    </div>
  );
}

export default SelectOptions;
