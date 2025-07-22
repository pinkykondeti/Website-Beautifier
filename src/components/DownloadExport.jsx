import React from 'react';

const DownloadExport = ({ generatedCode }) => {
  const download = () => {
    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-website.html';
    a.click();
  };

  return (
    <button
      onClick={download}
      className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
    >
      Download Website
    </button>
  );
};

export default DownloadExport;
