
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import PerleAtlasLogo from './PerleAtlasLogo';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const SamraEnhancedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const welcomeMessage = {
    id: 'welcome',
    text: language === 'fr' 
      ? 'Bonjour ! Je suis Samra, votre conseillère beauté personnelle chez Perle d\'Atlas. Comment puis-je vous accompagner dans votre quête de beauté naturelle aujourd\'hui ?'
      : 'Hello! I\'m Samra, your personal beauty consultant at Perle d\'Atlas. How can I help you on your natural beauty journey today?',
    isBot: true,
    timestamp: new Date(),
    suggestions: language === 'fr' 
      ? ['Recommandations produits', 'Conseils routine beauté', 'Rituels traditionnels', 'Ingrédients naturels']
      : ['Product recommendations', 'Beauty routine tips', 'Traditional rituals', 'Natural ingredients']
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    // Enhanced response logic based on keywords
    if (input.includes('argan') || input.includes('huile')) {
      return {
        id: Date.now().toString(),
        text: language === 'fr'
          ? 'L\'huile d\'argan est notre joyau ! Extraite des arganiers du Sud-Ouest marocain, elle est riche en vitamine E et acides gras essentiels. Parfaite pour nourrir la peau et les cheveux. Souhaitez-vous découvrir notre gamme d\'huiles d\'argan premium ?'
          : 'Argan oil is our treasure! Extracted from argan trees in Southwest Morocco, it\'s rich in vitamin E and essential fatty acids. Perfect for nourishing skin and hair. Would you like to discover our premium argan oil range?',
        isBot: true,
        timestamp: new Date(),
        suggestions: language === 'fr' 
          ? ['Voir les huiles d\'argan', 'Conseils d\'utilisation', 'Autres produits']
          : ['View argan oils', 'Usage tips', 'Other products']
      };
    }

    if (input.includes('routine') || input.includes('conseil')) {
      return {
        id: Date.now().toString(),
        text: language === 'fr'
          ? 'Je recommande une routine en 3 étapes inspirée des traditions berbères : 1) Nettoyage doux au ghassoul, 2) Tonification à l\'eau de rose, 3) Hydratation à l\'huile d\'argan. Cette routine respecte l\'équilibre naturel de votre peau. Quel est votre type de peau ?'
          : 'I recommend a 3-step routine inspired by Berber traditions: 1) Gentle cleansing with ghassoul, 2) Toning with rose water, 3) Moisturizing with argan oil. This routine respects your skin\'s natural balance. What\'s your skin type?',
        isBot: true,
        timestamp: new Date(),
        suggestions: language === 'fr'
          ? ['Peau sèche', 'Peau mixte', 'Peau sensible', 'Peau mature']
          : ['Dry skin', 'Combination skin', 'Sensitive skin', 'Mature skin']
      };
    }

    // Default response
    return {
      id: Date.now().toString(),
      text: language === 'fr'
        ? 'Merci pour votre question ! Je suis là pour vous guider dans l\'univers de la beauté marocaine authentique. N\'hésitez pas à me parler de vos besoins spécifiques - produits, routines, ou conseils personnalisés.'
        : 'Thank you for your question! I\'m here to guide you through the world of authentic Moroccan beauty. Feel free to tell me about your specific needs - products, routines, or personalized advice.',
      isBot: true,
      timestamp: new Date(),
      suggestions: language === 'fr'
        ? ['Produits bestsellers', 'Quiz peau', 'Rituels traditionnels']
        : ['Bestseller products', 'Skin quiz', 'Traditional rituals']
    };
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full copper-gradient text-white luxury-shadow hover:scale-110 transition-all duration-300 relative"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          
          {/* Notification Badge */}
          {!isOpen && (
            <div className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 z-50 luxury-shadow border-0 overflow-hidden">
          {/* Header */}
          <div className="copper-gradient text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <PerleAtlasLogo 
                size="favicon" 
                variant="light"
                className="bg-white/20 rounded-full p-1"
              />
              <div>
                <h3 className="font-semibold">Samra</h3>
                <p className="text-xs opacity-90">
                  {language === 'fr' ? 'Conseillère Beauté' : 'Beauty Consultant'}
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              {language === 'fr' ? 'En ligne' : 'Online'}
            </Badge>
          </div>

          {/* Messages */}
          <CardContent className="p-0 h-64 overflow-y-auto bg-pearl-50">
            <div className="p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isBot 
                      ? 'bg-white text-clay-800 luxury-shadow' 
                      : 'copper-gradient text-white'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.isBot && (
                        <Bot className="h-4 w-4 mt-1 text-copper-600 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm">{message.text}</p>
                        {message.suggestions && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {message.suggestions.map((suggestion, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                className="text-xs h-6 px-2 border-copper-200 text-copper-700 hover:bg-copper-50"
                                onClick={() => handleSendMessage(suggestion)}
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                      {!message.isBot && (
                        <User className="h-4 w-4 mt-1 text-white flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg px-4 py-2 luxury-shadow">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-copper-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-copper-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-copper-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t border-pearl-200 bg-white">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={language === 'fr' ? 'Tapez votre message...' : 'Type your message...'}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 border-pearl-300 focus:border-copper-500"
              />
              <Button
                onClick={() => handleSendMessage()}
                className="copper-gradient text-white px-3"
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default SamraEnhancedChatbot;
