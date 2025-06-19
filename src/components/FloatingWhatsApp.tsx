
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+212600000000'; // Replace with actual number
    const message = encodeURIComponent('Bonjour, j\'aimerais avoir des informations sur vos produits Perle d\'Atlas.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default FloatingWhatsApp;
