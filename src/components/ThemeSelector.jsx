import React from 'react';

const ThemeSelector = ({ theme, setTheme }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">Color Theme:</label>
      <input type="text" value={theme.color} onChange={(e) => setTheme({ ...theme, color: e.target.value })} className="w-full p-2 border mb-2" />

      <label className="block mb-1">Font:</label>
      <input type="text" value={theme.font} onChange={(e) => setTheme({ ...theme, font: e.target.value })} className="w-full p-2 border mb-2" />

      <label className="block mb-1">Layout:</label>
      <input type="text" value={theme.layout} onChange={(e) => setTheme({ ...theme, layout: e.target.value })} className="w-full p-2 border" />
    </div>
  );
};

export default ThemeSelector;
