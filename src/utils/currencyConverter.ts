
import { Currency } from '@/contexts/LanguageContext';

// Exchange rates from MAD
const EXCHANGE_RATES = {
  EUR: 0.093,
  USD: 0.099,
} as const;

export const convertFromMAD = (madPrice: number, targetCurrency: Currency): number => {
  const rate = EXCHANGE_RATES[targetCurrency];
  return Math.round(madPrice * rate);
};

export const formatPrice = (price: number, currency: Currency): string => {
  const symbol = currency === 'EUR' ? '€' : '$';
  return `${price}${symbol}`;
};

export const convertAndFormat = (madPrice: number, currency: Currency): string => {
  const convertedPrice = convertFromMAD(madPrice, currency);
  return formatPrice(convertedPrice, currency);
};

// Helper to get localized free shipping threshold
export const getFreeShippingThresholdText = (currency: Currency): string => {
  if (currency === 'EUR') return '€139';
  return '$149';
};
