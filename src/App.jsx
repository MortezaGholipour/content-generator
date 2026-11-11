import { useState, useEffect } from 'react'
import ContentForm from './components/ContentForm'
import styles from './App.module.css'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  function handleGenerate(e) {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
      topic: formData.get('topic'),
      type: formData.get('type'),
      tone: formData.get('tone'),
    }

    console.log('داده‌های فرم:', data)
  }

  return (
    <div className={styles.app}>
      <div className={styles.topBar}>
        <button className={styles.themeBtn} onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ روشن' : '🌙 تاریک'}
        </button>
      </div>

      <h1>تولید محتوا با هوش مصنوعی</h1>
      <ContentForm onGenerate={handleGenerate} />
    </div>
  )
}

export default App