import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslation } from '../i18n';
import { translations } from '../i18n/translations';

interface Project {
  id: string;
  title: string;
  label?: string;
  image: string;
  techStack?: string[];
  link: string;
  details?: {
    overview: string;
    challenges: string[];
    learnings: string[];
    screenshots?: string[];
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { t, language } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!project) return null;

  // Get translated content based on project.id
  const projectsI18n = (translations[language] as any)?.projects?.items || {};
  const projectI18n = projectsI18n[project.id] || {
    title: project.title,
    overview: project.details?.overview,
    challenges: project.details?.challenges,
    learnings: project.details?.learnings
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content-wrapper"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="modal-scroll-area">
              <div className="modal-hero-image">
                <img src={project.image} alt={projectI18n.title} loading="lazy" />
                <div className="modal-image-overlay" />
              </div>

              <div className="modal-body">
                <div className="modal-header">
                  <div>
                    <span className="modal-label">{project.label || 'Project'}</span>
                    <h2 className="modal-title">{projectI18n.title}</h2>
                  </div>
                  <div className="modal-actions">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-action-btn github">
                      <Github size={20} />
                      <span>{t('projects.code')}</span>
                    </a>
                  </div>
                </div>

                <div className="modal-grid">
                  <div className="modal-main-content">
                    <section className="modal-section">
                      <h3 className="modal-section-title">{t('projects.overview')}</h3>
                      <p className="modal-text">{projectI18n.overview}</p>
                    </section>

                    <section className="modal-section">
                      <h3 className="modal-section-title">{t('projects.challenges')}</h3>
                      <div className="modal-list">
                        {projectI18n.challenges?.map((text: string, i: number) => (
                          <div key={i} className="modal-list-item">
                            <AlertCircle size={18} className="modal-icon-alert" />
                            <span>{text}</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="modal-section">
                      <h3 className="modal-section-title">{t('projects.learnings')}</h3>
                      <div className="modal-list">
                        {projectI18n.learnings?.map((text: string, i: number) => (
                          <div key={i} className="modal-list-item">
                            <CheckCircle2 size={18} className="modal-icon-check" />
                            <span>{text}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <aside className="modal-sidebar">
                    <div className="modal-sidebar-section">
                      <h4 className="modal-sidebar-title">Tech Stack</h4>
                      <div className="modal-tech-tags">
                        {project.techStack?.map((tech: string) => (
                          <span key={tech} className="card-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
