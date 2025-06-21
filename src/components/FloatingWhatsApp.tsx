
import { useState } from 'react';
import { MessageCircle, X, Send, Crown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingWhatsApp = () => {
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
      if (lowerMessage.includes('whatsapp') || lowerMessage.includes('contact')) {
        return "Parfait ! Je vais vous connecter avec notre équipe spécialisée via WhatsApp pour un conseil personnalisé.";
      } else if (lowerMessage.includes('produit') || lowerMessage.includes('recommand')) {
        return "Je recommande notre Huile d'Argan Premium pour commencer - elle est parfaite pour tous types de peau ! Voulez-vous parler à notre équipe via WhatsApp ?";
      } else {
        return "Bonjour ! Je suis Samra, votre assistante Perle d'Atlas. Je peux vous aider avec nos produits ou vous connecter directement avec notre équipe WhatsApp au 06 63 06 89 80. Comment puis-je vous aider ?";
      }
    } else {
      if (lowerMessage.includes('whatsapp') || lowerMessage.includes('contact')) {
        return "Perfect! I'll connect you with our specialized team via WhatsApp for personalized advice.";
      } else if (lowerMessage.includes('product') || lowerMessage.includes('recommend')) {
        return "I recommend our Premium Argan Oil to start - it's perfect for all skin types! Would you like to speak with our team via WhatsApp?";
      } else {
        return "Hello! I'm Samra, your Perle d'Atlas assistant. I can help with our products or connect you directly with our WhatsApp team at 06 63 06 89 80. How can I assist you?";
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
    const phoneNumber = '+212663068980';
    const whatsappMessage = language === 'fr' 
      ? 'Bonjour! Je suis intéressé(e) par vos produits Perle d\'Atlas.'
      : 'Hello! I would like information about your Perle d\'Atlas products.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <>
      {/* Floating Chat Bubble with original brown/copper design */}
      <div
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 cursor-pointer transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <div className="copper-gradient text-white p-4 rounded-full luxury-shadow hover:shadow-2xl transition-all duration-300 hover-scale flex items-center space-x-3 min-w-[200px]">
          <div className="relative">
            <MessageCircle className="h-6 w-6 flex-shrink-0" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Samra • WhatsApp</span>
            <span className="text-xs opacity-90">06 63 06 89 80</span>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] max-w-sm md:w-96 h-[70vh] md:h-[500px] bg-white rounded-2xl md:rounded-3xl luxury-shadow border border-pearl-200 animate-scale-in flex flex-col overflow-hidden">
          {/* Header */}
          <div className="copper-gradient p-3 md:p-4 text-white rounded-t-2xl md:rounded-t-3xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Crown className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Samra</h3>
                  <p className="text-xs opacity-90">
                    {language === 'fr' ? 'Guide Perle d\'Atlas' : 'Perle d\'Atlas Guide'}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-7 w-7 md:h-8 md:w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-clay-600 py-4 md:py-8">
                <Crown className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 md:mb-3 text-copper-600" />
                <p className="font-medium mb-1 md:mb-2 text-sm md:text-base">
                  {language === 'fr' ? 'Salut ! Je suis Samra' : 'Hello! I\'m Samra'}
                </p>
                <p className="text-xs md:text-sm px-2">
                  {language === 'fr' 
                    ? 'Votre guide Perle d\'Atlas et connexion WhatsApp'
                    : 'Your Perle d\'Atlas guide and WhatsApp connection'
                  }
                </p>
                <Button
                  onClick={handleWhatsAppRedirect}
                  size="sm"
                  className="mt-3 bg-green-500 hover:bg-green-600 text-white rounded-full"
                >
                  <Phone className="h-3 w-3 mr-1" />
                  WhatsApp Direct
                </Button>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-2 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base ${
                    msg.isUser
                      ? 'copper-gradient text-white'
                      : 'bg-pearl-100 text-clay-800'
                  }`}
                >
                  <p>{msg.text}</p>
                  {!msg.isUser && msg.text.includes('WhatsApp') && (
                    <Button
                      onClick={handleWhatsAppRedirect}
                      size="sm"
                      className="mt-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
                    >
                      <Phone className="h-3 w-3 mr-1" />
                      Ouvrir WhatsApp
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 md:p-3 border-t border-pearl-200">
            <div className="flex space-x-2 mb-2">
              <Button
                onClick={handleWhatsAppRedirect}
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full flex-1"
              >
                <Phone className="h-3 w-3 mr-1" />
                WhatsApp 06 63 06 89 80
              </Button>
            </div>
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={language === 'fr' ? 'Parlez à Samra...' : 'Chat with Samra...'}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="rounded-full border-clay-200 focus:border-copper-400 text-sm"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="rounded-full copper-gradient hover-scale h-9 w-9 md:h-10 md:w-10"
              >
                <Send className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
