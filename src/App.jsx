import { useState, useEffect } from 'react'
import ContentForm from './components/ContentForm'
import ResultBox from './components/ResultBox'
import styles from './App.module.css'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })
  const [result, setResult] = useState('')

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

    // فعلاً یک متن آزمایشی نشان می‌دهیم
    const fakeResult = `موضوع: ${data.topic}
نوع محتوا: ${data.type}
لحن: ${data.tone}

این یک متن آزمایشی است. در مرحله بعد به هوش مصنوعی وصل می‌شویم تا محتوای واقعی تولید شود.`

    setResult(fakeResult)
  }

  function handleCopy() {
    navigator.clipboard.writeText(result)
    alert('متن کپی شد')
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
      <ResultBox content={result} onCopy={handleCopy} />
    </div>
  )
}

export default App