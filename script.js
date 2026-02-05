// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');
const currentYear = document.getElementById('currentYear');
const educationCards = document.querySelector('.education-cards');
const experienceCards = document.querySelector('.experience-cards');
const languagesContainer = document.querySelector('.languages-container');
const projectsGrid = document.querySelector('.projects-grid');
const messageForm = document.getElementById('messageForm');

// Set current year in footer
currentYear.textContent = new Date().getFullYear();

// Mobile menu toggle
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Add this line
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.classList.remove('menu-open');
    }
});

// Close menu on escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.classList.remove('menu-open');
    }
});


// Education data from CV
const educationData = [
    {
        title: "Master of Science (MSc) in Applied Data Science",
        period: "2025-2026",
        institution: "University of Essex, Colchester, United Kingdom",
        achievement: "First Class 🏆",
        achievementType: "honors",
        modules: [
            "Data Visualisation",
            "Programming and Text Analytics with R",
            "Databases and data processing with SQL",
            "Data analysis and statistics with R",
            "Modelling Experimental and Observational Data",
            "Artificial Intelligence and Machine Learning with Applications",
            "Mathematics for Data Science"
        ],
        dissertation: "Multivariate Crime-Prediction in London using the Spatio-Temporal Graph Neural Network with Zero-Inflated Negative Binomial Distribution (STGNN-ZINB) - Currently Prepared for Publication",
        color: "linear-gradient(to bottom, #4361ee, #4cc9f0)"
    },
    {
        title: "Bachelor of Science (Hons) in Computer Networks",
        period: "2023-2024",
        institution: "Liverpool John Moores University, Liverpool, United Kingdom",
        achievement: "First Class 🏆",
        achievementType: "honors",
        modules: [
            "Database Systems",
            "Information system Development",
            "Mobile and Web Development",
            "Advanced Network",
            "Network Forensics",
            "User Experience Design"
        ],
        dissertation: null,
        color: "linear-gradient(to bottom, #4361ee, #3f37c9)"
    },
    {
        title: "Higher Diploma in Infrastructure & Networks",
        period: "2022-2023",
        institution: "Auston University, Yangon, Myanmar",
        achievement: null,
        achievementType: null,
        modules: [
            "Computer Architecture & Network Implementation",
            "Microcontrollers, Sensors & Autuators",
            "Information Systems",
            "Forensics & Security Management",
            "Programming with Python",
            "Virtualization"
        ],
        dissertation: null,
        color: "linear-gradient(to bottom, #4cc9f0, #3f37c9)"
    },
    {
        title: "Finished 2nd Year in Computer Science & Networking",
        period: "2019-2020",
        institution: "University of Information Technology, Yangon, Myanmar",
        achievement: "Left due to COVID-19 and Political Situation",
        achievementType: "honors",
        modules: [
            "Programming Fundamentals",
            "Computer Architecture",
            "Discrete Mathematics",
            "Data Structures",
            "Operating Systems",
            "Communication Skills"
        ],
        dissertation: null,
        color: "linear-gradient(to bottom, #4361ee, #f72585)"
    },
    {
        title: "High School Education",
        period: "2018-2019",
        institution: "No.1 BEHS Kyankhin, Kyankhin Township, Myanmar",
        achievement: "Outstanding Student Award ⭐",
        achievementType: "honors",
        modules: null,
        details: "Five Distinctions: Myanmar, Mathematics, Physics, Chemistry, Biology",
        dissertation: null,
        color: "linear-gradient(to bottom, #f72585, #4361ee)"
    }
];
   

// Experience data from CV
const experienceData = [
    {
        title: "Software Developer Intern",
        company: "KBZ Bank Limited, Yangon, Myanmar",
        period: "2023",
        focus: [
            "API Creation and Integration using C#.Net & ASP.NET within Smart HR System",
            "Database Implementation & Testing",
            "Backend development for employee management features",
            "Integration with existing banking systems",
            "Code optimization and performance testing"
        ],
        icon: "💻",
        tech: ["C#.NET", "ASP.NET", "SQL", "API Development"]
    },
    {
        title: "Junior Accountant",
        company: "Aung Yadanar Gold & Jewellery Shop, Myanmar",
        period: "2020-22",
        focus: [
            "Customer Information Entry and database management",
            "Gold Price & Interest Calculation for transactions",
            "Financial Record Management and bookkeeping",
            "Daily sales reporting and inventory tracking",
            "Cash flow monitoring and reconciliation"
        ],
        icon: "📊",
        tech: ["Financial Analysis", "Data Entry", "Record Keeping", "MS Excel"]
    }
];
   

