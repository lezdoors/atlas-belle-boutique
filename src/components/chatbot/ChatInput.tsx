
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
        placeholder={language === 'fr' ? 'Votre message...' : 'Your message...'}
        onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
        className="rounded-full border-clay-200 focus:border-copper-400 text-sm"
      />
      <Button
        onClick={onSendMessage}
        size="icon"
        className="rounded-full copper-gradient hover-scale h-9 w-9 md:h-10 md:w-10"
      >
        <Send className="h-3 w-3 md:h-4 md:w-4" />
      </Button>
    </div>
  );
};

export default ChatInput;
