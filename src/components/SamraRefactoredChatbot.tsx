
import { useState, useEffect } from 'react';
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
  image?: string;
}

interface SamraRefactoredChatbotProps {
  videoEnded?: boolean;
}

const SamraRefactoredChatbot = ({ videoEnded = false }: SamraRefactoredChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const { language } = useLanguage();

  // Supabase media URLs for enhanced responses
  const mediaAssets = {
    logo: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/397b8d88-7594-4433-8004-050f047a13b6.png",
    products: [
      "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/073dee32-d52c-4b0f-9910-d5d85832b4ef.png",
      "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/0e8aa0f1-02db-49c9-962e-3153840ac9ba.png",
      "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png"
    ],
    ingredients: [
      "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/4d22e63c-9766-4547-889d-0462b7de47e6.png",
      "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/616bba28-fbf7-4dfb-bae7-e036ccd1e78b.png"
    ],
    artisans: [
      "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/6d0913b6-03ca-40b5-9002-ea188762b64f.png",
      "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/6fde7854-c65c-40e6-8df6-8d9ca69c3fc8.png"
    ],
    lifestyle: [
      "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
      "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/78b2a27c-3352-460a-b4bb-78efaec79db3.png"
    ]
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Show chatbot after video ends or after 9 seconds timeout
    if (videoEnded) {
      timeoutId = setTimeout(() => {
        setShowChatbot(true);
      }, 500);
    } else {
      timeoutId = setTimeout(() => {
        setShowChatbot(true);
      }, 9000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [videoEnded]);

  // Enhanced language detection with more keywords
  const detectLanguage = (text: string): 'fr' | 'en' => {
    const frenchWords = [
      'bonjour', 'salut', 'merci', 'comment', 'parler', 'français', 'produit', 'aide', 'conseil',
      'argan', 'huile', 'beauté', 'peau', 'visage', 'cheveux', 'naturel', 'bio', 'maroc',
      'tradition', 'ancestral', 'rituel', 'soin', 'cosmétique', 'luxe', 'artisan', 'berbère',
      'commande', 'livraison', 'prix', 'collection', 'routine', 'recommandation'
    ];
    
    const englishWords = [
      'hello', 'hi', 'thank', 'how', 'help', 'product', 'advice', 'english',
      'argan', 'oil', 'beauty', 'skin', 'face', 'hair', 'natural', 'organic', 'morocco',
      'tradition', 'ancestral', 'ritual', 'care', 'cosmetic', 'luxury', 'artisan', 'berber',
      'order', 'shipping', 'price', 'collection', 'routine', 'recommendation'
    ];
    
    const lowerText = text.toLowerCase();
    const frenchMatches = frenchWords.filter(word => lowerText.includes(word)).length;
    const englishMatches = englishWords.filter(word => lowerText.includes(word)).length;
    
    return frenchMatches > englishMatches ? 'fr' : 'en';
  };

  // Enhanced response generation with media integration
  const generateResponse = (userMessage: string, detectedLang: 'fr' | 'en'): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (detectedLang === 'fr') {
      // Product inquiries
      if (lowerMessage.includes('produit') || lowerMessage.includes('huile') || lowerMessage.includes('argan')) {
        return {
          text: "Nos huiles d'argan sont extraites à la main par nos artisanes berbères. Voici notre collection premium :",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.products[0]
        };
      }
      
      // Artisan and tradition inquiries
      if (lowerMessage.includes('artisan') || lowerMessage.includes('tradition') || lowerMessage.includes('berbère')) {
        return {
          text: "Nos artisanes berbères perpétuent des traditions millénaires. Chaque produit raconte une histoire authentique du Maroc.",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.artisans[0]
        };
      }
      
      // Ingredients inquiries
      if (lowerMessage.includes('ingrédient') || lowerMessage.includes('naturel') || lowerMessage.includes('bio')) {
        return {
          text: "Nos ingrédients sont 100% naturels, récoltés dans les régions authentiques du Maroc. Découvrez notre carte des origines !",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.ingredients[0]
        };
      }
      
      // Ritual and routine inquiries
      if (lowerMessage.includes('ritual') || lowerMessage.includes('routine') || lowerMessage.includes('soin')) {
        return {
          text: "Voici notre rituel signature inspiré des traditions marocaines : nettoyage au ghassoul, tonification à l'eau de rose, hydratation à l'huile d'argan. Un voyage sensoriel unique !",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.lifestyle[0]
        };
      }
      
      // Order and shipping
      if (lowerMessage.includes('commande') || lowerMessage.includes('livraison') || lowerMessage.includes('acheter')) {
        return {
          text: "Je peux vous guider pour votre commande ! Pour un service personnalisé et un suivi direct, connectons-nous via WhatsApp. Notre équipe vous accompagnera avec plaisir.",
          isUser: false,
          language: detectedLang
        };
      }
      
      // WhatsApp redirect
      if (lowerMessage.includes('whatsapp') || lowerMessage.includes('contact') || lowerMessage.includes('parler')) {
        return {
          text: "Parfait ! Je vous redirige vers WhatsApp pour un échange direct avec notre équipe spécialisée. Vous aurez des conseils personnalisés et un suivi privilégié.",
          isUser: false,
          language: detectedLang
        };
      }
      
      // Default welcome message
      return {
        text: "Bienvenue chez Perle d'Atlas ! 🌟 Je suis Samra, votre guide beauté. Je peux vous aider avec : ✨ Découverte de nos produits, 💆‍♀️ Conseils rituels personnalisés, 🛒 Accompagnement commande, 📱 Contact WhatsApp direct. Que souhaitez-vous explorer ?",
        isUser: false,
        language: detectedLang,
        image: mediaAssets.logo
      };
    } else {
      // English responses
      if (lowerMessage.includes('product') || lowerMessage.includes('argan') || lowerMessage.includes('oil')) {
        return {
          text: "Our argan oils are hand-extracted by our Berber artisans. Here's our premium collection:",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.products[1]
        };
      }
      
      if (lowerMessage.includes('artisan') || lowerMessage.includes('tradition') || lowerMessage.includes('berber')) {
        return {
          text: "Our Berber artisans perpetuate thousand-year-old traditions. Each product tells an authentic story of Morocco.",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.artisans[1]
        };
      }
      
      if (lowerMessage.includes('ingredient') || lowerMessage.includes('natural') || lowerMessage.includes('organic')) {
        return {
          text: "Our ingredients are 100% natural, harvested from authentic Moroccan regions. Discover our origin map!",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.ingredients[1]
        };
      }
      
      if (lowerMessage.includes('ritual') || lowerMessage.includes('routine') || lowerMessage.includes('care')) {
        return {
          text: "Here's our signature ritual inspired by Moroccan traditions: ghassoul cleansing, rose water toning, argan oil moisturizing. A unique sensory journey!",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.lifestyle[1]
        };
      }
      
      if (lowerMessage.includes('order') || lowerMessage.includes('shipping') || lowerMessage.includes('buy')) {
        return {
          text: "I can guide you with your order! For personalized service and direct follow-up, let's connect via WhatsApp. Our team will assist you with pleasure.",
          isUser: false,
          language: detectedLang
        };
      }
      
      if (lowerMessage.includes('whatsapp') || lowerMessage.includes('contact') || lowerMessage.includes('speak')) {
        return {
          text: "Perfect! I'll redirect you to WhatsApp for direct exchange with our specialized team. You'll get personalized advice and privileged follow-up.",
          isUser: false,
          language: detectedLang
        };
      }
      
      return {
        text: "Welcome to Perle d'Atlas! 🌟 I'm Samra, your beauty guide. I can help with: ✨ Product discovery, 💆‍♀️ Personalized ritual advice, 🛒 Order assistance, 📱 Direct WhatsApp contact. What would you like to explore?",
        isUser: false,
        language: detectedLang,
        image: mediaAssets.logo
      };
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const detectedLang = detectLanguage(message);
    const newUserMessage: Message = { text: message, isUser: true, language: detectedLang };
    const response = generateResponse(message, detectedLang);
    
    setMessages(prev => [...prev, newUserMessage, response]);
    setMessage('');
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+33663068980';
    const whatsappMessage = language === 'fr' 
      ? 'Bonjour Perle d\'Atlas ! J\'aimerais avoir des informations personnalisées sur vos produits de beauté marocains.' 
      : 'Hello Perle d\'Atlas! I would like personalized information about your Moroccan beauty products.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleQuickActionClick = (actionMessage: string) => {
    setMessage(actionMessage);
    const detectedLang = detectLanguage(actionMessage);
    const newUserMessage: Message = { text: actionMessage, isUser: true, language: detectedLang };
    const response = generateResponse(actionMessage, detectedLang);
    
    setMessages(prev => [...prev, newUserMessage, response]);
    setMessage('');
  };

  // Only render if chatbot should be visible
  if (!showChatbot) return null;

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

export default SamraRefactoredChatbot;
