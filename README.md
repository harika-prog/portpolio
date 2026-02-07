# Minimalist Portfolio with AI Chatbot

A sleek, dashboard-style portfolio website featuring a single-page unscrollable layout and an integrated AI assistant powered by Groq.

## Features
- **Dashboard UI**: Clean, sidebar navigation without page reloads.
- **AI Chatbot**: "Trained" on your resume to answer questions about your experience.
- **Responsive Design**: Works on desktop and mobile.
- **Customizable**: Easy to update data and styles.

## Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/portfolio-dashboard.git
    cd portfolio-dashboard
    ```

2.  **Add your Data**:
    - Open `script.js`.
    - Update `portfolioData` object with your details.
    - Update `RESUME_CONTENT` with your resume text for the chatbot.

3.  **Run Locally**:
    - Simply open `index.html` in your browser.
    - Or use a local server: `python -m http.server`

## Deployment (Render)

This project is ready to be deployed as a **Static Site** on Render.

1.  **Push to GitHub**:
    - Create a new repository on GitHub.
    - Run these commands in your project folder:
      ```bash
      git add .
      git commit -m "Initial commit"
      git branch -M main
      git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
      git push -u origin main
      ```

2.  **Deploy on Render**:
    - Go to [dashboard.render.com](https://dashboard.render.com/).
    - Click **New +** -> **Static Site**.
    - Connect your GitHub account and select your repository.
    - **Build Command**: (Leave empty)
    - **Publish Directory**: `.` (Dot means root directory)
    - Click **Create Static Site**.

Your portfolio will be live in seconds!
