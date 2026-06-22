import { ExperienceItem, EducationItem, SkillCategory, ProjectItem } from './types';

export const personalInfo = {
  name: "Hamed Sadeghi",
  title: "Engineering Leader & Technical Product Manager",
  taglines: {
    developer: "Full-Stack AI & Robotic Systems Engineer | High-Stakes Deep Tech & Algorithms",
    pm: "Technical Product Manager & CTO | Speeds Turnarounds, Steers Startups, Scales Products",
    hybrid: "Engineering Leader & Technical Product Manager | Bridging AI, Robotics, and Scalable Web Products"
  },
  phone: "09102399231",
  email: "Sadeghi714@gmail.com",
  linkedin: "https://linkedin.com/in/hamed-sadeghi",
  location: "Tehran, Iran",
  summary: {
    developer: "Accomplished systems developer and AI specialist with cross-disciplinary tech experience across Robotics, Artificial Intelligence, and Full-Stack Systems. Holds a Master's degree in Control Engineering (Perfect 4.0 GPA) with direct-merit admission. A high-performing code architect with senior experience leading AI/LLM development on a national scale, building enterprise web products, and designing complex automated workflows.",
    pm: "Impact-driven Technical Product Manager & CTO with experience executing tech strategy, reviving stalled ventures, and steering high-performance engineering programs. Proven ability to translate complex machine learning, IoT, and custom web architecture into high-ROI business value. Successfully turned around a stalled startup to launch in 4 months, scaled an educational academy to 40+ products, and directed product direction from proof of concept to national deployment.",
    hybrid: "Elite Engineering Leader and Technical Product Manager bridging the split between low-level hardware performance, machine learning scale, and high-impact web products. Holds a Master's in Control Engineering (GPA 4.0). Experience as a researcher, founder, CTO, and senior national AI engineer. Expert at leading multi-disciplinary teams of frontend, backend, and hardware engineers to design, build, and scale state-of-the-art products."
  }
};

