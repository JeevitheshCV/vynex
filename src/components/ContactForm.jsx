import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you’d integrate real submission (API, email, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return <p>Thank you! We have received your message. We’ll be in touch.</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn-primary">Send Message</button>
    </form>
  );
}
