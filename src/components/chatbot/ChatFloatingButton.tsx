
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ChatFloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatFloatingButton = ({ onClick, isOpen }: ChatFloatingButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-[9998]">
      <Button
        onClick={onClick}
        className={`h-14 w-14 rounded-full copper-gradient hover-scale luxury-shadow border-0 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        size="icon"
        style={{ 
          position: 'relative'
        }}
      >
        <div className="relative">
          <MessageCircle className="h-6 w-6 text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
        </div>
      </Button>
      
      {/* "Talk to Samra" tooltip */}
      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-sm text-clay-800 text-xs px-3 py-2 rounded-lg luxury-shadow whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          💬 Parler à Samra
        </div>
      )}
    </div>
  );
};

export default ChatFloatingButton;
