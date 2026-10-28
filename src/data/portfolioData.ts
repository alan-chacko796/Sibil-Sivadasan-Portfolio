import { ProjectItem, SkillCategory, TimelineItem } from '../types';

export const personalInfo = {
  name: 'Sibil Sivadasan',
  title: 'Software Tester & QA Automation Engineer',
  tagline: 'Bridging the gap between code and quality through modern test automation frameworks and rigorous manual verification.',
  summary: 'Computer Science graduate with deep expertise in Automation Testing (Playwright with TypeScript, Selenium with Java), Manual Testing, API & Performance Testing, and Defect Life Cycle tracking using JIRA. Passionate about architecting scalable Page Object Models, eliminating flaky tests, and ensuring reliable software delivery.',
  email: 'sibilsivadas4@gmail.com',
  phone: '+91 8848859629',
  location: 'Palakkad, Kerala, India',
  githubProfile: 'https://github.com/sibil-sibii',
  portfolioRepo: 'https://github.com/alan-chacko796/Sibil-Sivadasan-Portfolio',
  profileImage: './sibil_profile.jpg',
  resumePdfUrl: './Sibil_Sivadasan_Resume.pdf',
  resumeFilename: 'Sibil_Sivadasan_Resume.pdf',
  statusBadge: 'Seeking Software Testing Opportunities'
};

