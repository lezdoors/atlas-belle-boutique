
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+33663068980';
    const message = encodeURIComponent('Bonjour! Je suis intéressé(e) par vos produits Perle d\'Atlas.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="icon"
      className="fixed bottom-6 left-6 z-[9997] h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white luxury-shadow hover:shadow-2xl transition-all duration-300 hover-scale animate-float"
      aria-label="Contact us on WhatsApp"
      style={{ 
        position: 'fixed',
        bottom: '1.5rem',
        left: '1.5rem',
        zIndex: 9997
      }}
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default FloatingWhatsApp;
