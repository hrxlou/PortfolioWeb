import { Github, Instagram, ExternalLink, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  name: string;
  size?: number;
}

const SocialIcon = ({ name, size = 20 }: SocialIconProps) => {
  const iconMap: Record<string, LucideIcon> = {
    github: Github,
    instagram: Instagram,
    blog: ExternalLink,
    email: Mail,
    default: ExternalLink,
  };

  const IconComponent = iconMap[name.toLowerCase()] || iconMap.default;

  return <IconComponent size={size} />;
};

export default SocialIcon;
