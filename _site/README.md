# Portfolio Website (Jekyll)

A modern, responsive portfolio website built with Jekyll for GitHub Pages. Features a customizable banner and a 2x2 grid of square project cards that expand when clicked.

## Features

- **Jekyll-based**: Built for GitHub Pages with easy content management
- **Customizable Banner**: Easy to replace with your own content and styling
- **2x2 Grid Layout**: Square project cards arranged in a responsive grid
- **Click to Expand**: Each project card expands to show detailed information
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations

## Jekyll Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # HTML layouts
│   └── default.html     # Main layout template
├── _projects/           # Project collection
│   ├── project-1.md     # Individual project files
│   ├── project-2.md
│   ├── project-3.md
│   └── project-4.md
├── assets/              # Static assets
│   ├── css/
│   │   └── styles.css   # Main stylesheet
│   ├── js/
│   │   └── script.js    # JavaScript functionality
│   └── images/          # Project images
├── index.html           # Home page
└── README.md            # This file
```

## How to Customize

### 1. Site Configuration
Edit `_config.yml`:
```yaml
title: Portfolio
author: Your Name
email: your.email@example.com
url: "https://yourusername.github.io"
```

### 2. Banner Section
The banner automatically uses your name from `_config.yml`. To change the title, edit the layout file:
```html
<p>Web Developer & Designer</p>
```

### 3. Adding Projects
Create new project files in the `_projects/` directory:

```markdown
---
title: "Project Title"
image: "/assets/images/your-image.jpg"
technologies: ["Tech1", "Tech2", "Tech3"]
---

Your project description here. This will appear when the card is expanded.
```

### 4. Project Images
- Place your project images in `assets/images/`
- Recommended size: 400x400 pixels (square)
- Supported formats: JPG, PNG, WebP
- Update the `image` field in each project's front matter

### 5. Styling
Customize colors and styling in `assets/css/styles.css`:
- Banner gradient colors
- Project card colors
- Typography and spacing

## Local Development

1. Install Jekyll:
   ```bash
   gem install jekyll bundler
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000`

## GitHub Pages Deployment

1. Push your code to GitHub
2. Go to your repository settings
3. Under "Pages", select "Deploy from a branch"
4. Choose the `main` branch and `/ (root)` folder
5. Your site will be available at `https://yourusername.github.io`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Optional Features

The JavaScript includes several optional features you can enable:
- Single card open at a time (uncomment the code in `script.js`)
- Click outside to close cards
- Escape key to close all cards

Just uncomment the desired functionality in `assets/js/script.js`.

## Customization Tips

- **Colors**: Update the CSS variables in `styles.css` for consistent theming
- **Layout**: Modify the grid layout by changing `grid-template-columns` in CSS
- **Animations**: Adjust transition timings in the CSS for different animation speeds
- **Content**: Use Markdown in project files for rich content formatting
