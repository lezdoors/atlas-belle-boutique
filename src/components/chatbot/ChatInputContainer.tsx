
import ChatQuickActions from './ChatQuickActions';
import ChatInput from './ChatInput';

interface ChatInputContainerProps {
  message: string;
  setMessage: (message: string) => void;
  onSendMessage: () => void;
  language: 'fr' | 'en';
  onQuickActionClick: (message: string) => void;
  onWhatsAppRedirect: () => void;
}

const ChatInputContainer = ({ 
  message, 
  setMessage, 
  onSendMessage, 
  language, 
  onQuickActionClick, 
  onWhatsAppRedirect 
}: ChatInputContainerProps) => {
  return (
    <div className="p-2 md:p-3 border-t border-pearl-200">
      <ChatQuickActions 
        language={language}
        onActionClick={onQuickActionClick}
        onWhatsAppRedirect={onWhatsAppRedirect}
      />
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
