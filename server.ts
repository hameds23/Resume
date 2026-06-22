import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini instance to prevent crashes on startup if key is missing during first launch
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is not configured in the Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// 1. API Route - Analyze Job Description Fit using Gemini 3.5-flash
app.post("/api/analyze-fit", async (req, res) => {
  try {
    const { jobDescription, focus = "hybrid" } = req.body;

    if (!jobDescription || jobDescription.trim().length === 0) {
      return res.status(400).json({ error: "Job description is required for analysis." });
    }

    const ai = getAiClient();

    // Context summary of Hamed Sadeghi
    const resumeContext = `
Name: Hamed Sadeghi
Professional Credentials: (CTO, Senior LLM Developer, Robotics Researcher, Academy Founder)
Focus Requested for Pitch: ${focus}

Resume Highlights:
- National AI Assistant for Government Ministries: Senior AI & LLM Developer (June 2025 - Present)
  - Designed core AI/LLM models and RAG utilities for ministries (Energy, Tourism).
- Darrous & Mina Bookcity: Automation Lead (Sep 2024 - Sep 2025)
  - Engineered Telegram ERP, Sales anomaly detection, AI Smart Order point (seasonal trend predictor).
- Smartory Labs: Chief Technology Officer (CTO/Head of Product, Nov 2023 - Dec 2025)
  - Revitalized Applytory Startup in just 4 months. Built AI Chatbots for medical/dental, managed portfolios.
- Kian Academy (formerly ARAS Academy): Founder & CEO (Feb 2020 - May 2025)
  - Launched 40+ educational courses on robotics and AI, scaled to hundreds of learners.
- ARAS Robotic Solutions: Researcher, Team Leader & Supervisor (June 2015 - Present)
  - Multi-agent RoboCup autonomous SSL strategy code supervisor (2018).
  - Programmed ARASH ASiST microsurgery robot (haptic control, eye surgical training loops).
- Recent Web Stack Developments:
  - Django & Python: REST APIs, ORM optimization, Celery asynchronous queueing, security controls.
  - Medusa headless-commerce: Modular backends, Postgres store synchronisation, tailorable promotion systems.
  - Next.js & React 19: Server Components, static generation, SEO tuning, Framer Motion transitions.
- Education:
  - MS in Electrical Engineering, Control Systems (GPA: 4.0/4.0), K. N. Toosi University of Technology, 2018-2022.
  - BS in Electrical Engineering, Control Systems (GPA: 3.7/4.0), K. N. Toosi University of Technology, 2014-2018.
- Research Award: Best Paper at ICRoM 2021.
- Technical Skills: Python, PyTorch, C/C++, Embedded automation, LLMs, RAG, custom chatbots, Vector Databases, Next.js, Django, Medusa.
    `;

    const systemInstruction = `
You are an elite career development assistant and talent acquisition expert. 
Your job is to read Hamed Sadeghi's comprehensive deep-tech portfolio and assess his compatibility with a target Job Description.
Be objective, professional, and convincing of Hamed's strengths, avoiding generic clichés. 
Highlight both his developer strengths (algorithms, C++, Python, Next.js/Django/Medusa, robotics) and product manager strengths (reviving startups, 40+ products launched, CEO/CTO level management).
    `;

    const userPrompt = `
Hamed's Professional Profile:
${resumeContext}

Target Job Description:
---
${jobDescription}
---

Please analyze Hamed's fit specifically under a "${focus}" focus and output a structured analysis.
Your response MUST be valid JSON conforming to the following fields:
1. fitScore: a number between 1 and 100 representing the match level.
2. matchSummary: a concise 1-paragraph summary describing why he is a strong match for this specific opening.
3. keyStrengths: an array of 3 strings outlining concrete projects or experiences from his history that directly hit elements of the job description. Mention specific technologies or business turnarounds if applicable (like Medusa, Django, Next.js, or startup revitalization).
4. gapsOrAdvices: a paragraph or advice checklist illustrating how Hamed can frame his skills or what he can quickly adapt to succeed in this role.
5. customizedPitch: a 3-sentence high-impact personal pitch he could send to the recruiter for this role.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["fitScore", "matchSummary", "keyStrengths", "gapsOrAdvices", "customizedPitch"],
          properties: {
            fitScore: { type: Type.INTEGER },
            matchSummary: { type: Type.STRING },
            keyStrengths: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            gapsOrAdvices: { type: Type.STRING },
            customizedPitch: { type: Type.STRING }
          }
        }
      }
    });

    const responseText = response.text || "{}";
    res.json(JSON.parse(responseText.trim()));

  } catch (error: any) {
    console.error("Analysis Error:", error);
    res.status(500).json({ 
      error: error.message || "An internal error occurred during analysis.",
      isKeyMissing: !process.env.GEMINI_API_KEY 
    });
  }
});

// 2. Vite Middleware Setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
