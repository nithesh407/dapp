import React, { useState } from 'react';
import { Upload, Input, Button, message } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';

const Aapp = () => {
  const [fileList, setFileList] = useState([]);
  const [selectedFileBlob, setSelectedFileBlob] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (info) => {
    const { status, fileList } = info;

    if (status === 'done' || status === 'removed') {
      // Update the selected files
      setFileList(fileList);
    } else if (status === 'error') {
      message.error('File upload failed');
    }
  };

  const openFileInNewTab = () => {
    if (selectedFileBlob) {
      // Create a Blob URL for the selected file
      const blobUrl = URL.createObjectURL(selectedFileBlob);

      // Open the Blob URL in a new tab
      window.open(blobUrl, '_blank');
    }
  };

  const handleFilePreview = async (file) => {
    try {
      // Load the selected file as a Blob
      const response = await fetch(file.url);
      const blob = await response.blob();
      setSelectedFileBlob(blob);
    } catch (error) {
      console.error('Error loading file:', error);
    }
  };

  const handleSubmit = () => {
    // Implement your submit logic here
    // Use fileList and fileName as needed

    // Example: Display the uploaded file and its custom name
    if (fileList.length > 0 && fileName) {
      const uploadedFile = fileList[0];
      message.success(`Uploaded File: ${uploadedFile.name}, Custom Name: ${fileName}`);
    } else {
      message.error('Please select a file and provide a custom name.');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Input
          placeholder="Custom File Name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          prefix={<UserOutlined />} // Add an icon to the input box
          style={{ width: '250px' }}
        />
      </div>

      <div>
        <Upload
          fileList={fileList}
          onChange={handleFileChange}
          // Remove the "beforeUpload" prop to enable file upload
          onPreview={handleFilePreview}
          multiple
        >
          <Button icon={<UploadOutlined />}>Choose File</Button>
        </Upload>
      </div>

      <div>
        <Button
          type="primary"
          onClick={handleSubmit}
          disabled={fileList.length === 0 || !fileName}
        >
          Submit
        </Button>
      </div>

      {fileList.length > 0 && (
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {fileList.map((file) => (
              <li key={file.uid}>
                {file.name}{' '}
                <Button
                  type="link"
                  onClick={() => openFileInNewTab()}
                >
                  Open in New Tab
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Aapp;
