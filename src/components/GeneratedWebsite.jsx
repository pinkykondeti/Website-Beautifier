import React from 'react';

const GeneratedWebsite = () => {
  const projects = [
    {
      title: 'AI Image Classifier',
      description: 'A web app that classifies images using a TensorFlow.js model.',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with React and Tailwind CSS.',
    },
    {
      title: 'Blog Platform',
      description: 'A full-stack blog application with user authentication.',
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 font-sans text-center p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600">My Portfolio</h1>
        <p className="text-gray-700 mt-2 text-lg">Showcasing my best work</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-500 mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default GeneratedWebsite;
