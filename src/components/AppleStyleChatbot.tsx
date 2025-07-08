
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

const AppleStyleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { language } = useLanguage();

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-black text-white hover:bg-black/90 shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-110"
          size="icon"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 bg-white rounded-3xl shadow-2xl shadow-black/20 border border-black/5 z-40 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-black/5">
            <h3 className="text-lg font-light text-black">Samra</h3>
            <p className="text-sm font-light text-black/60">
              {language === 'fr' ? 'Conseillère artisanat' : 'Craft consultant'}
            </p>
          </div>

          {/* Messages */}
          <div className="h-64 p-6 overflow-y-auto">
            <div className="bg-gray-50 rounded-2xl p-4 mb-4">
              <p className="text-sm font-light text-black/80">
                {language === 'fr'
                  ? 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?'
                  : 'Hello! How can I help you today?'
                }
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="p-6 border-t border-black/5">
            <div className="flex space-x-3">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={language === 'fr' ? 'Votre message...' : 'Your message...'}
                className="flex-1 border-black/10 focus:border-black/30 rounded-xl font-light"
              />
              <Button
                size="sm"
                className="bg-black text-white hover:bg-black/90 rounded-xl px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppleStyleChatbot;
