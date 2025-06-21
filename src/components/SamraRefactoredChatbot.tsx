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
      }, 1000); // 1 second after video ends
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
      'argan', 'huile', 'beauté', 'peau', 'visage', 'cheveux', 'naturel', 'bio', 'maroc',
      'tradition', 'ancestral', 'rituel', 'soin', 'cosmétique', 'luxe', 'artisan', 'berbère',
      'commande', 'livraison', 'prix', 'collection', 'routine', 'recommandation', 'échantillon',
      'grossiste', 'professionnel', 'expédition'
    ];
    
    const englishWords = [
      'hello', 'hi', 'thank', 'how', 'help', 'product', 'advice', 'english',
      'argan', 'oil', 'beauty', 'skin', 'face', 'hair', 'natural', 'organic', 'morocco',
      'tradition', 'ancestral', 'ritual', 'care', 'cosmetic', 'luxury', 'artisan', 'berber',
      'order', 'shipping', 'price', 'collection', 'routine', 'recommendation', 'sample',
      'wholesale', 'professional'
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
      // Newsletter and email inquiries
      if (lowerMessage.includes('newsletter') || lowerMessage.includes('email') || lowerMessage.includes('inscription')) {
        return {
          text: "Magnifique ! Rejoignez notre communauté exclusive pour découvrir nos secrets de beauté saisonniers 💎 Vous recevrez nos guides de rituels ancestraux, nos dernières découvertes d'ingrédients et nos offres privilégiées. Un voyage olfactif directement dans votre boîte email !",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.lifestyle[0]
        };
      }

      // Argan oil inquiries with warm Moroccan tone
      if (lowerMessage.includes('argan') || lowerMessage.includes('huile')) {
        return {
          text: "Ah, l'huile d'argan ! Notre trésor du Sud marocain 🌟 Nos artisanes berbères l'extraient avec patience selon des méthodes ancestrales. Riche en vitamine E et acides gras, elle nourrit votre peau comme une caresse du désert. Chaque goutte raconte l'histoire de nos arganiers centenaires !",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.products[0]
        };
      }
      
      // Artisan and tradition inquiries
      if (lowerMessage.includes('artisan') || lowerMessage.includes('tradition') || lowerMessage.includes('berbère')) {
        return {
          text: "Nos artisanes berbères sont les gardiennes de secrets millénaires ✨ Dans les villages de l'Atlas, de mère en fille, elles transmettent l'art de sublimer les trésors de notre terre. Chaque geste est empreint de sagesse ancestrale, chaque produit porte leur âme généreuse.",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.artisans[0]
        };
      }
      
      // Ingredients inquiries
      if (lowerMessage.includes('ingrédient') || lowerMessage.includes('naturel') || lowerMessage.includes('bio')) {
        return {
          text: "Nos ingrédients sont cueillis avec respect dans les jardins secrets du Maroc 🌿 Du ghassoul volcanique de l'Atlas aux roses de Dadès, chaque élément est choisi pour sa pureté et son authenticité. La nature marocaine nous offre ses plus beaux présents !",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.ingredients[0]
        };
      }
      
      // Ritual inquiries with detailed guidance
      if (lowerMessage.includes('ritual') || lowerMessage.includes('routine') || lowerMessage.includes('soin')) {
        return {
          text: "Voici notre rituel signature 'Hammam Royal' 👑 : 1) Purification au ghassoul pour libérer votre peau, 2) Tonification à l'eau de rose de Dadès pour révéler votre éclat, 3) Nourrissement à l'huile d'argan pour une douceur incomparable. Un voyage sensoriel inspiré de nos traditions !",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.lifestyle[0]
        };
      }
      
      // Shipping and samples
      if (lowerMessage.includes('livraison') || lowerMessage.includes('expédition') || lowerMessage.includes('échantillon')) {
        return {
          text: "Pour la livraison et les échantillons, je vous connecte directement avec notre équipe spécialisée ! Ils vous proposeront les meilleures options selon votre localisation et vos besoins. Un service personnalisé comme dans les souks de Marrakech ! 📦✨",
          isUser: false,
          language: detectedLang
        };
      }
      
      // Wholesale inquiries
      if (lowerMessage.includes('grossiste') || lowerMessage.includes('professionnel') || lowerMessage.includes('revendeur')) {
        return {
          text: "Magnifique ! Vous souhaitez devenir partenaire de Perle d'Atlas ! 🤝 Nos équipes commerciales seront ravies de vous accompagner. Connectons-nous via WhatsApp pour discuter de nos conditions privilégiées et découvrir nos collections professionnelles.",
          isUser: false,
          language: detectedLang
        };
      }
      
      // Order and purchase
      if (lowerMessage.includes('commande') || lowerMessage.includes('acheter') || lowerMessage.includes('prix')) {
        return {
          text: "Avec plaisir ! Pour vous offrir un accompagnement personnalisé et des conseils sur mesure, notre équipe vous attend sur WhatsApp 💎 Vous bénéficierez d'un service privilégié et de recommandations adaptées à vos besoins uniques.",
          isUser: false,
          language: detectedLang
        };
      }
      
      // WhatsApp redirect
      if (lowerMessage.includes('whatsapp') || lowerMessage.includes('contact') || lowerMessage.includes('parler')) {
        return {
          text: "Parfait ! Je vous redirige vers WhatsApp pour un échange chaleureux avec notre équipe 🌸 Vous aurez des conseils personnalisés et un accompagnement privilégié dans votre découverte de nos trésors marocains !",
          isUser: false,
          language: detectedLang
        };
      }
      
      // Fallback response with escalation
      setShowFallbackActions(true);
      return {
        text: "Je n'ai pas bien compris, mais vous pouvez me poser une autre question ou me contacter directement sur WhatsApp pour un accompagnement personnalisé ! 😊",
        isUser: false,
        language: detectedLang
      };
    } else {
      // English responses with newsletter support
      if (lowerMessage.includes('newsletter') || lowerMessage.includes('email') || lowerMessage.includes('subscription')) {
        return {
          text: "Wonderful! Join our exclusive community to discover our seasonal beauty secrets 💎 You'll receive our ancestral ritual guides, latest ingredient discoveries, and privileged offers. An olfactory journey delivered straight to your inbox!",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.lifestyle[1]
        };
      }

      // English responses with warm tone
      if (lowerMessage.includes('argan') || lowerMessage.includes('oil')) {
        return {
          text: "Ah, argan oil! Our liquid gold from the Moroccan South 🌟 Our Berber artisans extract it with patience using ancestral methods. Rich in vitamin E and fatty acids, it nourishes your skin like a desert caress. Each drop tells the story of our century-old argan trees!",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.products[1]
        };
      }
      
      if (lowerMessage.includes('artisan') || lowerMessage.includes('tradition') || lowerMessage.includes('berber')) {
        return {
          text: "Our Berber artisans are the guardians of thousand-year secrets ✨ In Atlas villages, from mother to daughter, they pass down the art of enhancing our land's treasures. Each gesture carries ancestral wisdom, each product bears their generous soul.",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.artisans[1]
        };
      }
      
      if (lowerMessage.includes('ingredient') || lowerMessage.includes('natural') || lowerMessage.includes('organic')) {
        return {
          text: "Our ingredients are respectfully harvested from Morocco's secret gardens 🌿 From volcanic Atlas ghassoul to Dadès roses, each element is chosen for its purity and authenticity. Moroccan nature offers us its most beautiful gifts!",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.ingredients[1]
        };
      }
      
      if (lowerMessage.includes('ritual') || lowerMessage.includes('routine') || lowerMessage.includes('care')) {
        return {
          text: "Here's our signature 'Royal Hammam' ritual 👑: 1) Purification with ghassoul to free your skin, 2) Toning with Dadès rose water to reveal your radiance, 3) Nourishing with argan oil for incomparable softness. A sensory journey inspired by our traditions!",
          isUser: false,
          language: detectedLang,
          image: mediaAssets.lifestyle[1]
        };
      }
      
      if (lowerMessage.includes('shipping') || lowerMessage.includes('sample')) {
        return {
          text: "For shipping and samples, I'll connect you directly with our specialized team! They'll offer you the best options according to your location and needs. Personalized service like in Marrakech souks! 📦✨",
          isUser: false,
          language: detectedLang
        };
      }
      
      if (lowerMessage.includes('wholesale') || lowerMessage.includes('professional') || lowerMessage.includes('reseller')) {
        return {
          text: "Wonderful! You want to become a Perle d'Atlas partner! 🤝 Our commercial teams will be delighted to support you. Let's connect via WhatsApp to discuss our privileged conditions and discover our professional collections.",
          isUser: false,
          language: detectedLang
        };
      }
      
      if (lowerMessage.includes('order') || lowerMessage.includes('buy') || lowerMessage.includes('price')) {
        return {
          text: "With pleasure! To offer you personalized support and tailored advice, our team awaits you on WhatsApp 💎 You'll benefit from privileged service and recommendations adapted to your unique needs.",
          isUser: false,
          language: detectedLang
        };
      }
      
      if (lowerMessage.includes('whatsapp') || lowerMessage.includes('contact') || lowerMessage.includes('speak')) {
        return {
          text: "Perfect! I'll redirect you to WhatsApp for a warm exchange with our team 🌸 You'll get personalized advice and privileged support in discovering our Moroccan treasures!",
          isUser: false,
          language: detectedLang
        };
      }
      
      // Fallback response
      setShowFallbackActions(true);
      return {
        text: "I didn't quite understand, but you can ask me another question or contact me directly on WhatsApp for personalized assistance! 😊",
        isUser: false,
        language: detectedLang
      };
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Mark that conversation has started
    setHasStartedConversation(true);
    
    const detectedLang = detectLanguage(message);
    const newUserMessage: Message = { text: message, isUser: true, language: detectedLang };
    const response = generateResponse(message, detectedLang);
    
    setMessages(prev => [...prev, newUserMessage, response]);
    setMessage('');
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+33663068980'; // Updated to the correct French number
    const whatsappMessage = language === 'fr' 
      ? 'Bonjour Perle d\'Atlas ! J\'aimerais avoir des informations personnalisées sur vos produits de beauté marocains.' 
      : 'Hello Perle d\'Atlas! I would like personalized information about your Moroccan beauty products.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleQuickActionClick = (actionMessage: string) => {
    setMessage(actionMessage);
    setHasStartedConversation(true); // Hide quick actions
    
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
