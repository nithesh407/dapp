import { Select } from 'antd';

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const  = () => (
  <Select
    showSearch={false} // Set showSearch to false to display options only when clicking
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
);

export default ;
