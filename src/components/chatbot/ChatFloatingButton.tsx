
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ChatFloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatFloatingButton = ({ onClick, isOpen }: ChatFloatingButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`fixed bottom-20 right-4 md:bottom-24 md:right-6 z-[9998] h-14 w-14 md:h-16 md:w-16 rounded-full copper-gradient hover-scale luxury-shadow border-0 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
      size="icon"
      style={{ position: 'fixed' }}
    >
      <div className="relative">
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-white" />
        <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
          <span className="text-white text-xs font-bold">S</span>
        </div>
      </div>
    </Button>
  );
};

export default ChatFloatingButton;
