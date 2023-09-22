import React, { useState } from "react";
import { Modal, Input, Select, DatePicker, Upload, Button, message } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { create } from 'ipfs-http-client';
import FileDownload from "./FileDownload";
import axios from "axios";
const { Option } = Select;

const DocumentModal = ({ children, onFormData }) => {
  const ipfs = create({ host: 'localhost', port: 5001, protocol: 'http' });
  const [visible, setVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [caseName, setCaseName] = useState(''); // Store Case Name
  const [caseNumber, setCaseNumber] = useState(''); // Store Case Number
  const [tags, setTags] = useState([]); // Store Tags as an array
  const [date, setDate] = useState('');
  const [cid, setCID] = useState('');

  const handleCancel = () => {
    setVisible(false);
  };

  const handleUpload = (cid,filename) => {
    // Handle the upload logic here
    axios.post('http://localhost:3010/Casefile', { caseNumber:caseNumber, caseName: caseName,filename:filename,cid:cid })
  .then(response => {
    if (response.data.success === true) {
      console.log('File uploaded with CID:', cid);
      message.success(filename + ' File uploaded successfully');
    } else {
      console.error('File upload failed:', response.data.errorMessage);
    }
  });
}

  const showModal = () => {
    setVisible(true);
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  function handleChange(value) {
    setTags(value); // Update the tags state
  }

  const uploadFile = async () => {
    if (fileList.length === 0) {
      alert('Please select files to upload.');
      return;
    }

    try {
      // Loop through the fileList array to process each selected file
      for (const fileItem of fileList) {
        const file = fileItem.originFileObj;
        const filename=fileItem.name;
        console.log(filename);
        const fileContent = await file.arrayBuffer();
        const content = new Uint8Array(fileContent);
        const result = await ipfs.add({ content });

        setCID(result.cid.toString());
        handleUpload(result.cid.toString(),filename);
      }

      // Clear the fileList after uploading
      setFileList([]);
    } catch (error) {
      console.error('Error uploading files to IPFS:', error);
    }
  };

  const handleOk = () => {
    axios.post('http://localhost:3010/Casename', { casenumber:caseNumber, casename: caseName,casetype:JSON.stringify(tags),startdate:JSON.stringify(date)})
  .then(response => {
    if (response.data.success === true) {
      message.success(caseName + ' Folder created successfully');
    } else {
      console.error('Folder create failed:', response.data.errorMessage);
    }
  });
    const formData = {
      caseName,
      caseNumber,
      tags,
      date,
      cid,
    };
    console.log(formData);
    
    // Call the onFormData prop with the form data
    onFormData(formData);

    // Clear the form fields and close the modal
    setCaseName('');
    setCaseNumber('');
    setTags([]);
    setFileList([]);
    setDate(null);
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        New <PlusOutlined />
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          style={{ marginTop: 10 }}
          placeholder="Case Name"
          value={caseName}
          onChange={(e) => setCaseName(e.target.value)}
        />
        <Input
          style={{ marginTop: 10 }}
          placeholder="Enter Case Number"
          value={caseNumber}
          onChange={(e) => setCaseNumber(e.target.value)}
        />
        <Select
          style={{ marginTop: 10, width: '100%' }}
          mode="tags"
          placeholder="Tags Mode"
          onChange={handleChange}
          value={tags}
        >
          {children}
        </Select>
        <Input
          type="date"
          style={{ width: '100%', marginTop: 10 }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Upload
          style={{ marginTop: 10 }}
          customRequest={() => { }}
          onChange={handleFileChange}
          fileList={fileList}
          showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
        >
          <Button icon={<UploadOutlined />} style={{ marginTop: 10 }}>
            Select File(s)
          </Button>
        </Upload>

        <Button
          type="primary"
          style={{ marginTop: 10 }}
          onClick={uploadFile}
        >
          Upload
        </Button>

        {cid && (
          <div>
            <p>Document CID: {cid}</p>
            <a
              href={`https://ipfs.io/ipfs/${cid}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on IPFS
            </a>

            <FileDownload cid={cid} />
          </div>
        )}
      </Modal>
    </>
  );
};

export default DocumentModal;
