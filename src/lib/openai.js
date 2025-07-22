// src/lib/openai.js

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export async function generateWebsiteCode({ websiteType, theme, userHTML }) {
  const prompt = `
  Beautify this HTML code using modern ${theme.layout} layout, a ${theme.color} color scheme, and ${theme.font} font.
  Target website type: ${websiteType}.
  
  HTML to beautify:
  ${userHTML}
  `;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful AI web developer." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    return data.choices?.[0]?.message?.content || "Failed to generate code.";
  } catch (error) {
    console.error("Error generating code:", error);
    return "Error: Could not reach OpenAI API.";
  }
}
