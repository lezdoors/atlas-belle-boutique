
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  onSendMessage: () => void;
  language: 'fr' | 'en';
}

const ChatInput = ({ message, setMessage, onSendMessage, language }: ChatInputProps) => {
  return (
    <div className="flex space-x-2">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={language === 'fr' ? 'Tapez votre message...' : 'Type your message...'}
        onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
        className="rounded-full border-clay-200 focus:border-copper-400"
      />
      <Button
        onClick={onSendMessage}
        size="icon"
        className="rounded-full copper-gradient hover-scale"
      >
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChatInput;
