// ═══════════════════════════════════════════════════════════════
//  CONTENT.JS — SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
//
//  Everything on the website is defined here. To update the site,
//  edit this file only — no component code changes needed.
//
//  🔶 = PLACEHOLDER: replace with your real content
// ═══════════════════════════════════════════════════════════════

export const profile = {
  siteName: 'ally.dev',
  fullName: 'Mark Christian Allyson C. Federio',
  nickname: 'Ally',
  initials: 'AL',
  tagline:
    'Passionate about building software, exploring artificial intelligence, cloud technologies, and creating solutions that make a meaningful impact.',
  roles: [
    'Computer Science Student',
    'Developer',
    'AI Enthusiast',
    'Cloud Explorer',
    'Future Software Engineer',
  ],
  location: 'Naga City, Philippines',
  email: 'allysonfederio0311@gmail.com',
  university: 'Ateneo de Naga University',
  degree: 'BS Computer Science',
  status: 'Open to Internships & Opportunities',

  // 🔶 PLACEHOLDER — drop your real CV at public/cv/cv.pdf, this link will then work
  cvUrl: '/cv/cv.pdf',

  // PHOTO — background-removed, black & white cutout at public/me-cutout.png
  //         (To swap: drop a new transparent PNG here with the same name.)
  photo: '/me-cutout.png',
};

export const about = {
  heading: 'Computer Science Student & Developer',
  paragraphs: [
    'I am a Computer Science student at Ateneo de Naga University with a strong interest in software development, artificial intelligence, cloud computing, and system administration. I enjoy learning emerging technologies and turning ideas into practical, working solutions.',
    'Alongside my studies, I work as a freelance programming tutor and developer — teaching students abroad and helping clients with software tasks, automation, and technology consulting. I am actively seeking internship opportunities where I can contribute, grow, and build with innovative teams.',
  ],
  identities: [
    { icon: 'graduation', label: 'Computer Science Student' },
    { icon: 'teach', label: 'Freelance Programming Tutor' },
    { icon: 'briefcase', label: 'Upwork Freelancer' },
    { icon: 'laptop', label: 'OnlineJobs.ph Freelancer' },
  ],
};

export const skills = [
  {
    category: 'Programming Languages',
    icon: 'code',
    items: ['Java', 'Python', 'C++', 'C', 'JavaScript'],
  },
  {
    category: 'Web Development',
    icon: 'globe',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'AI & Data',
    icon: 'brain',
    items: ['Artificial Intelligence', 'Machine Learning', 'NLP'],
  },
  {
    category: 'Infrastructure',
    icon: 'server',
    items: ['Cloud Computing', 'System Administration'],
  },
];

// ═══════════════════════════════════════════════════════════════
//  🔶 PROJECTS — ALL FOUR ARE PLACEHOLDERS
//  To replace one: edit title, description, tags, github, demo.
//  For a real image: set image to '/projects/your-image.png'
//  (put the file in public/projects/) — leave null for the
//  generated placeholder art.
// ═══════════════════════════════════════════════════════════════
export const projects = [
  {
    id: 1,
    title: 'Project One',               // 🔶 PLACEHOLDER title
    description:
      'Placeholder description — a short two-line summary of what this project does, the problem it solves, and what makes it interesting.', // 🔶 PLACEHOLDER
    tags: ['Python', 'JavaScript'],      // 🔶 PLACEHOLDER tech stack
    image: null,                         // 🔶 PLACEHOLDER image (null = generated art)
    accent: '#3B82F6',
    github: '#',                         // 🔶 PLACEHOLDER — your GitHub repo URL
    demo: '#',                           // 🔶 PLACEHOLDER — your live demo URL
  },
  {
    id: 2,
    title: 'Project Two',                // 🔶 PLACEHOLDER title
    description:
      'Placeholder description — a short two-line summary of what this project does, the problem it solves, and what makes it interesting.', // 🔶 PLACEHOLDER
    tags: ['Java', 'AI'],                // 🔶 PLACEHOLDER tech stack
    image: null,                         // 🔶 PLACEHOLDER image
    accent: '#8B5CF6',
    github: '#',                         // 🔶 PLACEHOLDER
    demo: '#',                           // 🔶 PLACEHOLDER
  },
  {
    id: 3,
    title: 'Project Three',              // 🔶 PLACEHOLDER title
    description:
      'Placeholder description — a short two-line summary of what this project does, the problem it solves, and what makes it interesting.', // 🔶 PLACEHOLDER
    tags: ['C++', 'Machine Learning'],   // 🔶 PLACEHOLDER tech stack
    image: null,                         // 🔶 PLACEHOLDER image
    accent: '#22D3EE',
    github: '#',                         // 🔶 PLACEHOLDER
    demo: '#',                           // 🔶 PLACEHOLDER
  },
  {
    id: 4,
    title: 'Project Four',               // 🔶 PLACEHOLDER title
    description:
      'Placeholder description — a short two-line summary of what this project does, the problem it solves, and what makes it interesting.', // 🔶 PLACEHOLDER
    tags: ['Cloud', 'Automation'],       // 🔶 PLACEHOLDER tech stack
    image: null,                         // 🔶 PLACEHOLDER image
    accent: '#F472B6',
    github: '#',                         // 🔶 PLACEHOLDER
    demo: '#',                           // 🔶 PLACEHOLDER
  },
];

