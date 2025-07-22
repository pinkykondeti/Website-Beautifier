import React, { useState } from 'react';
import WebsiteTypeSelector from './WebsiteTypeSelector';
import ThemeSelector from './ThemeSelector';
import FileUploader from './FileUploader';
import DownloadExport from './DownloadExport';

const Home = ({ setGeneratedCode }) => {
  const [type, setType] = useState('Portfolio');
  const [theme, setTheme] = useState({ color: 'blue', font: 'sans', layout: 'centered' });
  const [fileContent, setFileContent] = useState('');

  const generateWebsite = async () => {
    const prompt = `Create a beautiful responsive ${type} website with ${theme.color} theme, ${theme.font} font, and ${theme.layout} layout. Add HTML and CSS.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    const generatedHTML = data.choices[0]?.message?.content || '';
    setGeneratedCode(generatedHTML);
  };

  return (
    <div className="w-full md:w-1/2 p-6 bg-gray-100 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Website Beautifier AI</h1>
      <WebsiteTypeSelector type={type} setType={setType} />
      <ThemeSelector theme={theme} setTheme={setTheme} />
      <FileUploader setFileContent={setFileContent} />
      <button
        onClick={generateWebsite}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
      >
        Generate Website
      </button>
      <DownloadExport generatedCode={fileContent || ''} />
    </div>
  );
};

export default Home;
