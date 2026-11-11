import styles from './ContentForm.module.css'
function ContentForm({ onGenerate }) {
  return (
    <form className={styles.form} onSubmit={onGenerate}>
      
      <div className={styles.formGroup}>
        <label>موضوع محتوا</label>
        <input 
          type="text" 
          name="topic" 
          placeholder="مثلاً: مزایای استفاده از هوش مصنوعی" 
          required 
        />
      </div>

      <div className={styles.formGroup}>
        <label>نوع محتوا</label>
        <select name="type" required>
          <option value="">انتخاب کنید</option>
          <option value="instagram">کپشن اینستاگرام</option>
          <option value="linkedin">پست لینکدین</option>
          <option value="reels">ایده‌ی ریلز</option>
          <option value="hashtags">هشتگ</option>
          <option value="blog">مقاله کوتاه</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>لحن</label>
        <select name="tone" required>
          <option value="">انتخاب کنید</option>
          <option value="formal">رسمی</option>
          <option value="friendly">دوستانه</option>
          <option value="sales">فروشنده</option>
          <option value="funny">طنز</option>
        </select>
      </div>

      <button type="submit" className={styles.submitBtn}>
        تولید محتوا
      </button>

    </form>
  )
}

export default ContentForm