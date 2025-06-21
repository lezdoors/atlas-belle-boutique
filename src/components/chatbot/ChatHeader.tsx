
import { Button } from '@/components/ui/button';
import { X, Sparkles } from 'lucide-react';

interface ChatHeaderProps {
  language: 'fr' | 'en';
  onClose: () => void;
}

const ChatHeader = ({ language, onClose }: ChatHeaderProps) => {
  return (
    <div className="copper-gradient p-4 text-white rounded-t-3xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Samra</h3>
            <p className="text-xs opacity-90">
              {language === 'fr' ? 'Assistante Perle d\'Atlas' : 'Perle d\'Atlas Assistant'}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-white hover:bg-white/20 h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
