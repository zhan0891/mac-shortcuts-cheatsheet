# Mac Keyboard Shortcuts Cheatsheet

A clean, dark-themed static website for Mac keyboard shortcuts reference. Perfect for developers and power users who want to maximize their productivity.

## Features

- 🎨 Dark theme with clean, minimalist design
- 📱 Responsive layout for all devices
- 🔍 Organized by categories (System, Finder, Text Editing, Screenshot, Chrome, Code Editor)
- ⭐ Frequency indicators for each shortcut
- 🎯 Sticky navigation bar for quick access
- 📦 No dependencies - pure HTML, CSS, and JavaScript

## Live Demo

Open `index.html` in your browser to view the cheatsheet.

## Structure

```
mac-shortcuts-cheatsheet/
├── index.html          # Main HTML file
├── data.js            # Shortcuts data
├── app.js             # Rendering logic
├── css/
│   ├── reset.css      # CSS reset
│   └── style.css      # Main styles
└── README.md
```

## Customization

### Adding New Shortcuts

Edit `data.js` to add or modify shortcuts:

```javascript
{
  id: "your-category",
  title: "Your Category Title",
  description: "Optional description",
  shortcuts: [
    {
      keys: ["⌘", "K"],
      description: "Your shortcut description",
      frequency: 5  // 1-5, where 5 is most frequent
    }
  ]
}
```

### Modifying Styles

Edit `css/style.css` to customize colors, fonts, and layout.

## Categories

- **Basic System Shortcuts** - Essential Mac system operations
- **Finder** - File management shortcuts
- **Text Editing** - Text manipulation and navigation
- **Screenshot** - Screen capture shortcuts
- **Chrome Browser** - Web browsing shortcuts
- **Code Editor** - Developer-focused shortcuts (VS Code compatible)

## Frequency Legend

- ⭐⭐⭐⭐⭐ High frequency (Daily essential)
- ⭐⭐⭐ Common (Frequently used)
- ⭐ Occasional (Specific scenarios)

## Technologies

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Google Fonts (JetBrains Mono)

## License

MIT

## Author

Created by [Viggo](https://github.com/zhan0891)

## Repository

[https://github.com/zhan0891/mac-shortcuts-cheatsheet](https://github.com/zhan0891/mac-shortcuts-cheatsheet)
