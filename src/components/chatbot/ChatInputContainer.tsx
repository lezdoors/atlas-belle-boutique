
import ChatQuickActions from './ChatQuickActions';
import ChatInput from './ChatInput';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ChatInputContainerProps {
  message: string;
  setMessage: (message: string) => void;
  onSendMessage: () => void;
  language: 'fr' | 'en';
  onQuickActionClick: (message: string) => void;
  onWhatsAppRedirect: () => void;
  showQuickActions?: boolean;
  showFallbackActions?: boolean;
}

const ChatInputContainer = ({ 
  message, 
  setMessage, 
  onSendMessage, 
  language, 
  onQuickActionClick, 
  onWhatsAppRedirect,
  showQuickActions = true,
  showFallbackActions = false
}: ChatInputContainerProps) => {
  return (
    <div className="p-2 md:p-3 border-t border-pearl-200">
      {showQuickActions && (
        <ChatQuickActions 
          language={language}
          onActionClick={onQuickActionClick}
          onWhatsAppRedirect={onWhatsAppRedirect}
        />
      )}
      
      {showFallbackActions && (
        <div className="mb-2 md:mb-3">
          <Button
            onClick={onWhatsAppRedirect}
            variant="outline"
            size="sm"
            className="w-full flex items-center gap-2 border-green-200 hover:border-green-400 hover:bg-green-50 text-green-700"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">
              {language === 'fr' ? '📞 Contacter via WhatsApp' : '📞 Contact via WhatsApp'}
            </span>
          </Button>
        </div>
      )}
      
      <ChatInput
        message={message}
        setMessage={setMessage}
        onSendMessage={onSendMessage}
        language={language}
      />
    </div>
  );
};

export default ChatInputContainer;
