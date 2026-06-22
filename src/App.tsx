import React, { useState, useRef, useEffect } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  personalInfo, 
  experiences, 
  education, 
  skillCategories, 
  researchExperiences 
} from "./data";
import { FocusMode } from "./types";
import { 
  BrainCircuit, 
  Globe, 
  Cpu, 
  Briefcase, 
  Phone, 
  Mail, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  Printer, 
  CheckCircle, 
  ChevronRight, 
  Award, 
  BookOpen, 
  Lightbulb, 
  Copy, 
  Terminal, 
  Clock, 
  ArrowRight, 
  ShieldAlert,
  SlidersHorizontal,
  Settings
} from "lucide-react";

// Pre-defined job descriptions for quick user interaction
const EXAMPLE_JOBS = [
  {
    title: "Lead Fullstack & Commerce Architect @ Stripe",
    description: `We are looking for a Senior Developer to launch next-generation commercial portals. 
Requirements:
- Deep experience building responsive React architectures, specifically Next.js Server Components.
- Custom backend systems integration using Django (Python API frameworks) and Node.js.
- Headless commerce integration (knowledge of Medusa, Shopify APIs, or headless engines a strong plus).
- Familiarity with algorithmic automation, database anomalies tracking, and SQL scaling.`,
    preferredFocus: "developer" as FocusMode
  },
  {
    title: "Technical Product Manager (Generative AI & LLMs) @ Google Cloud",
    description: `Seeking an elite Tech PM to coordinate complex enterprise AI pipelines.
Key Responsibilities:
- Lead the product roadmap from sandbox prototypes to national-scale deployments.
- Collaborate with frontend, backend, and machine learning teams to define RAG and LLM requirements.
- Bridge high-level government & client constraints under tight timelines or complex regulatory guidelines.
- Author precise PRDs for AI conversational products and custom multi-agent robotics assistants.`,
    preferredFocus: "pm" as FocusMode
  },
  {
    title: "Venture CTO & Engineering Lead @ High-Tech Lab",
    description: `We need an engineering-rooted leader who can take overall systems authority.
Ideal Candidate:
- 10+ years in deep-tech (Robotics integration, Control systems, Embedded loops, or Industrial AI).
- Proven track record turning around stalled software codebases, bringing them to market in record time.
- Passion for technical mentoring, R&D scheduling, and scaling tech academies or organizational products.`,
    preferredFocus: "hybrid" as FocusMode
  }
];

