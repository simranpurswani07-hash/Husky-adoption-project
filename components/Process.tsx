import styles from './Process.module.css'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'WhatsApp or Instagram to start the process.'
    },
    {
      number: '02',
      title: 'Application',
      description: 'Quick check to ensure cold climate & proper home.'
    },
    {
      number: '03',
      title: 'Meet Your Husky',
      description: 'We match you with the perfect dog.'
    },
    {
      number: '04',
      title: 'Safe Relocation',
      description: 'We handle all docs & transport to your door.'
    }
  ]

  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Simple Adoption Process</h2>
          <p>We make it easy to give a husky their forever home</p>
        </div>
        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
