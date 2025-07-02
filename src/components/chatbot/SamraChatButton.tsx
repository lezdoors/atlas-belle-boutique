
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
        className={`w-16 h-16 rounded-full bg-stone-800 text-white hover:bg-stone-900 shadow-2xl transition-all duration-300 hover:scale-105 ${isOpen ? 'scale-0' : 'scale-100'}`}
        size="icon"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default SamraChatButton;
