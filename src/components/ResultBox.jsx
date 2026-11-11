import styles from './ResultBox.module.css'

function ResultBox({ content, onCopy }) {
  if (!content) return null

  return (
    <div className={styles.resultBox}>
      <div className={styles.header}>
        <h3>محتوای تولید شده</h3>
        <button className={styles.copyBtn} onClick={onCopy}>
          کپی کردن
        </button>
      </div>
      <div className={styles.content}>
        {content}
      </div>
    </div>
  )
}

export default ResultBox