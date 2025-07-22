import React, { useState } from 'react';
import Home from './components/Home';
import Preview from './components/Preview';

const App = () => {
  const [generatedCode, setGeneratedCode] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4">
      <div className="max-w-7xl mx-auto shadow-xl rounded-lg bg-white p-6 md:flex md:gap-8">
        <Home setGeneratedCode={setGeneratedCode} />
        <Preview generatedCode={generatedCode} />
      </div>
    </div>
  );
};

export default App;
