const projectsByCategory = {

    web: [
        {
            title: "Lee's Collection MW",
            description: "E-commerce website selling jewelry and accessories with visually appealing design and convenient shopping experience. Features product catalog, shopping cart, and online presence for jewelry market.",
            technologies: ["React", "E-commerce", "CSS3", "JavaScript"],
            icon: "fas fa-gem",
            liveLink: "https://leescollectionmw.netlify.app/",
         
        },
        {
            title: "Mwayi Foundation Website",
            description: "Nonprofit organization website with donation management system, volunteer engagement, and foundation information showcase.",
            technologies: ["React", "Donation System", "CMS"],
            icon: "fas fa-heart",
            liveLink: "#",
         
        },
        {
            title: "Gerar Farm Platform",
            description: "Agricultural technology platform exploring intersection of technology and sustainability with data-driven crop management and digital tools for smallholder farms.",
            technologies: ["React", "Data Analytics", "Agriculture Tech"],
            icon: "fas fa-seedling",
            liveLink: "https://gerarfarm.netlify.app/",
         
        },
        {
            title: "Girl Rise Platform",
            description: "Frontend development and UI/UX design for girls' empowerment platform. Social media and content management system for educational initiatives and community engagement.",
            technologies: ["React", "UI/UX", "Content Management"],
            icon: "fas fa-users",
            liveLink: null,
            hasAttachments: true
        }
    ],
    automation: [
        {
            title: "Availon Business Platform",
            description: "Business development platform for small business growth and scalability. Digital tools and systems for business management and expansion.",
            technologies: ["React", "Business Tools", "Node.js"],
            icon: "fas fa-briefcase",
            liveLink: "https://availonholdings.netlify.app/",
         
        }
    ]
}

// Function to create project list
function createProjectList(projects) {
    return projects.map((project, index) => `
        <div class="project-row animate-on-scroll" style="animation-delay: ${index * 0.2}s">
            <div class="project-name">${project.title}</div>
            <div class="project-desc">${project.description}</div>
            <div class="project-tech-list">
                ${project.technologies.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
            </div>
            <div class="project-actions">
                ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="action-btn"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="action-btn secondary"><i class="fab fa-github"></i> Code</a>` : ''}
                ${project.hasAttachments ? `<button class="action-btn attachments-btn" onclick="showAttachments('${project.title}')"><i class="fas fa-paperclip"></i> View Attachments</button>` : ''}
            </div>
        </div>
    `).join('');
}

// Function to create project cards (for old grid if needed)
function createProjectCard(project, index) {
    return `
        <div class="project-card" style="animation-delay: ${index * 0.2}s">
            <div class="project-image">
                <i class="fas fa-code"></i>
                ${project.title}
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    <strong><i class="fas fa-tools"></i> Technologies:</strong> ${project.technologies.join(', ')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${project.githubLink}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to render projects by category
function renderProjectsByCategory() {
    Object.keys(projectsByCategory).forEach(category => {
        const container = document.getElementById(`${category}Projects`);
        if (container) {
            container.innerHTML = createProjectList(projectsByCategory[category]);
        }
    });
}

// Function to setup table-style tabs
function setupTabs() {
    const tabCells = document.querySelectorAll('.tab-cell');
    const tabSections = document.querySelectorAll('.tab-section');
    
    tabCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const targetTab = cell.getAttribute('data-tab');
            
            // Remove active class from all cells and sections
            tabCells.forEach(c => c.classList.remove('active'));
            tabSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked cell and corresponding section
            cell.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Function to render projects (legacy support)
function renderProjects() {
    renderProjectsByCategory();
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Typewriter effect
function setupTypewriter() {
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        typewriterElement.style.width = '0';
        
        setTimeout(() => {
            typewriterElement.style.width = '100%';
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    typewriterElement.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 100);
        }, 1000);
    }
}

// Parallax effect for hero section
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroBg = document.querySelector('.hero-bg');
        
        if (heroContent && heroBg) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Add floating animation to skill items
function setupSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.addEventListener('mouseenter', () => {
            item.style.animation = 'none';
            item.style.transform = 'translateY(-10px) scale(1.05)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize particle effect (simple version)
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            opacity: 0.3;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        hero.appendChild(particle);
    }
}

// Function to add new project (you can call this to add projects dynamically)
function addProject(newProject) {
    projects.push(newProject);
    renderProjects();
    setupScrollAnimations(); // Re-setup animations for new elements
}

// Set active navigation based on current page
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function showAttachments(projectTitle) {
    const modal = document.createElement('div');
    modal.className = 'attachments-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${projectTitle} - Screenshots</h3>
                <button class="close-btn" onclick="closeAttachments()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="screenshots-grid">
                    <img src="1.png" alt="Girl Rise Screenshot 1" class="screenshot">
                    <img src="2.png" alt="Girl Rise Screenshot 2" class="screenshot">
                    <img src="3.png" alt="Girl Rise Screenshot 3" class="screenshot">
                    <img src="4.png" alt="Girl Rise Screenshot 4" class="screenshot">
                    <img src="5.png" alt="Girl Rise Screenshot 5" class="screenshot">
                    <img src="6.png" alt="Girl Rise Screenshot 6" class="screenshot">
                    <img src="7.png" alt="Girl Rise Screenshot 7" class="screenshot">
                    <img src="8.png" alt="Girl Rise Screenshot 8" class="screenshot">
                    <img src="9.png" alt="Girl Rise Screenshot 9" class="screenshot">
                    <img src="10.png" alt="Girl Rise Screenshot 10" class="screenshot">
                    <img src="11.png" alt="Girl Rise Screenshot 11" class="screenshot">
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Close attachments modal
function closeAttachments() {
    const modal = document.querySelector('.attachments-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setCurrentYear();
    setActiveNavigation();
    renderProjects();
    setupTabs();
    setupSmoothScrolling();
    setupNavbarScroll();
    setupMobileMenu();
    setupScrollAnimations();
    setupTypewriter();
    setupParallax();
    setupSkillAnimations();
    
    // Only create particles on home page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        createParticles();
    }
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
});

// Example of how to add a new project:
// addProject({
//     title: "New Amazing Project",
//     description: "Description of your new project with all its amazing features",
//     technologies: ["React", "TypeScript", "GraphQL"],
//     liveLink: "https://your-live-link.com",
//     githubLink: "https://github.com/yourusername/project"
// });