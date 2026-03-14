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
        className="glass"
        style={{ padding: 'clamp(2rem, 8vw, 5rem)', maxWidth: '1000px', margin: '0 auto' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Get In <span className="gradient-text">Touch</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{message}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div className="glass" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)', flexShrink: 0 }}>
                <Mail size={28} />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{emailLabel}</p>
                <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>{email}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                padding: '1.25rem',
                borderRadius: '12px',
                color: 'var(--text-primary)',
                outline: 'none',
                width: '100%'
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                padding: '1.25rem',
                borderRadius: '12px',
                color: 'var(--text-primary)',
                outline: 'none',
                resize: 'none',
                width: '100%'
              }}
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 20px -10px var(--accent-color)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary))',
                padding: '1.25rem',
                borderRadius: '12px',
                color: 'white',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                fontSize: '1rem'
              }}
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
