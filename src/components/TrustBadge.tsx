
import React from 'react';
import { CheckCircle, Globe, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TrustBadge = () => {
  const { language } = useLanguage();

  const trustPoints = [
    {
      icon: <Truck className="h-4 w-4 text-green-600" />,
      text: language === 'fr' 
        ? '✅ Expédié depuis le Maroc sous 72h avec DHL Express'
        : '✅ Shipped from Morocco within 72h via DHL Express'
    },
    {
      icon: <Globe className="h-4 w-4 text-blue-600" />,
      text: language === 'fr' 
        ? '🌍 Livraison internationale rapide et suivie'
        : '🌍 Fast and tracked international delivery'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 mt-4">
      <div className="space-y-2">
        {trustPoints.map((point, index) => (
          <div key={index} className="flex items-start space-x-2">
            <div className="flex-shrink-0 mt-0.5">
              {point.icon}
            </div>
            <p className="text-sm text-gray-700 font-medium">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadge;
