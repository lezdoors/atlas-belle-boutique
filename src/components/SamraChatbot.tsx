
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Sparkles, ShoppingBag, Heart, HelpCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SamraChatbot = () => {
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

  const quickActions = [
    {
      icon: ShoppingBag,
      label: language === 'fr' ? 'Produits' : 'Products',
      action: () => {
        const msg = language === 'fr' ? 'Quels produits recommandez-vous ?' : 'What products do you recommend?';
        setMessage(msg);
        handleSendMessage();
      }
    },
    {
      icon: Heart,
      label: language === 'fr' ? 'Rituels' : 'Rituals',
      action: () => {
        const msg = language === 'fr' ? 'Parlez-moi des rituels de beauté' : 'Tell me about beauty rituals';
        setMessage(msg);
        handleSendMessage();
      }
    },
    {
      icon: HelpCircle,
      label: language === 'fr' ? 'Aide' : 'Help',
      action: () => {
        const msg = language === 'fr' ? 'J\'ai besoin d\'aide avec ma commande' : 'I need help with my order';
        setMessage(msg);
        handleSendMessage();
      }
    },
    {
      icon: Phone,
      label: language === 'fr' ? 'WhatsApp' : 'WhatsApp',
      action: handleWhatsAppRedirect
    }
  ];

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
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-3xl luxury-shadow border border-pearl-200 animate-scale-in flex flex-col overflow-hidden">
          {/* Header */}
          <div className="copper-gradient p-4 text-white rounded-t-3xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Samra</h3>
                  <p className="text-xs opacity-90">
                    {language === 'fr' ? 'Assistante Perle d\'Atlas' : 'Perle d\'Atlas Assistant'}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-clay-600 py-8">
                <Sparkles className="h-8 w-8 mx-auto mb-3 text-copper-600" />
                <p className="font-medium mb-2">
                  {language === 'fr' ? 'Bonjour ! Je suis Samra' : 'Hello! I\'m Samra'}
                </p>
                <p className="text-sm">
                  {language === 'fr' 
                    ? 'Comment puis-je vous aider aujourd\'hui ?'
                    : 'How can I help you today?'
                  }
                </p>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.isUser
                      ? 'copper-gradient text-white'
                      : 'bg-pearl-100 text-clay-800'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-pearl-200">
            <div className="grid grid-cols-4 gap-2 mb-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="flex flex-col items-center gap-1 h-auto py-2 px-1 border-clay-200 hover:border-copper-400 hover:bg-copper-50"
                >
                  <action.icon className="h-4 w-4" />
                  <span className="text-xs">{action.label}</span>
                </Button>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={language === 'fr' ? 'Tapez votre message...' : 'Type your message...'}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="rounded-full border-clay-200 focus:border-copper-400"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="rounded-full copper-gradient hover-scale"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SamraChatbot;
