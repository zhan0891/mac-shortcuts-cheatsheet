const shortcutsData = [
  {
    id: "basic-system",
    title: "Basic System Shortcuts",
    shortcuts: [
      {
        keys: ["⌘", "Space"],
        description: "Open Spotlight Search",
        frequency: 5
      },
      {
        keys: ["⌘", "Tab"],
        description: "Switch Applications",
        frequency: 5
      },
      {
        keys: ["⌘", "~"],
        description: "Switch Applications (Reverse)",
        frequency: 3
      },
      {
        keys: ["⌘", "N"],
        description: "Open New Window",
        frequency: 3
      },
      {
        keys: ["⌘", "W"],
        description: "Close Current Window",
        frequency: 5
      },
      {
        keys: ["⌘", "Q"],
        description: "Quit Application",
        frequency: 5
      }
    ]
  },
  {
    id: "finder",
    title: "Finder",
    shortcuts: [
      {
        keys: ["⌘", "N"],
        description: "New Window",
        frequency: 3
      },
      {
        keys: ["⌘", "⇧", "N"],
        description: "New Folder",
        frequency: 5
      },
      {
        keys: ["⌘", "⌫"],
        description: "Delete File",
        frequency: 5
      },
      {
        keys: ["Space"],
        description: "Quick Look Preview",
        frequency: 5
      },
      {
        keys: ["⌘", "M"],
        description: "Minimize Window",
        frequency: 5
      },
      {
        keys: ["⌘", "⌥", "Esc"],
        description: "Force Quit Application",
        frequency: 1
      },
      {
        keys: ["⌥", "Drag File"],
        description: "Copy File",
        frequency: 5
      },
      {
        keys: ["⌘", "1"],
        description: "View as Icons",
        frequency: 5
      },
      {
        keys: ["⌘", "2"],
        description: "View as List",
        frequency: 5
      },
      {
        keys: ["⌘", "3"],
        description: "View as Columns",
        frequency: 5
      },
      {
        keys: ["↑", "/", "↓"],
        description: "Navigate Files Up/Down (Columns view)",
        frequency: 5
      },
      {
        keys: ["←", "/", "→"],
        description: "Navigate Folder Hierarchy (Columns view)",
        frequency: 5
      }
    ]
  },
  {
    id: "text-editing",
    title: "Text Editing",
    shortcuts: [
      {
        keys: ["⌘", "C", "/", "V", "/", "X"],
        description: "Copy / Paste / Cut",
        frequency: 5
      },
      {
        keys: ["⌘", "Z"],
        description: "Undo",
        frequency: 5
      },
      {
        keys: ["⌘", "A"],
        description: "Select All",
        frequency: 5
      },
      {
        keys: ["⌘", "F"],
        description: "Find",
        frequency: 5
      },
      {
        keys: ["⌘", "S"],
        description: "Save",
        frequency: 5
      },
      {
        keys: ["←", "/", "→", "/", "↑", "/", "↓"],
        description: "Move Cursor by Character or Line",
        frequency: 5
      },
      {
        keys: ["⇧", "←", "/", "→", "/", "↑", "/", "↓"],
        description: "Extend Selection",
        frequency: 5
      },
      {
        keys: ["⌥", "←", "/", "→"],
        description: "Move by Word",
        frequency: 5
      },
      {
        keys: ["⌘", "←", "/", "→"],
        description: "Move to Line Start/End",
        frequency: 5
      },
      {
        keys: ["⌘", "↑", "/", "↓"],
        description: "Move to Document Start/End",
        frequency: 3
      },
      {
        keys: ["⌫"],
        description: "Delete Backward",
        frequency: 5
      },
      {
        keys: ["Fn", "⌫"],
        description: "Delete Forward",
        frequency: 3
      },
      {
        keys: ["⌥", "⌫"],
        description: "Delete Word Backward",
        frequency: 3
      },
      {
        keys: ["⌘", "⌫"],
        description: "Delete to Line Start",
        frequency: 3
      },
      {
        keys: ["Fn", "↑", "/", "↓"],
        description: "Page Up/Down",
        frequency: 1
      },
      {
        keys: ["Fn", "←", "/", "→"],
        description: "Home/End",
        frequency: 1
      }
    ]
  },
  {
    id: "screenshot",
    title: "Screenshot",
    shortcuts: [
      {
        keys: ["⌘", "⇧", "3"],
        description: "Full Screenshot (Save to Desktop)",
        frequency: 3
      },
      {
        keys: ["⌘", "⌃", "⇧", "3"],
        description: "Full Screenshot (Save to Clipboard)",
        frequency: 3
      },
      {
        keys: ["⌘", "⇧", "4"],
        description: "Area Screenshot (Save to Desktop)",
        frequency: 5
      },
      {
        keys: ["⌘", "⌃", "⇧", "4"],
        description: "Area Screenshot (Save to Clipboard)",
        frequency: 5
      },
      {
        keys: ["⌘", "⇧", "5"],
        description: "Open Screenshot Toolbar",
        frequency: 3
      },
      {
        keys: ["⌘", "⇧", "A"],
        description: "Area Screenshot (CleanShot)",
        frequency: 5
      }
    ]
  },
  {
    id: "chrome",
    title: "Chrome Browser",
    shortcuts: [
      {
        keys: ["⌘", "T"],
        description: "Open New Tab",
        frequency: 5
      },
      {
        keys: ["⌘", "W"],
        description: "Close Current Tab",
        frequency: 5
      },
      {
        keys: ["⌘", "⇧", "T"],
        description: "Reopen Last Closed Tab",
        frequency: 5
      },
      {
        keys: ["⌘", "N"],
        description: "Open New Window",
        frequency: 3
      },
      {
        keys: ["⌘", "L"],
        description: "Focus Address Bar",
        frequency: 5
      },
      {
        keys: ["⌘", "R"],
        description: "Refresh Page",
        frequency: 5
      },
      {
        keys: ["⌘", "⇧", "R"],
        description: "Hard Refresh (Ignore Cache)",
        frequency: 3
      },
      {
        keys: ["⌃", "Tab"],
        description: "Switch to Next Tab",
        frequency: 5
      },
      {
        keys: ["⌃", "⇧", "Tab"],
        description: "Switch to Previous Tab",
        frequency: 5
      },
      {
        keys: ["⌘", "[", "/", "]"],
        description: "Back / Forward",
        frequency: 5
      },
      {
        keys: ["⌘", "D"],
        description: "Add Bookmark",
        frequency: 3
      },
      {
        keys: ["⌘", "F"],
        description: "Find in Page",
        frequency: 5
      },
      {
        keys: ["⌘", "+", "/", "-"],
        description: "Zoom In/Out",
        frequency: 3
      },
      {
        keys: ["⌘", "0"],
        description: "Reset Zoom",
        frequency: 1
      },
      {
        keys: ["⌘", "⌥", "I"],
        description: "Open DevTools",
        frequency: 3
      },
      {
        keys: ["⌘", "⇧", "N"],
        description: "Open Incognito Window",
        frequency: 1
      },
      {
        keys: ["⌘", "⌥", "U"],
        description: "View Page Source",
        frequency: 1
      },
      {
        keys: ["⌘", "1-8"],
        description: "Switch to Tab 1-8",
        frequency: 3
      },
      {
        keys: ["⌘", "9"],
        description: "Switch to Last Tab",
        frequency: 3
      },
      {
        keys: ["⌘", "Y"],
        description: "Open History",
        frequency: 1
      },
      {
        keys: ["⌘", "⇧", "J"],
        description: "Open Downloads",
        frequency: 1
      }
    ]
  },
  {
    id: "code-editor",
    title: "Code Editor",
    description: "Highly recommended for developers to boost coding efficiency",
    shortcuts: [
      {
        keys: ["⌘", "/"],
        description: "Toggle Line Comment",
        frequency: 5
      },
      {
        keys: ["⌥", "↑", "/", "↓"],
        description: "Move Line Up/Down",
        frequency: 5
      },
      {
        keys: ["⇧", "⌥", "↑", "/", "↓"],
        description: "Duplicate Line Up/Down",
        frequency: 4
      },
      {
        keys: ["⌘", "[", "/", "]"],
        description: "Indent / Outdent",
        frequency: 4
      },
      {
        keys: ["⇧", "⌘", "K"],
        description: "Delete Line",
        frequency: 2
      },
      {
        keys: ["⌘", "⌥", "↑", "/", "↓"],
        description: "Add Multi-Cursor",
        frequency: 3
      },
      {
        keys: ["⌘", "↩"],
        description: "Insert Line Below",
        frequency: 3
      },
      {
        keys: ["⇧", "⌥", "A"],
        description: "Toggle Block Comment",
        frequency: 2
      }
    ]
  }
];
