
import { LogoColors } from './LogoTypes';

export const getLogoColors = (variant: string): LogoColors => {
  const goldColor = variant === 'watermark' ? 'rgba(184, 134, 11, 0.6)' : '#B8860B';
  const darkBg = variant === 'light' ? '#1a1a1a' : 'transparent';
  
  return { goldColor, darkBg };
};
