
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
  const [hasStartedConversation, setHasStartedConversation] = useState(false);
  const [showFallbackActions, setShowFallbackActions] = useState(false);
  const { language } = useLanguage();

  // Fixed Supabase media URLs
  const mediaAssets = {
    logo: "/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png",
    products: [
      "/lovable-uploads/073dee32-d52c-4b0f-9910-d5d85832b4ef.png",
      "/lovable-uploads/0e8aa0f1-02db-49c9-962e-3153840ac9ba.png",
      "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png"
    ],
    ingredients: [
      "/lovable-uploads/4d22e63c-9766-4547-889d-0462b7de47e6.png",
      "/lovable-uploads/616bba28-fbf7-4dfb-bae7-e036ccd1e78b.png"
    ],
    artisans: [
      "/lovable-uploads/6d0913b6-03ca-40b5-9002-ea188762b64f.png",
      "/lovable-uploads/6fde7854-c65c-40e6-8df6-8d9ca69c3fc8.png"
    ],
    lifestyle: [
      "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
      "/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png"
    ]
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Show chatbot 1 second after video ends or 9 seconds on page load
    if (videoEnded) {
      timeoutId = setTimeout(() => {
        setShowChatbot(true);
      }, 1000);
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

  const detectLanguage = (text: string): 'fr' | 'en' => {
    const frenchWords = [
      'bonjour', 'salut', 'merci', 'comment', 'parler', 'français', 'produit', 'aide', 'conseil',
      'tajine', 'verre', 'marocain', 'livraison', 'expédition', 'retour', 'prix', 'commande',
      'artisanal', 'traditionnel', 'maroc', 'boutique', 'collection', 'newsletter', 'lancement',
      'emballage', 'cadeau', 'support', 'service', 'client'
    ];
    
    const englishWords = [
      'hello', 'hi', 'thank', 'how', 'help', 'product', 'advice', 'english',
      'tajine', 'glass', 'moroccan', 'shipping', 'delivery', 'return', 'price', 'order',
      'handmade', 'traditional', 'morocco', 'boutique', 'collection', 'newsletter', 'launch',
      'gift', 'wrapping', 'support', 'service', 'customer'
    ];
    
    const lowerText = text.toLowerCase();
    const frenchMatches = frenchWords.filter(word => lowerText.includes(word)).length;
    const englishMatches = englishWords.filter(word => lowerText.includes(word)).length;
    
    return frenchMatches > englishMatches ? 'fr' : 'en';
  };

  const generateResponse = (userMessage: string, detectedLang: 'fr' | 'en'): Message => {
    const lowerMessage = userMessage.toLowerCase();
    setShowFallbackActions(false);
    
    if (detectedLang === 'fr') {
      // Greeting responses
      if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
        return {
          text: "Bonjour et bienvenue chez Perle de l'Atlas ! 🌟 Je suis Samra, votre assistante virtuelle. Je suis là pour vous guider dans notre boutique d'articles artisanaux marocains faits main. Comment puis-je vous aider aujourd'hui ?",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.logo
        };
      }

      // Shipping inquiries
      if (lowerMessage.includes('livraison') || lowerMessage.includes('expédition') || lowerMessage.includes('ship')) {
        return {
          text: "Nous expédions dans le monde entier depuis le Maroc via notre service de livraison express internationale ! 📦 La livraison est gratuite pour les commandes de 149$ USD et plus. Les délais de livraison sont généralement de 2 à 5 jours ouvrables selon votre localisation. Toutes les commandes sont soigneusement emballées et entièrement suivies.",
          isUser: false,
          language: detectedLang
        };
      }

      // Product inquiries - Tajines
      if (lowerMessage.includes('tajine') || lowerMessage.includes('plat')) {
        return {
          text: "Nos tajines artisanaux sont de véritables œuvres d'art ! 🏺 Fabriqués à la main en argile traditionnelle au Maroc, ils sont parfaits pour 2 à 4 personnes. Un tajine permet une cuisson lente et savoureuse qui préserve tous les arômes. C'est l'essence même de la cuisine marocaine authentique !",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.products[0]
        };
      }

      // Product inquiries - Glasses
      if (lowerMessage.includes('verre') || lowerMessage.includes('thé') || lowerMessage.includes('glass')) {
        return {
          text: "Nos verres marocains sont soufflés à la main selon des techniques ancestrales ! 🫖 Parfaits pour déguster le thé à la menthe traditionnel, ils sont disponibles en sets individuels ou en service complet. Chaque verre est unique et reflète le savoir-faire artisanal marocain.",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.products[1]
        };
      }

      // Launch and availability
      if (lowerMessage.includes('lancement') || lowerMessage.includes('ouverture') || lowerMessage.includes('disponible')) {
        return {
          text: "Nous sommes actuellement en lancement progressif ! 🎉 Notre grande ouverture officielle aura lieu très bientôt. En attendant, vous pouvez vous inscrire à notre newsletter pour un accès exclusif aux nouvelles collections et aux histoires d'artisans. Vous serez les premiers informés !",
          isUser: false,
          language: detectedLang
        };
      }

      // Newsletter subscription
      if (lowerMessage.includes('newsletter') || lowerMessage.includes('inscription') || lowerMessage.includes('email')) {
        return {
          text: "Excellente idée ! 💎 En vous inscrivant à notre newsletter, vous aurez un accès privilégié aux nouvelles collections, aux histoires exclusives de nos artisans, et vous serez informé en avant-première de notre grande ouverture. C'est le meilleur moyen de ne rien manquer !",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.lifestyle[0]
        };
      }

      // Returns and support
      if (lowerMessage.includes('retour') || lowerMessage.includes('remboursement') || lowerMessage.includes('problème')) {
        return {
          text: "Si un produit arrive endommagé ou ne correspond pas à vos attentes, contactez notre équipe à support@atlasperle.com 📧 Nous nous engageons à offrir un service client exceptionnel et des solutions équitables. Notre équipe vous accompagnera pour résoudre toute situation.",
          isUser: false,
          language: detectedLang
        };
      }

      // Gift wrapping
      if (lowerMessage.includes('cadeau') || lowerMessage.includes('emballage')) {
        return {
          text: "Nos produits font de magnifiques cadeaux ! 🎁 Pour des questions spécifiques sur l'emballage cadeau, je vous invite à contacter notre équipe à support@atlasperle.com. Ils pourront vous proposer les meilleures options pour sublimer vos présents.",
          isUser: false,
          language: detectedLang
        };
      }

      // Price inquiries
      if (lowerMessage.includes('prix') || lowerMessage.includes('coût') || lowerMessage.includes('tarif')) {
        return {
          text: "Nos prix reflètent la qualité artisanale et l'authenticité de nos créations marocaines 💎 Pour connaître les tarifs détaillés de nos tajines, verres et autres articles, je vous invite à parcourir notre boutique ou à contacter notre équipe pour des informations personnalisées.",
          isUser: false,
          language: detectedLang
        };
      }

      // Fallback response
      setShowFallbackActions(true);
      return {
        text: "Je ne suis pas sûre de bien comprendre votre demande 🤔 Puis-je vous aider avec nos tajines artisanaux, nos verres marocains, la livraison, ou avez-vous d'autres questions sur notre boutique ? N'hésitez pas à être plus précis !",
        isUser: false,
        language: detectedLang
      };
    } else {
      // English responses
      // Greeting responses
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('bonjour')) {
        return {
          text: "Hello and welcome to Perle de l'Atlas! 🌟 I'm Samra, your virtual assistant. I'm here to guide you through our boutique of handcrafted Moroccan goods. How can I help you today?",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.logo
        };
      }

      // Shipping inquiries
      if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery') || lowerMessage.includes('ship')) {
        return {
          text: "We ship worldwide from Morocco using express international delivery! 📦 Free shipping applies to orders of $149 USD and above. Estimated delivery times are typically 2–5 business days depending on your location. All orders are carefully packed and fully tracked.",
          isUser: false,
          language: detectedLang
        };
      }

      // Product inquiries - Tajines
      if (lowerMessage.includes('tajine') || lowerMessage.includes('tagine') || lowerMessage.includes('dish')) {
        return {
          text: "Our handmade tajines are true works of art! 🏺 Crafted from traditional clay in Morocco, they're sized perfectly for 2–4 people. A tajine allows slow, flavorful cooking that preserves all the aromas. It's the essence of authentic Moroccan cuisine!",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.products[0]
        };
      }

      // Product inquiries - Glasses
      if (lowerMessage.includes('glass') || lowerMessage.includes('tea') || lowerMessage.includes('moroccan glass')) {
        return {
          text: "Our Moroccan glasses are handblown using ancestral techniques! 🫖 Perfect for enjoying traditional mint tea, they're available as individual pieces or complete serving sets. Each glass is unique and reflects authentic Moroccan craftsmanship.",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.products[1]
        };
      }

      // Launch and availability
      if (lowerMessage.includes('launch') || lowerMessage.includes('opening') || lowerMessage.includes('available')) {
        return {
          text: "We're currently in soft launch! 🎉 Our grand opening is coming very soon. In the meantime, you can sign up for our newsletter to get exclusive first access to new drops and behind-the-scenes stories. You'll be among the first to know!",
          isUser: false,
          language: detectedLang
        };
      }

      // Newsletter subscription
      if (lowerMessage.includes('newsletter') || lowerMessage.includes('subscribe') || lowerMessage.includes('email')) {
        return {
          text: "Excellent idea! 💎 By signing up for our newsletter, you'll get exclusive first access to new collections, behind-the-scenes artisan stories, and early notification of our grand opening. It's the best way to stay connected with us!",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.lifestyle[0]
        };
      }

      // Returns and support
      if (lowerMessage.includes('return') || lowerMessage.includes('refund') || lowerMessage.includes('problem')) {
        return {
          text: "If a product arrives damaged or not as expected, please contact our team at support@atlasperle.com 📧 We're committed to providing exceptional customer care and fair solutions. Our support team will work with you to resolve any situation.",
          isUser: false,
          language: detectedLang
        };
      }

      // Gift wrapping
      if (lowerMessage.includes('gift') || lowerMessage.includes('wrapping')) {
        return {
          text: "Our products make wonderful gifts! 🎁 For specific questions about gift wrapping options, please contact our team at support@atlasperle.com. They can provide you with the best options to make your presents extra special.",
          isUser: false,
          language: detectedLang
        };
      }

      // Price inquiries
      if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
        return {
          text: "Our prices reflect the artisanal quality and authenticity of our Moroccan creations 💎 For detailed pricing on our tajines, glasses, and other items, I invite you to browse our boutique or contact our team for personalized information.",
          isUser: false,
          language: detectedLang
        };
      }

      // Fallback response
      setShowFallbackActions(true);
      return {
        text: "I'm not quite sure I understand your request 🤔 Can I help you with our handmade tajines, Moroccan glasses, shipping information, or do you have other questions about our boutique? Feel free to be more specific!",
        isUser: false,
        language: detectedLang
      };
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setHasStartedConversation(true);
    
    const detectedLang = detectLanguage(message);
    const newUserMessage: Message = { text: message, isUser: true, language: detectedLang };
    const response = generateResponse(message, detectedLang);
    
    setMessages(prev => [...prev, newUserMessage, response]);
    setMessage('');
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+33663068980';
    const whatsappMessage = language === 'fr' 
      ? 'Bonjour Perle d\'Atlas ! J\'aimerais avoir des informations personnalisées sur vos produits artisanaux marocains.' 
      : 'Hello Perle d\'Atlas! I would like personalized information about your handcrafted Moroccan products.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleQuickActionClick = (actionMessage: string) => {
    setMessage(actionMessage);
    setHasStartedConversation(true);
    
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
          showQuickActions={!hasStartedConversation}
          showFallbackActions={showFallbackActions}
        />
      </ChatWindow>
    </>
  );
};

export default SamraRefactoredChatbot;
