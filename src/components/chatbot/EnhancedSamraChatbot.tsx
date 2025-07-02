
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Crown, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const EnhancedSamraChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([]);
  const { language, toggleLanguage } = useLanguage();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Simulate Samra's response
    setTimeout(() => {
      const responses = {
        fr: [
          "Bonjour ! Je suis Samra, votre conseillère beauté marocaine. Comment puis-je vous aider à découvrir nos trésors ?",
          "Nos produits sont créés avec des ingrédients ancestraux comme l'huile d'argan et l'eau de rose. Que recherchez-vous ?",
          "Chaque création raconte l'histoire de nos artisans berbères. Laissez-moi vous guider vers le produit parfait."
        ],
        en: [
          "Hello! I'm Samra, your Moroccan beauty consultant. How can I help you discover our treasures?",
          "Our products are crafted with ancestral ingredients like argan oil and rose water. What are you looking for?",
          "Every creation tells the story of our Berber artisans. Let me guide you to the perfect product."
        ]
      };
      
      const randomResponse = responses[language][Math.floor(Math.random() * responses[language].length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-2xl shadow-amber-500/30 transition-all duration-500 hover:scale-110 ${isOpen ? 'scale-0' : 'scale-100'}`}
          size="icon"
        >
          <div className="relative">
            <MessageCircle className="w-7 h-7" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
              <Crown className="w-2 h-2 text-white" />
            </div>
          </div>
        </Button>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-20 right-0 bg-slate-900/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-2xl whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none font-medium">
            💬 {language === 'fr' ? 'Parler à Samra' : 'Chat with Samra'}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/90"></div>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-200 z-40 flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 p-4 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full moroccan-pattern"></div>
            </div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Crown className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">Samra</h3>
                  <p className="text-amber-100 text-sm font-light">
                    {language === 'fr' ? 'Conseillère Beauté Maroc' : 'Morocco Beauty Consultant'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={toggleLanguage}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 rounded-full w-8 h-8 p-0"
                >
                  <Globe className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 rounded-full w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-amber-50/30 to-white">
            {messages.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-amber-600" />
                </div>
                <p className="text-slate-600 font-medium mb-2">
                  {language === 'fr' ? 'Bonjour ! Je suis Samra' : 'Hello! I\'m Samra'}
                </p>
                <p className="text-sm text-slate-500 px-4">
                  {language === 'fr' 
                    ? 'Votre guide personnelle des trésors de beauté marocains'
                    : 'Your personal guide to Moroccan beauty treasures'
                  }
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl font-light animate-fade-in ${
                      msg.isUser
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-amber-100 text-slate-800 shadow-sm'
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-amber-100 bg-white">
            <form onSubmit={handleSendMessage} className="flex space-x-3">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={language === 'fr' ? 'Votre message...' : 'Your message...'}
                className="flex-1 border-amber-200 focus:border-amber-400 rounded-2xl font-light bg-amber-50/50"
              />
              <Button
                type="submit"
                disabled={!message.trim()}
                className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white rounded-2xl px-4 transition-all duration-200 hover:scale-105"
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

export default EnhancedSamraChatbot;
