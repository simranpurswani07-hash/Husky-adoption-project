import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>❤️ Adopt Don't Shop</div>
          <h1>Save Huskies from the Heat</h1>
          <p className={styles.heroSubtitle}>
            For those considering a Husky, beautiful Arctic dogs from Dubai are available for adoption to approved cold-climate homes. Fully documented and travel-ready for Europe/UK.
          </p>
          <div className={styles.ctaButtons}>
            <a href="https://wa.me/971502352616" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">
              <span>💬</span> WhatsApp Us Now
            </a>
            <a href="#available-huskies" className={`${styles.btn} ${styles.btnSecondary}`}>
              See Available Huskies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