export const experiences: ExperienceItem[] = [
  {
    id: "web-commerce",
    company: "Next.js, Django & Medusa Implementations",
    role: "Lead Full-Stack & E-Commerce Engineer (Consultant)",
    location: "Tehran, Iran",
    period: "January 2024 – Present",
    focus: "both",
    bullets: [
      {
        text: "Architected high-performance web applications and modular e-commerce marketplaces using modern Next.js React 19 Server Components to minimize bundle sizes and maximize SEO metrics.",
        focus: "developer"
      },
      {
        text: "Deployed custom, decoupled headless commerce storefronts using Medusa with PostgreSQL, implementing customized checkout workflows, pricing logic, and store synchronizations.",
        focus: "both"
      },
      {
        text: "Engineered scalable Python & Django microservices to run asynchronous background processes with Celery and Redis, integrating real-time transaction reporting and secure database log audits.",
        focus: "developer"
      },
      {
        text: "Collaborated with business owners to bridge complex backend logic into responsive, fluid front-end animations utilizing Framer Motion.",
        focus: "pm"
      }
    ]
  },
  {
    id: "national-ai",
    company: "National AI Assistant for Government Ministries",
    role: "Senior AI & LLM Developer / Product Lead",
    location: "Tehran, Iran",
    period: "June 2025 – Present",
    focus: "both",
    bullets: [
      {
        text: "Lead the technical architecture and end-to-end development of core AI and Large Language Model (LLM) components for a major high-priority national digital platform.",
        focus: "developer"
      },
      {
        text: "Formulate product strategy and roadmaps for integrating intelligent systems into national governance utilities, driving citizen engagement and process streamlining.",
        focus: "pm"
      },
      {
        text: "Engineer custom LLM orchestration pipelines using RAG strategies, fine-tuning, and semantic embeddings tailored specifically for key ministerial sectors (Ministry of Energy, Ministry of Cultural Heritage, Tourism).",
        focus: "developer"
      },
      {
        text: "Direct cross-functional alignment across large municipal agencies representing dozens of public stakeholders, turning vague regulatory mandates into crisp software specifications.",
        focus: "pm"
      },
      {
        text: "Coordinate a large, multi-disciplinary engineering squad (frontend, backend, ML, DevOps, and systems engineers) to ensure bulletproof security, high availability, and rapid system iterations.",
        focus: "both"
      }
    ]
  },
  {
    id: "bookcity",
    company: "Darrous & Mina Bookcity",
    role: "Automation Lead / Product Strategist",
    location: "Tehran, Iran",
    period: "September 2024 – September 2025",
    focus: "both",
    bullets: [
      {
        text: "Engineered a robust, highly extensible Telegram-integrated ERP system automating core inventory tracking, real-time sales reporting, and automated procurement.",
        focus: "developer"
      },
      {
        text: "Defined product owner priorities and operational KPIs to reduce manual retail overhead, transforming inventory check time from days to automated real-time alerts.",
        focus: "pm"
      },
      {
        text: "Created a custom AI-driven 'Smart Order Point' algorithm analyzing historical sales trends and seasonality to intelligently predict weekly procurement, reducing overstock waste by 35%.",
        focus: "developer"
      },
      {
        text: "Built an end-to-end real-time financial analytics dashboard aggregating transactional logs, providing executive leadership with actionable insights on margins and profit streams.",
        focus: "both"
      },
      {
        text: "Architected transaction-log anomaly detection pipelines, automatically neutralizing fraudulent patterns and ensuring financial data integrity with early warnings on pricing errors.",
        focus: "developer"
      }
    ]
  },
  {
    id: "smartory",
    company: "Smartory Labs",
    role: "Chief Technology Officer (CTO) / Head of Product",
    location: "Tehran, Iran",
    period: "November 2023 – December 2025",
    focus: "both",
    bullets: [
      {
        text: "Headed the high-level technology strategy and product vision, guiding development of multi-million dollar robotics, automation, and AI product lines across five distinct industries.",
        focus: "pm"
      },
      {
        text: "Successfully revitalized the stalled 'Applytory' startup marked for deletion, overhauling the technical stack and launching to market in just 4 months while securing additional venture funding.",
        focus: "both"
      },
      {
        text: "Spearheaded the integration of machine learning into standard hardware pipelines, ensuring custom firmware aligned perfectly with client strategic needs and market timing.",
        focus: "developer"
      },
      {
        text: "Managed R&D budgets, resource allocation, and agile product timelines, eliminating development bottlenecks and shortening time-to-market by 25%.",
        focus: "pm"
      },
      {
        text: "Engineered and launched an automated conversational AI scheduling and customer care chatbot tailored to the medical/dental sector, reducing front-desk administrative drag by 50%.",
        focus: "developer"
      }
    ]
  },
  {
    id: "kian",
    company: "Kian Academy (formerly ARAS Academy)",
    role: "Founder, CEO & Lead Product Architect",
    location: "Tehran, Iran",
    period: "February 2020 – May 2025",
    focus: "both",
    bullets: [
      {
        text: "Founded and scaled an elite education academy specializing in Robotics, Machine Learning, and Industrial Automation training, shifting from an offline boot camp to an interactive hybrid LMS platform.",
        focus: "pm"
      },
      {
        text: "Designed and launched 40+ specialized courses over 4 years, creating hands-on curricula bridging core engineering math with production-grade AI frameworks.",
        focus: "developer"
      },
      {
        text: "Pioneered interactive simulation-based online learning modules, increasing student retention rates by 42% through self-guided web-based coding playgrounds.",
        focus: "both"
      },
      {
        text: "Led the business through rapid user growth, establishing commercial partnerships with corporate sponsors, tech hubs, and major robotic enterprises.",
        focus: "pm"
      }
    ]
  },
  {
    id: "aras",
    company: "ARAS | Hi-Tech Robotic Solutions",
    role: "Team Leader, Researcher & Systems Architect",
    location: "Tehran, Iran",
    period: "June 2015 – Present",
    focus: "both",
    bullets: [
      {
        text: "Architected low-level real-time control algorithms and high-level decision engines for multi-agent autonomous systems (Smart House IoT infrastructure and Small Sized League multi-agent robotics).",
        focus: "developer"
      },
      {
        text: "Directed the SSL software division as Lead Supervisor (2018), orchestrating complex visual tracking cascades, real-time path-planning models, and strategy state engines.",
        focus: "both"
      },
      {
        text: "Built and programmed control systems of ARASH ASiST microsurgery robot, using precise haptic-feedback loop designs to enable simulations of ultra-delicate ophthalmologic training operations.",
        focus: "developer"
      },
      {
        text: "Designed an ML-driven surgical assessment framework evaluating surgeon competence dynamically from kinematic motion sensor patterns (published as best paper).",
        focus: "developer"
      },
      {
        text: "Mentored 15+ junior researchers and engineers on software engineering design patterns, system scalability, automated testing setups, and robotics optimization.",
        focus: "both"
      }
    ]
  }
];

