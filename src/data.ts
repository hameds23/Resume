import { ExperienceItem, EducationItem, SkillCategory } from './types';

export const personalInfo = {
  name: "Hamed Sadeghi",
  title: "Engineering Leader & Technical Product Manager",
  taglines: {
    developer: "Full-Stack AI, Low-Level Control & Robotic Systems Engineer | High-Stakes Deep Tech & Algorithms",
    pm: "Technical Product Manager & CTO | Speeds Turnarounds, Steers Startups, Scales Products & Systems",
    hybrid: "Engineering Leader & Technical Product Manager | Bridging AI, Robotics, and Scalable Web Products"
  },
  phone: "09102399231",
  email: "Sadeghi714@gmail.com",
  linkedin: "https://linkedin.com/in/hamed-sadeghi",
  location: "Tehran, Iran",
  summary: {
    developer: "Accomplished systems developer and AI specialist with over a decade of cross-disciplinary hardware-software experience. Specializes in bridging the gap between sophisticated hardware architectures and intelligent control algorithms, with a Master's in Control Engineering (perfect 4.0 GPA). Five years dedicated to electromechanical design, multi-layer PCB integration, and physical implementation of industrial and mobile robotics, followed by five years of deploying advanced machine learning and LLMs directly into hardware and enterprise web environments.",
    pm: "Impact-driven Technical Product Manager & CTO with over a decade of experience executing tech strategy, reviving stalled ventures, and steering high-performance engineering programs. Proven ability to translate complex machine learning, IoT, and custom web architectures into high-ROI business value. Successfully turned around a stalled startup to launch in 4 months, scaled Kian Academy to over 40 course products, and directed product development from proof of concept to national deployment.",
    hybrid: "Accomplished Electrical Engineer with over a decade of cross-disciplinary experience in Robotics, Artificial Intelligence, and Machine Learning. Specializes in bridging the gap between sophisticated hardware architectures and intelligent control algorithms, with a Master's in Control Engineering (GPA 4.0). Over a decade of experience as a researcher, founder, CTO, and senior national AI engineer. Expert at leading multi-disciplinary squads of hardware, embedded, backend, and frontend engineers to design, build, and scale state-of-the-art systems."
  }
};

