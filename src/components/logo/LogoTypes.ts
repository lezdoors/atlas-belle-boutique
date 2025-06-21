
export interface PerleAtlasLogoProps {
  size?: 'small' | 'medium' | 'large' | 'favicon';
  variant?: 'light' | 'dark' | 'watermark';
  animated?: boolean;
  className?: string;
}

export interface LogoDimensions {
  width: number;
  height: number;
}

export interface LogoColors {
  goldColor: string;
  darkBg: string;
}
