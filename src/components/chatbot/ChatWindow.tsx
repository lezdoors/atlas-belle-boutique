
import { Sparkles } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatQuickActions from './ChatQuickActions';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';

interface Message {
  text: string;
  isUser: boolean;
  language: 'fr' | 'en';
}

interface ChatWindowProps {
  messages: Message[];
  message: string;
  setMessage: (message: string) => void;
  onSendMessage: () => void;
  onClose: () => void;
  onActionClick: (message: string) => void;
  onWhatsAppRedirect: () => void;
  language: 'fr' | 'en';
}

const ChatWindow = ({
  messages,
  message,
  setMessage,
  onSendMessage,
  onClose,
  onActionClick,
  onWhatsAppRedirect,
  language
}: ChatWindowProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-3xl luxury-shadow border border-pearl-200 animate-scale-in flex flex-col overflow-hidden">
      <ChatHeader language={language} onClose={onClose} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <div className="text-center text-clay-600 py-8">
            <Sparkles className="h-8 w-8 mx-auto mb-3 text-copper-600" />
            <p className="font-medium mb-2">
              {language === 'fr' ? 'Bonjour ! Je suis Samra' : 'Hello! I\'m Samra'}
            </p>
            <p className="text-sm">
              {language === 'fr' 
                ? 'Comment puis-je vous aider aujourd\'hui ?'
                : 'How can I help you today?'
              }
            </p>
          </div>
        )}
        
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            text={msg.text}
            isUser={msg.isUser}
            language={msg.language}
          />
        ))}
      </div>

      {/* Quick Actions and Input */}
      <div className="p-3 border-t border-pearl-200">
        <ChatQuickActions
          language={language}
          onActionClick={onActionClick}
          onWhatsAppRedirect={onWhatsAppRedirect}
        />
        <ChatInput
          message={message}
          setMessage={setMessage}
          onSendMessage={onSendMessage}
          language={language}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
