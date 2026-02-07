// Portfolio Data - REPLACE THIS WITH YOUR RESUME CONTENT
// Resume Text for Chatbot Context
const RESUME_CONTENT = `
[PASTE YOUR FULL RESUME TEXT HERE TO TRAIN THE CHATBOT]
`;

const GROQ_API_KEY = "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"; // WARNING: Exposed to client

const portfolioData = {
    personal: {
        name: "Your Name",
        role: "Software Engineer",
        description: "A passionate developer building digital experiences. Specialized in Web Development, UI/UX, and solving complex problems with simple solutions.",
        status: "Available for work"
    },
    experience: [
        {
            role: "Senior Developer",
            company: "Tech Corp Inc.",
            period: "2022 - Present",
            description: "Led development of core platform features. Improved system performance by 30%. Mentored junior developers.",
            tags: ["React", "Node.js", "AWS"]
        },
        {
            role: "Web Developer",
            company: "Creative Studio",
            period: "2020 - 2022",
            description: "Developed responsive websites for diverse clients. Collaborated with design team to implement pixel-perfect UIs.",
            tags: ["HTML/CSS", "JavaScript", "WordPress"]
        }
    ],
    projects: [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive analytics dashboard for online retailers. Features real-time data visualization and inventory management.",
            tech: ["Vue.js", "Firebase", "Chart.js"],
            link: "#"
        },
        {
            title: "Task Management App",
            description: "Productivity application with drag-and-drop interface, team collaboration features, and cloud sync.",
            tech: ["React", "Redux", "Node.js"],
            link: "#"
        },
        {
            title: "Portfolio Generator",
            description: "CLI tool to generate static portfolio sites from JSON data. Built with efficiency and minimalism in mind.",
            tech: ["Go", "Markdown"],
            link: "#"
        }
    ],
    skills: [
        { name: "JavaScript", icon: "fa-js" },
        { name: "React", icon: "fa-react" },
        { name: "Node.js", icon: "fa-node" },
        { name: "Python", icon: "fa-python" },
        { name: "HTML5", icon: "fa-html5" },
        { name: "CSS3", icon: "fa-css3-alt" },
        { name: "Git", icon: "fa-git-alt" },
        { name: "Docker", icon: "fa-docker" }
    ],
    contact: {
        email: "hello@example.com",
        phone: "+1 (555) 123-4567",
        github: "github.com/yourusername",
        linkedin: "linkedin.com/in/yourusername",
        location: "City, Country"
    }
};

// DOM Elements
const contentDisplay = document.getElementById('content-display');
const navLinks = document.querySelectorAll('.nav-links li');
const currentSectionLabel = document.getElementById('current-section');
const profileName = document.getElementById('profile-name');
const profileRole = document.getElementById('profile-role');

// Initialize
function init() {
    // Set Profile Info
    profileName.textContent = portfolioData.personal.name;
    profileRole.textContent = portfolioData.personal.role;

    // Add Event Listeners
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked
            link.classList.add('active');

            // Render Content
            const tab = link.getAttribute('data-tab');
            renderContent(tab);
        });
    });

    // Render Initial Content (About)
    renderContent('about');

    // Initialize Chatbot
    initChatbot();
}

