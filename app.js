/**
 * SkillBridge | Academia-Industry Collaboration Platform
 * Smart India Hackathon Prototype (SIH 2026)
 * Single Page Application & Reactive State Engine
 */

// ============================================================================
// 1. DATA STATE & STORE
// ============================================================================

const STATE = {
  activePage: 'page-landing',
  activeRole: 'student',
  currentTab: 'overview',
  
  userProfiles: {
    student: {
      name: 'Priya Sharma',
      roleTitle: 'B.Tech CSE · Semester 6',
      college: 'NIT Surathkal',
      cgpa: 8.85,
      avatarBg: '#4F46E5',
      initials: 'PS',
      profileCompletion: 88,
      targetRole: 'Full Stack & AI Engineer'
    },
    college: {
      name: 'Dr. Rajesh Rao',
      roleTitle: 'Head of Placements (TPO)',
      college: 'National Institute of Technology Karnataka',
      avatarBg: '#0EA5E9',
      initials: 'RR',
      dept: 'Placement & Industry Relations Cell'
    },
    industry: {
      name: 'Neha Sen',
      roleTitle: 'University Talent Lead',
      company: 'Google India & APAC',
      avatarBg: '#10B981',
      initials: 'NS',
      dept: 'Engineering Recruitment'
    },
    mentor: {
      name: 'Anand Verma',
      roleTitle: 'Principal Cloud Architect',
      company: 'Microsoft (Ex-Amazon)',
      avatarBg: '#8B5CF6',
      initials: 'AV',
      rating: 4.95,
      totalMentees: 42
    }
  },

  skills: [
    { id: 'sk-1', name: 'Python & FastApi', level: 92, category: 'Backend & Data', verified: true, testsPassed: 4 },
    { id: 'sk-2', name: 'React.js & TypeScript', level: 85, category: 'Frontend', verified: true, testsPassed: 3 },
    { id: 'sk-3', name: 'Data Structures & Algorithms', level: 78, category: 'Core CS', verified: true, testsPassed: 5 },
    { id: 'sk-4', name: 'Machine Learning & PyTorch', level: 88, category: 'AI/ML', verified: true, testsPassed: 3 },
    { id: 'sk-5', name: 'PostgreSQL & MongoDB', level: 80, category: 'Databases', verified: true, testsPassed: 2 },
    { id: 'sk-6', name: 'System Design & Distributed Systems', level: 68, category: 'Architecture', verified: false, testsPassed: 1 },
    { id: 'sk-7', name: 'Docker & Kubernetes', level: 72, category: 'DevOps', verified: true, testsPassed: 2 },
    { id: 'sk-8', name: 'Cloud (AWS / GCP)', level: 75, category: 'Cloud', verified: true, testsPassed: 2 }
  ],

  internships: [
    {
      id: 'job-1',
      title: 'Software Engineering Intern (AI/ML)',
      company: 'Google India',
      logoBg: '#4285F4',
      logoText: 'G',
      location: 'Bengaluru / Hybrid',
      stipend: '₹1,15,000/mo',
      stipendNum: 115000,
      duration: '6 Months',
      type: 'Hybrid',
      domain: 'AI/ML',
      skillsReq: ['Python & FastApi', 'Machine Learning & PyTorch', 'Data Structures & Algorithms'],
      matchScore: 94,
      openings: 8,
      postedDate: '2 days ago',
      deadline: '28 Aug 2026',
      description: 'Work alongside DeepMind & Core AI teams to design scalable ML pipelines and generative AI microservices on Google Cloud Platform.'
    },
    {
      id: 'job-2',
      title: 'Full Stack Product Engineer Intern',
      company: 'Swiggy',
      logoBg: '#FC8019',
      logoText: 'S',
      location: 'Bengaluru / Onsite',
      stipend: '₹60,000/mo',
      stipendNum: 60000,
      duration: '3 Months',
      type: 'Onsite',
      domain: 'Full Stack',
      skillsReq: ['React.js & TypeScript', 'PostgreSQL & MongoDB', 'System Design & Distributed Systems'],
      matchScore: 89,
      openings: 12,
      postedDate: '1 day ago',
      deadline: '02 Sep 2026',
      description: 'Build high-throughput consumer frontend features and high-concurrency order dispatching services handling 2M+ orders daily.'
    },
    {
      id: 'job-3',
      title: 'Cloud Infrastructure & SRE Intern',
      company: 'Razorpay',
      logoBg: '#0C2340',
      logoText: 'R',
      location: 'Bengaluru / Remote',
      stipend: '₹55,000/mo',
      stipendNum: 55000,
      duration: '6 Months',
      type: 'Remote',
      domain: 'Cloud',
      skillsReq: ['Docker & Kubernetes', 'Cloud (AWS / GCP)', 'System Design & Distributed Systems'],
      matchScore: 82,
      openings: 5,
      postedDate: '3 days ago',
      deadline: '05 Sep 2026',
      description: 'Architect multi-region payment gateway resilience, Kubernetes cluster scaling, and zero-downtime microservice deployments.'
    },
    {
      id: 'job-4',
      title: 'Frontend Platform Engineer Intern',
      company: 'CRED',
      logoBg: '#1A1A1A',
      logoText: 'C',
      location: 'Bengaluru / Onsite',
      stipend: '₹75,000/mo',
      stipendNum: 75000,
      duration: '6 Months',
      type: 'Onsite',
      domain: 'Frontend',
      skillsReq: ['React.js & TypeScript', 'Data Structures & Algorithms'],
      matchScore: 91,
      openings: 4,
      postedDate: 'Just now',
      deadline: '10 Sep 2026',
      description: 'Craft buttery smooth 60fps luxury design interfaces with modern WebGL, micro-frontend modules, and low-latency interaction loops.'
    },
    {
      id: 'job-5',
      title: 'Autonomous Robotics & Embedded Systems Intern',
      company: 'Ather Energy',
      logoBg: '#00D290',
      logoText: 'A',
      location: 'Hosur / Onsite',
      stipend: '₹45,000/mo',
      stipendNum: 45000,
      duration: '6 Months',
      type: 'Onsite',
      domain: 'Embedded',
      skillsReq: ['Python & FastApi', 'Data Structures & Algorithms'],
      matchScore: 78,
      openings: 6,
      postedDate: '4 days ago',
      deadline: '15 Sep 2026',
      description: 'Develop real-time CAN bus telemetry, smart EV dashboard firmware, and predictive battery management algorithms.'
    },
    {
      id: 'job-6',
      title: 'Generative AI & LLM Systems Intern',
      company: 'Microsoft India',
      logoBg: '#00A4EF',
      logoText: 'M',
      location: 'Hyderabad / Hybrid',
      stipend: '₹1,25,000/mo',
      stipendNum: 125000,
      duration: '6 Months',
      type: 'Hybrid',
      domain: 'AI/ML',
      skillsReq: ['Python & FastApi', 'Machine Learning & PyTorch', 'System Design & Distributed Systems'],
      matchScore: 92,
      openings: 10,
      postedDate: '5 days ago',
      deadline: '30 Aug 2026',
      description: 'Build enterprise RAG pipelines, fine-tune open-weight models, and build Copilot intelligence integrations.'
    }
  ],

  applications: [
    {
      id: 'app-101',
      jobId: 'job-1',
      jobTitle: 'Software Engineering Intern (AI/ML)',
      company: 'Google India',
      appliedOn: '24 Aug 2026',
      currentStep: 3,
      statusText: 'Technical Interview 2 Scheduled',
      statusType: 'pill-sky',
      interviewDate: 'Tomorrow, 3:30 PM IST',
      notes: 'Reviewed PyTorch portfolio & HackerRank test passed (98/100).'
    },
    {
      id: 'app-102',
      jobId: 'job-2',
      jobTitle: 'Full Stack Product Engineer Intern',
      company: 'Swiggy',
      appliedOn: '20 Aug 2026',
      currentStep: 2,
      statusText: 'Skill Assessment Review',
      statusType: 'pill-indigo',
      interviewDate: 'Pending Review',
      notes: 'Assignment submitted: React high-concurrency order tracker.'
    },
    {
      id: 'app-103',
      jobId: 'job-6',
      jobTitle: 'Generative AI & LLM Systems Intern',
      company: 'Microsoft India',
      appliedOn: '18 Aug 2026',
      currentStep: 4,
      statusText: 'Offer Letter Rollout Pending',
      statusType: 'pill-emerald',
      interviewDate: 'Completed All Rounds',
      notes: 'Final round cleared with Principal Director of AI.'
    }
  ],

  mentors: [
    {
      id: 'm-1',
      name: 'Anand Verma',
      company: 'Principal Cloud Architect @ Microsoft',
      avatarBg: '#8B5CF6',
      initials: 'AV',
      domain: 'System Design & Cloud',
      rating: 4.95,
      reviews: 64,
      availableSlots: '3 slots open this week',
      bio: 'Ex-Amazon, 14+ years experience designing ultra-scalable distributed systems. Mentored 40+ students into FAANG roles.'
    },
    {
      id: 'm-2',
      name: 'Dr. Shalini Mukhopadhyay',
      company: 'Research Scientist @ Google DeepMind',
      avatarBg: '#EC4899',
      initials: 'SM',
      domain: 'Machine Learning & LLMs',
      rating: 4.98,
      reviews: 82,
      availableSlots: '2 slots open this week',
      bio: 'PhD Stanford. Specializes in Transformer architectures, prompt distillation, and academic-to-industry research transitions.'
    },
    {
      id: 'm-3',
      name: 'Rohan Mehra',
      company: 'Engineering Manager @ CRED',
      avatarBg: '#10B981',
      initials: 'RM',
      domain: 'Frontend & System Architecture',
      rating: 4.90,
      reviews: 47,
      availableSlots: '5 slots open this week',
      bio: 'Passionate about Web Performance, Clean Code craftsmanship, and behavioral interview coaching for high-growth tech startups.'
    }
  ],

  quizzes: {
    'System Design & Distributed Systems': [
      {
        q: 'Which database caching strategy writes data to both the cache and underlying database simultaneously?',
        options: ['Write-Through Cache', 'Write-Back Cache', 'Write-Around Cache', 'Read-Through Cache'],
        correct: 0,
        explanation: 'In Write-Through caching, data is simultaneously written to both cache and storage, ensuring data consistency.'
      },
      {
        q: 'What is the primary benefit of using Consistent Hashing in distributed key-value stores?',
        options: ['Guarantees ACID transactions across nodes', 'Minimizes key redistribution when nodes join or leave', 'Eliminates network latency between replicas', 'Compresses key index trees into RAM'],
        correct: 1,
        explanation: 'Consistent hashing maps keys and servers onto a ring, ensuring only K/N keys need remapping when a node changes.'
      },
      {
        q: 'In the CAP theorem, what does Partition Tolerance guarantee?',
        options: ['The system continues operating despite dropped or delayed network messages', 'Every read receives the most recent write', 'All nodes have the exact same storage capacity', 'Response times stay strictly under 10ms'],
        correct: 0,
        explanation: 'Partition tolerance means the cluster continues functioning even when communication between nodes is broken or partitioned.'
      }
    ],
    'Machine Learning & PyTorch': [
      {
        q: 'What does gradient clipping solve during deep neural network training?',
        options: ['Vanishing gradients', 'Exploding gradients', 'Overfitting on validation set', 'Underfitting on training data'],
        correct: 1,
        explanation: 'Gradient clipping restricts gradient norms to a maximum threshold, preventing exploding gradients in recurrent & deep networks.'
      },
      {
        q: 'Which attention mechanism allows Transformers to compute representations in parallel during training?',
        options: ['Multi-Head Self-Attention', 'Recurrent Hidden State Attention', 'Static Convolutional Filter', 'Greedy Search Decoder'],
        correct: 0,
        explanation: 'Multi-Head Self-Attention calculates pairwise token affinities across sequence dimensions in parallel via matrix multiplication.'
      }
    ]
  },

  notifications: [
    {
      id: 'notif-1',
      icon: '🎉',
      title: 'Interview Shortlist: Google India',
      desc: 'You have been shortlisted for Round 2: AI Systems Architecture on 26 Aug.',
      time: '15 mins ago'
    },
    {
      id: 'notif-2',
      icon: '📊',
      title: 'Skill Matrix Auto-Updated',
      desc: 'Your Python proficiency score increased to 92% after HackerRank test verification.',
      time: '3 hours ago'
    },
    {
      id: 'notif-3',
      icon: '💡',
      title: 'New Recommended Role Matching 94%',
      desc: 'Microsoft posted: Generative AI & LLM Systems Intern (Hyderabad).',
      time: 'Yesterday'
    }
  ],

  // Active chart instances to prevent canvas memory leaks
  chartInstances: {}
};

