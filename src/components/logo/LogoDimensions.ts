
import { LogoDimensions } from './LogoTypes';

export const LOGO_DIMENSIONS: Record<string, LogoDimensions> = {
  favicon: { width: 32, height: 32 },
  small: { width: 120, height: 80 },
  medium: { width: 200, height: 133 },
  large: { width: 400, height: 266 }
};

export const getLogoDimensions = (size: string): LogoDimensions => {
  return LOGO_DIMENSIONS[size] || LOGO_DIMENSIONS.medium;
};
