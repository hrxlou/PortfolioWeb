import { useState, useEffect } from 'react';
import { Github, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { fetchGithubStats, type GithubStats } from '../services/github';

export default function GithubStatsWidget({ username }: { username: string }) {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubStats(username).then(data => {
      setStats(data);
      setLoading(false);
    });
  }, [username]);

  if (loading || !stats) return null;

  const items = [
    { label: 'Repos', value: stats.repos, icon: BookOpen },
    { label: 'Followers', value: stats.followers, icon: Users },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass github-stats-widget"
      style={{ padding: '1.5rem', marginTop: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-color)' }}>
        <Github size={24} />
        <span style={{ fontWeight: 700 }}>GitHub Activity</span>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {items.map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              <item.icon size={14} />
              {item.label}
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.value}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