export const experiences: ExperienceItem[] = [
  {
    id: "web-commerce",
    company: "Freelance & Consultative Contracts",
    role: "Lead Full-Stack Web Eng. & Headless Commerce Architect",
    location: "Tehran, Iran",
    period: "January 2024 – Present",
    focus: "both",
    bullets: [
      {
        text: "Lead full-stack design and deployment of modern React 19 / Next.js web applications, leveraging React Server Components (RSC) to construct blazing fast, content-heavy digital profiles and marketplaces, scaling load speeds and optimizing SEO visibility.",
        focus: "developer"
      },
      {
        text: "Orchestrated headless commerce backends using Medusa with PostgreSQL, engineering modular promotions engines, customized multi-step checkout processes, and webhook endpoints to keep backend resources synchronized with storefront activity.",
        focus: "both"
      },
      {
        text: "Designed and implemented robust, high-performance web systems utilizing Django (Python API frameworks) with Celery and Redis to execute computationally expensive back-end AI classifications and asynchronous log audits.",
        focus: "developer"
      },
      {
        text: "Collaborated with business stakeholders to map out technical feature roadpaths, aligning complex e-commerce flows and low-latency API architectures with target user-experience design goals.",
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
        text: "Lead the architecture and development of the core Artificial Intelligence (AI) and Large Language Model (LLM) components for a high-priority national project.",
        focus: "developer"
      },
      {
        text: "Engineer sophisticated AI solutions tailored for key government bodies, including the Ministry of Energy and the Ministry of Cultural Heritage, Tourism, and Handicrafts.",
        focus: "developer"
      },
      {
        text: "Collaborate within a large, multi-disciplinary team of backend, frontend, and systems engineers to ensure the seamless integration and deployment of advanced AI functionalities.",
        focus: "both"
      },
      {
        text: "Develop intelligent systems designed to enhance ministerial efficiency, streamline operations, and improve public service delivery on a national scale.",
        focus: "pm"
      }
    ]
  },
  {
    id: "bookcity",
    company: "Darrous & Mina Bookcity – Retail automation system",
    role: "Automation Lead",
    location: "Tehran, Iran",
    period: "September 2024 – September 2025",
    focus: "both",
    bullets: [
      {
        text: "Engineered a comprehensive Telegram-based ERP system to automate core business processes, serving as the central operational hub for inventory, sales, and procurement management.",
        focus: "developer"
      },
      {
        text: "Developed and deployed an AI-driven 'Smart Order Point' algorithm that analyzes historical sales data and seasonal trends to predict weekly procurement needs, optimizing stock levels and minimizing overstock waste.",
        focus: "developer"
      },
      {
        text: "Built a real-time financial analytics engine that aggregates purchase and sales data to generate instant economic reports, calculating profit margins, revenue streams, and cost analysis for executive decision-making.",
        focus: "both"
      },
      {
        text: "Integrated automated daily management reporting features, delivering end-of-day summaries of top-selling items, cash flow status, and critical alerts directly to management without manual intervention.",
        focus: "pm"
      },
      {
        text: "Implemented an anomaly detection system to monitor transaction logs for irregularities, ensuring data integrity and providing early warnings for potential shrinkage or pricing errors.",
        focus: "developer"
      }
    ]
  },
  {
    id: "smartory",
    company: "Smartory Labs – Hi-Tech Solutions",
    role: "Chief Technology Officer (CTO)",
    location: "Tehran, Iran",
    period: "November 2023 – December 2025",
    focus: "both",
    bullets: [
      {
        text: "Drive the strategic direction of technology initiatives, overseeing the development and deployment of innovative, high-tech solutions in robotics, AI, and automation for diverse industries.",
        focus: "pm"
      },
      {
        text: "Revitalized the Applytory startup, which was previously marked for discontinuation, leading the team to a successful launch within four months—turning around a project that had faced over a year of stalled progress. Initiated a confidential, cutting-edge project, securing funding for its development and positioning the company for future growth (project details under NDA).",
        focus: "both"
      },
      {
        text: "Spearhead AI and machine learning integration into product lines, enhancing automation and efficiency to meet client-specific demands and elevate product performance.",
        focus: "developer"
      },
      {
        text: "Oversee all R&D efforts, managing budgets and timelines to ensure on-time delivery of projects, and collaborating closely with stakeholders to develop scalable and sustainable technology solutions.",
        focus: "pm"
      },
      {
        text: "Engineered and launched a specialized AI chatbot for the dental industry, designed to automate appointment scheduling, answer patient inquiries, and reduce administrative workload for clinic staff.",
        focus: "developer"
      }
    ]
  },
  {
    id: "aras-pioneer",
    company: "ARAS Pioneer Robotic Industries Company",
    role: "R&D Specialist",
    location: "Tehran, Iran",
    period: "October 2022 – January 2024",
    focus: "both",
    bullets: [
      {
        text: "Led a key project to design and develop an automated production line, transitioning from manual to robotic operations to increase efficiency and reduce human error.",
        focus: "both"
      },
      {
        text: "Spearheaded the research, design, and implementation of robotic systems that optimized factory workflows, improving production speed and consistency.",
        focus: "developer"
      },
      {
        text: "Collaborated with engineering teams to integrate automation technologies, including AI-driven systems, to streamline manufacturing processes and minimize downtime.",
        focus: "developer"
      },
      {
        text: "Conducted rigorous testing and prototyping to ensure seamless integration of robotic solutions, resulting in significant productivity gains and cost reductions for the factory.",
        focus: "both"
      },
      {
        text: "Played a crucial role in enhancing the company's automation capabilities, contributing to its competitive edge in the robotics industry.",
        focus: "pm"
      }
    ]
  },
  {
    id: "kian",
    company: "Kian Academy (formerly ARAS Academy)",
    role: "Founder & CEO",
    location: "Tehran, Iran",
    period: "February 2020 – May 2025",
    focus: "both",
    bullets: [
      {
        text: "Founded ARAS Academy, now rebranded as Kian Academy, an institution specializing in AI and robotics education, offering both online and face-to-face courses.",
        focus: "pm"
      },
      {
        text: "Developed and launched more than 40 courses over 4 years, providing students with comprehensive training in AI, robotics, and automation, bridging the gap between theory and practical application.",
        focus: "developer"
      },
      {
        text: "Led the academy through rapid growth, establishing a strong reputation in the industry and fostering partnerships with leading organizations in the AI and robotics sectors.",
        focus: "pm"
      }
    ]
  },
  {
    id: "aras",
    company: "ARAS | Hi-Tech Robotic Solutions",
    role: "Team Leader & Researcher",
    location: "Tehran, Iran",
    period: "June 2015 – Present",
    focus: "both",
    bullets: [
      {
        text: "Architected low-level control algorithms and high-level decision-making software for autonomous systems, initially for the Smart House IoT framework and later for the Small Sized League (SSL) multi-agent robotics team.",
        focus: "developer"
      },
      {
        text: "Led the SSL software division as Supervisor (2018), orchestrating the development of real-time strategy engines, computer vision pipelines for object tracking, and path-planning algorithms to optimize autonomous coordination in competitive environments.",
        focus: "both"
      },
      {
        text: "Directed the control system software for the ARASH ASiST surgical robot, programming haptic feedback loops and precise motion control algorithms to simulate delicate eye surgery procedures for medical training.",
        focus: "developer"
      },
      {
        text: "Engineered a machine learning-based assessment framework for my MSc thesis, developing classification models to analyze kinematic data and automate the evaluation of surgeons' technical performance.",
        focus: "developer"
      },
      {
        text: "Advise research teams on software scalability and algorithm design, mentoring members on code optimization, simulation environments, and the integration of AI models into complex robotic frameworks.",
        focus: "pm"
      },
      {
        text: "Joined ARAS Robotics Lab (2015): Contributed to the hardware architecture of the Smart House project before transitioning to the Small Sized League (SSL) team. Focused on designing custom PCBs, integrating omnidirectional drive systems, and debugging low-level embedded circuits for high-speed competitive robots.",
        focus: "developer"
      },
      {
        text: "SSL Team Supervisor (2018): Led the hardware design lifecycle for small-scale robots, mentoring engineers on PCB layout optimization, power management distribution, and electromechanical assembly. Directed the validation of sensor integration and actuator control circuits to enhance robot durability and response time.",
        focus: "both"
      },
      {
        text: "Surgical Robotics Group (ARASH ASiST): Spearheaded the electrical and mechanical subsystem design for the ARASH ASiST eye surgery training system. Oversaw the development of high-precision haptic feedback mechanisms, instrumented tools, and safety-critical power systems alongside a multidisciplinary hardware team.",
        focus: "both"
      },
      {
        text: "MSc Thesis Implementation: Engineered the data acquisition hardware and sensor instrumentation frameworks required to capture high-fidelity surgical metrics, creating the physical infrastructure necessary to support machine learning-based performance assessment.",
        focus: "developer"
      },
      {
        text: "Technical Advisor: Continued to guide research members in hardware development, providing technical oversight on component selection, circuit analysis, and rapid prototyping to ensure the successful deployment of next generation robotic systems.",
        focus: "pm"
      }
    ]
  },
  {
    id: "raiwan",
    company: "Raiwan",
    role: "Hardware Design Engineer",
    location: "Tehran, Iran",
    period: "March 2016 – June 2017",
    focus: "both",
    bullets: [
      {
        text: "End-to-End PCB Lifecycle Management: Orchestrated the complete design, prototyping, and deployment cycle of high-complexity, multi-layer Printed Circuit Boards (PCBs) tailored for rigorous industrial environments. Ensured 100% compliance with stringent electromagnetic compatibility (EMC) and signal integrity standards.",
        focus: "developer"
      },
      {
        text: "Mission-Critical Industrial Systems: Engineered robust electronic control units and specialized instrumentation for diverse heavy-industry applications, focusing on fault-tolerant power distribution and advanced signal conditioning to withstand extreme operating conditions.",
        focus: "developer"
      },
      {
        text: "High-Performance Circuit Architecture: Developed sophisticated schematic designs and optimized PCB layouts, integrating high-speed digital processors with sensitive analog interfaces to achieve unparalleled precision in industrial automation and monitoring hardware.",
        focus: "both"
      },
      {
        text: "Optimization & Scalability: Pioneered hardware-level optimizations that significantly reduced thermal dissipation and manufacturing costs while enhancing the long-term reliability and lifecycle of industrial-grade components.",
        focus: "pm"
      },
      {
        text: "Cross-Functional Technical Leadership: Collaborated with multidisciplinary teams to translate complex industrial requirements into high-fidelity hardware specifications, bridging the gap between theoretical electrical engineering and rugged physical implementation.",
        focus: "both"
      }
    ]
  }
];

