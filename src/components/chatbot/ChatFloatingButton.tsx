
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
        className={`h-14 w-14 lg:h-16 lg:w-16 rounded-full copper-gradient hover-scale luxury-shadow border-0 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        size="icon"
        style={{ 
          position: 'relative'
        }}
      >
        <div className="relative">
          <MessageCircle className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
        </div>
      </Button>
      
      {/* Enhanced tooltip for desktop */}
      {!isOpen && (
        <div className="absolute bottom-16 lg:bottom-20 right-0 bg-white/95 backdrop-blur-sm text-clay-800 text-sm lg:text-base px-4 py-3 rounded-xl luxury-shadow whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none font-medium">
          💬 {window.innerWidth >= 1024 ? 'Parler à Samra - Votre conseillère beauté' : 'Parler à Samra'}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
        </div>
      )}
    </div>
  );
};

export default ChatFloatingButton;
