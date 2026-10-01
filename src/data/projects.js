const projects = [
  {
    id: 1,
    title: "Travel Agency Management System",
    category: "Full-Stack Development",
    status: "In Progress",
    description:
      "A full-stack travel agency management system designed to manage travel packages, users, authentication, bookings, and role-based access for administrators, agents, and customers.",
    overview:
      "A complete multi-role web platform built to automate and centralize travel agency operations. The application features fine-grained access control, interactive booking workflows, package catalog management, and customized management dashboards.",
    problem:
      "Traditional manual booking processes and disparate spreadsheets cause administrative delays, booking errors, and lack of transparency across customer inquiries and agent activities.",
    features: [
      "User Authentication",
      "JWT Authorization",
      "Role-Based Access Control",
      "Travel Package Management",
      "Booking Management",
      "Admin Dashboard",
      "Agent Management",
      "Customer Management",
      "Protected Routes & Token Refresh",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
    ],
    role:
      "Architected and implemented both client interfaces and RESTful backend APIs, including schema definitions with Mongoose, JWT middleware security, and administrative panels.",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    category: "Frontend Web Development",
    status: "In Progress",
    description:
      "A responsive personal portfolio website designed to showcase my education, technical skills, projects, certificates, and learning journey.",
    overview:
      "A tailored digital portfolio engineered with modern React, Vite, and Tailwind CSS to present an accurate, professional record of my Computer Science university work, projects, and credentials.",
    problem:
      "Needed a cohesive, modern online identity to support scholarship, internship, and university applications that reflects authentic student development rather than generic templates.",
    features: [
      "Clean dark developer aesthetic with emerald accents",
      "Responsive navigation with mobile drawer menu",
      "Interactive project showcase with expandable details",
      "Modular certificate viewer with direct PDF access",
      "Vertical education and learning journey timelines",
      "Frontend-validated interactive contact interface",
      "Accessible markup, fast load times, and SEO metadata",
    ],
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Lucide React",
    ],
    role:
      "Designed and coded the entire user experience from layout to component architecture, ensuring modular data decoupling and full mobile responsiveness.",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Library Management System",
    category: "Desktop Application",
    status: "Completed",
    description:
      "A desktop library management system for managing books and library records using C# and SQL Server.",
    overview:
      "A robust Windows desktop application created to demonstrate relational database engineering, parameterized queries, and desktop UI workflows.",
    problem:
      "Manual library index logging often leads to duplicate entries, lost books, and time-consuming manual record searches.",
    features: [
      "Add Books",
      "Update Books",
      "Delete Books",
      "Search Records",
      "Database Integration",
      "Login System",
      "Stored Procedure Integration",
      "Tabular Data Grid Views",
    ],
    technologies: [
      "C#",
      "Windows Forms",
      "SQL Server",
      "Stored Procedures",
      "ADO.NET",
    ],
    role:
      "Developed the C# Windows Forms user interface, established ADO.NET SQL Server connectivity, wrote database schemas and stored procedures, and validated CRUD operations.",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Cybersecurity Monitoring Lab",
    category: "Cybersecurity & Systems",
    status: "In Progress",
    description:
      "A practical cybersecurity laboratory using Windows, Sysmon, Splunk Universal Forwarder, and Splunk Enterprise to collect and analyze security events.",
    overview:
      "A dedicated endpoint detection and event analysis lab designed to simulate realistic telemetry logging and security operations center (SOC) event monitoring.",
    problem:
      "Understanding modern cyber threats requires hands-on familiarity with process creation telemetry, network connection traces, and SIEM search methodologies.",
    features: [
      "Windows Endpoint Telemetry",
      "Sysmon Event Filtering & Logging",
      "Process Creation & Network Monitoring",
      "Splunk Universal Forwarder Pipeline",
      "Splunk Enterprise Log Indexing",
      "Security Event Search & Querying",
      "Defensive Analysis & Correlation",
    ],
    technologies: [
      "Windows",
      "Sysmon",
      "Splunk",
      "PowerShell",
      "Security Monitoring",
    ],
    role:
      "Configured Windows audit policies, authored custom Sysmon XML filters, set up Splunk forwarder pipelines, and executed analytical queries against generated logs.",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Frontend Travel Website",
    category: "Frontend Web Development",
    status: "Completed",
    description:
      "A responsive multi-page travel portal featuring destinations, itineraries, package cards, testimonials, and booking inquiries.",
    overview:
      "A comprehensive exploration of pure frontend design patterns, CSS Grid/Flexbox layouts, responsive design break points, and interactive DOM scripts.",
    problem:
      "Practicing structured semantic layout construction and responsive UI design across disparate viewport sizes.",
    features: [
      "Destination Showcase Grid",
      "Tour Package Itinerary Display",
      "Interactive Photo Gallery",
      "Customer Testimonials Slider",
      "Booking Inquiry Form",
      "Mobile-Friendly Drawer Navigation",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web Design",
    ],
    role:
      "Implemented semantic markup, authored responsive stylesheets from scratch, and built JavaScript event listeners for dynamic UI interactions.",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Digital Logic Design Project",
    category: "Computer Science Foundations",
    status: "Completed",
    description:
      "A university Digital Logic Design project analyzing combinational logic circuits, truth tables, Boolean reduction, and simulation.",
    overview:
      "An academic project connecting theoretical Boolean algebra and digital gates to practical circuit synthesis and analysis.",
    problem:
      "Demonstrating foundational digital abstraction, gate minimization techniques, and verification of binary logic truth tables.",
    features: [
      "Logic Gate Modeling",
      "Boolean Algebra Simplification",
      "Karnaugh Map Minimization",
      "Truth Table Verification",
      "Circuit Simulation & Analysis",
      "Technical Documentation & Defense",
    ],
    technologies: [
      "Digital Logic",
      "Logic Gates",
      "Boolean Algebra",
      "Circuit Analysis",
    ],
    role:
      "Designed the logic diagrams, executed algebraic simplifications, simulated circuit behavior, and prepared the technical presentation for university review.",
    github: "#",
    demo: "#",
  },
];

export default projects;