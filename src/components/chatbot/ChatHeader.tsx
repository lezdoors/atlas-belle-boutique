
import { Button } from '@/components/ui/button';
import { X, Crown } from 'lucide-react';

interface ChatHeaderProps {
  language: 'fr' | 'en';
  onClose: () => void;
}

const ChatHeader = ({ language, onClose }: ChatHeaderProps) => {
  return (
    <div className="copper-gradient p-3 md:p-4 text-white rounded-t-2xl md:rounded-t-3xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Crown className="h-4 w-4 md:h-5 md:w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-sm md:text-base">Samra</h3>
            <p className="text-xs opacity-90">
              {language === 'fr' ? 'Guide Perle d\'Atlas' : 'Perle d\'Atlas Guide'}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-white hover:bg-white/20 h-7 w-7 md:h-8 md:w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
