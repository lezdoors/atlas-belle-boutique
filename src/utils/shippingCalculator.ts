
import { Currency } from '@/contexts/LanguageContext';

export const SHIPPING_THRESHOLDS = {
  USD: 149,
  EUR: 139,
} as const;

export const SHIPPING_COSTS = {
  USD: 19.90,
  EUR: 18.50,
} as const;

export const calculateShipping = (totalPrice: number, currency: Currency): number => {
  const threshold = SHIPPING_THRESHOLDS[currency];
  const shippingCost = SHIPPING_COSTS[currency];
  
  return totalPrice >= threshold ? 0 : shippingCost;
};

export const getFreeShippingThreshold = (currency: Currency): number => {
  return SHIPPING_THRESHOLDS[currency];
};

export const formatShippingCost = (cost: number, currency: Currency): string => {
  const symbol = currency === 'EUR' ? '€' : '$';
  return cost === 0 ? 'Gratuit' : `${cost.toFixed(2)}${symbol}`;
};
