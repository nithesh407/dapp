import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const optionsData = {
  option1: ['Value 1-1', 'Value 1-2', 'Value 1-3', 'Value 1-4', 'Value 1-5', 'Value 1-6', 'Value 1-7', 'Value 1-8', 'Value 1-9', 'Value 1-10'],
  option2: ['Value 2-1', 'Value 2-2', 'Value 2-3', 'Value 2-4', 'Value 2-5', 'Value 2-6', 'Value 2-7', 'Value 2-8', 'Value 2-9', 'Value 2-10'],
  // Add similar arrays for option3 to option20
};

function CascadingSelect() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setSelectedValue(null);
  };

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <Select
        style={{ width: 200 }}
        placeholder="Select an option"
        onChange={handleOptionChange}
        value={selectedOption}
      >
        {Object.keys(optionsData).map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>

      {selectedOption && (
        <Select
          style={{ width: 200, marginTop: 16 }}
          placeholder="Select a value"
          onChange={handleValueChange}
          value={selectedValue}
        >
          {optionsData[selectedOption].map((value) => (
            <Option key={value} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      )}
    </div>
  );
}

export default CascadingSelect;
