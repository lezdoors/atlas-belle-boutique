
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SamraChatButton from './chatbot/SamraChatButton';
import SamraChatHeader from './chatbot/SamraChatHeader';
import SamraChatMessages from './chatbot/SamraChatMessages';
import SamraChatInput from './chatbot/SamraChatInput';
import { useSamraChatLogic } from '../hooks/useSamraChatLogic';

interface SamraRefactoredChatbotProps {
  videoEnded?: boolean;
}

const SamraRefactoredChatbot = ({ videoEnded }: SamraRefactoredChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  
  const {
    message,
    setMessage,
    messages,
    isTyping,
    handleSendMessage
  } = useSamraChatLogic({ language, isOpen });

  return (
    <>
      <SamraChatButton 
        onClick={() => setIsOpen(!isOpen)} 
        isOpen={isOpen} 
      />

      {isOpen && (
        <div className="fixed bottom-8 right-8 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl shadow-black/20 border border-amber-100 z-40 overflow-hidden">
          <SamraChatHeader 
            language={language} 
            onClose={() => setIsOpen(false)} 
          />
          
          <SamraChatMessages 
            messages={messages} 
            isTyping={isTyping} 
          />
          
          <SamraChatInput
            message={message}
            setMessage={setMessage}
            onSendMessage={handleSendMessage}
            language={language}
            isTyping={isTyping}
          />
        </div>
      )}
    </>
  );
};

export default SamraRefactoredChatbot;
