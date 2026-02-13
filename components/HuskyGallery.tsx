import Image from 'next/image'
import styles from './HuskyGallery.module.css'

export default function HuskyGallery() {
  const huskies = [
    {
      image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=600&h=600&fit=crop',
      name: 'Available for Adoption',
      tags: ['Age: 2-4 years', 'Chipped ✓', 'Vaccinated ✓'],
      description: 'Beautiful huskies ready for cold climate homes. Add your dog\'s details here!',
      alt: 'Husky with blue eyes'
    },
    {
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=600&h=600&fit=crop',
      name: 'Waiting for You',
      tags: ['Age: 1-5 years', 'Friendly', 'Documented'],
      description: 'These arctic dogs deserve to feel snow under their paws. Replace with your dog\'s info!',
      alt: 'Husky in snow'
    },
    {
      image: 'https://images.unsplash.com/photo-1611003228941-98852ba62227?w=600&h=600&fit=crop',
      name: 'Needs a Cold Home',
      tags: ['Multiple Available', 'All Ages', 'Europe/UK Ready'],
      description: 'Contact us for details on all available huskies. Each one has a story!',
      alt: 'Happy husky'
    }
  ]

  return (
    <section className={styles.huskiesSection} id="available-huskies">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Meet Our Available Huskies</h2>
          <p>Each one deserves a loving home in a climate they were bred for</p>
        </div>
        
        <div className={styles.huskyGallery}>
          {huskies.map((husky, index) => (
            <div key={index} className={styles.huskyCard}>
              <div className={styles.huskyImage}>
                <Image
                  src={husky.image}
                  alt={husky.alt}
                  width={600}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.huskyInfo}>
                <h3 className={styles.huskyName}>{husky.name}</h3>
                <div className={styles.huskyDetails}>
                  {husky.tags.map((tag, i) => (
                    <span key={i} className={styles.detailTag}>{tag}</span>
                  ))}
                </div>
                <p className={styles.huskyDescription}>{husky.description}</p>
                <span className={styles.statusBadge}>✓ Ready to Relocate</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.addHuskyInstructions}>
          <h3>📝 How to Add Your Huskies</h3>
          <p>Copy the husky card structure above and paste it below the example. Replace the placeholder text with your dog&apos;s information and add the photo path.</p>
        </div>
      </div>
    </section>
  )
}
