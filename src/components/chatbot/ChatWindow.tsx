
import { ReactNode } from 'react';

interface ChatWindowProps {
  isOpen: boolean;
  children: ReactNode;
}

const ChatWindow = ({ isOpen, children }: ChatWindowProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] w-[calc(100vw-2rem)] max-w-sm md:w-96 h-[70vh] md:h-[500px] bg-white rounded-2xl md:rounded-3xl luxury-shadow border border-pearl-200 animate-scale-in flex flex-col overflow-hidden"
         style={{ position: 'fixed' }}>
      {children}
    </div>
  );
};

export default ChatWindow;
