# Modern Web Portfolio

A clean, responsive portfolio website to showcase your projects and skills.

## Features

- **Responsive Design**: Works on all devices
- **Dynamic Projects**: Easy to add/update projects
- **Smooth Navigation**: Smooth scrolling between sections
- **Modern UI**: Clean, professional design
- **Project Links**: Direct navigation to live demos and GitHub repos

## How to Add Projects

1. Open `script.js`
2. Add your project to the `projects` array:

```javascript
{
    title: "Your Project Name",
    description: "Detailed description of what your project does and its key features",
    technologies: ["React", "Node.js", "MongoDB"], // Array of technologies used
    liveLink: "https://your-live-demo.com", // Link to live version
    githubLink: "https://github.com/yourusername/project" // Link to GitHub repo
}
```

## Customization

- **Colors**: Edit CSS variables in `styles.css`
- **Content**: Update text in `index.html`
- **Contact**: Change email in the contact section
- **Name**: Replace "Liana" with your name throughout the files

## File Structure

```
webportfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript functionality and project data
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in your browser
2. Customize the content with your information
3. Add your projects to the `projects` array in `script.js`
4. Deploy to your preferred hosting platform

## Deployment Options

- GitHub Pages
- Netlify
- Vercel
- Any web hosting service