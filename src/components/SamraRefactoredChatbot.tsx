
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'samra';
  timestamp: Date;
}

interface SamraRefactoredChatbotProps {
  videoEnded?: boolean;
}

const SamraRefactoredChatbot = ({ videoEnded }: SamraRefactoredChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const { language } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: language === 'fr' 
          ? 'Bonjour ! Je suis Samra, votre conseillère beauté. Comment puis-je vous aider à découvrir nos trésors artisanaux du Maroc ? ✨'
          : 'Hello! I\'m Samra, your beauty consultant. How can I help you discover our handcrafted treasures from Morocco? ✨',
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
        ? 'Nous offrons la livraison gratuite dans le monde entier pour toute commande de 149€ ou plus ! Tous nos produits sont expédiés depuis le Maroc avec amour et soin. Comptez 5-10 jours ouvrables pour la livraison express. 📦✨'
        : 'We offer free worldwide shipping on orders of $149 or more! All our products are shipped from Morocco with love and care. Allow 5-10 business days for express delivery. 📦✨';
    }
    
    // Returns/damaged items
    if (lowerMessage.includes('return') || lowerMessage.includes('damaged') || lowerMessage.includes('retour') || lowerMessage.includes('endommagé')) {
      return language === 'fr' 
        ? 'Pour tout retour ou article endommagé, contactez directement notre équipe support à support@atlasperle.com. Nous nous occupons de tout avec le plus grand soin ! 💝'
        : 'For any returns or damaged items, please contact our support team directly at support@atlasperle.com. We\'ll take care of everything with the utmost care! 💝';
    }
    
    // Product info
    if (lowerMessage.includes('tajine') || lowerMessage.includes('tea') || lowerMessage.includes('thé') || lowerMessage.includes('argan')) {
      return language === 'fr' 
        ? 'Nos produits sont tous authentiques et fabriqués par des artisans marocains talentueux. Chaque tajine est façonné à la main dans l\'argile de Salé, nos verres à thé sont soufflés selon la tradition de Fès, et notre huile d\'argan provient directement des coopératives berbères de l\'Atlas. 🏺✨'
        : 'All our products are authentic and made by talented Moroccan artisans. Each tajine is hand-shaped from Salé clay, our tea glasses are blown according to Fès tradition, and our argan oil comes directly from Berber cooperatives in the Atlas Mountains. 🏺✨';
    }
    
    // Care/rituals
    if (lowerMessage.includes('ritual') || lowerMessage.includes('care') || lowerMessage.includes('rituel') || lowerMessage.includes('soin')) {
      return language === 'fr' 
        ? 'Nos rituels de beauté s\'inspirent des traditions séculaires du Maroc. Le hammam, l\'huile d\'argan, le savon noir... chaque produit est une invitation à prendre soin de soi avec authenticité et élégance. Voulez-vous que je vous recommande un rituel personnalisé ? 🌿💆‍♀️'
        : 'Our beauty rituals are inspired by centuries-old Moroccan traditions. The hammam, argan oil, black soap... each product is an invitation to take care of yourself with authenticity and elegance. Would you like me to recommend a personalized ritual? 🌿💆‍♀️';
    }
    
    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('help')) {
      return language === 'fr' 
        ? 'Notre équipe est là pour vous ! Écrivez-nous à support@atlasperle.com pour toute question. Nous répondons généralement sous 24h. Vous pouvez aussi continuer à me parler, je suis là pour vous guider ! 😊'
        : 'Our team is here for you! Write to us at support@atlasperle.com for any questions. We usually respond within 24 hours. You can also keep talking to me, I\'m here to guide you! 😊';
    }
    
    // Default responses
    const defaultResponses = language === 'fr' ? [
      'C\'est une excellente question ! Chaque pièce de notre collection raconte une histoire unique d\'artisanat marocain. Que puis-je vous dire de plus spécifique ? ✨',
      'Je suis ravie de pouvoir vous aider ! Explorez nos collections pour découvrir l\'âme du Maroc dans chaque création. Y a-t-il un produit qui vous intéresse particulièrement ? 🏺',
      'L\'artisanat marocain est si riche ! Chaque région a ses spécialités. Laissez-moi vous guider vers les trésors qui vous correspondent le mieux. 💎'
    ] : [
      'That\'s an excellent question! Each piece in our collection tells a unique story of Moroccan craftsmanship. What can I tell you more specifically? ✨',
      'I\'m delighted to help you! Explore our collections to discover the soul of Morocco in every creation. Is there a particular product that interests you? 🏺',
      'Moroccan craftsmanship is so rich! Each region has its specialties. Let me guide you to the treasures that suit you best. 💎'
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

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700 shadow-2xl shadow-amber-500/25 transition-all duration-300 hover:scale-110 ${isOpen ? 'scale-0' : 'scale-100'}`}
          size="icon"
        >
          <MessageCircle className="w-7 h-7" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
            <Sparkles className="w-2 h-2 text-white" />
          </div>
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl shadow-black/20 border border-amber-100 z-40 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <h3 className="text-xl font-light mb-1" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                  Samra
                </h3>
                <p className="text-amber-100 font-light text-sm">
                  {language === 'fr' ? 'Votre conseillère beauté' : 'Your beauty consultant'}
                </p>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 p-6 overflow-y-auto bg-gradient-to-b from-amber-25 to-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block max-w-[80%] p-4 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-black text-white'
                      : 'bg-white border border-amber-100 text-black shadow-sm'
                  }`}
                >
                  <p className="text-sm font-light leading-relaxed">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block bg-white border border-amber-100 text-black shadow-sm p-4 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 border-t border-amber-100 bg-white">
            <form onSubmit={handleSendMessage} className="flex space-x-3">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={language === 'fr' ? 'Votre message...' : 'Your message...'}
                className="flex-1 border-amber-200 focus:border-amber-400 rounded-xl font-light"
                disabled={isTyping}
              />
              <Button
                type="submit"
                disabled={isTyping || !message.trim()}
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700 rounded-xl px-4 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SamraRefactoredChatbot;
