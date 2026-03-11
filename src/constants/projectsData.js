export const PROJECTS_DATA = [
  {
    id: "naxora",
    title: "Naxora – Tech Career Platform",
    shortDesc: "A full-stack tech career guidance platform with an admin dashboard, learning roadmaps, user progress tracking, and 46 REST API endpoints.",
    overview: "Naxora is a production-ready, full-stack tech career guidance platform designed to help aspiring developers navigate their learning journey. Instead of scattered tutorials and unstructured content, Naxora provides curated, hierarchical roadmaps that guide users step-by-step — from choosing a career path to mastering advanced topics. The platform includes a dedicated admin dashboard for full content and user management, and a scalable backend API powering everything behind the scenes.",
    details: [
      {
        title: "Admin Dashboard",
        desc: "A comprehensive admin panel built with React 19 and Redux Toolkit. Admins can create and manage roadmaps, courses, subjects, and topics. It includes user management, real-time analytics, and a clean UI for efficient content operations — all centralized in one place."
      },
      {
        title: "Backend Architecture",
        desc: "The backend is built with Node.js, Express.js, and MongoDB, exposing 46 REST API endpoints organized across 5 route files. It handles authentication, roadmap hierarchy CRUD, course management, user progress tracking, and admin-specific operations. Mongoose is used for schema modeling and data validation."
      },
      {
        title: "Security Model",
        desc: "Naxora implements a 4-layer security model: JWT-based authentication for identity verification, express-rate-limit to prevent brute-force and DDoS attacks, Helmet.js for secure HTTP headers, and Row Level Security ensuring users can only access their own data. Passwords are hashed with bcrypt."
      },
      {
        title: "Media & Uploads",
        desc: "All media assets — including thumbnails, banners, and educational images — are uploaded to Cloudinary via Multer middleware. This keeps the server stateless while providing fast, CDN-backed image delivery with automatic optimization."
      },
    ],
    architecture: {
      description: "Naxora uses a 3-tier architecture: a React admin frontend communicates with an Express.js REST API, which in turn manages data in MongoDB and media in Cloudinary.",
      layers: [
        { name: "React Admin Dashboard", desc: "Built with React 19 + Redux Toolkit. Manages all CRUD operations for roadmaps, users, and content. Redux handles global state; Axios sends authenticated API requests.", color: "orange" },
        { name: "Express.js REST API", desc: "46 endpoints across 5 route files. JWT middleware protects every route. Rate limiting and Helmet.js harden the server against attacks.", color: "blue" },
        { name: "MongoDB + Mongoose", desc: "Document-based storage with Mongoose schemas enforcing the 5-level roadmap hierarchy. Indexed queries for fast lookups across nested content.", color: "cyan" },
        { name: "Cloudinary CDN", desc: "All images uploaded via Multer → Cloudinary pipeline. Provides CDN-backed delivery with automatic format optimization and responsive transforms.", color: "green" },
      ]
    },
    roadmap: {
      description: "The heart of Naxora is its hierarchical roadmap system. Instead of a flat list of courses, content is organized in a 5-level tree structure that mirrors how learning actually works — broad career paths narrow down into specific, actionable topics.",
      levels: [
        { name: "Roadmap", desc: "The top-level career path (e.g., \"Full Stack Developer\", \"Data Scientist\"). This is what a user selects to begin their journey.", color: "orange" },
        { name: "Year", desc: "Each roadmap is divided into yearly milestones (Year 1, Year 2, etc.), so learners have a realistic timeline and don't feel overwhelmed.", color: "blue" },
        { name: "Subject", desc: "Within each year, subjects represent major skill areas to focus on (e.g., \"Frontend Basics\", \"Backend & APIs\", \"Databases\").", color: "cyan" },
        { name: "Topic", desc: "Each subject breaks down into specific topics (e.g., \"React Hooks\", \"REST API Design\", \"MongoDB Aggregation\") — the actual units of learning.", color: "green" },
        { name: "Content", desc: "The deepest level — each topic contains rich content including explanations, code examples, images, and external resource links.", color: "purple" },
      ]
    },
    futureScope: [
      "User-facing frontend with personalized dashboards and progress tracking",
      "AI-powered roadmap recommendations based on user goals and skill level",
      "Interactive quizzes and coding challenges at the topic level",
      "Community features — discussion forums, peer reviews, and mentorship",
      "Certificate generation on roadmap completion",
      "Mobile app with offline access to learning content",
    ],
    img: "/projects/Naxora.png",
    link: "https://nexora-frontend-live.vercel.app/",
    github: "https://github.com/devNikhil00/Naxora-admin",
    adminLink: "https://naxora-admin.vercel.app/register",
    backendGithub: "https://github.com/devNikhil00/Nexora-backend",
    status: "in-progress",
    techStack: ["React 19", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "JWT Auth", "Cloudinary", "Vercel"],
    features: [
      "Admin dashboard with analytics & user management",
      "Hierarchical roadmap system (Roadmap → Year → Subject → Topic → Content)",
      "46 REST API endpoints across 5 route files",
      "JWT authentication with rate limiting & Helmet security",
      "Cloudinary media uploads with Multer",
      "4-layer security model (JWT + Rate Limit + Helmet + RLS)",
      "Comprehensive test suite & database management scripts",
    ]
  },
  {
    id: "smart-bookmark",
    title: "Smart Bookmark",
    shortDesc: "A production-grade bookmark manager with real-time sync, Google OAuth, and 4-layer security built on Next.js 14 and Supabase.",
    overview: "A production-grade bookmark management application that lets users organize, sync, and access their bookmarks across devices with enterprise-level security. Built to solve the problem of losing important links across browsers and devices, Smart Bookmark provides a centralized, real-time synced solution with a focus on security and user experience.",
    details: [
      { title: "Authentication", desc: "Google OAuth 2.0 integration for seamless sign-in. Users authenticate via their Google account, eliminating the need for password management. Sessions are maintained securely through Supabase's built-in auth system." },
      { title: "Real-time Synchronization", desc: "Powered by Supabase WebSockets, bookmarks sync across all open tabs and devices in under 100ms. Any CRUD operation instantly reflects everywhere — no manual refresh needed." },
      { title: "Security Architecture", desc: "A 4-layer security model protects every request: Edge Middleware validates the session before the page loads, Server Components check auth on the server, Server Actions verify permissions before mutations, and Row Level Security at the database level ensures users can only access their own data." },
      { title: "User Interface", desc: "Two view modes — a visual card grid for browsing and a compact table view for power users. The UI includes comprehensive URL validation against XSS and SSRF attacks, confirmation dialogs for destructive actions, and a fully responsive mobile-first layout." },
    ],
    architecture: {
      description: "Smart Bookmark follows a layered Next.js 14 architecture where security is enforced at every level — from the network edge to the database.",
      layers: [
        { name: "Edge Middleware", desc: "Intercepts every request at the CDN edge, validates the user session, and redirects unauthenticated users before the page even starts loading.", color: "orange" },
        { name: "Server Components", desc: "Pages render on the server with full auth context. Data fetching happens server-side, ensuring no sensitive data is exposed to the client.", color: "blue" },
        { name: "Server Actions", desc: "All mutations (create, update, delete) go through Server Actions that re-verify permissions and validate input before touching the database.", color: "cyan" },
        { name: "Row Level Security", desc: "Supabase RLS policies at the PostgreSQL level ensure that even if all other layers fail, a user can never access another user's bookmarks.", color: "green" },
      ]
    },
    img: "/projects/smart-bookmarks.png",
    link: "https://smart-bookmark-livid.vercel.app/dashboard",
    github: "https://github.com/devNikhil00/smart-bookmark",
    status: "completed",
    techStack: ["Next.js 14", "React 18", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    features: [
      "Google OAuth 2.0 authentication",
      "Real-time sync across tabs (<100ms)",
      "4-layer security with Row Level Security",
      "Dual view modes (card grid & table)",
      "Comprehensive URL validation (XSS/SSRF protection)",
      "Full CRUD with confirmation dialogs",
    ]
  },
  {
    id: "notes-app",
    title: "Notes App",
    shortDesc: "A MERN-based application that allows users to create, edit, and delete personal notes with secure authentication and cloud storage.",
    overview: "A full-stack cloud note-taking application built on the MERN stack. Users can register, log in, and manage personal notes from any device. The app demonstrates a clean separation between frontend and backend, with JWT-based authentication securing every API request and MongoDB providing persistent cloud storage.",
    details: [
      { title: "Authentication System", desc: "Secure user registration and login using JWT tokens and bcrypt password hashing. Tokens are stored client-side and attached to every API request via Axios interceptors, ensuring that unauthenticated users are blocked at the API level." },
      { title: "Notes Management", desc: "Full RESTful API supporting Create, Read, Update, and Delete operations on personal notes. Each note is tied to the authenticated user's ID, preventing cross-user access. React state management ensures instant UI updates without full page reloads." },
      { title: "Backend API Design", desc: "Express.js routes are organized by resource (auth routes, notes routes). Middleware validates JWT tokens before any protected endpoint is hit. Mongoose schemas enforce data structure and validation at the database level." },
      { title: "Frontend Architecture", desc: "React components follow a container/presentational pattern. Protected routes redirect unauthenticated users to login. Tailwind CSS provides a consistent, responsive design system across all views." },
    ],
    architecture: {
      description: "Notes App follows a classic MERN architecture with a clear client-server separation. The React frontend communicates with the Express backend via REST APIs, and MongoDB stores all data persistently.",
      layers: [
        { name: "React Frontend", desc: "Handles UI rendering, form state, and client-side routing. Sends authenticated API requests to the backend via Axios.", color: "blue" },
        { name: "Express.js API", desc: "RESTful API layer with JWT middleware protecting all note routes. Validates input and delegates to Mongoose models.", color: "cyan" },
        { name: "JWT Auth Middleware", desc: "Intercepts every protected request, verifies the token, and attaches the user ID to the request object for downstream use.", color: "orange" },
        { name: "MongoDB + Mongoose", desc: "Persistent data layer. Mongoose schemas enforce structure (title, content, userId, timestamps). Indexed queries for fast retrieval.", color: "green" },
      ]
    },
    img: "/projects/notes1.png",
    link: null,
    github: "https://github.com/devNikhil00/notes-app",
    status: "completed",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT Auth"],
    features: [
      "Secure user authentication (JWT + bcrypt)",
      "Full RESTful API for notes CRUD",
      "Protected routes with token validation",
      "Mongoose schema validation",
      "Instant UI updates via React state",
      "Responsive Tailwind CSS design",
    ]
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    shortDesc: "A classic hand game recreated using HTML, CSS, and JavaScript with live score tracking.",
    overview: "An interactive, browser-based Rock Paper Scissors game built entirely with vanilla JavaScript. The project focuses on clean DOM manipulation, event-driven architecture, and CSS animations — demonstrating core frontend skills without any framework dependency.",
    details: [
      { title: "Game Logic", desc: "The computer's choice is generated using Math.random() mapped to three outcomes. A comparison matrix determines win/loss/draw instantly. The game maintains a running scoreboard (wins, losses, ties) stored in JavaScript variables that persist across rounds within the session." },
      { title: "Event-Driven Architecture", desc: "All user interactions are handled through DOM event listeners. Click events on the three choice buttons trigger the game logic, update the DOM with results, and animate the score transitions — all without page reloads." },
      { title: "Visual Feedback", desc: "CSS transitions and keyframe animations provide immediate visual feedback on each round — highlighting the winner, animating score changes, and showing the computer's choice reveal with a brief delay for dramatic effect." },
    ],
    architecture: {
      description: "A simple but clean event-driven architecture where user clicks flow through game logic and update the DOM in a predictable cycle.",
      layers: [
        { name: "User Input", desc: "Click events on Rock, Paper, or Scissors buttons captured via addEventListener.", color: "orange" },
        { name: "Game Engine", desc: "Pure JavaScript function compares user choice vs randomized computer choice using a win/loss matrix.", color: "blue" },
        { name: "State Manager", desc: "Score variables (wins, losses, ties) updated after each round. No external state library — just clean JS variables.", color: "cyan" },
        { name: "DOM Renderer", desc: "Results and scores written back to the DOM via innerHTML/textContent. CSS classes toggled for animations.", color: "green" },
      ]
    },
    img: "/projects/rpc.png",
    link: "https://devnikhil00.github.io/Rock-Paper-Scissors/",
    github: "https://github.com/devNikhil00/Rock-Paper-Scissors",
    status: "completed",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM Manipulation"],
    features: [
      "Interactive UI with hover effects",
      "Randomized computer opponent logic",
      "Persistent live score tracking",
      "CSS keyframe animations for results",
      "Zero-dependency vanilla JavaScript",
    ]
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    shortDesc: "A tool to convert currencies with real-time exchange rates using a public API.",
    overview: "A sleek currency conversion tool that fetches real-time exchange rates from a public REST API. Users can select any two currencies from 50+ supported options and get instant, accurate conversions. The app demonstrates async JavaScript, API integration, and responsive CSS design.",
    details: [
      { title: "API Integration", desc: "Uses the Fetch API to call a public exchange-rate REST endpoint. Rates are fetched on-demand when the user selects a currency pair, ensuring the conversion is always based on the latest available data. Error handling covers network failures and invalid responses gracefully." },
      { title: "Conversion Engine", desc: "The conversion logic supports dual-way operation — swap source and target currencies instantly. Input validation prevents non-numeric values and handles edge cases like zero amounts." },
      { title: "Dynamic Currency Selection", desc: "Dropdowns are populated dynamically from the API response, listing all available currency codes with their country flags. Default selections are pre-set to commonly used pairs (USD → INR) for quick access." },
    ],
    architecture: {
      description: "A straightforward fetch-compute-render pipeline where the API provides data, JavaScript computes the conversion, and the DOM displays the result.",
      layers: [
        { name: "User Input", desc: "Currency dropdowns and amount field capture user selections. Change events trigger the conversion flow.", color: "orange" },
        { name: "Fetch API Layer", desc: "Async fetch calls to the exchange-rate API. Handles loading states, errors, and response parsing.", color: "blue" },
        { name: "Conversion Logic", desc: "Pure function that multiplies amount by the fetched rate. Handles precision with toFixed(2) for clean output.", color: "cyan" },
        { name: "DOM Output", desc: "Result displayed in real-time. Swap button reverses the currency pair and re-triggers the conversion.", color: "green" },
      ]
    },
    img: "/projects/currency.png",
    link: "https://devnikhil00.github.io/Currency-Converter/",
    github: "https://github.com/devNikhil00/Currency-Converter",
    status: "completed",
    techStack: ["JavaScript", "REST APIs", "CSS Variables", "HTML5"],
    features: [
      "Live exchange rates via REST API",
      "Instant dual-way conversion",
      "50+ fiat currencies supported",
      "Dynamic dropdown population",
      "Graceful error handling",
    ]
  },
  {
    id: "calculator-app",
    title: "Calculator App",
    shortDesc: "A responsive calculator built using HTML, CSS, and JavaScript for quick arithmetic operations.",
    overview: "A fully functional digital calculator with a clean neumorphic design. Handles all standard arithmetic operations with proper edge case management — consecutive operations, floating point precision, and division by zero. Supports both click and keyboard input for a native calculator feel.",
    details: [
      { title: "Core Operations", desc: "Supports addition, subtraction, multiplication, and division. The evaluation engine chains consecutive operations correctly (e.g., 5 + 3 × 2), handles floating point rounding to avoid IEEE 754 artifacts, and returns 'Error' for division by zero." },
      { title: "Input Handling", desc: "Dual input modes — both mouse clicks on the button grid and keyboard events (0-9, +, -, *, /, Enter, Backspace, Escape) are mapped to the same logic, ensuring a consistent experience regardless of input method." },
      { title: "Visual Design", desc: "Neumorphic design with soft shadows and raised button effects built entirely with CSS Grid. The display area shows both the current expression and the result. Buttons have active-state animations for tactile feedback." },
    ],
    architecture: {
      description: "A minimal input-process-display loop where user actions feed into an expression builder, which evaluates and renders results.",
      layers: [
        { name: "Input Layer", desc: "Click events on CSS Grid buttons and keydown events on the document both feed into a unified handler function.", color: "orange" },
        { name: "Expression Builder", desc: "Builds a string expression as the user types. Handles operator chaining, decimal points, and clear/backspace operations.", color: "blue" },
        { name: "Evaluation Engine", desc: "Evaluates the expression string with edge case guards (division by zero, trailing operators, floating point fix).", color: "cyan" },
        { name: "Display Renderer", desc: "Updates the calculator screen with the current expression and computed result in real-time.", color: "green" },
      ]
    },
    img: "/projects/calc.png",
    link: "https://devnikhil00.github.io/Calculator-project/",
    github: "https://github.com/devNikhil00/Calculator-project",
    status: "completed",
    techStack: ["JavaScript", "CSS Grid", "HTML5"],
    features: [
      "Floating point precision handling",
      "Full keyboard input support",
      "Neumorphic CSS Grid layout",
      "Consecutive operation chaining",
      "Division by zero error handling",
    ]
  },
];
