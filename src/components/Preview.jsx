import React, { useEffect, useRef, useState } from 'react';
import { Resizable } from 're-resizable';

const Preview = ({ generatedCode }) => {
  const iframeRef = useRef(null);
  const [showCode, setShowCode] = useState(false);
  const [debouncedCode, setDebouncedCode] = useState('');
  const [height, setHeight] = useState(500);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedCode(generatedCode);
    }, 300); // Debounce delay
    return () => clearTimeout(timeout);
  }, [generatedCode]);

  const getFullHTML = (code) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Preview</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50 p-4">
      ${code}
    </body>
    </html>
  `;

  useEffect(() => {
    if (iframeRef.current && debouncedCode && !showCode) {
      const doc = iframeRef.current.contentDocument;
      doc.open();
      doc.write(getFullHTML(debouncedCode));
      doc.close();
    }
  }, [debouncedCode, showCode]);

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">Live Preview</h2>
        <button
          onClick={() => setShowCode((prev) => !prev)}
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {showCode ? 'Show Preview' : 'Show Code'}
        </button>
      </div>

      <Resizable
        size={{ width: '100%', height }}
        onResizeStop={(e, direction, ref, d) => setHeight(height + d.height)}
        minHeight={200}
        className="border rounded-md shadow-md overflow-hidden bg-white"
      >
        {showCode ? (
          <pre className="p-4 h-full overflow-auto text-sm text-gray-800 bg-gray-100">
            {generatedCode || '/* Generated code will appear here */'}
          </pre>
        ) : (
          <iframe
            ref={iframeRef}
            title="Live Preview"
            sandbox="allow-same-origin allow-scripts"
            className="w-full h-full border-none"
          />
        )}
      </Resizable>
    </div>
  );
};

export default Preview;
