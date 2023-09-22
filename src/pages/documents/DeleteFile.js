import React, { useState } from 'react';
const IPFS = require('ipfs-core');

const DeleteFile = () => {
  const [ipfsPath, setIpfsPath] = useState('');
  const [uploadResult, setUploadResult] = useState('');

  const initIPFS = async () => {
    const ipfs = await IPFS.create();
    return ipfs;
  };

  const ipfs = initIPFS();

  const uploadFileToIPFS = async (file) => {
    try {
      const result = await ipfs.add(file);
      setUploadResult(result.path);
    } catch (error) {
      console.error('Error uploading file to IPFS:', error);
    }
  };

  const deleteFileFromIPFS = async () => {
    try {
      await ipfs.pin.rm(ipfsPath);
      setIpfsPath(''); // Clear the IPFS path after deletion
    } catch (error) {
      console.error('Error deleting file from IPFS:', error);
    }
  };

  return (
    <div>
      <h1>IPFS File Management</h1>

      <h2>Upload a File to IPFS</h2>
      <input type="file" onChange={(e) => uploadFileToIPFS(e.target.files[0])} />
      {uploadResult && <p>Uploaded to IPFS: {uploadResult}</p>}

      <h2>Delete a File from IPFS</h2>
      <input
        type="text"
        placeholder="Enter IPFS path"
        value={ipfsPath}
        onChange={(e) => setIpfsPath(e.target.value)}
      />
      <button onClick={deleteFileFromIPFS}>Delete File from IPFS</button>
    </div>
  );
};

export default DeleteFile;
