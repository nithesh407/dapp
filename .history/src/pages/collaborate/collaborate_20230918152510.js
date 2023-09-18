import { Select } from 'antd';
import { useState } from 'react';

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const  = () => {
  const [typing, setTyping] = useState(false);

  const handleFocus = () => {
    setTyping(true);
  };

  const handleBlur = () => {
    setTyping(false);
  };

  return (
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      onFocus={handleFocus}
      onBlur={handleBlur}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      open={typing} // Control when the options are displayed based on the typing state
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
};

export default ;
