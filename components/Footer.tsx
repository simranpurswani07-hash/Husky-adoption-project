import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <h2>Ready to Save a Life?</h2>
          <p>These beautiful huskies are waiting for a home where they belong</p>
          <div className={styles.ctaButtons}>
            <a 
              href="https://wa.me/971502352616" 
              className={styles.btnWhatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>💬</span> Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4>Stray Dogs Centre</h4>
              <p>A non-profit organization dedicated to rescuing and rehoming stray dogs in Dubai, with a special focus on relocating Arctic breeds to suitable climates.</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Contact</h4>
              <a href="https://wa.me/971502352616" target="_blank" rel="noopener noreferrer">WhatsApp: +971 50 235 2616</a>
              <a href="https://www.instagram.com/straydogscenter" target="_blank" rel="noopener noreferrer">Instagram: @straydogscenter</a>
            </div>
            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <a href="#available-huskies">Available Huskies</a>
              <a href="https://wa.me/971502352616" target="_blank" rel="noopener noreferrer">Adopt a Husky</a>
              <a href="https://www.instagram.com/straydogscenter" target="_blank" rel="noopener noreferrer">Volunteer</a>
              <a href="https://www.instagram.com/straydogscenter" target="_blank" rel="noopener noreferrer">Donate</a>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>💙 Adopt Don&apos;t Shop | &copy; 2025 Stray Dogs Centre, Dubai. All rights reserved. | Saving lives, one paw at a time. 🐾</p>
          </div>
        </div>
      </footer>
    </>
  )
}