// Render Content Function
function renderContent(tab) {
    // Update Header
    currentSectionLabel.textContent = tab.charAt(0).toUpperCase() + tab.slice(1);

    // Clear Container
    contentDisplay.innerHTML = '';
    contentDisplay.style.opacity = '0';

    setTimeout(() => {
        switch (tab) {
            case 'about':
                contentDisplay.innerHTML = `
                    <div class="about-section">
                        <h1>Hello, I'm <span style="color:var(--accent-color)">${portfolioData.personal.name}</span>.</h1>
                        <p class="about-intro">${portfolioData.personal.description}</p>
                        
                        <div class="card">
                            <h3><i class="fa-solid fa-terminal" style="margin-right:10px; color:var(--accent-color)"></i>Quick Stats</h3>
                            <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); margin-top:1rem;">
                                <div>
                                    <div style="font-size:1.5rem; font-weight:bold; color:var(--text-primary)">2+</div>
                                    <div style="font-size:0.8rem; color:var(--text-secondary)">Years Exp.</div>
                                </div>
                                <div>
                                    <div style="font-size:1.5rem; font-weight:bold; color:var(--text-primary)">10+</div>
                                    <div style="font-size:0.8rem; color:var(--text-secondary)">Projects</div>
                                </div>
                                <div>
                                    <div style="font-size:1.5rem; font-weight:bold; color:var(--text-primary)">100%</div>
                                    <div style="font-size:0.8rem; color:var(--text-secondary)">Commitment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'experience':
                const expHTML = portfolioData.experience.map(job => `
                    <div class="card">
                        <div class="card-meta">
                            <span style="font-weight:600; color:var(--text-primary); font-size:1rem;">${job.role}</span>
                            <span>${job.period}</span>
                        </div>
                        <div style="margin-bottom:0.5rem; color:var(--accent-color); font-size:0.9rem;">${job.company}</div>
                        <p class="card-desc">${job.description}</p>
                        <div class="tag-container">
                            ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `).join('');
                contentDisplay.innerHTML = `<div class="card-grid" style="grid-template-columns: 1fr;">${expHTML}</div>`;
                break;

            case 'projects':
                const projHTML = portfolioData.projects.map(proj => `
                    <div class="card">
                        <h3>${proj.title}</h3>
                        <p class="card-desc">${proj.description}</p>
                        <div class="tag-container" style="margin-bottom:1rem;">
                            ${proj.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                        </div>
                        <a href="${proj.link}" style="font-size:0.9rem; color:var(--accent-color); text-decoration:none;"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Project</a>
                    </div>
                `).join('');
                contentDisplay.innerHTML = `<div class="card-grid">${projHTML}</div>`;
                break;

            case 'skills':
                const skillsHTML = portfolioData.skills.map(skill => `
                    <div class="skill-item">
                        <i class="fa-brands ${skill.icon} fa-fw"></i> <!-- FontAwesome brands style -->
                        <div>${skill.name}</div>
                    </div>
                `).join('');
                // Fallback for non-brand icons if needed (generic code icon)
                contentDisplay.innerHTML = `<div class="skills-grid">${skillsHTML}</div>`;
                break;

            case 'contact':
                contentDisplay.innerHTML = `
                    <div class="card contact-card">
                        <h3 style="margin-bottom:1.5rem;">Get in Touch</h3>
                        <a href="mailto:${portfolioData.contact.email}" class="contact-link">
                            <i class="fa-solid fa-envelope"></i>
                            <span>${portfolioData.contact.email}</span>
                        </a>
                        <a href="tel:${portfolioData.contact.phone}" class="contact-link">
                            <i class="fa-solid fa-phone"></i>
                            <span>${portfolioData.contact.phone}</span>
                        </a>
                        <a href="https://${portfolioData.contact.linkedin}" target="_blank" class="contact-link">
                            <i class="fa-brands fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://${portfolioData.contact.github}" target="_blank" class="contact-link">
                            <i class="fa-brands fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <div style="margin-top:2rem; padding-top:1rem; border-top:1px solid var(--border-color); font-size:0.9rem; color:var(--text-secondary);">
                            <i class="fa-solid fa-location-dot" style="margin-right:1rem; color:var(--accent-color);"></i>
                            ${portfolioData.contact.location}
                        </div>
                    </div>
                `;
                break;
        }

        // Fade In
        contentDisplay.style.opacity = '1';
        contentDisplay.style.transition = 'opacity 0.3s ease';
    }, 100);
}

// Run Init
document.addEventListener('DOMContentLoaded', init);

// Chatbot Logic
function initChatbot() {
    const chatToggle = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle Chat
    function toggleChat() {
        chatWindow.classList.toggle('open');
        if (chatWindow.classList.contains('open')) {
            chatInput.focus();
        }
    }

    if (chatToggle) chatToggle.addEventListener('click', toggleChat);
    if (chatClose) chatClose.addEventListener('click', toggleChat);

    // Send Message
    async function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add User Message
        addMessage(message, 'user');
        chatInput.value = '';

        // Show Typing Indicator
        const typingId = addTypingIndicator();

        try {
            // Call Groq API
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "llama3-8b-8192",
                    messages: [
                        {
                            role: "system",
                            content: `You are a helpful portfolio assistant. You are answering questions on behalf of the candidate. 
                            Here is the candidate's resume content:
                            ${RESUME_CONTENT}
                            
                            If the resume content is empty or placeholder, politely ask the visitor to check back later or contact the candidate directly.
                            Keep answers concise, professional, and friendly. Answer as if you are the assistant representing the candidate.`
                        },
                        {
                            role: "user",
                            content: message
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 1024
                })
            });

            const data = await response.json();

            // Remove Typing Indicator
            removeMessage(typingId);

            if (data.choices && data.choices[0]) {
                addMessage(data.choices[0].message.content, 'bot');
            } else {
                addMessage("I'm sorry, I encountered an error. Please try again.", 'bot');
                console.error('Groq API Error:', data);
            }

        } catch (error) {
            console.error('Network Error:', error);
            removeMessage(typingId);
            addMessage("I'm having trouble connecting right now. Please check your internet connection.", 'bot');
        }
    }

    if (chatSend) chatSend.addEventListener('click', sendMessage);
    if (chatInput) chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Helper: Add Message
    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.classList.add('message', `${sender}-message`);
        div.textContent = text;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return div.id = 'msg-' + Date.now();
    }

    // Helper: Typing Indicator
    function addTypingIndicator() {
        const div = document.createElement('div');
        div.classList.add('typing-indicator');
        div.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        div.id = 'typing-' + Date.now();
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return div.id;
    }

    function removeMessage(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }
}