export const stats = [
  { value: '4+', label: 'QA Frameworks & Test Suites' },
  { value: '2+', label: 'Core Automation Stacks (TS & Java)' },
  { value: '100%', label: 'Test Execution Precision' },
  { value: '5 Mo', label: 'Rigorous Offline QA Training' }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Automation Testing',
    icon: 'PlayCircle',
    description: 'Scalable E2E & UI automation frameworks implementing Page Object Model design.',
    skills: [
      { name: 'Playwright', level: 'Advanced', tag: 'Core E2E' },
      { name: 'TypeScript', level: 'Advanced', tag: 'Language' },
      { name: 'Selenium WebDriver', level: 'Advanced', tag: 'UI Automation' },
      { name: 'Core Java (OOPs)', level: 'Advanced', tag: 'Language' },
      { name: 'TestNG', level: 'Advanced', tag: 'Test Runner' },
      { name: 'Page Object Model (POM)', level: 'Expert', tag: 'Architecture' },
      { name: 'Maven', level: 'Proficient', tag: 'Build Tool' }
    ]
  },
  {
    title: 'Manual Testing & QA Lifecycle',
    icon: 'CheckSquare',
    description: 'Complete STLC and SDLC workflows, requirements analysis, and defect governance.',
    skills: [
      { name: 'Agile & Scrum Methodology', level: 'Advanced' },
      { name: 'Defect Life Cycle', level: 'Expert' },
      { name: 'STLC & SDLC', level: 'Expert' },
      { name: 'Test Case & Scenario Design', level: 'Expert' },
      { name: 'Bug Tracking Tool (JIRA)', level: 'Advanced' },
      { name: 'Smoke & Sanity Testing', level: 'Advanced' },
      { name: 'Functional & UI Testing', level: 'Advanced' },
      { name: 'Regression & Re-testing', level: 'Advanced' },
      { name: 'MS Excel for QA', level: 'Proficient' }
    ]
  },
  {
    title: 'API & Performance Testing',
    icon: 'Server',
    description: 'Validating backend service contracts, payload integrity, and load behavior.',
    skills: [
      { name: 'API Testing (Postman)', level: 'Proficient', tag: 'REST APIs' },
      { name: 'Performance Testing (JMeter)', level: 'Proficient', tag: 'Load & Stress' },
      { name: 'HTTP Status & Payload Validation', level: 'Proficient' },
      { name: 'Response Time Benchmarking', level: 'Proficient' }
    ]
  },
  {
    title: 'AI Tools & QA Acceleration',
    icon: 'Cpu',
    description: 'Leveraging next-generation AI agents to accelerate test generation and setup.',
    skills: [
      { name: 'Antigravity', level: 'Proficient', tag: 'AI Acceleration' },
      { name: 'Claude AI', level: 'Proficient', tag: 'Prompting & Code' },
      { name: 'ChatGPT', level: 'Proficient', tag: 'Test Scenarios' },
      { name: 'Gemini', level: 'Proficient', tag: 'Automation Scripts' }
    ]
  },
  {
    title: 'Database & Tools',
    icon: 'Database',
    description: 'Relational data verification, schema queries, and version control hygiene.',
    skills: [
      { name: 'SQL', level: 'Proficient', tag: 'Data Verification' },
      { name: 'Git', level: 'Advanced', tag: 'VCS' },
      { name: 'GitHub', level: 'Advanced', tag: 'Code Collaboration' }
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'orangehrm-playwright',
    title: 'OrangeHRM Test Automation Framework',
    subtitle: 'TypeScript, Playwright, Anti-Gravity & POM',
    category: 'automation',
    categoryLabel: 'Playwright & TypeScript',
    description: 'Engineered a comprehensive end-to-end test automation framework using Playwright and TypeScript, implementing the Page Object Model (POM) architecture for scalable UI testing.',
    bullets: [
      'Leveraged Anti-Gravity to accelerate test case generation, streamline framework setup, and automate end-to-end execution across key application workflows.',
      'Applied core OOP concepts—including encapsulation and modular class design—to build reusable page components, type-safe models, and maintainable test utilities.',
      'Ensured high test reliability and fast execution by utilizing Playwright\'s auto-waiting capabilities, custom assertions, and asynchronous execution patterns to handle dynamic web elements.',
      'Constructed modular test specifications covering alert handling, iframe switching, multiple browser tabs, dynamic sliders, file uploads, datepickers, and form filling.'
    ],
    technologies: ['TypeScript', 'Playwright', 'POM Architecture', 'Anti-Gravity', 'Node.js', 'E2E Testing'],
    keyHighlights: ['POM Architecture', 'Auto-Waiting Assertions', 'Anti-Gravity Accelerated', 'Zero Flaky Tests'],
    testCoverageCount: '25+ Automated Scenarios',
    githubUrl: 'https://github.com/sibil-sibii/Playwright_automation_project_01',
    repoName: 'sibil-sibii/Playwright_automation_project_01',
    isFeatured: true
  },
  {
    id: 'selenium-testng-practice',
    title: 'Selenium WebDriver Automation Practice Framework',
    subtitle: 'Java, TestNG, Maven & Page Object Model',
    category: 'automation',
    categoryLabel: 'Selenium & Java',
    description: 'Robust web application test suite developed with Java and Selenium WebDriver, featuring clean Base_Class encapsulation, dynamic configuration parsing, and Maven build tooling.',
    bullets: [
      'Automated web application testing using Java, Selenium WebDriver, TestNG, and Maven with Page Object Model.',
      'Engineered structured Base_Class and ConfigReader utilities for streamlined WebDriver lifecycle initialization and dynamic test properties.',
      'Automated and validated various web elements and user interactions including drag-and-drop, dynamic alerts, file uploads, double clicks, mouse hovers, and new browser tabs.',
      'Configured testng.xml execution suites for batch test runs, automated validations, and clear test execution reporting.'
    ],
    technologies: ['Core Java (OOPs)', 'Selenium WebDriver', 'TestNG', 'Maven', 'Page Object Model', 'ConfigReader'],
    keyHighlights: ['Modular Base_Class', 'Dynamic ConfigReader', 'XML Suite Orchestration', 'Complete Element Coverage'],
    testCoverageCount: '15+ Test Classes',
    githubUrl: 'https://github.com/sibil-sibii/Selenium_automation_practice_project_01',
    repoName: 'sibil-sibii/Selenium_automation_practice_project_01',
    isFeatured: true
  },
  {
    id: 'sauce-demo-manual',
    title: 'Sauce Demo (Swag Labs) E-Commerce QA Suite',
    subtitle: 'Manual Testing, BVA, Usability & Bug Documentation',
    category: 'manual',
    categoryLabel: 'Manual Testing',
    description: 'Comprehensive manual testing engagement on the Swag Labs e-commerce platform, ensuring functional reliability across the full customer checkout journey.',
    bullets: [
      'Analysed application requirements and designed and executed Test cases based on Functional, Performance, Usability and Compatibility Testing for Login, Product Listing, Cart and Checkout modules.',
      'Constructed exhaustive test matrices incorporating Boundary Value Analysis (BVA) and Equivalence Class Partitioning (ECP).',
      'Identified, logged, and documented defects with severity/priority metrics and step-by-step reproduction instructions.',
      'Conducted cross-browser and responsiveness checks to verify consistent layout and behavior across client devices.'
    ],
    technologies: ['Manual Testing', 'Test Case Design', 'JIRA', 'STLC & SDLC', 'Defect Life Cycle', 'BVA & ECP', 'Excel'],
    keyHighlights: ['Cart & Checkout Validation', 'Defect Severity Matrix', 'Cross-Browser Testing', 'Usability Evaluation'],
    testCoverageCount: '4 Core Funnel Modules',
    isFeatured: false
  },
  {
    id: 'obs-automobiles-manual',
    title: 'OBS Automobiles Application QA Suite',
    subtitle: 'SRS Analysis, Module Testing & Smoke Verification',
    category: 'manual',
    categoryLabel: 'Manual Testing',
    description: 'Systematic manual QA testing lifecycle for a multi-role automotive platform covering Customer, Service Provider, and Administrator portals.',
    bullets: [
      'Analysed SRS (Software Requirements Specification) document and prepared test cases for Customer, Service Provider, and Admin Module.',
      'Executed manual test cases for Login and Registration functionalities in the customer Module.',
      'Performed Smoke, Functional, and UI Testing to validate adherence to business requirements and UI specifications.',
      'Tracked and categorized defects to ensure fast resolution during sprint defect triage meetings.'
    ],
    technologies: ['SRS Document Analysis', 'Smoke Testing', 'UI Testing', 'Functional Testing', 'Agile Methodology', 'Test Scenarios'],
    keyHighlights: ['Multi-Role SRS Verification', 'Smoke Test Gateways', 'Customer Portal Validation', 'Agile QA Workflow'],
    testCoverageCount: '3 System Modules',
    isFeatured: false
  },
  {
    id: 'portfolio-source-repo',
    title: 'Personal QA Portfolio Website Repository',
    subtitle: 'Vite, React, TypeScript & Modern UI/UX',
    category: 'portfolio',
    categoryLabel: 'Web Portfolio',
    description: 'Source code repository for this minimal, aesthetic personal portfolio website designed for showcasing test automation engineering and QA expertise.',
    bullets: [
      'Developed with React, TypeScript, and a high-performance Vanilla CSS design system.',
      'Engineered with dark/light mode, responsive layouts, interactive resume modal, and PDF generation.',
      'Configured for automated continuous deployment to Vercel/Netlify with 100% lighthouse performance.'
    ],
    technologies: ['React 18', 'TypeScript', 'Vite', 'Modern CSS System', 'Vercel'],
    keyHighlights: ['Zero-Bloat UI', 'Dark & Light Themes', 'Interactive PDF Viewer', 'Mobile Responsive'],
    githubUrl: 'https://github.com/alan-chacko796/Sibil-Sivadasan-Portfolio',
    repoName: 'alan-chacko796/Sibil-Sivadasan-Portfolio',
    isFeatured: false
  }
];