export const recentWebHighlight = {
  title: "Recent Web Engineering Highlights (Next.js, Django, Medusa)",
  description: "Leveraging custom machine learning pipelines and modern architectures, I have recently developed and launched high-performance web applications and modular marketplaces featuring optimized designs and highly efficient query engines:",
  points: [
    {
      tech: "Next.js & React 19",
      role: "Frontend & Performance Leader",
      details: "Built super-fast Server Components (RSC) to minimize Client Bundle sizes, integrating robust hydration, server-side data loads, layout transitions, and fluid micro-interactions with Framer Motion."
    },
    {
      tech: "Medusa headless-commerce",
      role: "E-Commerce Architect",
      details: "Implemented modern, decoupled commerce backends leveraging Node.js + PostgreSQL. Designed highly customized checkout/inventory funnels, tailored promotions engines, and webhooks to synchronize retail systems."
    },
    {
      tech: "Django & Python",
      role: "Backend & Systems Integrator",
      details: "Architected clean REST APIs and backend controls, incorporating enterprise-grade security, ORM optimizations, complex background computations with Celery + Redis, and seamless LLM API integrations."
    }
  ],
  customWork: "A prime example is the construction of a customized e-commerce portal and SaaS storefront where a Next.js frontend interacts directly with a Medusa engine for transactions, and triggers high-throughput Python/Django microservices for background AI classifications."
};

export const education: EducationItem[] = [
  {
    institution: "K. N. Toosi University of Technology",
    degree: "Master of Science in Electrical Engineering (Control Systems)",
    gpa: "4.0 / 4.0 GPA (Direct merit-based admission)",
    period: "September 2018 – February 2022",
    location: "Tehran, Iran"
  },
  {
    institution: "K. N. Toosi University of Technology",
    degree: "Bachelor of Science in Electrical Engineering (Control Systems)",
    gpa: "3.7 / 4.0 GPA",
    period: "September 2014 – September 2018",
    location: "Tehran, Iran"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Artificial Intelligence & LLMs",
    icon: "BrainCircuit",
    skills: [
      { name: "Large Language Models (LLMs)", highlighted: true },
      { name: "Retrieval-Augmented Generation (RAG)", highlighted: true },
      { name: "Prompt Engineering & Window Tuning", highlighted: false },
      { name: "Vector Databases & Semantic Embeddings", highlighted: true },
      { name: "Transformer Architectures", highlighted: false },
      { name: "Orchestration (LangChain, LlamaIndex)", highlighted: true },
      { name: "AI Chatbots & Conversational Agents", highlighted: true }
    ]
  },
  {
    name: "Web & Backend Systems",
    icon: "Globe",
    skills: [
      { name: "Next.js & React 19", highlighted: true },
      { name: "Django & Python API", highlighted: true },
      { name: "Medusa headless-commerce", highlighted: true },
      { name: "TypeScript / Node.js", highlighted: true },
      { name: "REST APIs & Webhooks", highlighted: false },
      { name: "Celery & Background Tasks", highlighted: false },
      { name: "SQL & Anomaly Detection Logs", highlighted: true }
    ]
  },
  {
    name: "Robotics & Hardware Control",
    icon: "Cpu",
    skills: [
      { name: "Embedded Systems & Control Loops", highlighted: true },
      { name: "Real-time Path-Planning & Vision", highlighted: true },
      { name: "Computer Vision (YOLO, Object Tracking)", highlighted: false },
      { name: "C/C++ & MATLAB Simulations", highlighted: true },
      { name: "Haptic Feedback & Motion Actuators", highlighted: false }
    ]
  },
  {
    name: "Product & Business Strategy",
    icon: "Briefcase",
    skills: [
      { name: "Technical Product Management", highlighted: true },
      { name: "Startup Launch & Turnaround", highlighted: true },
      { name: "Resource Scheduling & Budgeting", highlighted: false },
      { name: "Agile Scrum & Sprint Roadmaps", highlighted: true },
      { name: "Stakeholder Alignment under NDA", highlighted: false },
      { name: "LMS Platform Scaling & Growth", highlighted: false }
    ]
  }
];

export const researchExperiences = [
  "Awarded Best Paper for 'Kinematic and Dynamic Analysis of ARASH ASiST: Toward Micro Positioning' at ICRoM 2021",
  "Lead Organizer for NasirCup 2017 Robotics tournament at K. N. Toosi University of Technology",
  "Competitor & Strategy Lead in multiple international IranOpen RoboCup SSL Tournaments (2016, 2017)",
  "Coordinated multiple international academic tracks for Robotics Conferences (ICRoM 2016, 2017, 2018)"
];
