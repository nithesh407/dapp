import { Select } from 'antd';
import { useState } from 'react';

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const Collaborateimport { Select } from 'antd';

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const App = () => (
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

export default App;
 = () => {
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

export default Collaborateimport { Select } from 'antd';

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const App = () => (
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

export default App;
;
