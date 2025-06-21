
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Sparkles, ShoppingBag, Heart, HelpCircle, Phone, Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SamraEnhancedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; language: 'fr' | 'en' }>>([]);
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

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+33663068980'; // Updated to match the provided number
    const whatsappMessage = language === 'fr' 
      ? 'Bonjour Samra ! J\'aimerais des conseils personnalisés sur vos produits Perle d\'Atlas saisonniers.'
      : 'Hello Samra! I would like personalized advice about your seasonal Perle d\'Atlas products.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const quickActions = [
    {
      icon: Crown,
      label: language === 'fr' ? 'Collections' : 'Collections',
      action: () => {
        const msg = language === 'fr' ? 'Quelles sont vos collections saisonnières ?' : 'What are your seasonal collections?';
        setMessage(msg);
        handleSendMessage();
      }
    },
    {
      icon: Heart,
      label: language === 'fr' ? 'Rituels' : 'Rituals',
      action: () => {
        const msg = language === 'fr' ? 'Parlez-moi des rituels de beauté ancestraux' : 'Tell me about ancestral beauty rituals';
        setMessage(msg);
        handleSendMessage();
      }
    },
    {
      icon: HelpCircle,
      label: language === 'fr' ? 'Conseils' : 'Advice',
      action: () => {
        const msg = language === 'fr' ? 'J\'ai besoin de conseils personnalisés' : 'I need personalized advice';
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
      {/* Enhanced floating chat bubble with better mobile positioning and fixed z-index */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-20 right-4 md:bottom-24 md:right-6 z-[9998] h-14 w-14 md:h-16 md:w-16 rounded-full copper-gradient hover-scale luxury-shadow border-0 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        size="icon"
        style={{ position: 'fixed' }}
      >
        <div className="relative">
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
        </div>
      </Button>

      {/* Enhanced chat window with better mobile optimization and fixed z-index */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] w-[calc(100vw-2rem)] max-w-sm md:w-96 h-[70vh] md:h-[500px] bg-white rounded-2xl md:rounded-3xl luxury-shadow border border-pearl-200 animate-scale-in flex flex-col overflow-hidden"
             style={{ position: 'fixed' }}>
          {/* Enhanced header with Samra branding */}
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

          {/* Messages with enhanced mobile scrolling */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-clay-600 py-4 md:py-8">
                <Crown className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 md:mb-3 text-copper-600" />
                <p className="font-medium mb-1 md:mb-2 text-sm md:text-base">
                  {language === 'fr' ? 'Salut ! Je suis Samra' : 'Hello! I\'m Samra'}
                </p>
                <p className="text-xs md:text-sm px-2">
                  {language === 'fr' 
                    ? 'Votre guide des trésors ancestraux du Maroc'
                    : 'Your guide to Morocco\'s ancestral treasures'
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
                  className={`max-w-[85%] p-2 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base ${
                    msg.isUser
                      ? 'copper-gradient text-white'
                      : 'bg-pearl-100 text-clay-800'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced quick actions with mobile optimization */}
          <div className="p-2 md:p-3 border-t border-pearl-200">
            <div className="grid grid-cols-4 gap-1 md:gap-2 mb-2 md:mb-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="flex flex-col items-center gap-1 h-auto py-1.5 md:py-2 px-1 border-clay-200 hover:border-copper-400 hover:bg-copper-50 text-xs"
                >
                  <action.icon className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-[10px] md:text-xs leading-tight">{action.label}</span>
                </Button>
              ))}
            </div>

            {/* Enhanced message input */}
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={language === 'fr' ? 'Votre message...' : 'Your message...'}
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

export default SamraEnhancedChatbot;
