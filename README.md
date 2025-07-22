# Website-Beautifier
🌟 Website Beautifier AI

Website Beautifier AI is an intelligent tool that helps users analyze, fix, and redesign their existing websites. By uploading basic HTML/CSS code, users can instantly get a professionally improved version with responsive design, modern styling, and semantic structure — all powered by OpenAI’s GPT-4.

✨ Built to simplify web development and empower creators.

👩‍💻 Author

Pinky

🚀 Features

📤 File Upload: Upload HTML, CSS, and JavaScript files directly.

🎨 Theme Selector: Choose design styles like Modern, Minimal, Portfolio, etc.

🤖 AI-Powered Code Enhancement: Fix structural HTML issues, enhance styles, and make layouts responsive using GPT.

🪄 Live Code Preview: Instantly view the AI-enhanced website in real-time.

🧠 Auto Code Suggestions: See the improved code and download it.

🛠 Toggle Between Code & Preview: Review code or see visual results anytime.

🧰 Download Updated Files: Save the improved files for use in your projects.

🧱 Technologies Used

Technology
| Technology     | Purpose                                  |
|----------------|------------------------------------------|
| React.js       | Frontend UI framework                    |
| Vite           | Fast development server and bundler      |
| Tailwind CSS   | Utility-first CSS framework              |
| OpenAI API (GPT-4) | AI engine for code understanding & generation |
| Monaco Editor (optional) | Rich code editing interface    |
| JavaScript (ES6)   | Dynamic behavior and logic           |
| HTML5/CSS3         | Web structure and style rendering    |

🧠 How It Works

Upload your website files (HTML/CSS).

Select a theme for redesign (e.g., Professional, Elegant).

The AI processes the files and suggests improvements.

Preview the improved design live.

Download the enhanced version.

📂 Project Structure
```
website-beautifier-ai/
├── .env.local               # OpenAI API key config
├── package.json             # Dependencies
├── vite.config.js           # Build config
├── public/                  # Static assets
├── src/
│   ├── App.jsx              # Main application UI
│   ├── main.jsx             # React entry point
│   ├── components/
│   │   ├── FileUploader.jsx
│   │   ├── ThemeSelector.jsx
│   │   ├── LivePreview.jsx
│   │   ├── CodeFixerPanel.jsx
│   │   └── DownloadButton.jsx
│   └── lib/
│       └── openaiFixer.js   # GPT code logic

```

🔧 Setup Instructions

Clone the repo:

git clone https://github.com/your-username/website-beautifier-ai.git
cd website-beautifier-ai

Install dependencies:

npm install

Add your OpenAI API key in .env.local:

VITE_OPENAI_API_KEY=your-api-key-here

Run the app locally:

npm run dev

📌 Roadmap (Future Plans)

✅ Multi-file upload (HTML, CSS, JS, assets)

✅ Debounced typing with live update

⏳ Dark mode UI

⏳ Real-time collaborative editing

⏳ Training custom AI model with design datasets

📃 License

MIT License. Free to use, modify, and contribute.

🔥 Designed with ❤ to make web development accessible and aesthetic using AI.

