import { Select } from 'antd';
import React from 'react';

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};

const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Option = ({ label, value, avatarUrl }) => (
  <div>
    <img src={avatarUrl} alt={label} style={{ marginRight: '8px', width: '32px', height: '32px' }} />
    {label}
  </div>
);

const Cola = () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    optionLabelProp="label" // Specify the prop name for the label
    options={[
      {
        value: 'jack',
        label: <Option label="Jack" value="jack" avatarUrl="jack-avatar.jpg" />,
      },
      {
        value: 'lucy',
        label: <Option label="Lucy" value="lucy" avatarUrl="lucy-avatar.jpg" />,
      },
      {
        value: 'tom',
        label: <Option label="Tom" value="tom" avatarUrl="tom-avatar.jpg" />,
      },
    ]}
  />
);

export default Cola;
