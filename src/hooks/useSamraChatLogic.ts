
import { useState, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'samra';
  timestamp: Date;
}

interface UseSamraChatLogicProps {
  language: 'fr' | 'en';
  isOpen: boolean;
}

export const useSamraChatLogic = ({ language, isOpen }: UseSamraChatLogicProps) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: language === 'fr' 
          ? 'Bonjour ! Je suis Samra, votre conseillère beauté. Comment puis-je vous aider à découvrir nos trésors artisanaux du Maroc ?'
          : 'Hello! I\'m Samra, your beauty consultant. How can I help you discover our handcrafted treasures from Morocco?',
        sender: 'samra',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Shipping info
    if (lowerMessage.includes('shipping') || lowerMessage.includes('livraison') || lowerMessage.includes('expédition')) {
      return language === 'fr' 
        ? 'Nous offrons la livraison gratuite dans le monde entier pour toute commande de 149€ ou plus ! Tous nos produits sont expédiés depuis le Maroc avec amour et soin. Comptez 5-10 jours ouvrables pour la livraison express.'
        : 'We offer free worldwide shipping on orders of $149 or more! All our products are shipped from Morocco with love and care. Allow 5-10 business days for express delivery.';
    }
    
    // Returns/damaged items
    if (lowerMessage.includes('return') || lowerMessage.includes('damaged') || lowerMessage.includes('retour') || lowerMessage.includes('endommagé')) {
      return language === 'fr' 
        ? 'Pour tout retour ou article endommagé, contactez directement notre équipe support à support@atlasperle.com. Nous nous occupons de tout avec le plus grand soin !'
        : 'For any returns or damaged items, please contact our support team directly at support@atlasperle.com. We\'ll take care of everything with the utmost care!';
    }
    
    // Product info
    if (lowerMessage.includes('tajine') || lowerMessage.includes('tea') || lowerMessage.includes('thé') || lowerMessage.includes('argan')) {
      return language === 'fr' 
        ? 'Nos produits sont tous authentiques et fabriqués par des artisans marocains talentueux. Chaque tajine est façonné à la main dans l\'argile de Salé, nos verres à thé sont soufflés selon la tradition de Fès, et notre huile d\'argan provient directement des coopératives berbères de l\'Atlas.'
        : 'All our products are authentic and made by talented Moroccan artisans. Each tajine is hand-shaped from Salé clay, our tea glasses are blown according to Fès tradition, and our argan oil comes directly from Berber cooperatives in the Atlas Mountains.';
    }
    
    // Care/rituals
    if (lowerMessage.includes('ritual') || lowerMessage.includes('care') || lowerMessage.includes('rituel') || lowerMessage.includes('soin')) {
      return language === 'fr' 
        ? 'Nos rituels de beauté s\'inspirent des traditions séculaires du Maroc. Le hammam, l\'huile d\'argan, le savon noir... chaque produit est une invitation à prendre soin de soi avec authenticité et élégance. Voulez-vous que je vous recommande un rituel personnalisé ?'
        : 'Our beauty rituals are inspired by centuries-old Moroccan traditions. The hammam, argan oil, black soap... each product is an invitation to take care of yourself with authenticity and elegance. Would you like me to recommend a personalized ritual?';
    }
    
    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('help')) {
      return language === 'fr' 
        ? 'Notre équipe est là pour vous ! Écrivez-nous à support@atlasperle.com pour toute question. Nous répondons généralement sous 24h. Vous pouvez aussi continuer à me parler, je suis là pour vous guider !'
        : 'Our team is here for you! Write to us at support@atlasperle.com for any questions. We usually respond within 24 hours. You can also keep talking to me, I\'m here to guide you!';
    }
    
    // Default responses
    const defaultResponses = language === 'fr' ? [
      'C\'est une excellente question ! Chaque pièce de notre collection raconte une histoire unique d\'artisanat marocain. Que puis-je vous dire de plus spécifique ?',
      'Je suis ravie de pouvoir vous aider ! Explorez nos collections pour découvrir l\'âme du Maroc dans chaque création. Y a-t-il un produit qui vous intéresse particulièrement ?',
      'L\'artisanat marocain est si riche ! Chaque région a ses spécialités. Laissez-moi vous guider vers les trésors qui vous correspondent le mieux.'
    ] : [
      'That\'s an excellent question! Each piece in our collection tells a unique story of Moroccan craftsmanship. What can I tell you more specifically?',
      'I\'m delighted to help you! Explore our collections to discover the soul of Morocco in every creation. Is there a particular product that interests you?',
      'Moroccan craftsmanship is so rich! Each region has its specialties. Let me guide you to the treasures that suit you best.'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(message),
        sender: 'samra',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return {
    message,
    setMessage,
    messages,
    isTyping,
    handleSendMessage
  };
};
