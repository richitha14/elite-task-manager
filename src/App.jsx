import { useMemo, useState } from 'react'

const categories = ['Work', 'Personal', 'Learning', 'Health']
const priorities = ['Low', 'Medium', 'High']

const priorityClass = {
  Low: 'priority-low',
  Medium: 'priority-medium',
  High: 'priority-high',
}

const starterTasks = [
  {
    id: 1,
    title: 'Plan the week',
    category: 'Work',
    priority: 'High',
    dueDate: '2026-04-24',
    completed: false,
  },
  {
    id: 2,
    title: 'Practice React basics',
    category: 'Learning',
    priority: 'Medium',
    dueDate: '2026-04-28',
    completed: true,
  },
  {
    id: 3,
    title: 'Go for a walk',
    category: 'Health',
    priority: 'Low',
    dueDate: '',
    completed: false,
  },
]

function formatDueDate(value) {
  if (!value) return 'No due date'

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`))
}

function App() {
  const [tasks, setTasks] = useState(starterTasks)
  const [taskTitle, setTaskTitle] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [priority, setPriority] = useState(priorities[1])
  const [dueDate, setDueDate] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [theme, setTheme] = useState('light')

  const completedCount = tasks.filter((task) => task.completed).length
  const totalCount = tasks.length
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)

  const categoryStats = useMemo(
    () =>
      categories.map((item) => ({
        name: item,
        count: tasks.filter((task) => task.category === item).length,
      })),
    [tasks],
  )

  const filteredTasks = useMemo(() => {
    const search = searchTerm.trim().toLowerCase()

    if (!search) return tasks

    return tasks.filter((task) => {
      const searchableText = `${task.title} ${task.category} ${task.priority}`.toLowerCase()
      return searchableText.includes(search)
    })
  }, [searchTerm, tasks])

  function addTask(event) {
    event.preventDefault()

    const cleanTitle = taskTitle.trim()
    if (!cleanTitle) return

    const newTask = {
      id: Date.now(),
      title: cleanTitle,
      category,
      priority,
      dueDate,
      completed: false,
    }

    setTasks([newTask, ...tasks])
    setTaskTitle('')
    setDueDate('')
  }

  function toggleTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <main className={`app ${theme}`}>
      <section className="shell">
        <header className="hero">
          <div>
            <p className="eyebrow">Elite Task Manager</p>
            <h1>Own your day with a sharper task board.</h1>
            <p className="hero-copy">
              Add tasks, sort them by category, choose priority, and track progress in a
              clean responsive React interface.
            </p>
          </div>

          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle color theme"
          >
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
            <strong>{theme === 'light' ? 'Moon' : 'Sun'}</strong>
          </button>
        </header>

        <section className="dashboard" aria-label="Progress overview">
          <article className="metric-card primary">
            <span>Progress</span>
            <strong>{progress}%</strong>
            <div className="progress-track" aria-hidden="true">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </article>

          <article className="metric-card">
            <span>Total tasks</span>
            <strong>{totalCount}</strong>
          </article>

          <article className="metric-card">
            <span>Completed</span>
            <strong>{completedCount}</strong>
          </article>
        </section>

        <section className="workspace">
          <form className="task-form" onSubmit={addTask}>
            <div className="form-header">
              <div>
                <p className="eyebrow">Create task</p>
                <h2>Turn an idea into action.</h2>
              </div>
            </div>

            <div className="field">
              <label htmlFor="task-title">Task name</label>
              <input
                id="task-title"
                value={taskTitle}
                onChange={(event) => setTaskTitle(event.target.value)}
                placeholder="Example: Finish React lesson"
              />
            </div>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  value={priority}
                  onChange={(event) => setPriority(event.target.value)}
                >
                  {priorities.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field due-field">
              <label htmlFor="due-date">Due date</label>
              <input
                id="due-date"
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
              />
            </div>

            <button className="add-button" type="submit">
              Add task
            </button>
          </form>

          <aside className="category-panel" aria-label="Category stats">
            <h2>Categories</h2>
            <div className="category-list">
              {categoryStats.map((item) => (
                <div className="category-row" key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.count}</strong>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="search-panel" aria-label="Search tasks">
          <label htmlFor="task-search">Search tasks</label>
          <div className="search-row">
            <input
              id="task-search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by task, category, or priority"
            />
            {searchTerm && (
              <button
                className="clear-button"
                type="button"
                onClick={() => setSearchTerm('')}
              >
                Clear
              </button>
            )}
          </div>
        </section>

        <section className="task-list" aria-label="Task list">
          {tasks.length === 0 ? (
            <div className="empty-state">
              <h2>No tasks yet</h2>
              <p>Add your first task above and your progress stats will update instantly.</p>
            </div>
          ) : filteredTasks.length === 0 ? (
            <div className="empty-state">
              <h2>No matching tasks</h2>
              <p>Try a different search term or clear the search field.</p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <article className={`task-card ${task.completed ? 'done' : ''}`} key={task.id}>
                <button
                  className="check-button"
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  aria-label={`Mark ${task.title} as ${
                    task.completed ? 'not complete' : 'complete'
                  }`}
                >
                  {task.completed ? '✓' : ''}
                </button>

                <div className="task-content">
                  <h2>{task.title}</h2>
                  <div className="task-tags">
                    <span>{task.category}</span>
                    <span className={priorityClass[task.priority]}>{task.priority}</span>
                    <span className="due-tag">{formatDueDate(task.dueDate)}</span>
                  </div>
                </div>

                <button
                  className="delete-button"
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  aria-label={`Delete ${task.title}`}
                >
                  Delete
                </button>
              </article>
            ))
          )}
        </section>
      </section>
    </main>
  )
}

export default App
