import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send(
      'service_s50mfgk', 
      'template_s0l6vmj', 
      formData, 
      '2TFrKQEHrXn73TJ1T'
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 20000);
    }, (error) => {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
    });
  };

  const getGif = () => {
    if (isSubmitted) return '3.gif';
    if (isSubmitting) return '2.gif';
    if (formData.name || formData.email || formData.message) return '2.gif';
    return '1.gif';
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Have a project in mind? Let's make it happen</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-form-container">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="name">Your Name</label>
            </div>
            
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="email">Your Email</label>
            </div>
            
            <div className="input-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                rows="3"
                required
              />
              <label htmlFor="message">Your Message</label>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              <span className="btn-text">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  "Submit"
                )}
              </span>
            </button>
            
            {isSubmitted && (
              <div className="success-message">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
        
        <div className="gif-container">
          <div className="gif-frame">
            <img 
              src={`/${getGif()}`} 
              className="contact-gif"
              alt="Contact status animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;