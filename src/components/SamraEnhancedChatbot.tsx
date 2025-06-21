
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatFloatingButton from '@/components/chatbot/ChatFloatingButton';
import ChatWindow from '@/components/chatbot/ChatWindow';
import ChatHeader from '@/components/chatbot/ChatHeader';
import ChatMessages from '@/components/chatbot/ChatMessages';
import ChatInputContainer from '@/components/chatbot/ChatInputContainer';

interface Message {
  text: string;
  isUser: boolean;
  language: 'fr' | 'en';
}

const SamraEnhancedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const { language } = useLanguage();

  // Enhanced language detection for better Moroccan context
  const detectLanguage = (text: string): 'fr' | 'en' => {
    const frenchWords = ['bonjour', 'salut', 'merci', 'comment', 'parler', 'français', 'produit', 'aide', 'conseil', 'argan', 'ghassoul', 'maroc'];
    const englishWords = ['hello', 'hi', 'thank', 'how', 'help', 'product', 'advice', 'english', 'argan', 'clay', 'morocco'];
    
    const lowerText = text.toLowerCase();
    const frenchMatches = frenchWords.filter(word => lowerText.includes(word)).length;
    const englishMatches = englishWords.filter(word => lowerText.includes(word)).length;
    
    return frenchMatches > englishMatches ? 'fr' : 'en';
  };

  const generateResponse = (userMessage: string, detectedLang: 'fr' | 'en') => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (detectedLang === 'fr') {
      if (lowerMessage.includes('argan') || lowerMessage.includes('huile')) {
        return "Notre Huile d'Argan Premium est récoltée à la main dans les arganiers centenaires du sud-ouest marocain. Elle est pressée à froid selon les méthodes ancestrales. Voulez-vous en savoir plus sur nos rituels d'application ?";
      } else if (lowerMessage.includes('ghassoul') || lowerMessage.includes('argile')) {
        return "Le Ghassoul est notre argile volcanique des montagnes de l'Atlas, utilisée depuis des siècles pour purifier et nourrir la peau. Parfait pour un rituel hebdomadaire ! Souhaitez-vous découvrir nos masques ?";
      } else if (lowerMessage.includes('saisonnier') || lowerMessage.includes('collection')) {
        return "Nos collections suivent les cycles naturels marocains. Chaque saison apporte ses propres trésors : rose de Kelaat M'Gouna au printemps, cactus de figue de barbarie en été. Quelle saison vous intéresse ?";
      } else if (lowerMessage.includes('whatsapp') || lowerMessage.includes('contact')) {
        return "Parfait ! Je vais vous connecter avec notre équipe spécialisée via WhatsApp pour un conseil personnalisé sur nos produits artisanaux.";
      } else {
        return "Bienvenue ! Je suis Samra, votre guide Perle d'Atlas. Je connais tous nos secrets de beauté ancestraux : 🌟 Produits saisonniers, 💆‍♀️ Rituels berbères, 📦 Conseils personnalisés. Comment puis-je illuminer votre journée ?";
      }
    } else {
      if (lowerMessage.includes('argan') || lowerMessage.includes('oil')) {
        return "Our Premium Argan Oil is hand-harvested from century-old argan trees in southwestern Morocco, cold-pressed using ancestral methods. Would you like to learn about our application rituals?";
      } else if (lowerMessage.includes('ghassoul') || lowerMessage.includes('clay')) {
        return "Ghassoul is our volcanic clay from the Atlas Mountains, used for centuries to purify and nourish skin. Perfect for weekly rituals! Would you like to discover our masks?";
      } else if (lowerMessage.includes('seasonal') || lowerMessage.includes('collection')) {
        return "Our collections follow natural Moroccan cycles. Each season brings its own treasures: Kelaat M'Gouna roses in spring, prickly pear cactus in summer. Which season interests you?";
      } else if (lowerMessage.includes('whatsapp') || lowerMessage.includes('contact')) {
        return "Perfect! I'll connect you with our specialized team via WhatsApp for personalized advice on our artisanal products.";
      } else {
        return "Welcome! I'm Samra, your Perle d'Atlas guide. I know all our ancestral beauty secrets: 🌟 Seasonal products, 💆‍♀️ Berber rituals, 📦 Personal advice. How can I brighten your day?";
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

  const handleQuickActionClick = (actionMessage: string) => {
    setMessage(actionMessage);
    const detectedLang = detectLanguage(actionMessage);
    const newUserMessage = { text: actionMessage, isUser: true, language: detectedLang };
    const response = generateResponse(actionMessage, detectedLang);
    const botResponse = { text: response, isUser: false, language: detectedLang };
    
    setMessages(prev => [...prev, newUserMessage, botResponse]);
    setMessage('');
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+33663068980';
    const whatsappMessage = language === 'fr' 
      ? 'Bonjour Samra ! J\'aimerais des conseils personnalisés sur vos produits Perle d\'Atlas saisonniers.'
      : 'Hello Samra! I would like personalized advice about your seasonal Perle d\'Atlas products.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <>
      <ChatFloatingButton 
        onClick={() => setIsOpen(true)} 
        isOpen={isOpen} 
      />

      <ChatWindow isOpen={isOpen}>
        <ChatHeader 
          language={language} 
          onClose={() => setIsOpen(false)} 
        />
        
        <ChatMessages 
          messages={messages} 
          language={language} 
        />
        
        <ChatInputContainer
          message={message}
          setMessage={setMessage}
          onSendMessage={handleSendMessage}
          language={language}
          onQuickActionClick={handleQuickActionClick}
          onWhatsAppRedirect={handleWhatsAppRedirect}
        />
      </ChatWindow>
    </>
  );
};

export default SamraEnhancedChatbot;