// Languages data from CV
const languagesData = [
    {
        name: "English",
        details: "Duolingo Score: 130. Diploma in Wall Street English, Yangon, Myanmar. Upper Intermediate in General English at British Council Myanmar"
    },
    {
        name: "Burmese",
        details: "Native"
    },
    {
        name: "Chinese",
        details: "Basic"
    }
];

let projectsData = [];

// Render education cards
function renderEducationCards() {
    educationCards.innerHTML = educationData.map(edu => `
        <div class="edu-card">
            <div class="edu-color-side" style="background: ${edu.color};"></div>
            <div class="edu-content">
                <div class="edu-header">
                    <div class="edu-title-wrapper">
                        <h3 class="edu-title">${edu.title}</h3>
                        ${edu.achievement ? 
                            `<span class="achievement-simple ${edu.achievementType === 'honors' ? 'honors-badge' : edu.achievementType === 'outstanding' ? 'outstanding-badge' : ''}">
                                ${edu.achievement}
                            </span>` 
                            : ''
                        }
                    </div>
                    <span class="edu-period">${edu.period}</span>
                </div>
                <p class="edu-institution">${edu.institution}</p>
                
                ${edu.details ? `<p class="edu-details">${edu.details}</p>` : ''}
                
                ${edu.dissertation ? `
                    <div class="edu-dissertation">
                        <strong>Dissertation:</strong> ${edu.dissertation}
                    </div>
                ` : ''}
                
                ${edu.modules ? `
                    <div class="edu-modules">
                        <h4>Key Modules:</h4>
                        <div class="modules-list">
                            ${edu.modules.map(module => `<span class="module-tag">${module}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}
   
function renderExperienceCards() {
    experienceCards.innerHTML = experienceData.map(exp => `
        <div class="exp-card">
            <div class="exp-header">
                <div class="exp-title-wrapper">
                    <div class="exp-title-icon">${exp.icon}</div>
                    <div>
                        <h3 class="exp-title">${exp.title}</h3>
                        <p class="exp-company">${exp.company}</p>
                    </div>
                </div>
                <span class="exp-period">${exp.period}</span>
            </div>
            
            <div class="exp-tech-tags">
                ${exp.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <div class="exp-focus">
                <h4>Key Responsibilities:</h4>
                <ul class="focus-list">
                    ${exp.focus.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Render languages
function renderLanguages() {
    languagesContainer.innerHTML = languagesData.map(lang => `
        <div class="lang-item">
            <h3 class="lang-name">${lang.name}</h3>
            <p class="lang-details">${lang.details}</p>
        </div>
    `).join('');
}

async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        projectsData = data.projects;
        renderProjectCards();
    } catch (error) {
        console.error('Error loading projects:', error);
        // If JSON fails, show empty projects
        projectsData = [];
        renderProjectCards();
    }
}

// Render project cards
function renderProjectCards() {
    if (projectsData.length === 0) {
        projectsGrid.innerHTML = '<p class="no-projects">No projects to display</p>';
        return;
    }
    
    projectsGrid.innerHTML = projectsData.map(project => {
        const hasImage = project.image && project.image.trim() !== '';
        
        return `
        <div class="project-card">
            <div class="project-img">
                ${hasImage ? 
                    `<img src="${project.image}" alt="${project.title}">` : 
                    `<div class="placeholder-icon">
                        <i class="fas fa-code"></i>
                        <span>Project Image</span>
                    </div>`
                }
            </div>
            <div class="project-content">
                <span class="project-year">${project.year}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> View Details</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// Form submission
messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
    
    // Reset form
    messageForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize all rendered content
document.addEventListener('DOMContentLoaded', () => {
    renderEducationCards();
    renderExperienceCards();
    renderLanguages();
    loadProjects();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('.navbar').style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            document.querySelector('.navbar').style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
        }
    });
});