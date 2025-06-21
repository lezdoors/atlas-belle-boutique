
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatWindow from './chatbot/ChatWindow';

const SamraRefactoredChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; language: 'fr' | 'en' }>>([]);
  const { language } = useLanguage();

  // Detect if user is writing in French or English
  const detectLanguage = (text: string): 'fr' | 'en' => {
    const frenchWords = ['bonjour', 'salut', 'merci', 'comment', 'parler', 'français', 'produit', 'aide', 'conseil'];
    const englishWords = ['hello', 'hi', 'thank', 'how', 'help', 'product', 'advice', 'english'];
    
    const lowerText = text.toLowerCase();
    const frenchMatches = frenchWords.filter(word => lowerText.includes(word)).length;
    const englishMatches = englishWords.filter(word => lowerText.includes(word)).length;
    
    return frenchMatches > englishMatches ? 'fr' : 'en';
  };

  const generateResponse = (userMessage: string, detectedLang: 'fr' | 'en') => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (detectedLang === 'fr') {
      if (lowerMessage.includes('produit') || lowerMessage.includes('recommand')) {
        return "Je recommande notre Huile d'Argan Premium pour commencer - elle est parfaite pour tous types de peau ! Voulez-vous en savoir plus sur nos autres produits ?";
      } else if (lowerMessage.includes('ritual') || lowerMessage.includes('soin')) {
        return "Nos rituels marocains traditionnels transforment votre routine beauté. Le rituel à l'huile d'argan est très populaire. Souhaitez-vous que je vous guide ?";
      } else if (lowerMessage.includes('commande') || lowerMessage.includes('livraison')) {
        return "Je peux vous aider avec votre commande ! Pour un support personnalisé, je peux vous connecter avec notre équipe via WhatsApp. Voulez-vous que je vous redirige ?";
      } else if (lowerMessage.includes('whatsapp') || lowerMessage.includes('contact')) {
        return "Parfait ! Je vais vous rediriger vers WhatsApp pour parler directement avec notre équipe spécialisée.";
      } else {
        return "Bonjour ! Je suis Samra, votre assistante Perle d'Atlas. Je peux vous aider avec : 🌟 Suggestions de produits, 💆‍♀️ Conseils rituels, 📦 Questions de commande. Comment puis-je vous aider ?";
      }
    } else {
      if (lowerMessage.includes('product') || lowerMessage.includes('recommend')) {
        return "I recommend our Premium Argan Oil to start - it's perfect for all skin types! Would you like to learn more about our other products?";
      } else if (lowerMessage.includes('ritual') || lowerMessage.includes('routine')) {
        return "Our traditional Moroccan rituals transform your beauty routine. The argan oil ritual is very popular. Would you like me to guide you?";
      } else if (lowerMessage.includes('order') || lowerMessage.includes('shipping')) {
        return "I can help you with your order! For personalized support, I can connect you with our team via WhatsApp. Would you like me to redirect you?";
      } else if (lowerMessage.includes('whatsapp') || lowerMessage.includes('contact')) {
        return "Perfect! I'll redirect you to WhatsApp to speak directly with our specialized team.";
      } else {
        return "Hello! I'm Samra, your Perle d'Atlas assistant. I can help with: 🌟 Product suggestions, 💆‍♀️ Ritual advice, 📦 Order help. How can I assist you?";
      }
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const detectedLang = detectLanguage(message);
    const newUserMessage = { text: message, isUser: true, language: detectedLang };
    const response = generateResponse(message, detectedLang);
    const botResponse = { text: response, isUser: false, language: detectedLang };
    
    setMessages(prev => [...prev, newUserMessage, botResponse]);
    setMessage('');
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+212600000000'; // Replace with actual number
    const whatsappMessage = language === 'fr' 
      ? 'Bonjour, j\'aimerais avoir des informations sur vos produits Perle d\'Atlas.'
      : 'Hello, I would like information about your Perle d\'Atlas products.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleActionClick = (actionMessage: string) => {
    setMessage(actionMessage);
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full copper-gradient hover-scale luxury-shadow border-0 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        size="icon"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <ChatWindow
          messages={messages}
          message={message}
          setMessage={setMessage}
          onSendMessage={handleSendMessage}
          onClose={() => setIsOpen(false)}
          onActionClick={handleActionClick}
          onWhatsAppRedirect={handleWhatsAppRedirect}
          language={language}
        />
      )}
    </>
  );
};

export default SamraRefactoredChatbot;
