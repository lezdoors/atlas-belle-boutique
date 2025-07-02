
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles } from 'lucide-react';

interface SamraChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const SamraChatButton = ({ onClick, isOpen }: SamraChatButtonProps) => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={onClick}
        className={`w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700 shadow-2xl shadow-amber-500/25 transition-all duration-300 hover:scale-110 ${isOpen ? 'scale-0' : 'scale-100'}`}
        size="icon"
      >
        <MessageCircle className="w-7 h-7" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
          <Sparkles className="w-2 h-2 text-white" />
        </div>
      </Button>
    </div>
  );
};

export default SamraChatButton;
