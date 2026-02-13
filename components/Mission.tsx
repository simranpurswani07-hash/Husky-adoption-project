import Image from 'next/image'
import styles from './Mission.module.css'

export default function Mission() {
  const missions = [
    {
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=250&fit=crop',
      icon: '🌡️',
      title: 'Too Hot for Huskies',
      description: "Dubai hits 50°C. Huskies are built for -50°C. They're suffering.",
      alt: 'Husky in heat'
    },
    {
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=250&fit=crop',
      icon: '❤️',
      title: 'Ready to Travel',
      description: 'Vet-checked, microchipped, and documented for relocation.',
      alt: 'Healthy husky'
    },
    {
      image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=250&fit=crop',
      icon: '✈️',
      title: 'Need Cold Homes',
      description: 'We help them reach Europe, UK & other cold regions.',
      alt: 'Husky in snow'
    }
  ]

  return (
    <section className={styles.mission}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>The Arctic Husky Relocation Initiative</h2>
          <p>Reuniting Arctic breeds with their natural climate</p>
        </div>
        <div className={styles.missionGrid}>
          {missions.map((mission, index) => (
            <div key={index} className={styles.missionCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={mission.image}
                  alt={mission.alt}
                  width={400}
                  height={180}
                  className={styles.missionImage}
                />
              </div>
              <div className={styles.missionIcon}>{mission.icon}</div>
              <h3>{mission.title}</h3>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
