import styles from './FAQ.module.css'

export default function FAQ() {
  const faqs = [
    {
      question: '💰 What is the cost to adopt a husky?',
      answer: "We're non-profit. Adoption fee covers medical care, microchipping, and relocation costs. Contact us for details."
    },
    {
      question: '🏥 Are the huskies healthy and vaccinated?',
      answer: 'Yes! Vet-checked, vaccinated, microchipped, with complete documentation for international travel.'
    },
    {
      question: '🌍 Can I adopt from Europe or the UK?',
      answer: 'Absolutely! We prioritize cold climate regions where huskies thrive naturally.'
    },
    {
      question: '✈️ How does relocation work?',
      answer: 'We handle everything: documentation, health certificates, flights. Your husky arrives safely to you.'
    },
    {
      question: '🐕 What if I have other pets?',
      answer: "Many huskies are dog-friendly. We'll match you with the right temperament for your home."
    }
  ]

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.faqQuestion}>{faq.question}</div>
              <div className={styles.faqAnswer}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
