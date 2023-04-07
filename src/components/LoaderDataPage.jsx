import styles from "../styles/loadingPageData.module.css"
const LoaderPageData = () => {
  return (
    <div className={styles.loader}>
  <div className={styles.loader__circle}></div>
  <div className={styles.loader__circle}></div>
  <div className={styles.loader__circle}></div>
  <div className={styles.loader__circle}></div>
  <div className={styles.loader__circle}></div>
</div>
  )
}

export default LoaderPageData