import React from 'react';

const FileUploader = ({ setFileContent }) => {
  const handleFile = (e) => {
    const reader = new FileReader();
    reader.onload = () => setFileContent(reader.result);
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="mb-4">
      <label className="block mb-1">Upload Existing HTML File:</label>
      <input type="file" accept=".html" onChange={handleFile} className="w-full p-2 border" />
    </div>
  );
};

export default FileUploader;
