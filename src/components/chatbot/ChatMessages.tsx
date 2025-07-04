import { Crown } from 'lucide-react';
import ChatMessage from './ChatMessage';
interface Message {
  text: string;
  isUser: boolean;
  language: 'fr' | 'en';
  image?: string;
}
interface ChatMessagesProps {
  messages: Message[];
  language: 'fr' | 'en';
}
const ChatMessages = ({
  messages,
  language
}: ChatMessagesProps) => {
  return <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3">
      {messages.length === 0 && <div className="text-center text-clay-600 py-4 md:py-8">
          
          <p className="font-medium mb-1 md:mb-2 text-sm md:text-base">
            {language === 'fr' ? 'Salut ! Je suis Samra' : 'Hello! I\'m Samra'}
          </p>
          <p className="text-xs md:text-sm px-2">
            {language === 'fr' ? 'Votre guide des trésors ancestraux du Maroc' : 'Your guide to Morocco\'s ancestral treasures'}
          </p>
        </div>}
      
      {messages.map((msg, index) => <ChatMessage key={index} text={msg.text} isUser={msg.isUser} language={msg.language} image={msg.image} />)}
    </div>;
};
export default ChatMessages;