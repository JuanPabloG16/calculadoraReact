import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.calculator}>
        <input type="text" className={styles.display} disabled />
        <div className={styles.buttons}>
          <div className={styles.numbers}>
            <button className={styles.button}>1</button>
            <button className={styles.button}>2</button>
            <button className={styles.button}>3</button>
            <button className={styles.button}>4</button>
            <button className={styles.button}>5</button>
            <button className={styles.button}>6</button>
            <button className={styles.button}>7</button>
            <button className={styles.button}>8</button>
            <button className={styles.button}>9</button>
            <button className={styles.button}>0</button>
          </div>
          <div className={styles.operations}>
            <button className={styles.button}>+</button>
            <button className={styles.button}>-</button>
            <button className={styles.button}>*</button>
            <button className={styles.button}>/</button>
            <button className={styles.button}>=</button>
            <button className={styles.button}>C</button>
          </div>
        </div>
      </div>
    </main>
  )
}


