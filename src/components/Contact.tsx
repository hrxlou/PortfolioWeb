import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email } = portfolioData.personal;
  const { message, emailLabel } = portfolioData.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const msg = formData.get('message');
    window.location.href = `mailto:${email}?subject=Contact from ${name} (Portfolio)&body=${msg}`;
  };

  return (
    <section id="contact" className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass contact-container"
      >
        <div className="contact-header">
          <h2><span className="gradient-text">Contact</span> Me</h2>
          <p>{message}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="glass contact-icon-wrapper">
                <Mail size={28} />
              </div>
              <div>
                <p className="contact-info-label">{emailLabel}</p>
                <p className="contact-info-value">{email}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="contact-textarea"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="contact-submit"
            >
              Send Message <Send size={20} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
