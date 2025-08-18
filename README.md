# Portfolio Website

A modern, responsive portfolio website with a customizable banner and expandable content boxes.

## Features

- **Customizable Banner**: Easy to replace with your own content and styling
- **Expandable Content Boxes**: Click on any project box to expand and see more details
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Customization**: Simple HTML structure for easy content updates

## How to Customize

### 1. Banner Section
Edit the banner in `index.html`:
```html
<header class="banner">
    <div class="banner-content">
        <h1>Your Name</h1>
        <p>Your Title</p>
    </div>
</header>
```

### 2. Project Content
Update the project information in `index.html`:
- Change project titles
- Replace placeholder images with your actual project images
- Update project descriptions
- Modify technologies used
- Add more content boxes by copying the existing structure

### 3. Styling
Customize colors and styling in `styles.css`:
- Banner gradient colors
- Box header colors
- Typography
- Spacing and layout

### 4. Images
Replace placeholder images:
- Use your own project screenshots
- Recommended size: 400x300 pixels
- Update the `src` attribute in the `<img>` tags

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - JavaScript for expand/collapse functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Getting Started

1. Open `index.html` in your web browser
2. Customize the content as needed
3. Replace placeholder images with your own
4. Deploy to your preferred hosting service

## Optional Features

The JavaScript includes several optional features you can enable:
- Single box open at a time (uncomment the code in `script.js`)
- Click outside to close boxes
- Escape key to close all boxes

Just uncomment the desired functionality in `script.js`.