export default function App() {
  const [focus, setFocus] = useState<FocusMode>(() => {
    return (localStorage.getItem("resume_focus") as FocusMode) || "hybrid";
  });
  const [template, setTemplate] = useState<"slate" | "minimalist" | "bento">(() => {
    return (localStorage.getItem("resume_template") as "slate" | "minimalist" | "bento") || "slate";
  });
  const [accentColor, setAccentColor] = useState<"slate" | "navy" | "burgundy" | "spruce">(() => {
    return (localStorage.getItem("resume_accentColor") as "slate" | "navy" | "burgundy" | "spruce") || "slate";
  });
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [customJobDesc, setCustomJobDesc] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [reassuringMessage, setReassuringMessage] = useState("");
  
  const analysisRef = useRef<HTMLDivElement>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("resume_focus", focus);
  }, [focus]);

  useEffect(() => {
    localStorage.setItem("resume_template", template);
  }, [template]);

  useEffect(() => {
    localStorage.setItem("resume_accentColor", accentColor);
  }, [accentColor]);

  // Read URL query params on initial mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qFocus = params.get("focus") as FocusMode;
    const qTemplate = params.get("template") as "slate" | "minimalist" | "bento";
    const qAccent = params.get("accent") as "slate" | "navy" | "burgundy" | "spruce";
    const qBuilder = params.get("builder") === "true";

    if (qFocus && ["developer", "pm", "hybrid"].includes(qFocus)) {
      setFocus(qFocus);
    }
    if (qTemplate && ["slate", "minimalist", "bento"].includes(qTemplate)) {
      setTemplate(qTemplate);
    }
    if (qAccent && ["slate", "navy", "burgundy", "spruce"].includes(qAccent)) {
      setAccentColor(qAccent);
    }
    if (qBuilder) {
      setIsCustomizerOpen(true);
    }
  }, []);

  // Set selected example Job Description
  const handleSelectExampleJob = (job: typeof EXAMPLE_JOBS[0]) => {
    setCustomJobDesc(job.description);
    setFocus(job.preferredFocus);
    setAnalysisResult(null);
    setAnalysisError(null);
  };

  // Run Gemini Fit analysis on the system backend
  const handleAnalyzeFitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customJobDesc.trim()) return;

    setIsAnalyzing(true);
    setAnalysisError(null);
    setAnalysisResult(null);

    // Dynamic reassuring feedback sequences
    const messages = [
      "Securing connection with Gemini AI...",
      "Parsing job requirements & searching Hamed's professional credentials...",
      "Mapping Next.js, Django, and Medusa highlights to the opening...",
      "Synthesizing customized recruiter introduction letter...",
      "Compiling final ATS match score & structural strategy..."
    ];

    let msgIndex = 0;
    setReassuringMessage(messages[0]);
    const msgInterval = setInterval(() => {
      msgIndex = (msgIndex + 1) % messages.length;
      setReassuringMessage(messages[msgIndex]);
    }, 2800);

    try {
      const resp = await fetch("/api/analyze-fit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobDescription: customJobDesc,
          focus: focus
        })
      });

      const data = await resp.json();
      clearInterval(msgInterval);

      if (!resp.ok) {
        throw new Error(data.error || "Failed to finalize the resume diagnostic.");
      }

      setAnalysisResult(data);
      
      // Auto scroll to results
      setTimeout(() => {
        analysisRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);

    } catch (err: any) {
      clearInterval(msgInterval);
      setAnalysisError(err.message || "An unexpected error occurred. Please verify your internet connection.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Copy customized pitch to clipboard
  const handleCopyPitch = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText("Copied!");
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Toggle skills highlighter
  const handleSkillClick = (skillName: string) => {
    if (activeSkill === skillName) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skillName);
    }
  };

  const accentThemes = {
    slate: {
      primary: "text-slate-900",
      muted: "text-slate-500",
      border: "border-slate-200",
      bgLight: "bg-slate-50/80",
      accentBorder: "border-slate-900",
      taglineText: "text-slate-800",
      bulletBorder: "border-slate-900",
      accentBackgroundClass: "bg-slate-900 text-white",
      accentTextClass: "text-slate-900",
      gpaBgClass: "bg-slate-900 text-slate-100",
      hoverRing: "ring-slate-900 border-slate-900",
      bentoBg: "bg-gradient-to-tr from-slate-900 to-slate-800 text-white",
      bentoAccent: "text-teal-400",
    },
    navy: {
      primary: "text-[#1B365D]",
      muted: "text-[#4A5D78]",
      border: "border-[#D2DAE6]",
      bgLight: "bg-[#F4F7FB]",
      accentBorder: "border-[#1B365D]",
      taglineText: "text-[#1B365D]",
      bulletBorder: "border-[#1B365D]",
      accentBackgroundClass: "bg-[#1B365D] text-white",
      accentTextClass: "text-[#1B365D]",
      gpaBgClass: "bg-[#1B365D] text-[#ECEFF4]",
      hoverRing: "ring-[#1B365D] border-[#1B365D]",
      bentoBg: "bg-gradient-to-tr from-[#1B365D] to-[#0A1A30] text-white",
      bentoAccent: "text-sky-300",
    },
    burgundy: {
      primary: "text-[#6B1F2D]",
      muted: "text-[#8D6B70]",
      border: "border-[#ECE2E4]",
      bgLight: "bg-[#FAF5F6]",
      accentBorder: "border-[#6B1F2D]",
      taglineText: "text-[#6B1F2D]",
      bulletBorder: "border-[#6B1F2D]",
      accentBackgroundClass: "bg-[#6B1F2D] text-white",
      accentTextClass: "text-[#6B1F2D]",
      gpaBgClass: "bg-[#6B1F2D] text-[#FCF2F4]",
      hoverRing: "ring-[#6B1F2D] border-[#6B1F2D]",
      bentoBg: "bg-gradient-to-tr from-[#6B1F2D] to-[#3a0f16] text-white",
      bentoAccent: "text-rose-200",
    },
    spruce: {
      primary: "text-[#1B3D2F]",
      muted: "text-[#50665C]",
      border: "border-[#D8E2DC]",
      bgLight: "bg-[#F3F6F4]",
      accentBorder: "border-[#1B3D2F]",
      taglineText: "text-[#1B3D2F]",
      bulletBorder: "border-[#1B3D2F]",
      accentBackgroundClass: "bg-[#1B3D2F] text-white",
      accentTextClass: "text-[#1B3D2F]",
      gpaBgClass: "bg-[#1B3D2F] text-[#ECF4F0]",
      hoverRing: "ring-[#1B3D2F] border-[#1B3D2F]",
      bentoBg: "bg-gradient-to-tr from-[#1B3D2F] to-[#0D241B] text-white",
      bentoAccent: "text-emerald-300",
    }
  };

  const activeTheme = accentThemes[accentColor];

  // Filter skills mapping helper to highlight jobs
  const isExperienceUsingSelectedSkill = (expId: string, skill: string | null): boolean => {
    if (!skill) return false;
    const lowerSkill = skill.toLowerCase();
    
    // Explicit mappings for skills matching experience points context
    const mapping: Record<string, string[]> = {
      "national-ai": ["llm", "large language models", "rag", "retrieval", "prompt", "vector", "embeddings", "orchestration", "langchain", "llamaindex", "chatbots", "next.js", "django", "typescript", "python"],
      "bookcity": ["telegram", "erp", "sales", "analytics", "anomaly", "smart order", "sql", "anomaly detection", "python"],
      "smartory": ["cto", "applytory", "robotics", "automating", "budget", "r&d", "agile", "chatbot", "scrum", "product management", "turnaround"],
      "kian": ["founder", "courses", "lms", "robotics", "machine learning", "teaching", "scaling"],
      "aras": ["control algorithms", "real-time", "supervisor", "arash asist", "haptic", "surgical", "c/c++", "matlab", "motion", "computer vision", "yolo", "embeddings", "python"]
    };

    return mapping[expId]?.some(keyword => lowerSkill.includes(keyword)) || false;
  };

  // Launch browser's system printer for PDF generation
  const handlePrintTrigger = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] pb-16 selection:bg-teal-100 selection:text-teal-900 transition-colors duration-150 relative">
      
      {/* 1. Header Toolbar (Actions & Control Rig) - Static & Hidden in PDF Print (Only rendered when customizer is active) */}
      {isCustomizerOpen && (
        <header className="no-print sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 px-4 shadow-sm">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Logo & Subtext */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center text-white shadow-md">
                <Terminal className="h-5 w-5" />
              </div>
              <div>
                <h1 className="font-display font-bold text-base tracking-tight text-slate-900">
                  Hamed Sadeghi
                </h1>
                <p className="text-xs text-slate-500 font-medium">
                  Engineering Leader &middot; Professional Resume Platform
                </p>
              </div>
            </div>

            {/* Configuration Controls */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Customizer Mode Toggle (Toggles all controls) */}
              <button
                type="button"
                onClick={() => setIsCustomizerOpen(false)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm transition-all"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>Hide Customizer Tools</span>
              </button>

              {/* Print Action */}
              <button
                type="button"
                onClick={handlePrintTrigger}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
              >
                <Printer className="h-3.5 w-3.5" />
                PDF Print
              </button>
            </div>
          </div>
        </header>
      )}

      {/* 2. Primary Layout Workspace */}
      <main className={isCustomizerOpen 
        ? "max-w-6xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
        : "max-w-4xl mx-auto px-4 mt-12 grid grid-cols-1 gap-6"
      }>
        
        {/* LEFT COLUMN: Controls, Customization & AI Diagnostics (SPAN 4) - Hidden in Print */}
        {isCustomizerOpen ? (
          <div className="no-print lg:col-span-4 flex flex-col gap-6">
            
            {/* A. Focus Switcher Panel */}
            <section className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <h3 className="font-display font-bold text-sm text-slate-900">Resume Framing Focus</h3>
              </div>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Targeting a developer track, product leadership track, or a technical cross-over role? Toggle to restructure the experiences.
            </p>

            <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setFocus("developer")}
                className={`py-2 text-[11px] font-bold rounded-lg transition-all ${
                  focus === "developer" 
                    ? "bg-slate-900 text-white shadow-sm" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                Developer
              </button>
              <button
                onClick={() => setFocus("pm")}
                className={`py-2 text-[11px] font-bold rounded-lg transition-all ${
                  focus === "pm" 
                    ? "bg-slate-900 text-white shadow-sm" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                Product Manager
              </button>
              <button
                onClick={() => setFocus("hybrid")}
                className={`py-2 text-[11px] font-bold rounded-lg transition-all ${
                  focus === "hybrid" 
                    ? "bg-slate-900 text-white shadow-sm" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                Combined
              </button>
            </div>

            {/* Current Focus Highlight Alert */}
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
              <Lightbulb className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed text-slate-600">
                {focus === "developer" && (
                  <span>Highlights algorithms, low-level firmware engineering, databases, real-time control, and <strong>Django/Medusa/Next.js</strong> robust implementations.</span>
                )}
                {focus === "pm" && (
                  <span>Accentuates technology alignments, startup launches, product turnarounds, student growth, R&D timelines, budget tracking, and product ROI.</span>
                )}
                {focus === "hybrid" && (
                  <span>Combines extreme architectural technical depth with strategic product mastery. Ideal for tech leaders, Engineering Managers, or Founding Engineers.</span>
                )}
              </div>
            </div>

            {/* Base Structural Style (Template Chooser) */}
            <div className="mt-5 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2 mb-2.5">
                <Settings className="h-4 w-4 text-slate-600" />
                <h3 className="font-display font-bold text-sm text-slate-900">Base Structural Style</h3>
              </div>
              <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
                Choose the visual layout architecture: Classic formal editorial, strict technical minimalist, or modern layout bento cell blocks:
              </p>
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setTemplate("slate")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all ${
                    template === "slate" 
                      ? "bg-white text-slate-900 shadow-sm" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/40"
                  }`}
                >
                  Executive
                </button>
                <button
                  type="button"
                  onClick={() => setTemplate("minimalist")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all ${
                    template === "minimalist" 
                      ? "bg-white text-slate-900 shadow-sm" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/40"
                  }`}
                >
                  Minimalist
                </button>
                <button
                  type="button"
                  onClick={() => setTemplate("bento")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all ${
                    template === "bento" 
                      ? "bg-white text-slate-900 shadow-sm" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/40"
                  }`}
                >
                  Bento Grid
                </button>
              </div>
            </div>

            {/* Premium Theme Palette Accent Row */}
            <div className="mt-5 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2 mb-2.5">
                <BookOpen className="h-4 w-4 text-slate-600" />
                <h3 className="font-display font-bold text-sm text-slate-900">Design Theme Accent</h3>
              </div>
              <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
                Applying for an executive, technical, or academic role? Choose a highly formal layout accent color.
              </p>
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-50 rounded-xl border border-slate-100">
                <button
                  type="button"
                  onClick={() => setAccentColor("slate")}
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all border ${
                    accentColor === "slate" 
                      ? "bg-white border-slate-300 text-slate-900 shadow-sm font-bold" 
                      : "bg-transparent border-transparent text-slate-500 hover:text-slate-950 hover:bg-slate-200/40"
                  }`}
                >
                  <div className="h-3.5 w-3.5 rounded-full bg-slate-900 border border-slate-600 shrink-0" />
                  <span className="text-[10px] tracking-tight">Executive Slate</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAccentColor("navy")}
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all border ${
                    accentColor === "navy" 
                      ? "bg-white border-slate-300 text-slate-900 shadow-sm font-bold" 
                      : "bg-transparent border-transparent text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                  }`}
                >
                  <div className="h-3.5 w-3.5 rounded-full bg-[#1B365D] border border-blue-900 shrink-0" />
                  <span className="text-[10px] tracking-tight">Royal Navy</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAccentColor("burgundy")}
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all border ${
                    accentColor === "burgundy" 
                      ? "bg-white border-slate-300 text-slate-900 shadow-sm font-bold" 
                      : "bg-transparent border-transparent text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                  }`}
                >
                  <div className="h-3.5 w-3.5 rounded-full bg-[#6B1F2D] border border-red-950 shrink-0" />
                  <span className="text-[10px] tracking-tight">Academic Wine</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAccentColor("spruce")}
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all border ${
                    accentColor === "spruce" 
                      ? "bg-white border-slate-300 text-slate-900 shadow-sm font-bold" 
                      : "bg-transparent border-transparent text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                  }`}
                >
                  <div className="h-3.5 w-3.5 rounded-full bg-[#1B3D2F] border border-emerald-900 shrink-0" />
                  <span className="text-[10px] tracking-tight">Spruce Green</span>
                </button>
              </div>
            </div>
          </section>

          {/* B. Live Skill Mapper section */}
          <section className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BrainCircuit className="h-4 w-4 text-indigo-600" />
                <h3 className="font-display font-bold text-sm text-slate-900">Career Skill Spotlight</h3>
              </div>
              {activeSkill && (
                <button 
                  onClick={() => setActiveSkill(null)}
                  className="text-[10px] text-indigo-600 hover:underline font-semibold"
                >
                  Clear filter
                </button>
              )}
            </div>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Click any skill below to run a real-time diagnostics overlay, highlighting where in Hamed's career that skill was executed.
            </p>

            {/* Categories & Highlighters */}
            <div className="flex flex-col gap-4">
              {skillCategories.map((cat) => (
                <div key={cat.name}>
                  <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    {cat.name}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((sk) => {
                      const isSelected = activeSkill === sk.name;
                      return (
                        <button
                          key={sk.name}
                          onClick={() => handleSkillClick(sk.name)}
                          className={`text-[10px] px-2 py-1 rounded-md font-medium border transition-all duration-150 flex items-center gap-1 ${
                            isSelected 
                              ? "bg-indigo-600 border-indigo-700 text-white font-semibold ring-2 ring-indigo-200 scale-105" 
                              : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600"
                          }`}
                        >
                          {sk.name}
                          {sk.highlighted && !isSelected && (
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 inline-block" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* C. Gemini AI Fit Diagnostics Matchmaker */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl border border-slate-800 p-5 shadow-lg relative overflow-hidden">
            
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2 mb-2 relative z-10">
              <Sparkles className="h-4.5 w-4.5 text-teal-400" />
              <h3 className="font-display font-medium text-sm text-slate-100">AI Recruiter Matchmaker</h3>
            </div>
            
            <p className="text-[11px] text-slate-400 leading-relaxed mb-4 relative z-10">
              Test Hamed's alignment with any actual job opening instantly. Select a preset template or paste your own job criteria.
            </p>

            {/* Preset selectors */}
            <div className="flex flex-col gap-2 mb-4">
              <span className="text-[9px] font-mono tracking-wider font-bold text-slate-500 uppercase">Test a Preset Sector Profile:</span>
              <div className="flex flex-col gap-1.5 text-[11px]">
                {EXAMPLE_JOBS.map((job, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectExampleJob(job)}
                    className="w-full text-left p-2.5 rounded-lg border border-slate-800 bg-slate-900/40 hover:bg-slate-900/90 text-slate-300 hover:text-white transition-all text-xs flex items-center justify-between group"
                  >
                    <span className="truncate pr-2 font-medium">{job.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 text-teal-400 shrink-0 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Manual Form Entry */}
            <form onSubmit={handleAnalyzeFitSubmit} className="space-y-3 relative z-10">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-mono font-bold text-slate-500 mb-1">
                  Or Paste Target Job Description:
                </label>
                <textarea
                  value={customJobDesc}
                  onChange={(e) => setCustomJobDesc(e.target.value)}
                  placeholder="Paste roles, tech stacks, or manager priorities here..."
                  className="w-full h-28 p-2.5 bg-slate-900/60 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-transparent resize-none leading-relaxed transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isAnalyzing || !customJobDesc.trim()}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  isAnalyzing || !customJobDesc.trim() 
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                    : "bg-teal-400 text-slate-950 hover:bg-teal-300 shadow-sm"
                }`}
              >
                {isAnalyzing ? (
                  <>
                    <Clock className="h-4 w-4 animate-spin text-slate-950" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <BrainCircuit className="h-4 w-4 text-slate-950" />
                    <span>Evaluate Job-Fit Suitability</span>
                  </>
                )}
              </button>
            </form>

            {/* Real-time Loader Sequence feedback */}
            <AnimatePresence>
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 p-3 rounded-lg bg-teal-950/20 border border-teal-900/40 text-[10px] text-teal-400 font-mono text-center flex flex-col gap-1 items-center"
                >
                  <span className="font-semibold animate-pulse">{reassuringMessage}</span>
                  <span className="text-[9px] text-slate-500">Powered by Gemini 3.5-flash &middot; Secure Full-Stack TLS</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error messaging inside workspace */}
            {analysisError && (
              <div className="mt-3 p-3 rounded-lg bg-rose-950/30 border border-rose-900/50 text-[11px] text-rose-300">
                <div className="flex items-start gap-2">
                  <ShieldAlert className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold underline block mb-0.5">Analysis Unavailable</span>
                    <span>{analysisError}</span>
                    <span className="block mt-2 text-[10px] text-slate-400 leading-normal">
                      Provide a valid key inside the <strong>Settings &gt; Secrets</strong> panel to active this secure full-stack evaluation feature.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* AI Diagnostic Output Result Panel */}
          <section ref={analysisRef} className="empty:hidden">
            {analysisResult && (
              <div className="bg-white rounded-2xl border-2 border-slate-900 p-5 shadow-lg space-y-4">
                
                {/* Score Banner */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h4 className="font-display font-medium text-xs text-slate-400 uppercase tracking-wider">ATS Diagnosis</h4>
                    <h3 className="font-display font-bold text-base text-slate-900">Custom Resume Fit</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold block text-emerald-600">MATCH LEVEL</span>
                      <span className="text-xs text-slate-500">Hamed vs Opening</span>
                    </div>
                    <div className="h-12 w-12 rounded-full border-2 border-emerald-500/20 bg-emerald-50 text-emerald-700 flex items-center justify-center font-display font-bold text-lg shadow-sm">
                      {analysisResult.fitScore}%
                    </div>
                  </div>
                </div>

                {/* Match Summary */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Recruiter Evaluation</span>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{analysisResult.matchSummary}"
                  </p>
                </div>

                {/* Key matching Strengths */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Structural Alignment Points</span>
                  <div className="flex flex-col gap-2">
                    {analysisResult.keyStrengths?.map((str: string, index: number) => (
                      <div key={index} className="text-xs text-slate-700 flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{str}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gaps or Framing Advice */}
                <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/60 text-xs text-amber-900 space-y-1">
                  <span className="text-[9px] font-mono font-bold text-amber-700 uppercase tracking-widest block">Recruiter Pitch Advice</span>
                  <p className="leading-relaxed text-[11px] text-slate-700">{analysisResult.gapsOrAdvices}</p>
                </div>

                {/* Customized email pitch block */}
                <div className="space-y-2 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Recruiter Email Outreach Pitch</span>
                    <button
                      onClick={() => handleCopyPitch(analysisResult.customizedPitch)}
                      className="text-[10px] text-slate-500 hover:text-indigo-600 font-bold flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                    >
                      <Copy className="h-2.5 w-2.5" />
                      {copiedText || "Copy pitch"}
                    </button>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl text-[11px] text-slate-200 font-mono leading-relaxed select-all">
                    {analysisResult.customizedPitch}
                  </div>
                </div>

              </div>
            )}
          </section>

        </div>
        ) : null}

        {/* RIGHT COLUMN: The Interactive Resume Document Core (SPAN 8 or full-width) */}
        <div className={isCustomizerOpen ? "lg:col-span-8" : "w-full"}>
          
          {/* Active Skill mapping overlay notice */}
          {activeSkill && (
            <div className="no-print bg-indigo-50 border border-indigo-200 rounded-xl p-3 mb-4 flex items-center justify-between text-xs text-indigo-900">
              <span className="flex items-center gap-2">
                <BrainCircuit className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>Diagnostics Overlay Active: Highlighted jobs match keyword <strong>"{activeSkill}"</strong>.</span>
              </span>
              <button 
                onClick={() => setActiveSkill(null)}
                className="font-bold underline hover:text-indigo-950 text-[11px]"
              >
                Reset Layout
              </button>
            </div>
          )}

          {/* Core print page wrapper */}
          <div className="print-container bg-[#FDFCFB] border border-[#E5E5E5] rounded-xl shadow-md overflow-hidden p-8 sm:p-12 transition-all duration-300 min-h-[1100px] flex flex-col justify-between">
            
            <div>
              {/* 3.1. Standard Template 1: Header (Editorial Classic Theme) */}
              {template === "slate" && (
                <div className={`border-b pb-8 mb-8 text-center sm:text-left transition-all duration-300 ${activeTheme.border}`}>
                  <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4">
                    <div>
                      <h1 className={`font-display font-black text-5xl sm:text-6xl tracking-tighter italic leading-none mb-3 ${activeTheme.primary}`}>
                        {personalInfo.name}
                      </h1>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 items-center mt-1">
                        <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${activeTheme.muted}`}>
                          {focus === "developer" ? "Full-Stack Architecture" : focus === "pm" ? "Product Management & Strategy" : "Product & Architecture"}
                        </span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full hidden sm:inline-block"></span>
                        <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${activeTheme.muted}`}>
                          {focus === "developer" ? "Engineering Leader" : focus === "pm" ? "Technical Product Manager" : "Technology Executive Leadership"}
                        </span>
                      </div>
                    </div>
                    {/* Contacts block */}
                    <div className="flex flex-col sm:items-end text-right text-xs font-sans space-y-1.5 shrink-0 mt-3 sm:mt-0 font-medium text-slate-500">
                      <span className={`text-xs uppercase tracking-widest leading-loose text-right ${activeTheme.muted}`}>
                        {personalInfo.location}<br />
                        {personalInfo.email}<br />
                        {personalInfo.phone}
                      </span>
                    </div>
                  </div>
                  
                  {/* Editorial Quote block replacing simple banner */}
                  <div className={`mt-6 p-4 border-l-2 rounded-r-lg ${activeTheme.bgLight} ${activeTheme.accentBorder}`}>
                    <p className={`font-display italic text-sm leading-relaxed ${activeTheme.taglineText}`}>
                      "{focus === "developer" && personalInfo.taglines.developer}
                      {focus === "pm" && personalInfo.taglines.pm}
                      {focus === "hybrid" && personalInfo.taglines.hybrid}"
                    </p>
                  </div>
                </div>
              )}

              {/* 3.2. Template 2: Technical Minimalist */}
              {template === "minimalist" && (
                <div className={`pb-6 mb-6 border-b border-dashed transition-all duration-300 ${activeTheme.border}`}>
                  <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                    <div>
                      <h1 className="font-sans font-extrabold text-2xl tracking-tighter text-slate-900 uppercase">
                        {personalInfo.name}
                      </h1>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-400 font-mono">
                        <span className={`font-bold ${activeTheme.primary}`}>// SYSTEMS ENGINE & PRODUCT OUTCOMES</span>
                        <span>&middot;</span>
                        <span>Full-Stack & Product Leadership</span>
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono rounded-lg border p-2.5 ${activeTheme.bgLight} ${activeTheme.border} ${activeTheme.primary}`}>
                      <span className="flex items-center gap-1 font-semibold"><Phone className="h-3 w-3 opacity-60" /> {personalInfo.phone}</span>
                      <span className="flex items-center gap-1 font-semibold"><Mail className="h-3 w-3 opacity-60" /> {personalInfo.email}</span>
                      <span className="flex items-center gap-1 font-semibold"><MapPin className="h-3 w-3 opacity-60" /> {personalInfo.location}</span>
                    </div>
                  </div>

                  {/* Summary Callout Minimalist */}
                  <div className="mt-4 text-xs font-mono font-medium text-slate-500 max-w-3xl leading-relaxed">
                    MATCHFOCUS: {focus.toUpperCase()} &middot; SUMMARY: {focus === "developer" ? personalInfo.summary.developer : focus === "pm" ? personalInfo.summary.pm : personalInfo.summary.hybrid}
                  </div>
                </div>
              )}

              {/* 3.3. Template 3: Bento Grid Style Summary Header */}
              {template === "bento" && (
                <div className="mb-6 space-y-4 transition-all duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    
                    {/* Primary details cell */}
                    <div className={`sm:col-span-2 p-5 rounded-2xl flex flex-col justify-between min-h-[140px] ${activeTheme.bentoBg}`}>
                      <div>
                        <h1 className="font-display font-black text-2xl tracking-tight leading-none text-slate-100">
                          {personalInfo.name}
                        </h1>
                        <span className={`text-[10px] font-mono tracking-widest uppercase mt-1.5 inline-block font-bold ${activeTheme.bentoAccent}`}>
                          {focus === "developer" && "SENIOR SYSTEMS & AI ENGINEER"}
                          {focus === "pm" && "PRODUCT MANAGEMENT EXECUTIVE"}
                          {focus === "hybrid" && "TECHNOLOGY EXECUTIVE LEADERSHIP"}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-300 mt-4 leading-relaxed bg-black/20 p-2 rounded-xl border border-white/5">
                        {focus === "developer" && personalInfo.taglines.developer}
                        {focus === "pm" && personalInfo.taglines.pm}
                        {focus === "hybrid" && personalInfo.taglines.hybrid}
                      </div>
                    </div>

                    {/* Stats metrics Cell */}
                    <div className={`p-4 rounded-2xl flex flex-col justify-between text-center border ${activeTheme.bgLight} ${activeTheme.border}`}>
                      <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">Academic Caliber</span>
                      <span className={`block font-display font-extrabold text-4xl my-1 ${activeTheme.primary}`}>4.0</span>
                      <span className="block text-[10px] font-semibold text-slate-500">M.Sc. Control Eng.</span>
                    </div>

                    {/* Contacts cell */}
                    <div className={`p-4 rounded-2xl text-xs space-y-2 flex flex-col justify-center border ${activeTheme.bgLight} ${activeTheme.border}`}>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Phone className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                        <span className="font-mono text-[11px]">{personalInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Mail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                        <span className="font-mono text-[11px] truncate">{personalInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                        <span className="font-mono text-[11px]">{personalInfo.location}</span>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* 4. Professional Summary (Unless minimalist summary was visible instead) */}
              {template !== "minimalist" && (
                <section className="mb-6 print-avoid-break">
                  <h3 className={`text-[10px] uppercase tracking-[0.3em] font-black text-[#999] border-b pb-1.5 mb-3 ${activeTheme.border}`}>
                    Core Methodology & Statement
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans text-justify">
                    {focus === "developer" && personalInfo.summary.developer}
                    {focus === "pm" && personalInfo.summary.pm}
                    {focus === "hybrid" && personalInfo.summary.hybrid}
                  </p>
                </section>
              )}

              {/* 6. Professional Experiences */}
              <section className="mb-6">
                <h3 className={`text-[10px] uppercase tracking-[0.3em] font-black text-[#999] border-b pb-1.5 mb-4 ${activeTheme.border}`}>
                  Professional Accomplishments & Tenure
                </h3>

                <div className="space-y-6">
                  {experiences.map((exp) => {
                    const isOverlayHighlighted = activeSkill && isExperienceUsingSelectedSkill(exp.id, activeSkill);
                    return (
                      <div 
                        key={exp.id} 
                        className={`print-avoid-break transition-all duration-200 relative pl-5 border-l-2 ${activeTheme.bulletBorder} ${
                          isOverlayHighlighted 
                            ? "bg-indigo-50/40 p-4 border-l-4 border-indigo-500 ring-2 ring-indigo-50" 
                            : ""
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mb-1">
                          <div>
                            <span className={`font-display font-black text-base mr-2 ${activeTheme.primary}`}>
                              {exp.company}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono tracking-wide uppercase">
                              &middot; {exp.location}
                            </span>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end gap-3">
                            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 ${activeTheme.muted}`}>
                              {exp.period}
                            </span>
                          </div>
                        </div>

                        {/* Title Role */}
                        <div className={`font-display font-bold italic text-xs mb-2.5 ${activeTheme.taglineText}`}>
                          {exp.role}
                        </div>

                        {/* Bullets List */}
                        <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-slate-700 leading-relaxed">
                          {exp.bullets
                             .filter((b) => b.focus === "both" || b.focus === focus || focus === "hybrid")
                             .map((bullet, idx) => (
                               <li key={idx} className="text-justify pl-1">
                                 {bullet.text}
                               </li>
                             ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 7. Education Summary */}
              <section className="mb-6 print-avoid-break">
                <h3 className={`text-[10px] uppercase tracking-[0.3em] font-black text-[#999] border-b pb-1.5 mb-4 ${activeTheme.border}`}>
                  Education & Professional Licensure
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className={`relative pl-5 border-l-2 ${activeTheme.bulletBorder}`}>
                      <div className="flex items-baseline justify-between mb-0.5">
                        <span className={`font-display font-black text-xs ${activeTheme.primary}`}>{edu.institution}</span>
                        <span className="text-[10px] font-mono text-slate-400 shrink-0">{edu.period}</span>
                      </div>
                      <p className="text-[11px] text-[#444] italic font-medium">{edu.degree}</p>
                      <p className={`text-[9px] font-mono font-semibold mt-1 inline-block px-1.5 py-0.5 rounded-none uppercase tracking-wider ${activeTheme.gpaBgClass}`}>
                        GPA: {edu.gpa}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 8. Research Conferences, Tournaments & Honors */}
              <section className="mb-6 print-avoid-break">
                <h3 className={`text-[10px] uppercase tracking-[0.3em] font-black text-[#999] border-b pb-1.5 mb-4 ${activeTheme.border}`}>
                  Selected Research & Major Competitions
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[11px] text-slate-700 italic list-disc ml-4">
                  {researchExperiences.map((res, i) => (
                    <li key={i} className="leading-relaxed text-justify">{res}</li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Resume Footer (Printed page numbers guide) */}
            <div className="border-t border-slate-200 pt-3 mt-6 text-center text-[10px] font-mono text-slate-400 flex items-center justify-between">
              <span>Hamed Sadeghi &middot; Developer & Product Manager Resume</span>
              <span>Generated in Live AI Studio Container</span>
            </div>

          </div>
        </div>

      </main>

      {/* Sleek Floating control bar - Only shown when Customizer is closed and hidden in print */}
      {!isCustomizerOpen && (
        <div className="no-print fixed bottom-6 right-6 z-50 flex items-center gap-2">
          {/* Print Trigger */}
          <button
            type="button"
            onClick={handlePrintTrigger}
            title="Download PDF / Print Resume"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all outline-none border border-slate-800"
          >
            <Printer className="h-4.5 w-4.5" />
          </button>
          {/* Customizer / AI Match Toggle Trigger */}
          <button
            type="button"
            onClick={() => setIsCustomizerOpen(true)}
            title="Open AI Matchmaker & Customizer Tools"
            className="flex h-11 px-4 items-center justify-center gap-2 rounded-full bg-indigo-600 text-white shadow-xl hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all text-xs font-bold outline-none border border-indigo-500"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>AI Match & Style</span>
          </button>
        </div>
      )}
    </div>
  );
}
