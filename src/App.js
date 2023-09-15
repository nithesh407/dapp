import React, { useState } from 'react';
import { Upload, Input, Button, message } from 'antd';
import { UploadOutlined, UserOutlined, LoadingOutlined } from '@ant-design/icons';

const App = () => {
  const [fileList, setFileList] = useState([]);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
   
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
 if (fileList.length > 0 && fileName) {
        const uploadedFile = fileList[0];
        message.success(`Uploaded File: ${uploadedFile.name}, Custom Name: ${fileName}`);
      } else {
        message.error('Please select a file and provide a custom name.');
      }
    }, 2000);
  };
 const uploadBoxStyle = {
    border: '2px solid #1890ff', // Blue border color
    backgroundColor: '#e6f7ff',   // Light blue background color
    padding: '10px',             // Add padding for better appearance
    borderRadius: '4px',         // Rounded corners
    display: 'inline-block',     // Display as a block element
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Input
          placeholder="Custom File Name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          prefix={<UserOutlined />}
          style={{ width: '250px' }}
        />
      </div>
      <div>
        <Upload
          fileList={fileList}
          beforeUpload={(file) => {
            setFileList([file]);
            return false;
          }}
          style={uploadBoxStyle}
        >
          <Button icon={<UploadOutlined />}>Upload File</Button>
        </Upload>
      </div>
      <Button
        type="primary" // Set the button type to "primary" for a blue color
        onClick={handleUpload}
        icon={loading ? <LoadingOutlined /> : null} // Display rotating icon when loading
      >
        {loading ? 'Loading' : 'Click me!'}
      </Button>
    </div>
  );
};

export default App;