export const recentWebHighlight = {
  title: "Headless Commerce & Modern Web Implementations (Next.js, Python, Medusa)",
  description: "Leveraging custom machine learning engines and highly optimized software engineering, I have deployed high-speed web architectures and modular commerce hubs:",
  points: [
    {
      tech: "Next.js & React Server Components",
      role: "Frontend Systems Specialist",
      details: "Utilizes React 19 Server Components to minimize Client Bundle sizes, deploying fast rendering, layouts-transitions, and fluid micro-interactions with Framer Motion."
    },
    {
      tech: "Medusa Headless Commerce Node.js & PostgreSQL",
      role: "E-Commerce Architect",
      details: "Integrated flexible decoupled commerce backends. Custom checkout funnels, customized promotion engines, and active payment sync rules."
    },
    {
      tech: "Django REST & Python Celery/Redis",
      role: "Backend & ML Pipeline Integrator",
      details: "Built clean REST API interfaces and secure databases, incorporating async Celery jobs and live analytical reporting pipelines."
    }
  ],
  customWork: "A prime example is the construction of a customized e-commerce portal and SaaS storefront where a Next.js frontend interacts directly with a Medusa e-commerce engine, triggering high-throughput Python/Django microservices for background AI classifications and CRM syncs."
};

export const education: EducationItem[] = [
  {
    institution: "K. N. Toosi University of Technology",
    degree: "Master of Science in Electrical engineering (concentration: Control engineering)",
    gpa: "4.0 / 4.0 GPA (Direct merit-based admission)",
    period: "September 2018 – February 2022",
    location: "Tehran, Iran"
  },
  {
    institution: "K. N. Toosi University of Technology",
    degree: "Bachelor of Science in Electrical engineering (concentration: Control engineering)",
    gpa: "3.7 / 4.0 GPA",
    period: "September 2014 – September 2018",
    location: "Tehran, Iran"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Artificial Intelligence & Data",
    icon: "BrainCircuit",
    skills: [
      { name: "Large Language Models (LLMs): Transformer Architectures (Attention), Prompt Engineering, Inference (vLLM, Quantization, GGUF)", highlighted: true },
      { name: "Retrieval Augmented Generation (RAG): Vector Databases, Semantic Search, Orchestration Frameworks (LangChain, LlamaIndex), Hybrid Search", highlighted: true },
      { name: "Natural Language Processing (NLP): Tokenization, Named Entity Recognition (NER), Text Summarization & Topic Modeling", highlighted: false },
      { name: "Deep Learning: Neural Networks (ANN, RNN, LSTM), Optimization (Adam, SGD), Regularization, Hyperparameter Tuning", highlighted: true },
      { name: "Convolutional Neural Networks (CNNs): Object Detection (YOLO, SSD, R-CNN)", highlighted: false },
      { name: "Dialogue & Voice AI: Intent Classification, Dialogue Management, Voice Integration (STT/TTS)", highlighted: false },
      { name: "Data Science & Analysis: Wrangling (Pandas, NumPy), High-Throughput SQL Databases", highlighted: true }
    ]
  },
  {
    name: "Engineering, Control & Robotics",
    icon: "Cpu",
    skills: [
      { name: "Control Engineering: PID Tuning & Implementation, State-Space Representation, System Stability, Kalman Filtering & Estimation", highlighted: true },
      { name: "Embedded Systems: Microcontroller Architecture (ARM, STM32, AVR), RTOS, Firmware, Protocols (I2C, SPI, UART, CAN)", highlighted: true },
      { name: "Robotics: Kinematics & Dynamics, Robot Operating System (ROS/ROS2), Navigation (A*, Dijkstra), Sensor Fusion (LiDAR, IMU)", highlighted: true },
      { name: "Automation & PLCs: Ladder Logic, Structured Text, Industrial IoT (IIoT) Integration, Drive Systems & Actuators", highlighted: false },
      { name: "Electrical & Mechanical Design: Multi-Layer PCB Design (Altium, KiCad), 3D CAD modeling (SolidWorks), SPICE Simulation", highlighted: true },
      { name: "Low-Level Programming & Math: C / C++ Object-Oriented Software (OOP, Pointers, STL), MATLAB & Simulink modeling", highlighted: true }
    ]
  },
  {
    name: "Web Systems, Cloud & Fullstack",
    icon: "Globe",
    skills: [
      { name: "Next.js, React 19 & React Server Components", highlighted: true },
      { name: "Medusa Headless Commerce (Node.js & PostgreSQL)", highlighted: true },
      { name: "Django, Python REST API & Celery/Redis Sprints", highlighted: true },
      { name: "TypeScript & Corporate Web Hooks", highlighted: true },
      { name: "Secure ERP Systems & Transactional Logging Audits", highlighted: false },
      { name: "Framer Motion Fluid UX UI Micro-Animations", highlighted: false }
    ]
  },
  {
    name: "Leadership & Strategic Product Management",
    icon: "Briefcase",
    skills: [
      { name: "Technical Product Management & Roadmapping", highlighted: true },
      { name: "Startup Pivots, Refactoring, & Rapid Market Turnaround", highlighted: true },
      { name: "R&D Planning, Budget Allocation & Agile Iterations", highlighted: false },
      { name: "Team Leadership, Coaching & Technical Mentorship", highlighted: true },
      { name: "Academic Curriculum Design & Scaling Education Systems (Kian Academy Founder)", highlighted: false }
    ]
  }
];

export const researchExperiences = [
  "Published 'A Dual Robust Control Architecture with Variable Stiffness and Damping Parameters for Switching Task Dominance in Collaborative Haptic Systems' in IET Control Theory & Applications, August 2023.",
  "Participant in the ICRoM 2021 conference, awarded Best Paper for paper titled 'Kinematic and Dynamic Analysis of ARASH ASiST: Toward Micro Positioning.'",
  "Member of the organizing team for the NasirCup 2017 competition at K. N. Toosi University of Technology.",
  "Competitor in the IranOpen 2017 robotics competition.",
  "Participant in the ICRoM 2017 conference at Amirkabir University of Technology.",
  "Member of the organizing team for the ICRoM 2018 conference at Iran University of Science and Technology.",
  "Competitor in the IranOpen 2016 robotics competition.",
  "Member of the organizing team for the ICRoM 2016 conference at the University of Tehran."
];
