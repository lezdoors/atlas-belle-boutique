import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+212663068980';
    const message = encodeURIComponent('Bonjour! Je suis intéressé(e) par vos produits Perle de l\'Atlas.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  return;
};
export default FloatingWhatsApp;