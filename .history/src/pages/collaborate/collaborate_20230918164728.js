import { Select } from 'antd';
import { Avatar } from 'antd'; // Import Avatar component

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Option = ({ value, label }) => (
  <Select.Option value={value} label={label}>
    <Avatar size={24} style={{ marginRight: 8 }}src /> {label}
  </Select.Option>
);

const Collaborate = () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
  >
    <Option value="jack" label="Jack" />
    <Option value="lucy" label="Lucy" />
    <Option value="tom" label="Tom" />
  </Select>
);

export default Collaborate;
