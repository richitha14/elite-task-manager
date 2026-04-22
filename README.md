# Elite Task Manager

Elite Task Manager is a beginner-friendly React app built with Vite. It includes adding tasks, deleting tasks, marking tasks complete, priority tags, categories, due dates, search, dark/light mode, progress stats, and a responsive premium UI.

## What Each File Does

- `package.json` lists the project name, scripts, and packages React/Vite need.
- `index.html` is the single HTML page Vite loads in the browser.
- `vite.config.js` tells Vite to use the React plugin.
- `src/main.jsx` starts React and places the app inside `<div id="root"></div>`.
- `src/App.jsx` contains the task manager logic, search filtering, due date handling, and JSX layout.
- `src/styles.css` contains all styling, animations, responsive layout, and theme colors.

## Beginner Mac Setup

1. Open Terminal.
2. Move into this project folder:

   ```bash
   cd /Users/praveenreddy/Documents/Codex/2026-04-22-elite-task-manager
   ```

3. Make sure npm is installed:

   ```bash
   npm --version
   ```

   If that says `command not found`, install Node.js from https://nodejs.org. The normal Node installer includes both `node` and `npm`.

4. Install the project packages:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Vite will show a local URL, usually:

   ```text
   http://localhost:5173/
   ```

   Open that URL in your browser.

## How The App Works

- `useState` stores tasks, form values, and the current theme.
- `addTask` runs when you submit the form and adds a new task to the top of the list.
- `toggleTask` switches a task between complete and incomplete.
- `deleteTask` removes a task from the list.
- `searchTerm` stores what you type in the search bar.
- `filteredTasks` shows only tasks that match the search text.
- `dueDate` stores the date selected in the date input.
- `completedCount` and `progress` are calculated from the current tasks.
- The theme button changes the main CSS class between `light` and `dark`.

## Useful Commands

```bash
npm run dev
```

Runs the app while you are coding.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.
