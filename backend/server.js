const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const app=express();

// Initialize Express app
//const app = express();
const PORT = 5000;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// API key (securely stored in an environment variable)
const API_KEY = process.env.GOOGLE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error("Missing API key. Set GOOGLE_GEMINI_API_KEY in environment variables.");
  process.exit(1);
}

// Generate insights endpoint
app.post("/api/generate-insights", async (req, res) => {
  try {
    const userList = req.body.users;

    // Initialize Google Generative AI
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Prepare prompt
    const prompt = `Analyze the following user wellness data and provide insights within 50 words: ${JSON.stringify(
      userList
    )}`;

    // Generate insights
    const result = await model.generateContent(prompt);
    const rawInsights = result.response.text();
    const formattedInsights = rawInsights.split("\n").filter((line) => line.trim() !== "");

    res.status(200).json({ insights: formattedInsights });
  } catch (error) {
    console.error("Error generating insights:", error);
    res.status(500).json({ error: "Failed to generate insights." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
