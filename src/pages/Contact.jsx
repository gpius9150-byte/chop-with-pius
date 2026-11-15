import { useState } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true)
      setFormData({ fullName: '', email: '', subject: '', message: '' })
    } else {
      setSuccess(false)
    }
  }

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <span className="script">We reply fast</span>
          <h1>Contact us</h1>
          <p>
            Bulk order, feedback or a question about delivery? Send us a message
            and we will get back within the hour.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell contact-layout">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>
              <MapPin size={18} />
              12 Food Street, Lagos, Nigeria
            </p>
            <p>
              <Phone size={18} />
              +234 8156849750
            </p>
            <p>
              <Mail size={18} />
              hello@chopwithpius.com
            </p>
            <p>
              <Clock size={18} />
              Open daily: 9am – 10pm
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h2>Send a message</h2>

            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className="error">{errors.subject}</span>}

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit" className="btn">
              <Send size={16} />
              Submit
            </button>

            {success && (
              <p className="success">
                ✅ Thank you! Your message has been sent. We will reply soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
