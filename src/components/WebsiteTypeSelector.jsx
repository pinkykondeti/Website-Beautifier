import React from 'react';

const WebsiteTypeSelector = ({ type, setType }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">Website Type:</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-2 border"
      >
        <option>Portfolio</option>
        <option>Blog</option>
        <option>Business</option>
        <option>E-commerce</option>
      </select>
    </div>
  );
};

export default WebsiteTypeSelector;