export const education = [
  {
    school: 'Ateneo de Naga University',
    program: 'Bachelor of Science in Computer Science',
    period: 'Present',
    icon: 'graduation',
    description:
      'Pursuing a degree in Computer Science with a focus on software engineering, artificial intelligence, cloud computing, and system design.',
    tags: ['Software Engineering', 'Artificial Intelligence', 'Cloud Computing'],
  },
  {
    school: 'University of Nueva Caceres',
    program: 'Senior High School',
    period: 'Completed',
    icon: 'school',
    description:
      'Completed Senior High School, building a strong foundation in mathematics, sciences, and introductory programming.',
    tags: ['Mathematics', 'Sciences'],
  },
  {
    school: 'University of Nueva Caceres',
    program: 'High School',
    period: 'Completed',
    icon: 'book',
    description:
      'Completed Junior High School with strong academic performance, developing critical thinking and foundational technical skills.',
    tags: ['Academics', 'Critical Thinking'],
  },
];

export const experience = [
  {
    role: 'Freelance Programming Tutor',
    org: 'Remote — Dubai-based Schools',
    period: 'Ongoing',
    active: true,
    icon: 'teach',
    description:
      'Provide personalized programming instruction to students from Dubai-based international schools, tailoring lessons to individual learning styles and academic requirements.',
    highlights: [
      'C++ fundamentals and object-oriented programming',
      'Python scripting and data processing',
      'Artificial Intelligence concepts and applications',
      'Machine Learning theory and practice',
      'Natural Language Processing techniques',
    ],
    tags: ['C++', 'Python', 'AI', 'ML', 'NLP', 'Teaching'],
  },
  {
    role: 'Freelance Developer',
    org: 'Upwork & OnlineJobs.ph',
    period: 'Ongoing',
    active: true,
    icon: 'laptop',
    description:
      'Work with clients on software-related tasks, programming assistance, automation projects, and technology consulting while continuously sharpening technical and communication skills.',
    highlights: [
      'Programming and software assistance for remote clients',
      'Automation scripts and tools for client workflows',
      'Technology consulting and project-based support',
      'Professional client communication and delivery',
    ],
    tags: ['Upwork', 'OnlineJobs.ph', 'Python', 'JavaScript', 'Automation'],
  },
];

// ═══════════════════════════════════════════════════════════════
//  SOCIAL LINKS — all real ✓
//  Email opens Gmail compose addressed to Ally.
// ═══════════════════════════════════════════════════════════════
export const socials = [
  { id: 'github',    label: 'GitHub',    url: 'https://github.com/Blangkooo' },
  { id: 'facebook',  label: 'Facebook',  url: 'https://www.facebook.com/AllysonFederio/' },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/allyfederiooo/' },
  { id: 'linkedin',  label: 'LinkedIn',  url: 'https://www.linkedin.com/in/mark-allyson-federio/' },
  { id: 'email',     label: 'Email',     url: 'https://mail.google.com/mail/?view=cm&fs=1&to=allysonfederio0311@gmail.com' },
];

export const nav = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'education',  label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
];
