
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+212663068980';
    const message = encodeURIComponent('Bonjour! Je suis intéressé(e) par vos produits Perle d\'Atlas.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 cursor-pointer animate-float"
      style={{ position: 'fixed' }}
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full luxury-shadow hover:shadow-2xl transition-all duration-300 hover-scale flex items-center space-x-3 min-w-[200px]">
        <MessageCircle className="h-6 w-6 flex-shrink-0" />
        <div className="flex flex-col">
          <span className="text-sm font-medium">WhatsApp</span>
          <span className="text-xs opacity-90">06 63 06 89 80</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
