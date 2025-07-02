
import { useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'samra';
  timestamp: Date;
}

interface SamraChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

const SamraChatMessages = ({ messages, isTyping }: SamraChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-80 p-6 overflow-y-auto bg-gradient-to-b from-amber-25 to-white">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
        >
          <div
            className={`inline-block max-w-[80%] p-4 rounded-2xl ${
              msg.sender === 'user'
                ? 'bg-black text-white'
                : 'bg-white border border-amber-100 text-black shadow-sm'
            }`}
          >
            <p className="text-sm font-light leading-relaxed">
              {msg.text}
            </p>
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="text-left mb-4">
          <div className="inline-block bg-white border border-amber-100 text-black shadow-sm p-4 rounded-2xl">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default SamraChatMessages;
