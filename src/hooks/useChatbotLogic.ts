
import { useState, useCallback } from 'react';

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface UseChatbotLogicReturn {
  messages: ChatMessage[];
  isTyping: boolean;
  sendMessage: (message: string) => void;
  clearChat: () => void;
}

const useChatbotLogic = (): UseChatbotLogicReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [fallbackCount, setFallbackCount] = useState(0);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Salutations
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      setFallbackCount(0);
      return "Bonjour ! 👋 Bienvenue chez Perle de l'Atlas. Je suis Samra, votre conseillère beauté personnelle. Comment puis-je vous aider aujourd'hui ? Je peux vous renseigner sur nos produits, nos ingrédients naturels ou vous orienter vers notre service client.";
    }

    // Produits
    if (lowerMessage.includes('produit') || lowerMessage.includes('cosmétique') || lowerMessage.includes('soin')) {
      setFallbackCount(0);
      return "Nos produits sont élaborés avec des ingrédients naturels du Maroc. Nous proposons des huiles d'argan, des soins au rhassoul, et bien plus encore. Souhaitez-vous découvrir une gamme en particulier ? Ou préférez-vous que je vous mette en contact avec notre équipe ?";
    }

    // Ingrédients
    if (lowerMessage.includes('argan') || lowerMessage.includes('rhassoul') || lowerMessage.includes('ingrédient')) {
      setFallbackCount(0);
      return "Nos ingrédients proviennent directement des coopératives marocaines 🏔️. L'huile d'argan est pressée à froid, le rhassoul est extrait de l'Atlas... Chaque ingrédient est sélectionné pour sa pureté. Voulez-vous en savoir plus sur un ingrédient spécifique ?";
    }

    // Prix / Tarifs
    if (lowerMessage.includes('prix') || lowerMessage.includes('tarif') || lowerMessage.includes('coût') || lowerMessage.includes('combien')) {
      setFallbackCount(0);
      return "Pour connaître nos tarifs détaillés, je vous invite à consulter notre boutique en ligne ou à contacter directement notre équipe commerciale via WhatsApp ou email 📞. Ils pourront vous proposer des offres personnalisées.";
    }

    // Livraison
    if (lowerMessage.includes('livraison') || lowerMessage.includes('expédition') || lowerMessage.includes('délai')) {
      setFallbackCount(0);
      return "Nous livrons dans le monde entier 🌍. Les délais varient selon votre localisation. Pour des informations précises sur la livraison dans votre région, contactez-nous via WhatsApp ou par email.";
    }

    // Contact / Aide
    if (lowerMessage.includes('contact') || lowerMessage.includes('aide') || lowerMessage.includes('parler') || lowerMessage.includes('humain')) {
      setFallbackCount(0);
      return "Je peux vous mettre en contact avec notre équipe 😊. Vous pouvez nous joindre via WhatsApp ou par email à contact@atlasperle.com. Notre équipe vous répondra rapidement !";
    }

    // Problème / Réclamation
    if (lowerMessage.includes('problème') || lowerMessage.includes('réclamation') || lowerMessage.includes('défaut') || lowerMessage.includes('retour')) {
      setFallbackCount(0);
      return "Je comprends votre préoccupation. Pour toute réclamation ou problème, notre service client est à votre disposition. Contactez-nous directement à contact@atlasperle.com ou via WhatsApp. Nous traiterons votre demande en priorité.";
    }

    // Origine / Histoire
    if (lowerMessage.includes('origine') || lowerMessage.includes('histoire') || lowerMessage.includes('marque') || lowerMessage.includes('atlas')) {
      setFallbackCount(0);
      return "Perle de l'Atlas est née au cœur de l'Atlas marocain 🏔️. Notre marque puise dans les traditions de beauté millénaires du Maroc. Nous travaillons directement avec des artisans locaux pour préserver ce savoir-faire ancestral. Découvrez notre histoire complète sur notre site !";
    }

    // Increment fallback counter for unrecognized messages
    setFallbackCount(prev => prev + 1);

    // Escalate to human support after 2 consecutive fallbacks
    if (fallbackCount >= 1) {
      return "Je vois que vous avez des questions spécifiques auxquelles je ne peux pas répondre parfaitement 😊. Notre équipe d'experts humains sera ravie de vous aider ! Contactez-nous via WhatsApp ou par email à contact@atlasperle.com pour un accompagnement personnalisé.";
    }

    // First fallback message
    return "Je ne suis pas sûre de bien comprendre votre demande 🤔. Pourriez-vous me donner plus de détails ? Je peux vous aider avec nos produits, ingrédients, livraisons, ou vous mettre en contact avec notre équipe pour des questions plus spécifiques.";
  };

  const sendMessage = useCallback((message: string) => {
    // Ajouter le message de l'utilisateur
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simuler la frappe du bot
    setIsTyping(true);

    // Générer et ajouter la réponse du bot après un délai
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Délai réaliste entre 1.5 et 2.5 secondes
  }, [fallbackCount]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setIsTyping(false);
    setFallbackCount(0);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    clearChat,
  };
};

export default useChatbotLogic;