// ============================================================================
// 2. INITIALIZATION & ROUTING
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLandingPage();
  initRoleTabs();
});

function navigateTo(pageId) {
  STATE.activePage = pageId;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goLanding() {
  navigateTo('page-landing');
  renderLandingCharts();
}

function goLogin(role = 'student') {
  STATE.activeRole = role;
  updateRoleTabUI(role);
  navigateTo('page-login');
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ============================================================================
// 3. LANDING PAGE RENDERERS & CHARTS
// ============================================================================

function initLandingPage() {
  // 1. Stats Bar
  const statsBar = document.getElementById('statsBar');
  if (statsBar) {
    const statsData = [
      { num: '14,250+', label: 'Students Skill-Mapped' },
      { num: '380+', label: 'Verified Industry Partners' },
      { num: '94.2%', label: 'Placement Skill-Fit Rate' },
      { num: '₹14.8 LPA', label: 'Avg Verified CTC Match' }
    ];
    statsBar.innerHTML = statsData.map(s => `
      <div class="stat-item">
        <div class="stat-num">${s.num}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }

  // 2. How It Works
  const howGrid = document.getElementById('howGrid');
  if (howGrid) {
    const steps = [
      { step: 'STEP 01', title: 'Live Skill Profiling', desc: 'Standardized skill assessments, live repo parsing, and micro-credential verification establish an authentic baseline.', icon: '🎯' },
      { step: 'STEP 02', title: 'AI Match Engine', desc: 'Industry job descriptions are vectorized and matched against candidate proficiency scores with multidimensional gap metrics.', icon: '⚡' },
      { step: 'STEP 03', title: 'Curriculum & Gap Fix', desc: 'Colleges and students receive targeted gap remediation roadmaps, bridge courses, and industry-sponsored problem statements.', icon: '📈' },
      { step: 'STEP 04', title: 'Verified Outcomes', desc: 'Direct interview fast-tracking, high-conversion internships, and cryptographically verifiable placement credentials.', icon: '🚀' }
    ];
    howGrid.innerHTML = steps.map((s, idx) => `
      <div class="how-card">
        <div class="how-step">${s.step}</div>
        <h4>${s.icon} ${s.title}</h4>
        <p>${s.desc}</p>
        ${idx < 3 ? '<span class="how-arrow">→</span>' : ''}
      </div>
    `).join('');
  }

  // 3. Hero Skill Bars (Priya Sharma Demo)
  renderHeroSkillBars();

  // 4. Landing Internships
  const landingInternships = document.getElementById('landingInternships');
  if (landingInternships) {
    const featured = STATE.internships.slice(0, 3);
    landingInternships.innerHTML = featured.map(renderInternshipCardMarkup).join('');
  }

  // 5. Industry Collaboration Grid
  const collabGrid = document.getElementById('collabGrid');
  if (collabGrid) {
    const features = [
      {
        icon: '📚',
        title: 'Curriculum Co-Design',
        desc: 'Industry leaders review university syllabi quarterly to align academic theory with production tech stacks.',
        bullets: ['Direct syllabus revision workflows', 'Industry-vetted elective modules', 'Real-time stack relevancy metrics']
      },
      {
        icon: '💼',
        title: 'Live Industry Problem Bank',
        desc: 'Companies publish unclassified R&D challenges for college hackathons, capstones, and sponsored labs.',
        bullets: ['Real production telemetry data', 'Direct internship conversions', 'Faculty joint mentorship']
      },
      {
        icon: '🏆',
        title: 'Verified Skill Badges',
        desc: 'Zero-resume spam. Recruiters search candidates by cryptographically verified coding and system benchmarks.',
        bullets: ['Automated code execution audits', 'Peer-reviewed project scores', 'Zero recruiter screening fatigue']
      },
      {
        icon: '🎓',
        title: 'Faculty Upskilling Immersions',
        desc: 'Professors attend industry shadow sabbaticals and train on enterprise cloud, AI, and DevOps tooling.',
        bullets: ['Annual tech immersion tracks', 'Joint research grant pipelines', 'Direct campus lab sponsorship']
      },
      {
        icon: '📊',
        title: 'Placement Readiness Index',
        desc: 'TPO dashboards track department-wise skill deficits against live corporate JD vector shifts.',
        bullets: ['Automated cohort health reports', 'Mock interview readiness scores', 'Exportable AICTE compliance data']
      },
      {
        icon: '🤝',
        title: 'Digital MoUs & Hiring Drives',
        desc: 'Execute corporate MoUs, track mutual quotas, and organize automated multi-college recruitment pools.',
        bullets: ['Digitized MoU lifecycle tracking', 'Pooled campus recruitment drives', 'Instant offer letter validation']
      }
    ];

    collabGrid.innerHTML = features.map(f => `
      <div class="feature-card">
        <div class="feature-icon">${f.icon}</div>
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
        <ul>
          ${f.bullets.map(b => `<li><span>✓</span> ${b}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // 6. Success Stories
  const storyGrid = document.getElementById('storyGrid');
  if (storyGrid) {
    const stories = [
      {
        quote: "“SkillBridge eliminated 80% of our recruitment screening time. Instead of reading 1,000 PDFs, we filtered candidates by verified PyTorch scores and hired 6 stellar engineers.”",
        name: "Neha Sen",
        role: "University Talent Lead, Google India",
        avatar: "NS",
        bg: "#4285F4"
      },
      {
        quote: "“Our college saw a 42% jump in Tier-1 product company placements. The live skill gap heatmap showed our students were missing Docker and FastAPI, which we quickly patched.”",
        name: "Dr. Rajesh Rao",
        role: "TPO Head, NIT Surathkal",
        avatar: "RR",
        bg: "#0EA5E9"
      },
      {
        quote: "“I bridged my gap in Distributed Systems in 3 weeks through the recommended learning pathway, took the verified quiz, and landed my dream internship at Microsoft!”",
        name: "Priya Sharma",
        role: "B.Tech CSE, Placed at Microsoft",
        avatar: "PS",
        bg: "#10B981"
      }
    ];

    storyGrid.innerHTML = stories.map(s => `
      <div class="story-card">
        <div class="story-quote">${s.quote}</div>
        <div class="story-person">
          <div class="avatar" style="background:${s.bg};">${s.avatar}</div>
          <div>
            <div class="story-name">${s.name}</div>
            <div class="story-role">${s.role}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Charts
  setTimeout(renderLandingCharts, 100);
}

function renderHeroSkillBars() {
  const container = document.getElementById('heroSkillBars');
  if (!container) return;
  const demoSkills = STATE.skills.slice(0, 5);
  container.innerHTML = demoSkills.map(sk => `
    <div class="skillbar-row">
      <div class="sname">${sk.name.split('&')[0].trim()}</div>
      <div class="skillbar-track">
        <div class="skillbar-fill" style="width:${sk.level}%;"></div>
      </div>
      <div class="skillbar-pct">${sk.level}%</div>
    </div>
  `).join('');
}

function renderLandingCharts() {
  if (typeof Chart === 'undefined') return;

  // 1. Skill Gap Chart
  const gapCtx = document.getElementById('landingGapChart');
  if (gapCtx) {
    if (STATE.chartInstances.landingGap) {
      STATE.chartInstances.landingGap.destroy();
    }
    STATE.chartInstances.landingGap = new Chart(gapCtx, {
      type: 'bar',
      data: {
        labels: ['AI / ML', 'Cloud Arch', 'Full Stack', 'Cyber Sec', 'DevOps', 'System Design'],
        datasets: [
          {
            label: 'Industry Hiring Demand (%)',
            data: [94, 88, 92, 85, 82, 90],
            backgroundColor: '#1E1B4B',
            borderRadius: 6
          },
          {
            label: 'Student Supply Readiness (%)',
            data: [72, 54, 86, 48, 58, 64],
            backgroundColor: '#0EA5E9',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { family: 'Inter', size: 12 } } },
          tooltip: {
            callbacks: {
              afterBody: function(context) {
                const demand = context[0]?.datasetIndex === 0 ? context[0].raw : context[1]?.raw;
                const supply = context[0]?.datasetIndex === 1 ? context[0].raw : context[1]?.raw;
                if (demand && supply) {
                  return `Gap Deficit: ${Math.abs(demand - supply)}%`;
                }
              }
            }
          }
        },
        scales: {
          y: { min: 0, max: 100, ticks: { callback: v => v + '%' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  // 2. Placement Snapshot Chart
  const placementCtx = document.getElementById('landingPlacementChart');
  if (placementCtx) {
    if (STATE.chartInstances.landingPlacement) {
      STATE.chartInstances.landingPlacement.destroy();
    }
    STATE.chartInstances.landingPlacement = new Chart(placementCtx, {
      type: 'doughnut',
      data: {
        labels: ['Tier-1 Tech Offers', 'Paid Internships Active', 'Ongoing Final Rounds', 'Higher Ed / R&D'],
        datasets: [{
          data: [42, 34, 16, 8],
          backgroundColor: ['#4F46E5', '#0EA5E9', '#F59E0B', '#10B981'],
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { font: { family: 'Inter', size: 12 }, boxWidth: 14 } }
        },
        cutout: '68%'
      }
    });
  }
}

// ============================================================================
// 4. AUTHENTICATION & ROLE SWITCHER
// ============================================================================

const ROLE_METADATA = {
  student: {
    label: 'Student',
    title: 'Skills, mapped. Careers, matched.',
    desc: 'Sign in to view your live skill profile, personalized AI internship matching, and automated roadmap.',
    sampleEmail: 'priya.sharma@nitk.edu.in'
  },
  college: {
    label: 'College / TPO',
    title: 'Campus placement intelligence in one place.',
    desc: 'Access real-time skill readiness heatmaps, corporate MoU tracking, and student cohort placement tracking.',
    sampleEmail: 'tpo.head@nitk.ac.in'
  },
  industry: {
    label: 'Industry Recruiter',
    title: 'Hire verified tech talent with zero noise.',
    desc: 'Filter candidates by verified assessment scores, post internships, and manage direct candidate interview pipelines.',
    sampleEmail: 'neha.sen@google.com'
  },
  mentor: {
    label: 'Industry Mentor',
    title: 'Guide the next generation of engineers.',
    desc: 'Accept 1:1 mentorship bookings, audit student code repositories, and endorse candidate skill badges.',
    sampleEmail: 'anand.verma@microsoft.com'
  }
};

function initRoleTabs() {
  const container = document.getElementById('roleTabs');
  if (!container) return;

  const roles = [
    { key: 'student', label: '🎓 Student' },
    { key: 'college', label: '🏛 College' },
    { key: 'industry', label: '🏢 Industry' },
    { key: 'mentor', label: '💼 Mentor' }
  ];

  container.innerHTML = roles.map(r => `
    <div class="role-tab ${r.key === STATE.activeRole ? 'active' : ''}" onclick="selectRole('${r.key}')">${r.label}</div>
  `).join('');

  updateRoleTabUI(STATE.activeRole);
}

function selectRole(role) {
  STATE.activeRole = role;
  updateRoleTabUI(role);
}

function updateRoleTabUI(role) {
  document.querySelectorAll('.role-tab').forEach((tab, i) => {
    const roles = ['student', 'college', 'industry', 'mentor'];
    if (roles[i] === role) tab.classList.add('active');
    else tab.classList.remove('active');
  });

  const meta = ROLE_METADATA[role] || ROLE_METADATA.student;
  const titleEl = document.getElementById('loginSideTitle');
  const descEl = document.getElementById('loginSideDesc');
  const labelEl = document.getElementById('loginRoleLabel');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');

  if (titleEl) titleEl.innerText = meta.title;
  if (descEl) descEl.innerText = meta.desc;
  if (labelEl) labelEl.innerText = meta.label;
  if (emailInput) emailInput.value = meta.sampleEmail;
  if (passwordInput) passwordInput.value = 'demo2026pass';
}

function submitLogin() {
  showToast(`Signed in successfully as ${ROLE_METADATA[STATE.activeRole].label}!`, 'success');
  navigateTo('page-dashboard');
  renderDashboard(STATE.activeRole, 'overview');
}

function logout() {
  showToast('Logged out successfully.', 'info');
  goLanding();
}

// ============================================================================
// 5. DASHBOARD MASTER CONTROLLER
// ============================================================================

function renderDashboard(role, tab = 'overview') {
  STATE.activeRole = role;
  STATE.currentTab = tab;

  renderSidebar(role, tab);
  renderDashboardContent(role, tab);
}

function switchDashboardTab(tab) {
  STATE.currentTab = tab;
  renderSidebar(STATE.activeRole, tab);
  renderDashboardContent(STATE.activeRole, tab);
}

function renderSidebar(role, activeTab) {
  const sb = document.getElementById('sidebar');
  if (!sb) return;

  const profile = STATE.userProfiles[role];

  let navItems = [];

  if (role === 'student') {
    navItems = [
      { id: 'overview', label: 'Overview & Matrix', icon: '📊' },
      { id: 'skills', label: 'My Skill Matrix & Tests', icon: '🎯' },
      { id: 'internships', label: 'AI Internship Matcher', icon: '💼' },
      { id: 'roadmap', label: 'Gap Closer Roadmap', icon: '🚀' },
      { id: 'mentors', label: 'Mentorship Hub', icon: '🤝' },
      { id: 'applications', label: 'Applications & Status', icon: '📋' }
    ];
  } else if (role === 'college') {
    navItems = [
      { id: 'overview', label: 'Campus Placement Center', icon: '🏛' },
      { id: 'gap-analytics', label: 'Batch Skill Gap Heatmap', icon: '🔥' },
      { id: 'student-roster', label: 'Student Cohort Roster', icon: '👥' },
      { id: 'mous', label: 'Corporate MoUs & Drives', icon: '🤝' },
      { id: 'curriculum', label: 'Curriculum Co-Design', icon: '📚' }
    ];
  } else if (role === 'industry') {
    navItems = [
      { id: 'overview', label: 'Recruiter Hub', icon: '🏢' },
      { id: 'manage-jobs', label: 'Manage Internships', icon: '📝' },
      { id: 'talent-search', label: 'Verified Talent Search', icon: '🔍' },
      { id: 'pipeline', label: 'Applicant Pipeline', icon: '👥' },
      { id: 'hackathons', label: 'Campus MoUs & Challenges', icon: '🏆' }
    ];
  } else if (role === 'mentor') {
    navItems = [
      { id: 'overview', label: 'Mentor Workspace', icon: '💼' },
      { id: 'sessions', label: '1:1 Session Bookings', icon: '📅' },
      { id: 'audits', label: 'Code & Resume Audits', icon: '🔍' },
      { id: 'endorsements', label: 'Skill Endorsements', icon: '⭐' }
    ];
  }

  sb.innerHTML = `
    <div class="sb-brand" onclick="goLanding()">
      <svg class="brand-mark" viewBox="0 0 40 40"><path d="M4 26 C4 14, 14 8, 20 8 C26 8, 36 14, 36 26" stroke="#4F46E5" stroke-width="3.4" fill="none" stroke-linecap="round"/><circle cx="4" cy="26" r="3.4" fill="#0EA5E9"/><circle cx="36" cy="26" r="3.4" fill="#0EA5E9"/><circle cx="20" cy="8" r="3" fill="#4F46E5"/></svg>
      <span>SkillBridge</span>
    </div>

    <div class="sb-role">
      <div class="avatar" style="background:${profile.avatarBg};">${profile.initials}</div>
      <div style="overflow:hidden;">
        <div class="rn" style="white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">${profile.name}</div>
        <div class="rr">${profile.roleTitle || profile.dept || 'Workspace User'}</div>
      </div>
    </div>

    <div class="sb-nav">
      ${navItems.map(item => `
        <div class="sb-link ${item.id === activeTab ? 'active' : ''}" onclick="switchDashboardTab('${item.id}')">
          <span class="ic">${item.icon}</span>
          <span>${item.label}</span>
        </div>
      `).join('')}
    </div>

    <div class="sb-logout">
      <div class="sb-link" onclick="logout()" style="color:#FCA5A5;">
        <span class="ic">🚪</span>
        <span>Sign out</span>
      </div>
    </div>
  `;
}

function renderDashboardContent(role, tab) {
  const main = document.getElementById('dmain');
  if (!main) return;

  if (role === 'student') renderStudentDashboard(main, tab);
  else if (role === 'college') renderCollegeDashboard(main, tab);
  else if (role === 'industry') renderIndustryDashboard(main, tab);
  else if (role === 'mentor') renderMentorDashboard(main, tab);
}

// ============================================================================
// 6. STUDENT DASHBOARD VIEWS
// ============================================================================

function renderStudentDashboard(container, tab) {
  const profile = STATE.userProfiles.student;

  if (tab === 'overview') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">Welcome back, ${profile.name} 👋</h1>
          <p class="dsub">${profile.roleTitle} · ${profile.college} · Profile Match Rank: #3 in Batch</p>
        </div>
        <div class="dtop-right">
          <button class="btn btn-outline btn-sm" onclick="openAssessmentModal('System Design & Distributed Systems')">⚡ Take Skill Quiz</button>
          <button class="btn btn-primary btn-sm" onclick="switchDashboardTab('internships')">🔍 Find Internships</button>
          <div class="icon-btn" onclick="openNotificationsModal()"><span class="badge-dot"></span>🔔</div>
        </div>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-label">Skill Readiness Index</div>
          <div class="kpi-value">88.4%</div>
          <div class="kpi-delta up">▲ +6.2% vs last month</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">High-Fit Internships (>85%)</div>
          <div class="kpi-value">${STATE.internships.filter(j => j.matchScore >= 85).length} Roles</div>
          <div class="kpi-delta up">▲ 3 new posted this week</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Active Applications</div>
          <div class="kpi-value">${STATE.applications.length} Active</div>
          <div class="kpi-delta up">1 Offer Pending</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Verified Skill Badges</div>
          <div class="kpi-value">7 Verified</div>
          <div class="kpi-delta up">Top 5% in CSE Dept</div>
        </div>
      </div>

      <div class="grid-2" style="margin-bottom:24px;">
        <div class="card card-pad">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
            <div>
              <div class="section-card-title">Live Skill Radar &amp; Target Match</div>
              <div class="section-card-sub">Your proficiency (blue) vs. Google / Microsoft Target Benchmarks (indigo)</div>
            </div>
            <span class="pill pill-emerald">94% Fit with AI Roles</span>
          </div>
          <div style="height:280px;position:relative;">
            <canvas id="studentRadarChart"></canvas>
          </div>
        </div>

        <div class="card card-pad" style="display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div class="section-card-title">Latest Application Stage</div>
            <div class="section-card-sub">Real-time status for Google India Engineering Intern</div>
            
            <div style="margin:20px 0;">
              <div class="timeline">
                <div class="tl-step">
                  <div class="tl-line done"></div>
                  <div class="tl-dot done">✓</div>
                  <div class="tl-label">Applied</div>
                </div>
                <div class="tl-step">
                  <div class="tl-line done"></div>
                  <div class="tl-dot done">✓</div>
                  <div class="tl-label">Screening</div>
                </div>
                <div class="tl-step">
                  <div class="tl-line done"></div>
                  <div class="tl-dot now">3</div>
                  <div class="tl-label">Tech Round 2</div>
                </div>
                <div class="tl-step">
                  <div class="tl-line"></div>
                  <div class="tl-dot">4</div>
                  <div class="tl-label">Offer</div>
                </div>
              </div>
            </div>

            <div style="background:var(--indigo-50);padding:14px;border-radius:12px;border:1px solid var(--indigo-100);">
              <div style="font-size:13.5px;font-weight:600;color:var(--indigo-900);">Next Action: Technical Architecture Interview</div>
              <div style="font-size:12.5px;color:var(--indigo-700);margin-top:3px;">Scheduled for tomorrow at 3:30 PM IST with Google AI Team.</div>
            </div>
          </div>

          <div style="margin-top:16px;display:flex;gap:10px;">
            <button class="btn btn-outline btn-sm btn-block" onclick="switchDashboardTab('applications')">View All Applications</button>
            <button class="btn btn-primary btn-sm btn-block" onclick="openAssessmentModal('System Design & Distributed Systems')">Brush Up System Design</button>
          </div>
        </div>
      </div>

      <div class="card card-pad">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div>
            <div class="section-card-title">Top Recommended Internships For You</div>
            <div class="section-card-sub">Ranked using multi-vector match with your live skill profile</div>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="switchDashboardTab('internships')">View All (${STATE.internships.length}) →</button>
        </div>
        <div class="grid-3">
          ${STATE.internships.slice(0, 3).map(renderInternshipCardMarkup).join('')}
        </div>
      </div>
    `;

    setTimeout(renderStudentRadarChart, 80);
  }

  else if (tab === 'skills') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">My Skill Matrix &amp; Assessment Center</h1>
          <p class="dsub">Take verified quizzes to raise your skill levels and unlock higher matching internships.</p>
        </div>
        <div class="dtop-right">
          <button class="btn btn-primary btn-sm" onclick="openAddSkillModal()">+ Add New Skill</button>
        </div>
      </div>

      <div class="grid-2">
        <div class="card card-pad">
          <div class="section-card-title">Proficiency Breakdown</div>
          <div class="section-card-sub">Click "Take Assessment" on any skill to test and raise your verified score</div>
          
          <div style="margin-top:16px;display:flex;flex-direction:column;gap:16px;">
            ${STATE.skills.map(sk => `
              <div style="padding:14px;border:1px solid var(--slate-200);border-radius:12px;display:flex;justify-content:space-between;align-items:center;background:#fff;">
                <div style="flex:1;margin-right:20px;">
                  <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                    <span style="font-weight:600;font-size:14px;">${sk.name}</span>
                    <span class="mono" style="font-weight:700;color:var(--indigo-600);">${sk.level}%</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-fill" style="width:${sk.level}%;background:${sk.level >= 85 ? 'var(--emerald-500)' : sk.level >= 75 ? 'var(--indigo-500)' : 'var(--amber-500)'}"></div>
                  </div>
                  <div style="display:flex;gap:8px;margin-top:6px;font-size:11.5px;color:var(--slate-400);">
                    <span>Category: ${sk.category}</span>
                    <span>•</span>
                    <span>${sk.verified ? '✅ Cryptographically Verified' : '⏳ Self-reported'}</span>
                  </div>
                </div>
                <div>
                  <button class="btn btn-outline btn-sm" onclick="openAssessmentModal('${sk.name}')">⚡ Test &amp; Boost</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:18px;">
          <div class="ai-card">
            <div class="tagline">🤖 AI Skill Coach Advice</div>
            <h3 style="margin-top:10px;font-size:19px;color:#fff;">Unlock Tier-1 SRE &amp; Distributed Systems Roles</h3>
            <p style="margin-top:8px;font-size:13.5px;color:#C7CAF3;line-height:1.55;">
              Your <strong>System Design (68%)</strong> is the only metric keeping you from a 98% match with Google &amp; Razorpay infrastructure teams. Pass the 3-question assessment to gain +10% verified credit.
            </p>
            <button class="btn btn-primary btn-sm" style="background:#fff;color:var(--indigo-900);margin-top:16px;" onclick="openAssessmentModal('System Design & Distributed Systems')">Start System Design Quiz (2 mins) →</button>
          </div>

          <div class="card card-pad">
            <div class="section-card-title">Verified Certifications &amp; Hackathons</div>
            <div class="section-card-sub">Synced from GitHub, LeetCode, HackerRank &amp; Coursera</div>
            <ul style="display:flex;flex-direction:column;gap:10px;margin-top:12px;">
              <li style="padding:10px 12px;background:var(--slate-50);border-radius:10px;font-size:13px;display:flex;justify-content:space-between;align-items:center;">
                <span>🏆 Smart India Hackathon 2025 Finalist</span>
                <span class="pill pill-emerald">+15% System Design</span>
              </li>
              <li style="padding:10px 12px;background:var(--slate-50);border-radius:10px;font-size:13px;display:flex;justify-content:space-between;align-items:center;">
                <span>📜 AWS Certified Cloud Practitioner</span>
                <span class="pill pill-sky">Verified on chain</span>
              </li>
              <li style="padding:10px 12px;background:var(--slate-50);border-radius:10px;font-size:13px;display:flex;justify-content:space-between;align-items:center;">
                <span>⚡ LeetCode Top 4% (Rating 2140)</span>
                <span class="pill pill-indigo">Auto-synced</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  else if (tab === 'internships') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">AI Internship Matcher</h1>
          <p class="dsub">Discover open roles curated for your exact skill profile, updated in real-time.</p>
        </div>
      </div>

      <div class="filter-bar">
        <input type="text" id="filterKeyword" placeholder="🔍 Search roles, companies, or skills..." oninput="filterInternships()" style="min-width:260px;">
        <select id="filterDomain" onchange="filterInternships()">
          <option value="all">All Tech Domains</option>
          <option value="AI/ML">AI / Machine Learning</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Cloud">Cloud &amp; DevOps</option>
          <option value="Frontend">Frontend</option>
          <option value="Embedded">Embedded &amp; IoT</option>
        </select>
        <select id="filterMode" onchange="filterInternships()">
          <option value="all">All Modes (Remote / Hybrid / Onsite)</option>
          <option value="Remote">Remote Only</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Onsite">Onsite</option>
        </select>
        <select id="filterStipend" onchange="filterInternships()">
          <option value="0">Min Stipend: Any</option>
          <option value="50000">₹50k+ / month</option>
          <option value="75000">₹75k+ / month</option>
          <option value="100000">₹1,00,000+ / month</option>
        </select>
      </div>

      <div class="grid-3" id="internshipsGrid">
        ${STATE.internships.map(renderInternshipCardMarkup).join('')}
      </div>
    `;
  }

  else if (tab === 'roadmap') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">Personalized Gap Closer Roadmap</h1>
          <p class="dsub">AI-recommended micro-learning and capstone projects to move your match from 88% to 98%.</p>
        </div>
      </div>

      <div class="grid-2">
        <div class="card card-pad">
          <div class="section-card-title">Target Role: Senior Full-Stack &amp; AI Architect</div>
          <div class="section-card-sub">Target Companies: Google, Microsoft, Uber, Razorpay</div>

          <div style="margin-top:20px;display:flex;flex-direction:column;gap:18px;">
            <div style="padding:16px;border-left:4px solid var(--emerald-500);background:var(--slate-50);border-radius:0 12px 12px 0;">
              <div style="display:flex;justify-content:space-between;">
                <span class="pill pill-emerald">Phase 1: Completed</span>
                <span style="font-size:12px;color:var(--slate-400);">Aug 2026</span>
              </div>
              <h4 style="margin-top:8px;">Deep PyTorch &amp; FastAPI Production Microservices</h4>
              <p style="font-size:13px;color:var(--slate-500);margin-top:4px;">Built and benchmarked async RAG pipeline. Verified with HackerRank test.</p>
            </div>

            <div style="padding:16px;border-left:4px solid var(--sky-500);background:var(--sky-100);border-radius:0 12px 12px 0;">
              <div style="display:flex;justify-content:space-between;">
                <span class="pill pill-sky">Phase 2: In Progress</span>
                <span style="font-size:12px;color:var(--indigo-700);font-weight:600;">+8% Match Gain</span>
              </div>
              <h4 style="margin-top:8px;">Distributed Caching &amp; Consistent Hashing Capstone</h4>
              <p style="font-size:13px;color:var(--slate-700);margin-top:4px;">Build a multi-replica key-value store in Go/Python to demonstrate Partition Tolerance handling.</p>
              <button class="btn btn-primary btn-sm" style="margin-top:12px;" onclick="openAssessmentModal('System Design & Distributed Systems')">Take System Design Assessment →</button>
            </div>

            <div style="padding:16px;border-left:4px solid var(--slate-300);background:var(--slate-50);border-radius:0 12px 12px 0;">
              <div style="display:flex;justify-content:space-between;">
                <span class="pill pill-slate">Phase 3: Upcoming</span>
                <span style="font-size:12px;color:var(--slate-400);">Sep 2026</span>
              </div>
              <h4 style="margin-top:8px;">Kubernetes Multi-Cluster Helm Deployment</h4>
              <p style="font-size:13px;color:var(--slate-500);margin-top:4px;">Deploy containerized microservices with auto-scaling triggers on AWS EKS / GCP GKE.</p>
            </div>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:18px;">
          <div class="card card-pad">
            <div class="section-card-title">Industry Bridge Micro-Courses</div>
            <div class="section-card-sub">Co-designed with Microsoft and AWS engineers</div>
            
            <div style="display:flex;flex-direction:column;gap:12px;margin-top:14px;">
              <div style="padding:12px;border:1px solid var(--slate-200);border-radius:10px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-weight:600;font-size:13.5px;">Advanced Distributed Systems 301</div>
                  <div style="font-size:12px;color:var(--slate-400);">6 modules · 4 hours · by Microsoft Azure Team</div>
                </div>
                <button class="btn btn-outline btn-xs" onclick="showToast('Enrolled in Advanced Distributed Systems 301!', 'success')">Enroll Free</button>
              </div>

              <div style="padding:12px;border:1px solid var(--slate-200);border-radius:10px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-weight:600;font-size:13.5px;">Production PyTorch &amp; TensorRT Optimization</div>
                  <div style="font-size:12px;color:var(--slate-400);">4 modules · 3 hours · by Nvidia AI Institute</div>
                </div>
                <button class="btn btn-outline btn-xs" onclick="showToast('Enrolled in PyTorch TensorRT module!', 'success')">Enroll Free</button>
              </div>
            </div>
          </div>

          <div class="ai-card">
            <div class="tagline">💡 1-on-1 Mentor Recommendation</div>
            <h4 style="margin-top:8px;color:#fff;">Schedule a 30-min Mock Tech Review</h4>
            <p style="margin-top:6px;font-size:13px;color:#C7CAF3;">
              Get your Distributed Systems portfolio audited directly by Anand Verma (Principal Cloud Architect @ Microsoft).
            </p>
            <button class="btn btn-primary btn-sm" style="background:#fff;color:var(--indigo-900);margin-top:12px;" onclick="openBookMentorModal('m-1')">Book Session with Anand →</button>
          </div>
        </div>
      </div>
    `;
  }

  else if (tab === 'mentors') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">Industry Mentorship Network</h1>
          <p class="dsub">Book 1:1 portfolio audits, mock coding rounds, and career guidance sessions with verified tech leaders.</p>
        </div>
      </div>

      <div class="grid-3">
        ${STATE.mentors.map(m => `
          <div class="card card-pad" style="display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
                <div class="avatar" style="background:${m.avatarBg};width:46px;height:46px;font-size:16px;">${m.initials}</div>
                <div>
                  <div style="font-weight:700;font-size:15.5px;">${m.name}</div>
                  <div style="font-size:12.5px;color:var(--slate-500);">${m.company}</div>
                </div>
              </div>

              <div style="display:flex;gap:8px;margin-bottom:12px;">
                <span class="pill pill-amber">★ ${m.rating} (${m.reviews} reviews)</span>
                <span class="pill pill-sky">${m.domain}</span>
              </div>

              <p style="font-size:13.5px;color:var(--slate-600);line-height:1.55;">${m.bio}</p>
            </div>

            <div style="margin-top:18px;border-top:1px solid var(--slate-100);padding-top:14px;">
              <div style="font-size:12px;color:var(--emerald-500);font-weight:600;margin-bottom:10px;">🟢 ${m.availableSlots}</div>
              <button class="btn btn-primary btn-block btn-sm" onclick="openBookMentorModal('${m.id}')">Book 1:1 Mentorship Session</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  else if (tab === 'applications') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">My Applications &amp; Interview Pipeline</h1>
          <p class="dsub">Track application progress, upcoming rounds, and direct recruiter feedback.</p>
        </div>
        <div class="dtop-right">
          <button class="btn btn-primary btn-sm" onclick="switchDashboardTab('internships')">+ Apply to More Roles</button>
        </div>
      </div>

      <div class="card card-pad" style="margin-bottom:24px;">
        <div class="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Company &amp; Role</th>
                <th>Applied On</th>
                <th>Stage</th>
                <th>Upcoming Interview</th>
                <th>Recruiter Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${STATE.applications.map(app => `
                <tr>
                  <td>
                    <div style="font-weight:600;color:var(--slate-900);">${app.company}</div>
                    <div style="font-size:12px;color:var(--slate-500);">${app.jobTitle}</div>
                  </td>
                  <td>${app.appliedOn}</td>
                  <td><span class="pill ${app.statusType}">${app.statusText}</span></td>
                  <td style="font-weight:600;color:var(--indigo-600);">${app.interviewDate}</td>
                  <td style="max-width:240px;font-size:12.5px;color:var(--slate-600);">${app.notes}</td>
                  <td>
                    <button class="btn btn-outline btn-xs" onclick="alert('Viewing application details for ${app.company} - ${app.jobTitle}')">View Details</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

function renderStudentRadarChart() {
  const radarCtx = document.getElementById('studentRadarChart');
  if (!radarCtx || typeof Chart === 'undefined') return;

  if (STATE.chartInstances.studentRadar) {
    STATE.chartInstances.studentRadar.destroy();
  }

  const labels = STATE.skills.slice(0, 6).map(s => s.name.split('&')[0].trim());
  const myScores = STATE.skills.slice(0, 6).map(s => s.level);
  const benchmarkScores = [90, 80, 85, 85, 80, 85];

  STATE.chartInstances.studentRadar = new Chart(radarCtx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Priya Sharma (Live)',
          data: myScores,
          backgroundColor: 'rgba(14, 165, 233, 0.25)',
          borderColor: '#0EA5E9',
          borderWidth: 2,
          pointBackgroundColor: '#0EA5E9'
        },
        {
          label: 'Google/Microsoft Target Cutoff',
          data: benchmarkScores,
          backgroundColor: 'rgba(79, 70, 229, 0.12)',
          borderColor: '#4F46E5',
          borderWidth: 2,
          borderDash: [4, 4],
          pointBackgroundColor: '#4F46E5'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 40,
          max: 100,
          ticks: { stepSize: 20, display: false },
          pointLabels: { font: { family: 'Inter', size: 11, weight: '600' } }
        }
      },
      plugins: {
        legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 12 } } }
      }
    }
  });
}

// ============================================================================
// 7. COLLEGE / TPO DASHBOARD VIEWS
// ============================================================================

function renderCollegeDashboard(container, tab) {
  const profile = STATE.userProfiles.college;

  if (tab === 'overview') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">${profile.college} — TPO Command Center</h1>
          <p class="dsub">Cohort 2026 Placement &amp; Skill Gap Analytics Dashboard</p>
        </div>
        <div class="dtop-right">
          <button class="btn btn-outline btn-sm" onclick="showToast('Exporting AICTE & NIRF skill compliance report PDF...', 'info')">📥 Export Report</button>
          <button class="btn btn-primary btn-sm" onclick="openScheduleDriveModal()">+ Schedule Campus Drive</button>
        </div>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-label">Eligible Students Mapped</div>
          <div class="kpi-value">1,240</div>
          <div class="kpi-delta up">96% verified with test scores</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Placement Rate (2026 Batch)</div>
          <div class="kpi-value">89.4%</div>
          <div class="kpi-delta up">▲ +12.4% vs 2025 cycle</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Average CTC Verified</div>
          <div class="kpi-value">₹16.8 LPA</div>
          <div class="kpi-delta up">Highest: ₹52.0 LPA (Google)</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Active Industry MoUs</div>
          <div class="kpi-value">28 MoUs</div>
          <div class="kpi-delta up">6 drives in pipeline</div>
        </div>
      </div>

      <div class="grid-2" style="margin-bottom:24px;">
        <div class="card card-pad">
          <div class="section-card-title">Department-wise Skill Readiness Heatmap</div>
          <div class="section-card-sub">Student proficiency vs. current market requirements</div>
          <div style="height:280px;position:relative;">
            <canvas id="collegeDeptChart"></canvas>
          </div>
        </div>

        <div class="card card-pad">
          <div class="section-card-title">Placement Category Breakdown</div>
          <div class="section-card-sub">Offer distribution by tier and sector</div>
          <div style="height:280px;position:relative;">
            <canvas id="collegeTierChart"></canvas>
          </div>
        </div>
      </div>

      <div class="card card-pad">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div>
            <div class="section-card-title">Top Performing Student Cohort (Verified Ready)</div>
            <div class="section-card-sub">Ranked by verified multi-skill assessment scores</div>
          </div>
          <button class="btn btn-outline btn-sm" onclick="switchDashboardTab('student-roster')">View All Students →</button>
        </div>

        <div class="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Branch &amp; Sem</th>
                <th>CGPA</th>
                <th>Verified Skill Index</th>
                <th>Top Skills</th>
                <th>Placement Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Priya Sharma</strong></td>
                <td>B.Tech CSE (Sem 6)</td>
                <td>8.85</td>
                <td><span class="pill pill-emerald">94% Fit</span></td>
                <td>Python, PyTorch, React, FastApi</td>
                <td><span class="pill pill-sky">Google Tech Round 2</span></td>
                <td><button class="btn btn-outline btn-xs" onclick="alert('Viewing Priya Sharma profile');">View Dossier</button></td>
              </tr>
              <tr>
                <td><strong>Rahul Nair</strong></td>
                <td>B.Tech ECE (Sem 6)</td>
                <td>8.70</td>
                <td><span class="pill pill-emerald">91% Fit</span></td>
                <td>Embedded C, FreeRTOS, IoT, Python</td>
                <td><span class="pill pill-emerald">Offered: Ather Energy</span></td>
                <td><button class="btn btn-outline btn-xs" onclick="alert('Viewing Rahul Nair profile');">View Dossier</button></td>
              </tr>
              <tr>
                <td><strong>Ananya Deshmukh</strong></td>
                <td>B.Tech IT (Sem 6)</td>
                <td>9.12</td>
                <td><span class="pill pill-indigo">88% Fit</span></td>
                <td>AWS, Docker, Node.js, Go</td>
                <td><span class="pill pill-sky">Swiggy Screening</span></td>
                <td><button class="btn btn-outline btn-xs" onclick="alert('Viewing Ananya Deshmukh profile');">View Dossier</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;

    setTimeout(renderCollegeCharts, 80);
  }

  else if (tab === 'gap-analytics') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">Batch Skill Gap Heatmap &amp; Curriculum Deficits</h1>
          <p class="dsub">Identifies exact technology topics where curriculum lagging behind industry hiring criteria.</p>
        </div>
      </div>

      <div class="grid-2">
        <div class="card card-pad">
          <div class="section-card-title">Top 5 Urgent Skill Deficits Identified</div>
          <div class="section-card-sub">Calculated across 850+ active recruiter job descriptions</div>
          
          <div style="margin-top:16px;display:flex;flex-direction:column;gap:14px;">
            <div style="padding:14px;background:var(--rose-100);border-radius:12px;border:1px solid #FECDD3;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <strong style="color:#9F1239;">1. Kubernetes &amp; Cloud Native Orchestration</strong>
                <span class="pill pill-rose">Gap: 38% Deficit</span>
              </div>
              <p style="font-size:13px;color:#881337;margin-top:4px;">Industry demands 82% proficiency; ECE &amp; IT cohort averages only 44%.</p>
              <button class="btn btn-outline btn-xs" style="margin-top:10px;background:#fff;" onclick="showToast('Assigned AWS/K8s micro-module to Semester 6 curriculum!', 'success')">Deploy Bridge Module to Batch</button>
            </div>

            <div style="padding:14px;background:var(--amber-100);border-radius:12px;border:1px solid #FDE68A;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <strong style="color:#92400E;">2. Distributed Systems &amp; Concurrency (Go / Rust)</strong>
                <span class="pill pill-amber">Gap: 28% Deficit</span>
              </div>
              <p style="font-size:13px;color:#78350F;margin-top:4px;">High demand by FinTech recruiters (CRED, Razorpay, Swiggy).</p>
            </div>

            <div style="padding:14px;background:var(--indigo-50);border-radius:12px;border:1px solid var(--indigo-100);">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <strong style="color:var(--indigo-900);">3. Generative AI &amp; LangChain / RAG Pipelines</strong>
                <span class="pill pill-indigo">Gap: 21% Deficit</span>
              </div>
              <p style="font-size:13px;color:var(--indigo-700);margin-top:4px;">Strong interest from Google, Microsoft &amp; NVIDIA campus labs.</p>
            </div>
          </div>
        </div>

        <div class="card card-pad">
          <div class="section-card-title">AI Remediation Action Plan</div>
          <div class="section-card-sub">Automatic curriculum synchronizer</div>
          <p style="font-size:13.5px;color:var(--slate-600);line-height:1.6;">
            SkillBridge automatically generates an elective syllabus patch vetted by corporate partners. You can approve this module to sync with student portals immediately.
          </p>
          <div style="margin-top:18px;padding:14px;background:var(--slate-50);border-radius:10px;">
            <div style="font-weight:600;font-size:13.5px;">Recommended Elective: "Production Cloud Engineering (CS604)"</div>
            <div style="font-size:12px;color:var(--slate-500);margin-top:4px;">Vetted by: Amazon AWS Academy &amp; Microsoft Azure India</div>
            <div style="margin-top:10px;font-size:12px;color:var(--emerald-500);font-weight:600;">✓ Increases cohort placement fit by +18.4%</div>
          </div>
          <button class="btn btn-primary btn-block btn-sm" style="margin-top:16px;" onclick="showToast('Elective CS604 submitted to Board of Studies for ratification!', 'success')">Submit Elective to Academic Council</button>
        </div>
      </div>
    `;
  }

  else if (tab === 'student-roster') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">Student Cohort Roster &amp; Skill Dossiers</h1>
          <p class="dsub">Search and filter students by verified skill levels, department, and placement readiness.</p>
        </div>
      </div>

      <div class="filter-bar">
        <input type="text" placeholder="🔍 Search by name, roll no, or skill...">
        <select><option>All Departments (CSE, ECE, IT, ME)</option><option>CSE</option><option>ECE</option><option>IT</option></select>
        <select><option>Min Skill Score: Any</option><option>>80% Verified</option><option>>90% Verified</option></select>
        <select><option>Status: All</option><option>Placed</option><option>Seeking Internship</option></select>
      </div>

      <div class="card card-pad">
        <div class="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Student Name</th>
                <th>Branch</th>
                <th>CGPA</th>
                <th>Skill Score</th>
                <th>Verified Badges</th>
                <th>Placement Stage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="mono">23CS108</td>
                <td><strong>Priya Sharma</strong></td>
                <td>CSE</td>
                <td>8.85</td>
                <td><span class="pill pill-emerald">94%</span></td>
                <td>Python, ML, React, DSA</td>
                <td><span class="pill pill-sky">Google Round 2</span></td>
                <td><button class="btn btn-outline btn-xs" onclick="alert('Viewing dossier for Priya Sharma')">Dossier</button></td>
              </tr>
              <tr>
                <td class="mono">23EC042</td>
                <td><strong>Rahul Nair</strong></td>
                <td>ECE</td>
                <td>8.70</td>
                <td><span class="pill pill-emerald">91%</span></td>
                <td>Embedded C, IoT, Python</td>
                <td><span class="pill pill-emerald">Placed (Ather)</span></td>
                <td><button class="btn btn-outline btn-xs" onclick="alert('Viewing dossier for Rahul Nair')">Dossier</button></td>
              </tr>
              <tr>
                <td class="mono">23IT021</td>
                <td><strong>Ananya Deshmukh</strong></td>
                <td>IT</td>
                <td>9.12</td>
                <td><span class="pill pill-indigo">88%</span></td>
                <td>AWS, Docker, Node.js</td>
                <td><span class="pill pill-sky">Swiggy Screening</span></td>
                <td><button class="btn btn-outline btn-xs" onclick="alert('Viewing dossier for Ananya')">Dossier</button></td>
              </tr>
              <tr>
                <td class="mono">23CS144</td>
                <td><strong>Vikramaditya Sen</strong></td>
                <td>CSE</td>
                <td>8.45</td>
                <td><span class="pill pill-indigo">86%</span></td>
                <td>Java, SpringBoot, SQL</td>
                <td><span class="pill pill-amber">Seeking</span></td>
                <td><button class="btn btn-outline btn-xs" onclick="alert('Viewing dossier for Vikramaditya')">Dossier</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  else if (tab === 'mous') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">Corporate MoUs &amp; Recruitment Drives</h1>
          <p class="dsub">Track university-corporate agreements, recruitment quotas, and co-sponsored laboratories.</p>
        </div>
        <div class="dtop-right">
          <button class="btn btn-primary btn-sm" onclick="openScheduleDriveModal()">+ New Corporate MoU</button>
        </div>
      </div>

      <div class="grid-3">
        <div class="card card-pad">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div style="font-weight:700;font-size:16px;">Google India</div>
            <span class="pill pill-emerald">Active MoU</span>
          </div>
          <div style="font-size:12.5px;color:var(--slate-500);margin-top:4px;">Renewed: Jan 2026 · Valid till 2028</div>
          <div style="margin-top:14px;font-size:13.5px;">
            <div>🎯 Hiring Quota: 15 Interns / Year</div>
            <div style="margin-top:4px;">🏢 Lab Co-Sponsored: Deep Learning Cluster</div>
          </div>
          <button class="btn btn-outline btn-block btn-sm" style="margin-top:16px;" onclick="showToast('Opening Google drive portal...', 'info')">Manage Drive Details</button>
        </div>

        <div class="card card-pad">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div style="font-weight:700;font-size:16px;">Microsoft India</div>
            <span class="pill pill-emerald">Active MoU</span>
          </div>
          <div style="font-size:12.5px;color:var(--slate-500);margin-top:4px;">Renewed: Mar 2026 · Valid till 2029</div>
          <div style="margin-top:14px;font-size:13.5px;">
            <div>🎯 Hiring Quota: 20 Interns / Year</div>
            <div style="margin-top:4px;">🏢 Lab Co-Sponsored: Cloud Architecture Lab</div>
          </div>
          <button class="btn btn-outline btn-block btn-sm" style="margin-top:16px;" onclick="showToast('Opening Microsoft drive portal...', 'info')">Manage Drive Details</button>
        </div>

        <div class="card card-pad">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div style="font-weight:700;font-size:16px;">Ather Energy</div>
            <span class="pill pill-sky">Drive Scheduled</span>
          </div>
          <div style="font-size:12.5px;color:var(--slate-500);margin-top:4px;">Campus Drive on 12 Sep 2026</div>
          <div style="margin-top:14px;font-size:13.5px;">
            <div>🎯 Hiring Target: 10 Embedded Engineers</div>
            <div style="margin-top:4px;">🏢 Dept: ECE &amp; Mechanical</div>
          </div>
          <button class="btn btn-outline btn-block btn-sm" style="margin-top:16px;" onclick="showToast('Opening Ather Energy drive schedule...', 'info')">Manage Drive Details</button>
        </div>
      </div>
    `;
  }
}

function renderCollegeCharts() {
  if (typeof Chart === 'undefined') return;

  // Dept Chart
  const deptCtx = document.getElementById('collegeDeptChart');
  if (deptCtx) {
    if (STATE.chartInstances.collegeDept) STATE.chartInstances.collegeDept.destroy();
    STATE.chartInstances.collegeDept = new Chart(deptCtx, {
      type: 'bar',
      data: {
        labels: ['CSE', 'IT', 'ECE', 'EEE', 'Mechanical'],
        datasets: [
          { label: 'Avg Skill Score (%)', data: [88, 85, 78, 71, 65], backgroundColor: '#4F46E5', borderRadius: 6 },
          { label: 'Placement %', data: [94, 91, 84, 76, 68], backgroundColor: '#0EA5E9', borderRadius: 6 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: 0, max: 100, ticks: { callback: v => v + '%' } } }
      }
    });
  }

  // Tier Chart
  const tierCtx = document.getElementById('collegeTierChart');
  if (tierCtx) {
    if (STATE.chartInstances.collegeTier) STATE.chartInstances.collegeTier.destroy();
    STATE.chartInstances.collegeTier = new Chart(tierCtx, {
      type: 'doughnut',
      data: {
        labels: ['Dream / Super Dream (>₹20L)', 'Tier-1 Product (₹12L-₹20L)', 'High Growth Startups (₹8L-₹12L)', 'Core Engineering'],
        datasets: [{
          data: [38, 35, 18, 9],
          backgroundColor: ['#4F46E5', '#0EA5E9', '#10B981', '#F59E0B'],
          borderWidth: 2,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%'
      }
    });
  }
}

// ============================================================================
// 8. INDUSTRY PARTNER DASHBOARD VIEWS
// ============================================================================

function renderIndustryDashboard(container, tab) {
  const profile = STATE.userProfiles.industry;

  if (tab === 'overview') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">${profile.company} — University Talent Engine</h1>
          <p class="dsub">Campus Talent Acquisition &amp; Verified Skill Screening</p>
        </div>
        <div class="dtop-right">
          <button class="btn btn-primary btn-sm" onclick="openPostInternshipModal()">+ Post New Internship</button>
        </div>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-label">Active Internship Openings</div>
          <div class="kpi-value">6 Roles</div>
          <div class="kpi-delta up">38 Total Headcount</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Verified Applicants</div>
          <div class="kpi-value">148 Candidates</div>
          <div class="kpi-delta up">Avg Match: 91.2%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Shortlisted for Tech Rounds</div>
          <div class="kpi-value">24 Engineers</div>
          <div class="kpi-delta up">Zero Screening Overhead</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Offers Accepted</div>
          <div class="kpi-value">12 Accepted</div>
          <div class="kpi-delta up">92% Acceptance Rate</div>
        </div>
      </div>

      <div class="grid-2" style="margin-bottom:24px;">
        <div class="card card-pad">
          <div class="section-card-title">Talent Pool Skill Distribution</div>
          <div class="section-card-sub">Candidate proficiency across your required tech stack</div>
          <div style="height:280px;position:relative;">
            <canvas id="industryFunnelChart"></canvas>
          </div>
        </div>

        <div class="card card-pad">
          <div class="section-card-title">Recent High-Match Applicants (>90%)</div>
          <div class="section-card-sub">Pre-screened against coding benchmarks</div>
          
          <div style="display:flex;flex-direction:column;gap:12px;margin-top:14px;">
            <div style="padding:12px;border:1px solid var(--slate-200);border-radius:10px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-weight:600;font-size:14px;">Priya Sharma <span class="pill pill-emerald">94% Match</span></div>
                <div style="font-size:12px;color:var(--slate-500);">NIT Surathkal · B.Tech CSE · CGPA 8.85</div>
                <div style="font-size:11.5px;color:var(--indigo-600);margin-top:2px;">Python 92%, PyTorch 88%, DSA 78%</div>
              </div>
              <button class="btn btn-primary btn-xs" onclick="alert('Scheduling Round 2 with Priya Sharma');">Fast-Track</button>
            </div>

            <div style="padding:12px;border:1px solid var(--slate-200);border-radius:10px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-weight:600;font-size:14px;">Karthik Sundaram <span class="pill pill-emerald">92% Match</span></div>
                <div style="font-size:12px;color:var(--slate-500);">IIT Madras · B.Tech CSE · CGPA 9.20</div>
                <div style="font-size:11.5px;color:var(--indigo-600);margin-top:2px;">FastAPI 90%, Distributed Systems 86%</div>
              </div>
              <button class="btn btn-primary btn-xs" onclick="alert('Scheduling Round 2 with Karthik Sundaram');">Fast-Track</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-pad">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div>
            <div class="section-card-title">Live Postings on SkillBridge</div>
            <div class="section-card-sub">Active positions receiving verified applications</div>
          </div>
          <button class="btn btn-outline btn-sm" onclick="switchDashboardTab('manage-jobs')">Manage All Roles →</button>
        </div>

        <div class="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Location / Mode</th>
                <th>Stipend</th>
                <th>Openings</th>
                <th>Applicants</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Software Engineering Intern (AI/ML)</strong></td>
                <td>Bengaluru / Hybrid</td>
                <td>₹1,15,000/mo</td>
                <td>8</td>
                <td>42 Verified</td>
                <td><span class="pill pill-emerald">Active</span></td>
                <td><button class="btn btn-outline btn-xs" onclick="switchDashboardTab('pipeline')">View Pipeline</button></td>
              </tr>
              <tr>
                <td><strong>Cloud Infrastructure &amp; SRE Intern</strong></td>
                <td>Hyderabad / Remote</td>
                <td>₹95,000/mo</td>
                <td>5</td>
                <td>28 Verified</td>
                <td><span class="pill pill-emerald">Active</span></td>
                <td><button class="btn btn-outline btn-xs" onclick="switchDashboardTab('pipeline')">View Pipeline</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;

    setTimeout(renderIndustryCharts, 80);
  }

  else if (tab === 'manage-jobs') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">Manage Posted Internships</h1>
          <p class="dsub">Create, edit, or adjust required skill thresholds for active university roles.</p>
        </div>
        <div class="dtop-right">
          <button class="btn btn-primary btn-sm" onclick="openPostInternshipModal()">+ Post New Internship</button>
        </div>
      </div>

      <div class="grid-2">
        ${STATE.internships.slice(0, 4).map(job => `
          <div class="card card-pad" style="display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                <h3 style="font-size:16.5px;">${job.title}</h3>
                <span class="pill pill-emerald">Active</span>
              </div>
              <div style="font-size:13px;color:var(--slate-500);margin-top:4px;">${job.location} · ${job.stipend} · ${job.duration}</div>
              <p style="font-size:13px;color:var(--slate-600);margin-top:10px;line-height:1.5;">${job.description}</p>
              
              <div style="margin-top:12px;">
                <div style="font-size:12px;font-weight:600;color:var(--slate-500);margin-bottom:6px;">Required Skills:</div>
                <div class="skill-tags">
                  ${job.skillsReq.map(s => `<span class="tag">${s}</span>`).join('')}
                </div>
              </div>
            </div>

            <div style="margin-top:18px;border-top:1px solid var(--slate-100);padding-top:14px;display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:12.5px;color:var(--slate-500);">Openings: <strong>${job.openings}</strong></span>
              <div style="display:flex;gap:8px;">
                <button class="btn btn-outline btn-xs" onclick="switchDashboardTab('pipeline')">View Applicants</button>
                <button class="btn btn-ghost btn-xs" onclick="showToast('Role paused for new applications', 'info')">Pause</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  else if (tab === 'talent-search') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">Verified Student Talent Search</h1>
          <p class="dsub">Search across 250+ engineering campuses by verified skill thresholds — zero resumes required.</p>
        </div>
      </div>

      <div class="filter-bar">
        <input type="text" placeholder="🔍 Search skills (e.g. PyTorch, Distributed Systems, Rust)..." style="min-width:280px;">
        <select><option>Min Python Score: 85%+</option><option>90%+</option></select>
        <select><option>Min CGPA: 8.0+</option><option>8.5+</option><option>9.0+</option></select>
        <select><option>Graduation Year: 2026</option><option>2027</option></select>
      </div>

      <div class="card card-pad">
        <div class="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Institute</th>
                <th>CGPA</th>
                <th>Verified Skill Matches</th>
                <th>Match Fit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Priya Sharma</strong></td>
                <td>NIT Surathkal (B.Tech CSE)</td>
                <td>8.85</td>
                <td>Python (92%), PyTorch (88%), DSA (78%)</td>
                <td><span class="pill pill-emerald">94% Fit</span></td>
                <td><button class="btn btn-primary btn-xs" onclick="showToast('Fast-Track Interview Invite sent to Priya Sharma!', 'success')">Direct Invite</button></td>
              </tr>
              <tr>
                <td><strong>Karthik Sundaram</strong></td>
                <td>IIT Madras (B.Tech CSE)</td>
                <td>9.20</td>
                <td>FastAPI (90%), Distributed Systems (86%)</td>
                <td><span class="pill pill-emerald">92% Fit</span></td>
                <td><button class="btn btn-primary btn-xs" onclick="showToast('Fast-Track Interview Invite sent to Karthik!', 'success')">Direct Invite</button></td>
              </tr>
              <tr>
                <td><strong>Ananya Deshmukh</strong></td>
                <td>NITK (B.Tech IT)</td>
                <td>9.12</td>
                <td>Docker (88%), AWS (85%), Node.js (90%)</td>
                <td><span class="pill pill-indigo">89% Fit</span></td>
                <td><button class="btn btn-primary btn-xs" onclick="showToast('Direct Invite sent to Ananya!', 'success')">Direct Invite</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  else if (tab === 'pipeline') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">Applicant Pipeline &amp; Review</h1>
          <p class="dsub">Track candidates through assessment, screening, technical rounds, and offer rollout.</p>
        </div>
      </div>

      <div class="grid-3">
        <div class="card card-pad">
          <div style="font-weight:700;font-size:15px;margin-bottom:12px;color:var(--indigo-900);">📥 Stage 1: Verified Applications (42)</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="padding:12px;background:var(--slate-50);border-radius:10px;border:1px solid var(--slate-200);">
              <div style="font-weight:600;font-size:13.5px;">Vikramaditya Sen (86% Fit)</div>
              <div style="font-size:12px;color:var(--slate-500);">NIT Surathkal · Python &amp; SQL</div>
              <button class="btn btn-outline btn-xs" style="margin-top:8px;" onclick="showToast('Moved Vikramaditya to Technical Round!', 'success')">Advance →</button>
            </div>
          </div>
        </div>

        <div class="card card-pad">
          <div style="font-weight:700;font-size:15px;margin-bottom:12px;color:var(--sky-500);">⚡ Stage 2: Technical Interview (18)</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="padding:12px;background:var(--sky-100);border-radius:10px;border:1px solid #BAE6FD;">
              <div style="font-weight:600;font-size:13.5px;">Priya Sharma (94% Fit)</div>
              <div style="font-size:12px;color:var(--indigo-900);">Interview scheduled tomorrow 3:30 PM</div>
              <button class="btn btn-success btn-xs" style="margin-top:8px;" onclick="showToast('Offer letter generated for Priya Sharma!', 'success')">Rollout Offer 🎉</button>
            </div>
          </div>
        </div>

        <div class="card card-pad">
          <div style="font-weight:700;font-size:15px;margin-bottom:12px;color:var(--emerald-500);">🎉 Stage 3: Offers Accepted (12)</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="padding:12px;background:var(--emerald-100);border-radius:10px;border:1px solid #A7F3D0;">
              <div style="font-weight:600;font-size:13.5px;">Rahul Nair (ECE)</div>
              <div style="font-size:12px;color:#065F46;">Offer Signed · Joining Jan 2027</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function renderIndustryCharts() {
  if (typeof Chart === 'undefined') return;

  const funnelCtx = document.getElementById('industryFunnelChart');
  if (funnelCtx) {
    if (STATE.chartInstances.industryFunnel) STATE.chartInstances.industryFunnel.destroy();
    STATE.chartInstances.industryFunnel = new Chart(funnelCtx, {
      type: 'bar',
      data: {
        labels: ['Python', 'PyTorch', 'FastAPI', 'DSA', 'Docker', 'AWS'],
        datasets: [{
          label: 'Applicant Proficiency %',
          data: [92, 88, 85, 84, 76, 74],
          backgroundColor: '#4F46E5',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: 0, max: 100, ticks: { callback: v => v + '%' } } }
      }
    });
  }
}

// ============================================================================
// 9. MENTOR DASHBOARD VIEWS
// ============================================================================

function renderMentorDashboard(container, tab) {
  const profile = STATE.userProfiles.mentor;

  if (tab === 'overview' || tab === 'sessions') {
    container.innerHTML = `
      <div class="dtopbar">
        <div>
          <h1 class="dtitle">Mentor Workspace — ${profile.name}</h1>
          <p class="dsub">${profile.roleTitle} at ${profile.company} · Mentorship Rating: ★ ${profile.rating}</p>
        </div>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-label">Active Mentees Guided</div>
          <div class="kpi-value">${profile.totalMentees} Students</div>
          <div class="kpi-delta up">94% placed in Tier-1 tech</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Pending 1:1 Requests</div>
          <div class="kpi-value">3 Requests</div>
          <div class="kpi-delta up">Next: Today 5:00 PM</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Skill Audits Completed</div>
          <div class="kpi-value">68 Repos</div>
          <div class="kpi-delta up">Verified on chain</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Mentorship Hours</div>
          <div class="kpi-value">84 Hours</div>
          <div class="kpi-delta up">Top Rated Mentor Badge</div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card card-pad">
          <div class="section-card-title">Upcoming 1-on-1 Mentorship Sessions</div>
          <div class="section-card-sub">Student bookings through SkillBridge</div>

          <div style="display:flex;flex-direction:column;gap:14px;margin-top:16px;">
            <div style="padding:14px;border:1px solid var(--slate-200);border-radius:12px;background:#fff;">
              <div style="display:flex;justify-content:space-between;">
                <div>
                  <div style="font-weight:700;font-size:14.5px;">Priya Sharma (NIT Surathkal)</div>
                  <div style="font-size:12.5px;color:var(--slate-500);">Topic: Distributed Systems &amp; Google Round 2 Prep</div>
                  <div style="font-size:12px;color:var(--indigo-600);margin-top:4px;">🕒 Today, 5:00 PM IST (30 Mins)</div>
                </div>
                <div>
                  <button class="btn btn-primary btn-xs" onclick="window.open('https://meet.google.com', '_blank');showToast('Launching Google Meet...', 'info');">Join Meet ↗</button>
                </div>
              </div>
            </div>

            <div style="padding:14px;border:1px solid var(--slate-200);border-radius:12px;background:#fff;">
              <div style="display:flex;justify-content:space-between;">
                <div>
                  <div style="font-weight:700;font-size:14.5px;">Arjun Verma (IIT Bombay)</div>
                  <div style="font-size:12.5px;color:var(--slate-500);">Topic: Cloud Architecture Portfolio Audit</div>
                  <div style="font-size:12px;color:var(--slate-400);margin-top:4px;">🕒 Tomorrow, 6:30 PM IST (45 Mins)</div>
                </div>
                <div>
                  <button class="btn btn-outline btn-xs" onclick="showToast('Session confirmed!', 'success')">Confirmed</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card card-pad">
          <div class="section-card-title">Pending Portfolio Endorsements</div>
          <div class="section-card-sub">Students requesting skill verification for projects</div>

          <div style="display:flex;flex-direction:column;gap:12px;margin-top:14px;">
            <div style="padding:12px;background:var(--slate-50);border-radius:10px;border:1px solid var(--slate-200);">
              <div style="font-weight:600;font-size:13.5px;">Priya Sharma — Distributed KV Store Repo</div>
              <p style="font-size:12.5px;color:var(--slate-600);margin:4px 0;">Implemented consistent hashing with virtual nodes in Python.</p>
              <div style="display:flex;gap:8px;margin-top:8px;">
                <button class="btn btn-success btn-xs" onclick="showToast('Endorsed Priya Sharma Distributed Systems skill!', 'success')">✓ Endorse +10%</button>
                <button class="btn btn-outline btn-xs" onclick="alert('Opening GitHub repo diff...')">Review Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// ============================================================================
// 10. INTERNSHIP CARD COMPONENT & FILTER ENGINE
// ============================================================================

function renderInternshipCardMarkup(job) {
  const matchClass = job.matchScore >= 90 ? 'high' : job.matchScore >= 80 ? 'mid' : 'low';

  return `
    <div class="internship-card" data-domain="${job.domain}" data-mode="${job.type}" data-stipend="${job.stipendNum}" data-search="${(job.title + ' ' + job.company + ' ' + job.skillsReq.join(' ')).toLowerCase()}">
      <div class="internship-top">
        <div style="display:flex;gap:12px;align-items:center;">
          <div class="company-logo" style="background:${job.logoBg};">${job.logoText}</div>
          <div>
            <h4 style="font-size:15px;line-height:1.2;">${job.title}</h4>
            <div style="font-size:13px;font-weight:600;color:var(--slate-700);margin-top:2px;">${job.company}</div>
          </div>
        </div>
        <div class="match-badge ${matchClass}">
          <div class="mv">${job.matchScore}%</div>
          <div class="ml">MATCH</div>
        </div>
      </div>

      <div class="internship-meta">
        <span>📍 ${job.location}</span>
        <span>💰 ${job.stipend}</span>
        <span>⏱ ${job.duration}</span>
      </div>

      <p style="font-size:13px;color:var(--slate-500);line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
        ${job.description}
      </p>

      <div class="skill-tags">
        ${job.skillsReq.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>

      <div class="card-actions" style="margin-top:auto;">
        <button class="btn btn-primary btn-sm btn-block" onclick="openApplyModal('${job.id}')">Apply with 1-Click →</button>
      </div>
    </div>
  `;
}

function filterInternships() {
  const keyword = (document.getElementById('filterKeyword')?.value || '').toLowerCase().trim();
  const domain = document.getElementById('filterDomain')?.value || 'all';
  const mode = document.getElementById('filterMode')?.value || 'all';
  const stipend = parseInt(document.getElementById('filterStipend')?.value || '0', 10);

  const cards = document.querySelectorAll('#internshipsGrid .internship-card');
  cards.forEach(card => {
    const cardDomain = card.getAttribute('data-domain');
    const cardMode = card.getAttribute('data-mode');
    const cardStipend = parseInt(card.getAttribute('data-stipend'), 10);
    const cardSearch = card.getAttribute('data-search');

    const matchesKeyword = !keyword || cardSearch.includes(keyword);
    const matchesDomain = domain === 'all' || cardDomain === domain;
    const matchesMode = mode === 'all' || cardMode === mode;
    const matchesStipend = cardStipend >= stipend;

    if (matchesKeyword && matchesDomain && matchesMode && matchesStipend) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// ============================================================================
// 11. MODALS & TOAST NOTIFICATION ENGINE
// ============================================================================

function openModal(contentHtml) {
  const overlay = document.getElementById('modalOverlay');
  const box = document.getElementById('modalBox');
  if (!overlay || !box) return;

  box.innerHTML = contentHtml;
  overlay.classList.add('open');
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('open');
}

document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
  if (e.target.id === 'modalOverlay') closeModal();
});

// Toast System
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : 'ℹ️'}</span>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Modal: Apply to Internship
function openApplyModal(jobId) {
  const job = STATE.internships.find(j => j.id === jobId);
  if (!job) return;

  openModal(`
    <div class="modal-head">
      <div>
        <h3 style="font-size:18px;">Apply to ${job.company}</h3>
        <div style="font-size:13px;color:var(--slate-500);">${job.title}</div>
      </div>
      <div class="modal-close" onclick="closeModal()">✕</div>
    </div>

    <div style="background:var(--slate-50);padding:14px;border-radius:12px;margin-bottom:18px;border:1px solid var(--slate-200);">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:13px;color:var(--slate-600);">Auto-Matched Skill Score</span>
        <span class="pill pill-emerald" style="font-size:13px;">${job.matchScore}% Verified Fit</span>
      </div>
      <div style="font-size:12px;color:var(--slate-400);margin-top:6px;">Your verified skills (${job.skillsReq.join(', ')}) will be transmitted directly to ${job.company}'s ATS.</div>
    </div>

    <div class="field">
      <label>Add a quick note or GitHub project link (Optional)</label>
      <textarea id="applyNote" rows="3" placeholder="e.g. Included my recent RAG pipeline repository handling 10k QPS..."></textarea>
    </div>

    <div style="display:flex;gap:10px;margin-top:20px;">
      <button class="btn btn-ghost btn-block" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary btn-block" onclick="submitApplication('${job.id}')">Submit Verified Application 🚀</button>
    </div>
  `);
}

function submitApplication(jobId) {
  const job = STATE.internships.find(j => j.id === jobId);
  if (!job) return;

  const newApp = {
    id: 'app-' + (STATE.applications.length + 101),
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    appliedOn: 'Today',
    currentStep: 1,
    statusText: 'Application Under Review',
    statusType: 'pill-sky',
    interviewDate: 'Pending Review',
    notes: 'Transmitted verified skill dossier with ' + job.matchScore + '% match.'
  };

  STATE.applications.unshift(newApp);
  closeModal();
  showToast(`Application successfully sent to ${job.company}!`, 'success');

  if (STATE.activeRole === 'student' && STATE.currentTab === 'applications') {
    renderStudentDashboard(document.getElementById('dmain'), 'applications');
  }
}

// Modal: Skill Assessment Quiz
let currentQuizData = null;
let currentQuestionIndex = 0;
let userScore = 0;

function openAssessmentModal(skillName) {
  const quizList = STATE.quizzes[skillName] || STATE.quizzes['System Design & Distributed Systems'];
  currentQuizData = { skillName, questions: quizList };
  currentQuestionIndex = 0;
  userScore = 0;

  renderQuizStep();
}

function renderQuizStep() {
  const { skillName, questions } = currentQuizData;
  const q = questions[currentQuestionIndex];

  openModal(`
    <div class="modal-head">
      <div>
        <span class="pill pill-indigo" style="margin-bottom:6px;">Skill Assessment</span>
        <h3 style="font-size:18px;">${skillName}</h3>
      </div>
      <div class="modal-close" onclick="closeModal()">✕</div>
    </div>

    <div style="display:flex;justify-content:space-between;font-size:12.5px;color:var(--slate-500);margin-bottom:12px;">
      <span>Question ${currentQuestionIndex + 1} of ${questions.length}</span>
      <span>Pass threshold: 60%+</span>
    </div>

    <div style="font-size:15px;font-weight:600;margin-bottom:18px;color:var(--slate-900);line-height:1.45;">
      ${q.q}
    </div>

    <div id="quizOptions">
      ${q.options.map((opt, idx) => `
        <div class="quiz-option" onclick="selectQuizOption(${idx})">${String.fromCharCode(65 + idx)}. ${opt}</div>
      `).join('')}
    </div>

    <div style="margin-top:20px;display:flex;justify-content:flex-end;">
      <button id="nextQuizBtn" class="btn btn-primary btn-sm" disabled onclick="submitQuizAnswer()">Next Question →</button>
    </div>
  `);
}

let selectedOptionIdx = -1;

function selectQuizOption(idx) {
  selectedOptionIdx = idx;
  document.querySelectorAll('.quiz-option').forEach((el, i) => {
    if (i === idx) el.classList.add('selected');
    else el.classList.remove('selected');
  });

  const nextBtn = document.getElementById('nextQuizBtn');
  if (nextBtn) nextBtn.removeAttribute('disabled');
}

function submitQuizAnswer() {
  const q = currentQuizData.questions[currentQuestionIndex];
  if (selectedOptionIdx === q.correct) {
    userScore++;
  }

  currentQuestionIndex++;
  selectedOptionIdx = -1;

  if (currentQuestionIndex < currentQuizData.questions.length) {
    renderQuizStep();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const { skillName, questions } = currentQuizData;
  const pct = Math.round((userScore / questions.length) * 100);
  const passed = pct >= 50;

  if (passed) {
    const sk = STATE.skills.find(s => s.name === skillName);
    if (sk) {
      sk.level = Math.min(100, sk.level + 10);
      sk.verified = true;
      sk.testsPassed = (sk.testsPassed || 1) + 1;
    }
  }

  openModal(`
    <div style="text-align:center;padding:10px 0;">
      <div style="font-size:52px;margin-bottom:12px;">${passed ? '🎉' : '📚'}</div>
      <h2 style="font-size:22px;color:var(--slate-900);">${passed ? 'Assessment Passed!' : 'Needs Revision'}</h2>
      <p style="font-size:14px;color:var(--slate-500);margin-top:6px;">
        You scored <strong>${userScore}/${questions.length} (${pct}%)</strong> on ${skillName}.
      </p>

      ${passed ? `
        <div style="background:var(--emerald-100);padding:14px;border-radius:12px;margin:18px 0;border:1px solid #A7F3D0;">
          <div style="font-weight:700;color:#065F46;">+10% Verified Proficiency Added!</div>
          <div style="font-size:12.5px;color:#047857;margin-top:2px;">Your match percentage for Google and Microsoft has been updated automatically.</div>
        </div>
      ` : `
        <div style="background:var(--amber-100);padding:14px;border-radius:12px;margin:18px 0;border:1px solid #FDE68A;">
          <div style="font-weight:700;color:#92400E;">Review Recommended Modules</div>
          <div style="font-size:12.5px;color:#78350F;margin-top:2px;">Review the recommended learning roadmap and try again in 24 hours.</div>
        </div>
      `}

      <button class="btn btn-primary btn-block" onclick="closeModal();renderDashboard('student', STATE.currentTab);">Back to Dashboard</button>
    </div>
  `);

  if (passed) {
    showToast(`Proficiency upgraded for ${skillName}!`, 'success');
  }
}

// Modal: Book Mentorship
function openBookMentorModal(mentorId) {
  const mentor = STATE.mentors.find(m => m.id === mentorId) || STATE.mentors[0];

  openModal(`
    <div class="modal-head">
      <div>
        <h3 style="font-size:18px;">Book 1:1 with ${mentor.name}</h3>
        <div style="font-size:13px;color:var(--slate-500);">${mentor.company}</div>
      </div>
      <div class="modal-close" onclick="closeModal()">✕</div>
    </div>

    <div class="field">
      <label>Select Session Focus</label>
      <select id="mentorTopic">
        <option>System Design Architecture Audit</option>
        <option>Mock Coding &amp; LeetCode Technical Round</option>
        <option>Resume &amp; GitHub Portfolio Review</option>
        <option>Career Transition to FAANG / Tier-1</option>
      </select>
    </div>

    <div class="field">
      <label>Choose Date &amp; Time Slot</label>
      <select id="mentorSlot">
        <option>Tomorrow, 5:00 PM - 5:45 PM IST</option>
        <option>Thursday, 6:30 PM - 7:15 PM IST</option>
        <option>Saturday, 11:00 AM - 11:45 AM IST</option>
      </select>
    </div>

    <div class="field">
      <label>What specific questions would you like answered?</label>
      <textarea rows="3" placeholder="e.g. Would like feedback on my consistent hashing implementation and mock interview tips for Google..."></textarea>
    </div>

    <div style="display:flex;gap:10px;margin-top:20px;">
      <button class="btn btn-ghost btn-block" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary btn-block" onclick="confirmMentorBooking('${mentor.name}')">Confirm Free 1:1 Booking</button>
    </div>
  `);
}

function confirmMentorBooking(mentorName) {
  closeModal();
  showToast(`Mentorship session booked with ${mentorName}! Check your calendar.`, 'success');
}

// Modal: Post Internship
function openPostInternshipModal() {
  openModal(`
    <div class="modal-head">
      <div>
        <h3 style="font-size:18px;">Post New Internship</h3>
        <div style="font-size:13px;color:var(--slate-500);">Auto-matched to students across 250+ partner universities</div>
      </div>
      <div class="modal-close" onclick="closeModal()">✕</div>
    </div>

    <div class="field"><label>Role Title</label><input type="text" id="newJobTitle" placeholder="e.g. Backend Platform Engineer Intern"></div>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div class="field"><label>Monthly Stipend</label><input type="text" id="newJobStipend" placeholder="e.g. ₹80,000/mo"></div>
      <div class="field"><label>Headcount Openings</label><input type="number" id="newJobOpenings" value="5"></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div class="field">
        <label>Work Mode</label>
        <select id="newJobMode">
          <option>Hybrid</option><option>Remote</option><option>Onsite</option>
        </select>
      </div>
      <div class="field">
        <label>Tech Domain</label>
        <select id="newJobDomain">
          <option>Full Stack</option><option>AI/ML</option><option>Cloud</option><option>Embedded</option>
        </select>
      </div>
    </div>

    <div class="field"><label>Required Skills (Comma separated)</label><input type="text" id="newJobSkills" placeholder="e.g. Python & FastApi, Docker & Kubernetes"></div>

    <div class="field"><label>Role Description</label><textarea rows="3" id="newJobDesc" placeholder="Describe the project scope and engineering responsibilities..."></textarea></div>

    <div style="display:flex;gap:10px;margin-top:20px;">
      <button class="btn btn-ghost btn-block" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary btn-block" onclick="submitNewInternship()">Publish Role 🚀</button>
    </div>
  `);
}

function submitNewInternship() {
  const title = document.getElementById('newJobTitle')?.value || 'Software Engineer Intern';
  const stipend = document.getElementById('newJobStipend')?.value || '₹70,000/mo';
  const mode = document.getElementById('newJobMode')?.value || 'Hybrid';
  const domain = document.getElementById('newJobDomain')?.value || 'Full Stack';
  const skills = (document.getElementById('newJobSkills')?.value || 'Python & FastApi, React.js & TypeScript').split(',').map(s => s.trim());
  const desc = document.getElementById('newJobDesc')?.value || 'Work on high-concurrency microservices and real-time cloud data pipelines.';

  const newJob = {
    id: 'job-' + (STATE.internships.length + 1),
    title: title,
    company: STATE.userProfiles.industry.company,
    logoBg: '#10B981',
    logoText: 'G',
    location: 'Bengaluru / ' + mode,
    stipend: stipend,
    stipendNum: 70000,
    duration: '6 Months',
    type: mode,
    domain: domain,
    skillsReq: skills,
    matchScore: 92,
    openings: 6,
    postedDate: 'Just now',
    deadline: '15 Sep 2026',
    description: desc
  };

  STATE.internships.unshift(newJob);
  closeModal();
  showToast('New internship posted and published across all campus talent pools!', 'success');

  if (STATE.activeRole === 'industry') {
    renderIndustryDashboard(document.getElementById('dmain'), STATE.currentTab);
  }
}

// Modal: Add Custom Skill
function openAddSkillModal() {
  openModal(`
    <div class="modal-head">
      <div>
        <h3 style="font-size:18px;">Add Skill to Matrix</h3>
        <div style="font-size:13px;color:var(--slate-500);">Self-report or verify with an automated quiz</div>
      </div>
      <div class="modal-close" onclick="closeModal()">✕</div>
    </div>

    <div class="field"><label>Skill Name</label><input type="text" id="addSkillName" placeholder="e.g. Golang &amp; Microservices"></div>
    <div class="field">
      <label>Skill Category</label>
      <select id="addSkillCat">
        <option>Backend &amp; Data</option><option>Frontend</option><option>Cloud &amp; DevOps</option><option>AI/ML</option>
      </select>
    </div>
    <div class="field"><label>Self-Estimated Proficiency (%)</label><input type="range" min="30" max="95" value="75" id="addSkillLevel" oninput="document.getElementById('skillLevelVal').innerText = this.value + '%'"><div style="text-align:right;font-weight:600;font-size:13px;" id="skillLevelVal">75%</div></div>

    <div style="display:flex;gap:10px;margin-top:20px;">
      <button class="btn btn-ghost btn-block" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary btn-block" onclick="saveNewSkill()">Add &amp; Verify Skill</button>
    </div>
  `);
}

function saveNewSkill() {
  const name = document.getElementById('addSkillName')?.value || 'Rust & WebAssembly';
  const cat = document.getElementById('addSkillCat')?.value || 'Backend';
  const lvl = parseInt(document.getElementById('addSkillLevel')?.value || '75', 10);

  STATE.skills.push({
    id: 'sk-' + (STATE.skills.length + 1),
    name: name,
    category: cat,
    level: lvl,
    verified: false,
    testsPassed: 0
  });

  closeModal();
  showToast(`Added ${name} to your skill profile!`, 'success');
  if (STATE.activeRole === 'student') {
    renderStudentDashboard(document.getElementById('dmain'), 'skills');
  }
}

// Modal: Schedule Campus Drive (TPO)
function openScheduleDriveModal() {
  openModal(`
    <div class="modal-head">
      <div>
        <h3 style="font-size:18px;">Schedule Corporate Recruitment Drive</h3>
        <div style="font-size:13px;color:var(--slate-500);">Coordinate pooled or campus-exclusive recruitment</div>
      </div>
      <div class="modal-close" onclick="closeModal()">✕</div>
    </div>

    <div class="field"><label>Company Partner</label><input type="text" placeholder="e.g. Nvidia AI Labs / Google India"></div>
    <div class="field"><label>Target Departments</label><input type="text" placeholder="e.g. CSE, IT, ECE"></div>
    <div class="field"><label>Date of Online Skill Round</label><input type="date" value="2026-09-15"></div>

    <div style="display:flex;gap:10px;margin-top:20px;">
      <button class="btn btn-ghost btn-block" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary btn-block" onclick="closeModal();showToast('Recruitment drive broadcasted to eligible students!', 'success')">Schedule &amp; Broadcast</button>
    </div>
  `);
}

// Modal: Notifications
function openNotificationsModal() {
  openModal(`
    <div class="modal-head">
      <div>
        <h3 style="font-size:18px;">Notifications &amp; Alerts</h3>
      </div>
      <div class="modal-close" onclick="closeModal()">✕</div>
    </div>

    <div>
      ${STATE.notifications.map(n => `
        <div class="notif-item">
          <div class="notif-ic">${n.icon}</div>
          <div>
            <div class="notif-title">${n.title}</div>
            <div class="notif-desc">${n.desc}</div>
            <div class="notif-time">${n.time}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `);
}
