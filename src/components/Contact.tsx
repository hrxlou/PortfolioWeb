import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTranslation } from '../i18n';

const Contact = () => {
  const { email } = portfolioData.personal;
  const { t } = useTranslation();
  
  // 마우스 포인터 감지 (모바일 깜빡임 방지)
  const [isPC, setIsPC] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handleChange = (e: MediaQueryListEvent) => setIsPC(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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
        className="glass contact-container"
        initial={isPC ? { opacity: 0 } : { opacity: 1 }}
        whileInView={isPC ? { opacity: 1 } : {}}
        animate={!isPC ? { opacity: 1 } : {}}
        viewport={{ once: true, margin: "-100px" }}
        transition={isPC ? { duration: 1.0 } : { duration: 0 }}
      >
        <div className="contact-header">
          <h2><span className="gradient-text">{t('contact.title')}</span> {t('contact.span')}</h2>
          <p>{t('contact.message')}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="glass contact-icon-wrapper">
                <Mail size={28} />
              </div>
              <div>
                <p className="contact-info-label">{t('contact.emailLabel')}</p>
                <p className="contact-info-value">{email}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              name="name"
              type="text"
              placeholder={t('contact.placeholderName')}
              required
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder={t('contact.placeholderMessage')}
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
              {t('contact.submit')} <Send size={20} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
