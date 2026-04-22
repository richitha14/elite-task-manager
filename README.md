# Elite Task Manager

A premium responsive task manager built with **Vite**, **React**, and modern CSS. It helps users create, search, complete, and organize tasks with categories, priority tags, due dates, progress stats, and dark/light mode.

![Elite Task Manager screenshot](docs/app-screenshot.png)

## Features

- Add new tasks with a title, category, priority, and due date
- Mark tasks as complete or incomplete
- Delete tasks from the list
- Search tasks by title, category, or priority
- View progress stats for total and completed tasks
- Organize tasks with categories
- Use visual priority tags for low, medium, and high priority
- Switch between light and dark mode
- Responsive layout for desktop, tablet, and mobile screens
- Polished UI with cards, animations, and clean spacing

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- HTML
- Git and GitHub

## How To Run This Project

1. Clone or download this repository.

2. Open Terminal and move into the project folder:

   ```bash
   cd elite-task-manager
   ```

3. Install the project packages:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL that Vite shows in Terminal. It usually looks like:

   ```text
   http://localhost:5173/
   ```

## What I Learned

- How to create a React project with Vite
- How to use React state with `useState`
- How to render lists of tasks with `.map()`
- How to filter tasks using search text
- How to handle form inputs, select menus, and date inputs
- How to calculate progress from completed tasks
- How to build a responsive layout with CSS Grid and media queries
- How to style a modern dark/light theme
- How to use Git and upload a project to GitHub

## Project Structure

```text
elite-task-manager/
├── docs/
│   └── app-screenshot.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Useful Commands

```bash
npm run dev
```

Runs the app while developing.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.
