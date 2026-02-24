export const projects = [
  {
    id: 1,
    title: "Social Timeline App (Zynk)",
    stack: "MERN · JWT · Socket.IO",
    overview: "A monolithic social platform scaling unified, timeline-based event interactions. Designed to mitigate event fragmentation for closed-group communities.",
    features: [
      "Problem: Existing platforms spread community events across scattered group chats, causing engagement drop-offs.",
      "Solution: Engineered a unified RESTful backend using Node.js/Express with MongoDB aggregations to centralize shared timelines.",
      "Tradeoffs: Opted for Socket.IO polling fallbacks to ensure real-time chat delivery on lower-end devices over pure WebSockets.",
      "Outcome: Achieved seamless state synchronization across active users and established a robust boilerplate for future scale."
    ],
    tech: [
      "JWT authentication",
      "Socket.IO",
      "Cloudinary"
    ],
    repo: "https://github.com/ManvithaDungi/Zynk",
    image: "/images/social-media.jpg"
  },
  {
    id: 2,
    title: "Travel Recommendation Site",
    stack: "Node.js · JavaScript · Leaflet",
    overview: "A location-aware mapping suite parsing decentralized user preferences to generate curated travel routing.",
    features: [
      "Problem: Static itinerary planners lack dynamic integration with interactive client-side mapping.",
      "Solution: Interfaced Leaflet.js with centralized state management to dynamically filter mapping plots based on node proximity.",
      "Tradeoffs: Chose Client-side filtering for immediate UI feedback over continuous API calls to reduce server load.",
      "Outcome: Delivered a responsive, zero-latency map interaction yielding a highly interactive UI/UX for itinerary planning."
    ],
    tech: [
      "Leaflet.js",
      "Client-side state handling",
      "REST-style architecture"
    ],
    repo: "https://github.com/ManvithaDungi/Travel-Recommendation-Site",
    image: "/images/travel.jpg"
  },
  {
    id: 3,
    title: "Drone Flight Controller Simulation",
    stack: "PX4 · Gazebo · Python",
    overview: "A rigorous hardware-in-the-loop (HITL) physical simulation testing ground for autonomous drone flight behavioral scripts.",
    features: [
      "Problem: Validating physical drone scripts is highly risky and prone to expensive hardware attrition.",
      "Solution: Prototyped a complete physics-based simulation bridge utilizing the MAVSDK-Python wrapper and Gazebo.",
      "Tradeoffs: Sacrificed initial setup speed by containerizing the simulation engine to ensure environment parity across machines.",
      "Outcome: Enabled 100% safe testing of autonomous waypoint navigation scripts prior to physical real-world deployment."
    ],
    tech: [
      "PX4 autopilot",
      "Gazebo simulator",
      "MAVSDK-Python"
    ],
    repo: "https://github.com/ManvithaDungi/Python-Drone-Simulation",
    image: "/images/drone.png"
  },
  {
    id: 4,
    title: "AI Symptom Analyser for Women",
    stack: "React · Firebase · Gemini AI",
    overview: "A privacy-first intelligent health companion leveraging generative AI to provide localized, culturally sensitive medical insights.",
    features: [
      "Problem: Generic AI medical advice often ignores cultural stigma and lacks multi-lingual accessibility for nuanced women's health issues.",
      "Solution: Orchestrated Gemini 1.5 Flash via Firebase Functions with a HuggingFace sentiment layer for safe, localized triaging.",
      "Tradeoffs: Enforced hard schema validations to sanitize LLM outputs, trading slight response latency for guaranteed clinical safety.",
      "Outcome: Produced a robust, multilingual safe-space forum that actively intercepts toxic posts and normalizes vital health dialogues."
    ],
    tech: [
      "React & Tailwind CSS",
      "Firebase Auth & Firestore",
      "Gemini 1.5 Flash AI"
    ],
    repo: "https://github.com/ManvithaDungi/AI_SymptomAnalyserForWomen"
  }
];

export const building = [
  {
    id: 1,
    title: "Zynk – Social Event Platform",
    stack: "React · Node.js · MongoDB · Socket.IO",
    overview: "Building a scalable social event platform with real-time chat and role-based access.",
    features: [
      "JWT-based authentication",
      "Socket.IO real-time updates",
      "Modular backend architecture"
    ]
  }
];

export const internships = [
  {
    id: 1,
    title: "Summer Research Intern",
    institution: "IDEAS, ISI Kolkata",
    duration: "May 2025 – July 2025",
    focus: "Data analytics, simulations, intelligent systems",
    certificate: "/certificates/certificate2.pdf"
  }
];
