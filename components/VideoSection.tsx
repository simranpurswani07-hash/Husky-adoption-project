import styles from './VideoSection.module.css'

export default function VideoSection() {
  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>These Beautiful Huskies Need You</h2>
          <p>Watch their story</p>
        </div>
        <div className={styles.videoWrapper}>
          <video controls autoPlay muted loop playsInline>
            <source src="/videos/husky-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
