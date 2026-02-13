'use client'

import { FormEvent, useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const whatsappMessage = `*New Husky Adoption Inquiry*%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Location: ${formData.location}%0A` +
      `Experience: ${formData.experience}%0A%0A` +
      `Message: ${formData.message}`
    
    window.open(`https://wa.me/971502352616?text=${whatsappMessage}`, '_blank')
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      experience: '',
      message: ''
    })
    
    alert('Thank you! Opening WhatsApp to send your inquiry...')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Start Your Adoption Journey</h2>
          <p>Tell us about yourself and we&apos;ll be in touch within 24 hours</p>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number (with country code) *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+44 7XXX XXXXXX" 
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="location">Your Location/Country *</label>
              <input 
                type="text" 
                id="location" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., London, UK" 
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="experience">Do you have experience with huskies or large dogs? *</label>
              <select 
                id="experience" 
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Please select...</option>
                <option value="yes-husky">Yes, I&apos;ve owned huskies before</option>
                <option value="yes-large">Yes, I&apos;ve owned large dogs</option>
                <option value="no">No, but I&apos;m committed to learning</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Tell us about your home and why you&apos;d like to adopt *</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="E.g., house with large garden, cold climate region, active lifestyle..."
              />
            </div>
            
            <button type="submit" className={styles.formSubmit}>Submit Application</button>
            
            <p className={styles.formNote}>
              Or contact us directly via <a href="https://wa.me/971502352616">WhatsApp</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
