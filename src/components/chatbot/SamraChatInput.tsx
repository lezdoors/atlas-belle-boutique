
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface SamraChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  onSendMessage: (e: React.FormEvent) => void;
  language: 'fr' | 'en';
  isTyping: boolean;
}

const SamraChatInput = ({ message, setMessage, onSendMessage, language, isTyping }: SamraChatInputProps) => {
  return (
    <div className="p-6 border-t border-amber-100 bg-white">
      <form onSubmit={onSendMessage} className="flex space-x-3">
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
  );
};

export default SamraChatInput;