export const educationAndTraining: TimelineItem[] = [
  {
    period: '2023 – 2026',
    title: 'Bachelor of Computer Application (BCA)',
    institution: 'VLB Janakiammal College of Arts and Science',
    location: 'Coimbatore / Palakkad Region',
    scoreOrType: 'CGPA: 6.93 / 10',
    description: 'Foundational computer science education covering software development life cycle (SDLC), object-oriented programming, database management systems (SQL), and web technologies.',
    highlights: [
      'Graduated with strong foundations in Computer Science principles, algorithms, and databases.',
      'Coursework: Object-Oriented Programming, Database Systems (SQL), Software Engineering, Web Technologies.',
      'Developed analytical problem-solving and software quality mindset.'
    ],
    iconType: 'education'
  },
  {
    period: '08-04-2026 – 08-09-2026',
    title: '5-Month Offline Software Testing Course',
    institution: 'Zoople Technologies',
    location: 'Kochi, Kerala',
    scoreOrType: 'Specialized QA Certification',
    description: 'Rigorous 5-month immersive offline testing program focusing on real-world test automation frameworks, manual test methodologies, API validation, performance testing, and defect governance.',
    highlights: [
      'Mastered Playwright with TypeScript and Selenium WebDriver with Java utilizing Page Object Model.',
      'Hands-on experience in TestNG, Maven, JIRA bug tracking, Agile Scrum ceremonies, and SQL queries.',
      'Executed end-to-end API testing using Postman and performance benchmarking using Apache JMeter.',
      'Engineered live automation projects and authored industry-standard test scenario documentation.'
    ],
    iconType: 'training'
  }
];
