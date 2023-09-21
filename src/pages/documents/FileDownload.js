import React, { useState, useEffect } from 'react';

const FileDownload = ({ cid }) => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    async function fetchFileContent() {
      if (cid) {
        try {
          // Fetch the file content using the CID
          const response = await fetch(`https://ipfs.io/ipfs/${cid}`);
          const content = await response.blob();

          // Set the file content for download
          setFileContent(content);
        } catch (error) {
          console.error('Error fetching file content:', error);
        }
      }
    }

    fetchFileContent();
  }, [cid]);

  const downloadFile = () => {
    if (fileContent) {
      const url = window.URL.createObjectURL(new Blob([fileContent]));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'downloaded-file.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div>
      <h2>Download File</h2>
      <button onClick={downloadFile}>Download</button>
    </div>
  );
};

export default FileDownload;
